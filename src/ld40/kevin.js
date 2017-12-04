// import _ from 'lodash';
// import { ROOMS } from "./constants";

export default [
  {
    id: 'kevin-returns-from-the-bathroom',
    choices: ['#freechoice', '#newguests'],
    content: `
    <%=kevin%> finally returns from the bathroom after, like, an hour. You don't ask questions.

    <%=stat('kevin','energy',-1)%>
    `
  },
]