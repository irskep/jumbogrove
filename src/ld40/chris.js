// import _ from 'lodash';
import { ROOMS } from "./constants";

export default [
  {
    id: 'arrive-chris',
    tags: ['newguests'],
    priority: (model) => model.character('chris').getQuality('room') === ROOMS.porch ? 10 : 0,
    getCanSee: (model) => model.character('chris').getQuality('room') === ROOMS.porch,
    optionText: 'Greet Chris',
    content: `
    `,
    choices: ['#arrive-chris-2'],
    snippets: {
    },
  },

  {
    id: 'arrive-liz-2a',
    tags: ['arrive-liz-2'],
    optionText: `Yeah, I know. Things have kind of snowballed. But please help yourself to the wine!`,
    choices: ['#newguests', '#freechoice'],
    content: `
    "Wine, you say? I guess I'm in." Liz is a fan of wine.

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