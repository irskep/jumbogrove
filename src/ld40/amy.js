// import _ from 'lodash';
import { ROOMS } from "./constants";

export default [
  {
    id: 'arrive-amy',
    tags: ['newguests'],
    priority: (model) => model.character('amy').getQuality('room') === ROOMS.porch ? 10 : 0,
    getCanSee: (model) => model.character('amy').getQuality('room') === ROOMS.porch,
    optionText: 'Invite Amy inside',
    content: `
    <%=img('amy')%>
    "HIIIIII, IT'S SO GOOD TO SEE YOUUUUUU!" <%=amy%> screams as she dives intensely into your arms for an overly-friendly hug.
    "How have you BEEEEEN? You MUST let me see <%=maria%>!!!!!!!"

    Without waiting for your answer, <%=amy%> rotates past you and scurries into the dining room.

    <% print(moveCharacter('amy', ROOMS.dining)) %>
    `,
    choices: ['#newguests', '#freechoice'],
  },

  {
    id: 'amy-greet',
    tags: ['room-dining'],
    optionText: "Everyone is talking to Amy",
    priority: 5,
    getCanSee: (model, host, {totalVisits}) => {
      if (!model.charactersAreIn(ROOMS.dining, ['maria', 'amy', 'federico', 'kevin'])) return false;
      if (totalVisits > 0) return false;
      return true;
    },
    content: `
    <%=amy%>, <%=maria%>, and <%=federico%> are excitedly catching up. Kevin's attention
    is wavering, though; perhaps you're not the only one feeling bulldozed by Amy?

    As you approach, Kevin gets up and intercepts you on your way to the table.

    <%=img('kevin')%>
    "I forgot how much of a conversational tornado she can be," says Kevin.
    `,
    choices: ['#kevin-invites-via-amy'],
  },

  {
    id: 'kevin-invites-people-1a',
    tags: ['kevin-invites-via-amy'],
    optionText: "Yeah. We should try to get rid of her.",
    content: `
    "Whoa, I didn't mean that! That would be so rude," says Kevin.

    <%=stat('kevin', 'friendliness', -1)%>
    
    "Actually, I was thinking of calling for backup. I'm going to text Blaine.
    Don't worry, I'll have him stop at the liquor store on his way!"
    `,
    choices: ['kevin-invites-people-2a'],
  },

  {
    id: 'kevin-invites-people-2a',
    optionText: "Uh...",
    content: `
    "He'll be here in an hour!"

    <% print(scheduleArrival('blaine', globalState.hour + 1)) %>
    `,
    choices: ['#freechoice', '#room-dining'],
  },

  {
    id: 'kevin-invites-people-1b',
    tags: ['kevin-invites-via-amy'],
    optionText: "She means well.",
    content: `
    "Yeah, you're right. Maybe we could redirect her a bit, though? There's
    a woman I work with, <%=rachel%>, who is just as outgoing. I think I'll
    text her and see if she wants to join us."
    `,
    choices: ['kevin-invites-people-2b'],
  },

  {
    id: 'kevin-invites-people-2b',
    optionText: "Y-yeah, such a good idea",
    content: `
    <% print(scheduleArrival('rachel', globalState.hour + 1)) %>
    `,
    choices: ['#freechoice', '#room-dining'],
  },
];