import _ from 'lodash';

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
  `,
  globalState: {
  },
  characters: [
    {id: 'player', showInSidebar: false, qualities: {}, state: {}},
    {id: 'maria', name: 'Maria', qualities: standardQualities(), showInSidebar: true, state: {}},
    {id: 'kevin', name: 'Kevin', qualities: standardQualities(), showInSidebar: true, state: {}},
    {id: 'federico', name: 'Federico', qualities: standardQualities(), showInSidebar: true, state: {}},
  ],
  init(model, ui, md) {
    ui.templateHelperFunctions.pl = () => `*${model.character('player').name}*{.character}`;

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
    {
      id: 'start',
      content: 'Please enter your name.',
      input: {
        placeholder: 'Your name',
        next: '@prologue',
        store: (model, value) => {
          model.character('player').name = value;
          localStorage.playerName = value;
        }
      },
      willEnter: (model, ui) => {
        if (localStorage.playerName) {
          model.character('player').name = localStorage.playerName;
          model.do('@prologue');
          return false;
        } else {
          return true;
        }
      },
    },

    {
      id: 'prologue',
      content: `
        # Prologue

        It's a quiet Friday evening in your two bedroom flat in San Francisco.
        Your friend <%-chr('Maria')%> is visiting from Seattle tonight, so you've
        decided to throw a small dinner party with <%-chrs('and', 'Maria', 'Kevin', 'Federico') %>.

        "Wow, it's really been a while!" says Kevin, [your friend from college.](>replace:college) [](){#college}

        "Yeah, Maria, I haven't seen you in years," says [Federico.](>replace:work) [](){#work}

        "What about you, <%-pl()%>, when was the last time you saw Maria?"
        `,
      choices: ['#prologue-how-long-has-it-been'],
      snippets: {
        college: `You, Kevin, and Maria used to hang out at the student union between classes.`,
        work: `You know Federico from work, but not well. He and Mario went to high school together, though, so you decided to invite him.`
      }
    },

    {
      id: 'prologue-i-forget', tags: ['prologue-how-long-has-it-been'],
      optionText: "Oh, I can't even remember",
      content: `
      Maria furrows her brow. "Come on, <%-pl()%>, it's only been a couple of months.

      <%- stat('maria', 'friendliness', -1) %>
      `,
      choices: [],
    },

    {
      id: 'prologue-1-year', tags: ['prologue-how-long-has-it-been'],
      optionText: "More than a year ago",
      content: `
      "Yeah, it would have been that Tahoe trip. That was so much fun!" <%-chr('Maria')%> leans back and looks up at the ceiling.
      `,
      choices: [],
    },

    {
      id: 'prologue-10-years', tags: ['prologue-how-long-has-it-been'],
      optionText: "At least ten years ago",
      content: `
      "Yeah, must have been back in college. Wow." <%-chr('Maria')%> leans back and looks up at the ceiling. "So much has happened..."
      `,
      choices: [],
    },

  ],
};