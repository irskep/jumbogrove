// import _ from 'lodash';
// import { ROOMS } from "./constants";

export default [
  {
    id: 'hour2',
    content: `
    # <%=time%>

    Your roommate <%=liz%> is due home about now. You hope she doesn't overreact to the unexpected guests.
    You've all been hitting the wine quite a bit.

    <% getDrunker().forEach((line) => { %>
    <%=line%>
    <% }); %>

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
    snippets: {
    },
    choices: ['#newguests', '#freechoice'],
  },
];