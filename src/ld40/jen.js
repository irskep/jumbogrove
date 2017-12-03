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
    getCanSee: (model, {totalVisits}) => {
      if (model.character('jen').getQuality('room') !== ROOMS.dining) return false;
      if (totalVisits > 1) return false;
      return true;
    },
    content: `
    Back in the dining room, <%=maria%> is asking <%=jen%> about what she's been up to.
    They seem to be getting on well.

    <%=stat('jen', 'fun', 1)%>

    <%=stat('maria', 'fun', 1)%>
    `,
    choices: ['#freechoice', '#room-dining'],
  },
]