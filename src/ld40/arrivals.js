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
];