// import _ from 'lodash';
// import { ROOMS } from "./constants";

export default [
  {
    id: 'hour1',
    content: `
    # Please, Come In{.title}
    ## A game for Ludum Dare 40 that I probably won't finish{.center}
    ### by irskep and rbatistadelima{.center}

    The theme of this jam is "The more you have, the worse it is." In _Please, Come In_, you
    are hosting a party. Your guests keep inviting more people, and you are unable to say no.

    Your goal is to make it to morning without property damage or lost friends.
    `,
    snippets: {
      unfinished: `I have 54 hours left, surely I will finish this, hehehe...`,
    },
    choices: ['hour1b'],
  },

  {
    id: 'hour1b',
    autosave: true,
    optionText: 'Continue',
    content: `
    # 7:00pm

    You've all finished dinner.

    <% var guests = arrivingGuests();
    if (guests.length > 1) { %>
      <%= chrs('and', guests.map((c) => c.name)) %> have arrived and are waiting <%=guests[0].formatQuality('room')%>.
    <% } else if (guests.length === 1) { %>
      <%= chr(guests[0].name) %> has arrived and is waiting <%=guests[0].formatQuality('room')%>.
    <% } else { %>
      No one else has shown up. Thank goodness!
    <% } >
    `,
    snippets: {
    },
    choices: ['#newguests'],
  },
];