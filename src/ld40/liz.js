// import _ from 'lodash';
import { ROOMS } from "./constants";

export default [
  {
    id: 'arrive-liz',
    tags: ['newguests'],
    priority: (model) => model.character('liz').getQuality('room') === ROOMS.porch ? 10 : 0,
    getCanSee: (model) => model.character('liz').getQuality('room') === ROOMS.porch,
    optionText: 'Greet Liz',
    content: `
    "Um, what the hell, <%=pl%>?" Liz, your quiet roommate, wastes no time in
    berating you. "You told me you'd have a couple of people over for dinner,
    but now it's <%=time%> and there are <%=numGuests - 2%> people here.
    [It's way out of control.](>write:introvert)"
    `,
    choices: ['#arrive-liz-2'],
    snippets: {
      introvert: `
      Liz is a hardcore introvert. She spends most of her time in her room, avoiding
      you and Chris. Her definition of "out of control" is pretty mild.
      `,
    },
  },

  {
    id: 'arrive-liz-2a',
    tags: ['arrive-liz-2'],
    optionText: `Yeah, I know. Things have kind of snowballed. But please help yourself to the wine!`,
    choices: ['#newguests', '#freechoice'],
    content: `
    "Wine, you say? I guess I'm in." Liz is a fan of wine.

    <%= stat('liz', 'drunkenness', 1) %>

    <% print(moveCharacter('liz', ROOMS.dining)) %>
    `,
  },

  {
    id: 'arrive-liz-2b',
    tags: ['arrive-liz-2'],
    optionText: `Come on, it's not that bad.`,
    choices: ['#newguests', '#freechoice'],
    content: `
    "Whatever." She stalks past you, beelining for her room.

    <%= stat('liz', 'friendliness', -1) %>

    <% print(moveCharacter('liz', ROOMS.bedroomLiz)) %>
    `,
  },
];