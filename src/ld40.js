import _ from 'lodash';
import hour0 from "./ld40/hour0";

const ROOMS = {
  kitchen: 'kitchen',
  dining: 'dining',
  living: 'living',
  bedroom1: 'bedroom1',
  bedroom2: 'bedroom2',
}

function standardQualities() {
  return {
    core: {
      friendliness: {
          type: 'integer',
          name: "Friendliness",
          priority: 0,
          initialValue: 5,
      },
      fun: {
          type: 'integer',
          name: "Fun",
          priority: 1,
          initialValue: 3,
      },
      stress: {
          type: 'integer',
          name: "Stress",
          priority: 1,
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
  `,
  asideHeader: `
  Time: <%-time%>
  `,
  globalState: {
    hour: 0,
  },
  characters: [
    {id: 'player', showInSidebar: false, qualities: {}, state: {}},
    {id: 'maria', name: 'Maria', qualities: standardQualities(), showInSidebar: true, state: {room: ROOMS.dining}},
    {id: 'kevin', name: 'Kevin', qualities: standardQualities(), showInSidebar: true, state: {room: ROOMS.dining}},
    {id: 'federico', name: 'Federico', qualities: standardQualities(), showInSidebar: true, state: {room: ROOMS.dining}},
  ],
  init(model, ui, md) {
    ui.templateHelperFunctions.chr = (name) => `*${name}*{.character}`;

    ui.templateHelperFunctions.chrs = (conj, ...names) => {
      names = names.map((n) => `*${n}*{.character}`);
      if (names.length < 1) return '';
      if (names.length === 1) return names[0];
      if (names.length === 2) return `${names[0]} ${conj} ${names[1]}`;
      return `${_.initial(names).join(', ')}, ${conj} ${_.last(names)}`;
    };

    ui.templateHelperFunctions.stat = (chr, q, amt) => {
      chr = model.character(chr);
      chr.addToQuality(q, amt);
      return `\`${chr.name} ${chr.formatQualityName(q)} ${amt}\``;
    };

    ui.templateHelperGetters.time = () => {
      let hour = 18 + model.globalState.hour;
      const amPm = hour > 12 ? 'pm' : 'am';
      if (amPm === 'pm') hour -= 12;
      return `${hour}:00${amPm}`;
    };
    for (const c of model.allCharacters) {
      ui.templateHelperGetters[c.id] = () => ui.templateHelperFunctions.chr(c.name);
    }
    ui.templateHelperGetters.pl = () => `*${model.character('player').name}*{.character}`;
  },
  willEnter: (model, ui, oldSituationId, newSituationId) => {
    if (oldSituationId) {
      if (oldSituationId === newSituationId) {
        debugger;
      }
      // ui.logHTML('<hr>');
    }
    return true;
  },
  situations: [
    ...hour0,

    {
      id: 'hour1',
      content: `
      # Please, Come In
      ## A game for Ludum Dare 40 that I probably won't finish
      ### by irskep and rbatistadelima

      The theme of this jam is "The more you have, the worse it is." In _Please, Come In_, you
      are hosting a party. Your guests keep inviting more people, and you are unable to say no.

      Your goal is to make it to morning without property damage or lost friends.

      [Continue](>write:unfinished)
      `,
      snippets: {
        unfinished: `I have 54 hours left, surely I will finish this, hehehe...`,
      },
    },

    {
      id: 'advance-time',
      optionText: 'Hang out for an hour',
      willEnter: (model, ui) => {
        model.globalState.hour += 1;
        if (model.globalState.hour < 2) {
          model.do(`@hour${model.globalState.hour}`);
        }
      },
    }
  ],
};