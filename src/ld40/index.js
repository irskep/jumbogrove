// import _ from 'lodash';
import hour0 from "./hour0";
import hour1 from "./hour1";
import hour2 from "./hour2";
import amy from "./amy";
import blaine from "./blaine";
import kevin from "./kevin";
import liz from "./liz";
import jen from "./jen";
import rachel from "./rachel";
import { ROOMS, ROOM_STATEMENTS, ROOM_NAMES } from "./constants";
import { addHelpersToModel } from './util';

const importedSituations = [
    ...hour0,
    ...hour1,
    ...hour2,
    ...amy,
    ...liz,
    ...jen,
    ...blaine,
    ...rachel,
    ...kevin,
];


function standardQualities(room = null, opts = {friendliness: 5, drunkenness: 0, energy: 5}) {
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
          type: 'wordScale',
          words: ['enemy', 'stranger', 'acquaintance', 'friend', 'bestie'],
          offset: -1,
          name: "Friendliness",
          priority: 1,
          initialValue: opts.friendliness || 5,
      },
      drunkenness: {
          type: 'wordScale',
          words: ['sober', 'buzzed', 'tipsy', 'drunk', 'wasted'],
          name: "Drunkenness",
          priority: 2,
          initialValue: opts.drunkenness || 0,
      },
      energy: {
          type: 'integer',
          name: "Energy level",
          priority: 3,
          initialValue: opts.energy || 5,
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
    scheduledGotos: [],
    propertyDamage: 0,
    numRoomsVisitedThisHour: 0,
  },

  characters: [
    {id: 'player', showInSidebar: false, qualities: standardQualities(ROOMS.dining)},
    {id: 'maria', name: 'Maria', qualities: standardQualities(ROOMS.dining), showInSidebar: true},
    {id: 'kevin', name: 'Kevin', qualities: standardQualities(ROOMS.dining), showInSidebar: true},
    {id: 'federico', name: 'Federico', qualities: standardQualities(ROOMS.dining), showInSidebar: true},
    {id: 'amy', name: 'Amy', qualities: standardQualities(null, {friendliness: 4}), showInSidebar: false},
    {id: 'jen', name: 'Jen', qualities: standardQualities(), showInSidebar: false},
    {id: 'liz', name: 'Liz', qualities: standardQualities(null, {}), showInSidebar: false},
    {id: 'chris', name: 'Chris', qualities: standardQualities(null, {drunkenness: 2}), showInSidebar: false},
    {id: 'rachel', name: 'Rachel', qualities: standardQualities(), showInSidebar: false},
    {id: 'blaine', name: 'Blaine', qualities: standardQualities(null, {drunkenness: 2, friendliness: 2}), showInSidebar: false},
  ],

  init(model, ui, md) {
    addHelpersToModel(model);
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
      optionText: 'Hang out',
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

        for (let i = 0; i < model.globalState.scheduledGotos.length; i++) {
          const {hour, string} = model.globalState.scheduledGotos[i];
          if (hour <= model.globalState.hour) {
            model.globalState.scheduledGotos.splice(i, 1);
            model.do(string);          
            return false;
          }
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

      # The End

      > You have reached the end of the content I was able to create for the jam. The consequences
      are likely underwhelming, but I hope you were a little bit entertained!
      > -Steve

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

    // ...Object.keys(ROOM_NAMES).map((n) => {
    ...['dining', 'porch'].map((n) => {
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