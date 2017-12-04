// import _ from 'lodash';
import { ROOMS } from "./constants";

export default [
  {
    id: 'arrive-blaine',
    tags: ['newguests'],
    priority: (model) => model.character('blaine').getQuality('room') === ROOMS.porch ? 10 : 0,
    getCanSee: (model) => model.character('blaine').getQuality('room') === ROOMS.porch,
    optionText: 'Invite Blaine inside',
    content: `
    <%=img('blaine')%>

    Blaine is waiting at the door. He's dressed nicely, but he gives off a vibe you don't like.

    "Hey <%=pl%>, Kevin told me there'd be some hot bitches here all night, I
    hope my man wasn't bullshitting, because I brought a shitload of beer!"
    `,
    choices: ['#arrive-blaine-2'],
  },

  {
    id: 'arrive-blaine-2a',
    tags: ['arrive-blaine-2'],
    optionText: "Ha ha...",
    content: `
    Kevin walks past you to the dining room without another word. By the smell
    if his breath, you can tell he's got a head start on the beer.

    <% print(moveCharacter('blaine', ROOMS.dining)) %>
    `,
    choices: ['#newguests', '#freechoice'],
  },

  {
    id: 'arrive-blaine-2b',
    tags: ['arrive-blaine-2'],
    optionText: "Yes, the ladies are fine",
    content: `
    "Right on!" Kevin walks past you to the dining room. By the smell
    if his breath, you can tell he's got a head start on the beer.

    <%=stat('blaine', 'friendliness', 2)%>
    <% print(moveCharacter('blaine', ROOMS.dining)) %>
    `,
    choices: ['#newguests', '#freechoice'],
  },

  {
    id: 'arrive-blaine-2c',
    tags: ['arrive-blaine-2'],
    optionText: "Screw off, f******",
    content: `
    "F*** you." Kevin shoves past you to the dining room. By the smell
    if his breath, you can tell he's got a head start on the beer.

    <%=stat('blaine', 'friendliness', -1)%>
    <% print(moveCharacter('blaine', ROOMS.dining)) %>
    `,
    choices: ['#newguests', '#freechoice'],
  },

  {
    id: 'blaine-greet',
    tags: ['room-dining'],
    optionText: "Blaine and Kevin are having a loud conversation",
    priority: 5,
    getCanSee: (model, host, {totalVisits}) => {
      if (!model.charactersAreIn(ROOMS.dining, ['blaine', 'kevin'])) return false;
      if (totalVisits > 0) return false;
      return true;
    },
    content: `
    <%=blaine%> and <%=kevin%> are having some kind of ritual bro-greeting involving
    fist bumps and back thumps. Despite all your years knowing Kevin, you've never
    seen this side of him.

    Despite your initial impression, he does seem to add some positive energy to
    the room.

    <%=img('kevin')%>  
    After greeting <%=blaine%>, <%=kevin%> waves you over. "Hey <%=pl%>, I have to take
    a wiz. Could you introduce <%=blaine%> to some people? Thanks!"

    Kevin disappears before you can get a word in.

    <% print(moveCharacter('kevin', ROOMS.bathroom)); %>
    <% scheduleTimer(1, '@kevin-returns-from-the-bathroom'); %>
    `,
    choices: ['#blaine-shenanigans'],
  },

  {
    id: 'blaine-pickup',
    tags: ['blaine-shenanigans'],
    optionText: "Introduce Blaine to Liz",
    getCanSee: (model, host, {totalVisits}) => {
      if (!model.charactersAreIn(ROOMS.dining, ['blaine', 'liz'])) return false;
      if (totalVisits > 0) return false;
      return true;
    },
    content: `
    You introduce <%=blaine%> to <%=liz%>, but <%=liz%> is having none of it and gets rid of you both as soon as possible.
    `,
    choices: ['#blaine-shenanigans']
  },

  {
    id: 'blaine-intro-jen',
    tags: ['blaine-shenanigans'],
    optionText: "Introduce Blaine to Jen",
    getCanSee: (model, host, {totalVisits}) => {
      if (!model.charactersAreIn(ROOMS.dining, ['blaine', 'jen'])) return false;
      if (totalVisits > 0) return false;
      return true;
    },
    content: `
    You introduce <%=blaine%> to <%=jen%>. He immediately hits on her, and she shuts him down
    hard.

    <%=img('jen')%>
    Since <%=kevin%> isn't here, she glares at you instead. "Why did you even let him in?"
    she says.

    <%=stat('jen', 'friendliness', -1)%>
    `,
    choices: ['#room-dining', '#freechoice']
  },

  {
    id: 'blaine-intro-maria',
    tags: ['blaine-shenanigans'],
    optionText: "Introduce Blaine to Maria",
    getCanSee: (model, host, {totalVisits}) => {
      if (!model.charactersAreIn(ROOMS.dining, ['blaine', 'maria'])) return false;
      if (totalVisits > 0) return false;
      return true;
    },
    content: `
    You introduce <%=blaine%> to <%=maria%>. He immediately hits on her, and she looks really
    uncomfortable. She mumbles something in response and tries to get back to her conversation
    with <%=jenOrAmyName%>.

    <%=stat('maria', 'energy', -1)%>

    A few minutes later, <%=jenOrAmyName%> whispers to you angrily, "Why did you even let him in?"

    <%=stat(jenOrAmyId, 'friendliness', -1)%>
    `,
    choices: ['#room-dining', '#freechoice']
  },

  {
    id: 'blaine-intro-amy',
    tags: ['blaine-shenanigans'],
    optionText: "Introduce Blaine to Amy",
    getCanSee: (model, host, {totalVisits}) => {
      if (!model.charactersAreIn(ROOMS.dining, ['blaine', 'amy'])) return false;
      if (totalVisits > 0) return false;
      return true;
    },
    content: `
    You introduce <%=blaine%> to <%=amy%>. He immediately hits on her, and she shuts him down
    hard.

    <%=img('amy')%>
    Since <%=kevin%> isn't here, she glares at you instead. "Why did you even let him in?"
    she says.

    <%=stat('amy', 'friendliness', -1)%>
    `,
    choices: ['#room-dining', '#freechoice']
  },

  {
    id: 'blaine-intro-federico',
    tags: ['blaine-shenanigans'],
    optionText: "Introduce Blaine to Federico",
    getCanSee: (model, host, {totalVisits}) => {
      if (!model.charactersAreIn(ROOMS.dining, ['blaine', 'federico'])) return false;
      if (totalVisits > 0) return false;
      return true;
    },
    contents: `
    You introduce <%=blaine%> to <%=federico%>. They immedialy begin bonding over Magic: the Gathering.
    `,
    choices: ['#room-dining', '#freechoice']
  },
];