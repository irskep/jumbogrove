// import _ from 'lodash';
import { ROOMS } from "./constants";

export default [
  {
    id: 'arrive-jen',
    tags: ['newguests'],
    priority: (model) => model.character('jen').getQuality('room') === ROOMS.porch ? 10 : 0,
    getCanSee: (model) => model.character('jen').getQuality('room') === ROOMS.porch,
    optionText: 'Invite Jen inside',
    content: `
    <%=img('jen')%>
    <%=jen%> is leaning against your porch railing in a beat-up leather jacket.

    "Hey," she says.

    "Hey," you say. "<%=maria%>'s in the dining room, want to come in?

    "Sure," she says.

    You both walk inside.

    <% print(moveCharacter('jen', ROOMS.dining)) %>
    `,
    choices: ['#newguests', '#freechoice'],
  },

  {
    id: 'jen-greet',
    tags: ['room-dining'],
    optionText: "Jen and Maria are catching up",
    priority: 5,
    getCanSee: (model, host, {totalVisits}) => {
      if (model.character('jen').getQuality('room') !== ROOMS.dining) return false;
      if (totalVisits > 0) return false;
      return true;
    },
    content: `
    Back in the dining room, <%=maria%> is asking <%=jen%> about what she's been up to.
    They seem to be getting on well.

    You all talk for a while. Everything is going great, but <%=kevin%> starts to look bored.
    You see him texting for a few minutes, then he turns to face you.

    <%=img('kevin')%>
    "Hey man, you feeling left out too?"
    `,
    choices: ['#kevin-invites-via-jen'],
  },

  {
    id: 'kevin-invites-people-3a',
    tags: ['kevin-invites-via-jen'],
    optionText: "Yeah, listening to these girls yap is exhausting.",
    content: `
    "Yeah man I get it. Hey, I've been texting my buddy Blaine. He's coming over and
    stopping at the liquor store on his way."
    `,
    choices: ['kevin-invites-people-2a'],
  },

  {
    id: 'kevin-invites-people-4a',
    optionText: "Uh...",
    content: `
    "He'll be here in an hour!"

    <% print(scheduleArrival('blaine', globalState.hour + 1)) %>
    `,
    choices: ['#freechoice', '#room-dining'],
  },

  {
    id: 'kevin-invites-people-3b',
    tags: ['kevin-invites-via-jen'],
    optionText: "Yeah, we should mix it up.",
    content: `
    There's a woman I work with, <%=rachel%>, who is just as outgoing. I think I'll
    text her and see if she wants to join us."
    `,
    choices: ['kevin-invites-people-2b'],
  },

  {
    id: 'kevin-invites-people-4b',
    optionText: "Sounds good!",
    content: `
    <% print(scheduleArrival('rachel', globalState.hour + 1)) %>
    `,
    choices: ['#freechoice', '#room-dining'],
  },
]