import _ from 'lodash';
import hour0 from "./hour0";
import hour1 from "./hour1";
import arrivals from "./arrivals";
import liz from "./liz";
import { ROOMS, ROOM_STATEMENTS, ROOM_NAMES } from "./constants";

const importedSituations = [
    ...arrivals,
    ...hour0,
    ...hour1,
    ...liz,
];


function standardQualities(room = null, opts = {friendliness: 5, fun: 3, stress: 3}) {
  return {
    core: {
      room: {
        type: 'namedChoice',
        labelMap: ROOM_STATEMENTS,
        name: 'Location',
        priority: 0,
        initialValue: room,
      },
      friendliness: {
          type: 'integer',
          name: "Friendliness",
          priority: 1,
          initialValue: opts.friendliness || 5,
      },
      fun: {
          type: 'integer',
          name: "Fun",
          priority: 2,
          initialValue: opts.fun || 3,
      },
      stress: {
          type: 'integer',
          name: "Stress",
          priority: 3,
          initialValue: opts.stress || 3,
      },
    },
  };
};

export default {
  id: 'my-game',
  navHeader: `
      # Please, Come In

      Made for [Ludum Dare 40](https://ldjam.com) with
      [Jumbo Grove](https://github.com/irskep/jumbogrove)

      [Reset game](>resetGame)
  `,
  asideHeader: `
  # Time: <%-time%>

  **Your location:** <%=model.player.formatQuality('room')%>
  `,
  globalState: {
    hour: 0,
    scheduledArrivals: [{id: 'liz', hour: 2}, {id: 'chris', hour: 3}],
  },

  characters: [
    {id: 'player', showInSidebar: false, qualities: standardQualities(ROOMS.dining)},
    {id: 'maria', name: 'Maria', qualities: standardQualities(ROOMS.dining), showInSidebar: true},
    {id: 'kevin', name: 'Kevin', qualities: standardQualities(ROOMS.dining), showInSidebar: true},
    {id: 'federico', name: 'Federico', qualities: standardQualities(ROOMS.dining), showInSidebar: true},
    {id: 'amy', name: 'Amy', qualities: standardQualities(), showInSidebar: false},
    {id: 'jen', name: 'Jen', qualities: standardQualities(), showInSidebar: false},
    {id: 'liz', name: 'Liz', qualities: standardQualities(null, {fun: 0, stress: 4}), showInSidebar: false},
    {id: 'chris', name: 'Chris', qualities: standardQualities(null, {fun: 3, stress: 0}), showInSidebar: false},
  ],

  init(model, ui, md) {

    // Define some helpers for rendering text and doing stuff, so we have to write as little JS as possible
    // in the content field
    const templateFns = {
      // make ROOMS constant accessible
      ROOMS,

      // Print some text in the style of a character name
      chr: (name) => `*${name}*{.character}`,

      // Format an hour 0-??? as "X:00pm/am", where 0 = 6pm.
      formatTime: (hour) => {
        hour = 18 + hour;
        const amPm = hour > 12 ? 'pm' : 'am';
        if (amPm === 'pm') hour -= 12;
        return `${hour}:00${amPm}`;
      },

      // Print a list of things, styled as character names.
      chrs: (conj, ...names) => {
        names = names.map((n) => `*${n}*{.character}`);
        if (names.length < 1) return '';
        if (names.length === 1) return names[0];
        if (names.length === 2) return `${names[0]} ${conj} ${names[1]}`;
        return `${_.initial(names).join(', ')}, ${conj} ${_.last(names)}`;
      },
      
      // Adjust a character quality by the given amount.
      stat: (chr, q, amt) => {
        chr = model.character(chr);
        chr.addToQuality(q, amt);
        const amtStr = amt > 0 ? `+${amt}` : amt;
        return `\`${chr.name} ${chr.formatQualityName(q)} ${amtStr}\`{.stat}`;
      },

      // Schedule a character for later arrival.
      scheduleArrival: (id, hour) => {
        model.globalState.scheduledArrivals.push({id, hour});
        return `> ${templateFns.chr(model.character(id).name)} is scheduled to arrive at ${templateFns.formatTime(hour)}.`
      },

      // Move a character into a room.
      moveCharacter: (id, room) => {
        model.character(id).setQuality('room', room);
        if (id === 'player') return '';
        return `> ${templateFns.chr(model.character(id).name)} is ${ROOM_STATEMENTS[room]}.`
      },

      // Returns the list of guests who have just arrived. Assigns their room to 'porch'.
      arrivingGuests: () => {
        const chars = model.globalState.scheduledArrivals
          .filter(({hour}) => model.globalState.hour >= hour)
          .map(({id}) => model.character(id));
        
        model.globalState.scheduledArrivals = model.globalState.scheduledArrivals
          .filter(({hour}) => hour > model.globalState.hour);

        for (const c of chars) {
          c.setQuality('room', ROOMS.porch);
          c.showInSidebar = true;
        }

        return chars;
      },

      charactersIn: (room) => {
        return model.allCharacters.filter((c) => c.getQuality('room') === room);
      }
    }
    ui.addTemplateFunctions(templateFns);

    ui.addTemplateGetters({
      // write <%=time%> to print the current time.
      time: () => templateFns.formatTime(model.globalState.hour),

      // write <%=pl%> to print the player's name.
      pl: () => `*${model.character('player').name}*{.character}`,

      numGuests: () => model.allCharacters.filter((c) => c.getQuality('room')).length,
    });

    for (const c of model.allCharacters) {
      // write<%=<CHARACTER ID>%> to print that character's name.
      ui.addTemplateGetters({[c.id]: () => ui.templateHelperFunctions.chr(c.name)});
    }

    Object.assign(model, {
      populatePorch: templateFns.arrivingGuests,
      charactersIn: templateFns.charactersIn,
    });
  },
  willEnter: (model, ui, oldSituationId, newSituationId) => {
    if (oldSituationId) {
      // ui.logHTML('<hr>');
    }
    return true;
  },
  situations: [
    ...importedSituations,

    {
      id: 'advance-time',
      optionText: 'Hang out for an hour',
      tags: ['freechoice'],
      priority: 0,
      willEnter: (model, ui) => {
        model.globalState.hour += 1;
        const sid = `hour${model.globalState.hour}`;
        if (model.situation(sid)) {
          model.do(`@${sid}`);
          return false
        } else {
          return true;
        }
      },
      content: `
      An hour passes.

      # <%=time%>

      <% var guests = arrivingGuests(); %>
      <% if (guests.length > 1) { %>
        <%= chrs('and', guests.map((c) => c.name)) %> have arrived and are waiting <%=guests[0].formatQuality('room')%>.
        <% print(moveCharacter('player', ROOMS.porch)) %>
      <% } else if (guests.length === 1) { %>
        <%= chr(guests[0].name) %> has arrived and is waiting <%=guests[0].formatQuality('room')%>.
        <% print(moveCharacter('player', ROOMS.porch)) %>
      <% } else { %>
        No one else has shown up. Thank goodness!
      <% } %>
      `,
      choices: ['#freechoice', '#newguests']
    },

    ...Object.keys(ROOM_NAMES).map((n) => {
      return {
        id: `go-to-${n}`,
        tags: ['freechoice'],
        priority: 1,
        getCanSee: (model) => model.charactersIn(n).length > 0 && model.player.getQuality('room') !== n,
        optionText: `Go to ${ROOM_NAMES[n]}`,
        content: `
        You go to ${ROOM_NAMES[n]}.

        <% print(moveCharacter('player', '${n}')) %>
        `,
        choices: [`#room-${n}`, '#freechoice'],
      };
    }),
  ],
};