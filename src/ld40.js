import _ from 'lodash';
import hour0 from "./ld40/hour0";
import hour1 from "./ld40/hour1";
import arrivals from "./ld40/arrivals";
import { ROOMS, ROOM_STATEMENTS, ROOM_NAMES } from "./ld40/constants";


function standardQualities(room = null) {
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
          initialValue: 5,
      },
      fun: {
          type: 'integer',
          name: "Fun",
          priority: 2,
          initialValue: 3,
      },
      stress: {
          type: 'integer',
          name: "Stress",
          priority: 3,
          initialValue: 0,
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
  `,
  globalState: {
    hour: 0,
    scheduledArrivals: [],
  },

  characters: [
    {id: 'player', showInSidebar: false, qualities: {}},
    {id: 'maria', name: 'Maria', qualities: standardQualities(ROOMS.dining), showInSidebar: true},
    {id: 'kevin', name: 'Kevin', qualities: standardQualities(ROOMS.dining), showInSidebar: true},
    {id: 'federico', name: 'Federico', qualities: standardQualities(ROOMS.dining), showInSidebar: true},
    {id: 'amy', name: 'Amy', qualities: standardQualities(), showInSidebar: false},
    {id: 'jen', name: 'Jen', qualities: standardQualities(), showInSidebar: false},
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
        return `\`${chr.name} ${chr.formatQualityName(q)} ${amt}\``;
      },

      // Schedule a character for later arrival.
      scheduleArrival: (id, hour) => {
        model.globalState.scheduledArrivals.push({id, hour});
        return `> ${templateFns.chr(model.character(id).name)} is scheduled to arrive at ${templateFns.formatTime(hour)}.`
      },

      // Move a character into a room.
      moveCharacter: (id, room) => {
        model.character(id).setQuality('room', room);
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
      }
    }
    ui.addTemplateFunctions(templateFns);

    ui.addTemplateGetters({
      // write <%=time%> to print the current time.
      time: () => templateFns.formatTime(model.globalState.hour),

      // write <%=pl%> to print the player's name.
      pl: () => `*${model.character('player').name}*{.character}`,
    });

    for (const c of model.allCharacters) {
      // write<%=<CHARACTER ID>%> to print that character's name.
      ui.addTemplateGetters({[c.id]: () => ui.templateHelperFunctions.chr(c.name)});
    }

    // Object.assign(model, {
    //   guestsOnPorch: () => {
    //     return model.allCharacters.filter((c) => c.getQuality('room') === ROOMS.porch);
    //   },
    // });
  },
  willEnter: (model, ui, oldSituationId, newSituationId) => {
    if (oldSituationId) {
      if (oldSituationId === newSituationId) {
        throw new Error("This shouldn't happen in most games");
      }
      // ui.logHTML('<hr>');
    }
    return true;
  },
  situations: [
    ...arrivals,
    ...hour0,
    ...hour1,

    {
      id: 'advance-time',
      optionText: 'Hang out for an hour',
      willEnter: (model, ui) => {
        model.globalState.hour += 1;
        if (model.globalState.hour < 2) {
          model.do(`@hour${model.globalState.hour}`);
        }
      },
    },
    
    ...Object.keys(ROOM_NAMES).map((n) => {
      return {
        id: `go-to-${n}`,
        tags: ['freechoice'],
        priority: 0,
        optionText: `Go to ${ROOM_NAMES[n]}`,
        content: `
        You go to ${ROOM_NAMES[n]}.
        `,
        choices: [`#room-${n}`, '#freechoice'],
      };
    }),
  ],
};