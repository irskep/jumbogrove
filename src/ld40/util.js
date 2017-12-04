import _ from 'lodash';
import {
  ROOMS,
  ROOM_STATEMENTS,
  // ROOM_NAMES,
} from "./constants";

function addHelpersToModel(model) {
  // Define some helpers for rendering text and doing stuff, so we have to write as little JS as possible
  // in the content field

  model.extend({
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
      if (_.isArray(names[0])) {
        names = names[0].map((n) => `*${n}*{.character}`);
      } else {
        names = names.map((n) => `*${n}*{.character}`);
      }
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
      return `> ${model.chr(model.character(id).name)} is scheduled to arrive at ${model.formatTime(hour)}.`
    },

    // Schedule a character for later arrival.
    scheduleTimer: (hoursDelta, string) => {
      model.globalState.scheduledGotos.push({hour: model.globalState.hour + hoursDelta, string});
    },

    // Move a character into a room.
    moveCharacter: (id, room) => {
      model.character(id).setQuality('room', room);
      if (id === 'player') return '';
      return `> ${model.chr(model.character(id).name)} is ${ROOM_STATEMENTS[room]}.`
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
    },

    charactersAreIn: (room, chars) => {
      for (const c of chars) {
        if (model.character(c).getQuality('room') !== room) return false;
      }
      return true;
    },

    // Everyone in the dining room gets drunker. Returns list of strings to dump.
    getDrunker: () => {
      return model.allCharacters
        .filter((c) => c.getQuality('room') === ROOMS.dining)
        .map((c) => model.stat(c.id, 'drunkenness', 1));
    },
  });

  // aliases
  model.extend({
    populatePorch: model.arrivingGuests,
  });

  model.addTemplateGetters({
    // write <%=time%> to print the current time.
    time: () => model.formatTime(model.globalState.hour),

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

    jenOrAmyName: () => {
      return model.character('jen').getQuality('room') === ROOMS.dining ? model.chr('Jen') : model.chr('Amy');
    },

    jenOrAmyId: () => {
      return model.character('jen').getQuality('room') === ROOMS.dining ? 'jen' : 'amy';
    },
  });

  for (const c of model.allCharacters) {
    // write<%=<CHARACTER ID>%> to print that character's name.
    model.addTemplateGetters({[c.id]: () => model.chr(c.name)});
  }
};

export { addHelpersToModel };