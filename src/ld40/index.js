import _ from 'lodash';
import hour0 from "./hour0";
import hour1 from "./hour1";
import arrivals from "./arrivals";
import liz from "./liz";
import jen from "./jen";
import { ROOMS, ROOM_STATEMENTS, ROOM_NAMES } from "./constants";

const importedSituations = [
    ...arrivals,
    ...hour0,
    ...hour1,
    ...liz,
    ...jen,
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
    propertyDamage: 0,
    numRoomsVisitedThisHour: 0,
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

      img: (id) => `![${id} image](./static/headshots/${id}.png){.headshot}`,

      // Format an hour 0-??? as "X:00pm/am", where 0 = 6pm.
      formatTime: (hour) => {
        hour = (18 + hour) % 24;
        const amPm = hour > 12 ? 'pm' : 'am';
        if (amPm === 'pm') hour -= 12;
        return `${hour || 12}:00${amPm}`;
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

      // "Lost friend" starts at least 4, ends at most 2
      numLostFriends: () => {
        return model.allCharacters
          .filter((c) => {
            if (c.id === 'player') return false;
            return c.getQuality('friendliness') < 3 && c.getQualityInitial('friendliness') >= 4;
          })
          .length;
      },

      // "Gained friend" just has to get to 4
      numNewFriends: () => {
        return model.allCharacters
          .filter((c) => {
            if (c.id === 'player') return false;
            return c.getQuality('friendliness') >= 4 && c.getQualityInitial('friendliness') < 4;
          })
          .length;
      },
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
      autosave: true,
      willEnter: (model, ui) => {
        model.globalState.hour += 1;
        model.globalState.numRoomsVisitedThisHour = 0;

        if (model.globalState.hour >= 6) {
          model.do(`@ending-ok`);
          return false;
        }

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

    {
      id: 'ending-ok',
      optionText: 'If you see this text, it is a bug',
      priority: 0,
      content: `
      An hour passes.

      # <%=time%>

      It is <%=time%>, and everyone has either gone home, gone to bed, or passed out.

      # How you did

      <% if (model.globalState.propertyDamage === 0) { %>
      Your flat is, miraculously, still in pristine condition.
      <% } else if (model.globalState.propertyDamage <= 3) { %>
      Your flat is a little messy, but it's nothing you can't clean up in the morning.
      <% } else if (model.globalState.propertyDamage <= 6) { %>
      Your flat is pretty messy. It's going to take you all day to clean up tomorrow, and some things are
      permanently stained or broken.
      <% } else { %>
      Your flat is a total disaster. Things are broken, stained, outright stolen, and in complete disarray.
      You are likely to be evicted.
      <% } %>

      You lost <%=numLostFriends%> friends.

      You gained <%=numNewFriends%> friends.

      [Restart](>resetGame)

      `,
    },

    {
      id: 'advance-time-fallback',
      tags: ['freechoice'],
      getCanSee: (model) => model.globalState.numRoomsVisitedThisHour >= 3,
      optionText: 'Hang out for an hour',
      priority: 1,  // match room situations below
      willEnter: (model) => {
        model.goTo('advance-time');
        return false;
      },
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
        enter: (model) => {
          model.globalState.numRoomsVisitedThisHour += 1;
        },
        choices: [`#room-${n}`, '#freechoice'],
      };
    }),
  ],
};