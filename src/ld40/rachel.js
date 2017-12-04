// import _ from 'lodash';
import { ROOMS } from "./constants";

export default [
  {
    id: 'arrive-rachel',
    tags: ['newguests'],
    priority: (model) => model.character('rachel').getQuality('room') === ROOMS.porch ? 10 : 0,
    getCanSee: (model) => model.character('rachel').getQuality('room') === ROOMS.porch,
    optionText: 'Invite Rachel inside',
    content: `
    <%=img('rachel')%>

    "HELLO!" yells Rachel, a person you have never met before, as she tumbles down the gravity well
    of your personal space into an intense but awkward and unexpected hug. "Kevin told me about
    this party, I can't wait to meet everyone!"

    So it's a party now.
    `,
    choices: ['arrive-rachel-2'],
  },

  {
    id: 'arrive-rachel-2',
    optionText: 'Come on in',
    content: `
    <% print(moveCharacter('rachel', ROOMS.dining)) %>
    `,
    choices: ['#newguests', '#freechoice'],
  },

  {
    id: 'rachel-greet',
    tags: ['room-dining'],
    optionText: "Rachel is getting to know everyone",
    priority: 5,
    getCanSee: (model, host, {totalVisits}) => {
      if (model.character('rachel').getQuality('room') !== ROOMS.dining) return false;
      if (totalVisits > 0) return false;
      return true;
    },
    content: `
    <%=img('rachel')%>
    Back in the dining room, <%=rachel%> is excitedly greeting everyone. They all stay happily
    occupied for the next hour.
    `,
    choices: ['#newguests', '#freechoice'],
  },
];