// import _ from 'lodash';

export default [
  {
    id: 'start',
    content: 'Please enter your name.',
    input: {
      placeholder: 'Your name',
      next: '@prologue',
      store: (model, value) => {
        model.character('player').name = value;
        localStorage.playerName = value;
      }
    },
    willEnter: (model, ui) => {
      if (localStorage.playerName) {
        model.character('player').name = localStorage.playerName;
        model.do('@prologue');
        return false;
      } else {
        return true;
      }
    },
  },

  {
    id: 'prologue',
    content: `
      # Prologue: 6:00pm

      It's a quiet Friday evening in your three bedroom flat in San Francisco.
      Your friend <%-maria%> is visiting from Seattle tonight, so you've
      decided to throw a small dinner party with <%-chrs('and', 'Maria', 'Kevin', 'Federico') %>.

      "Wow, it's really been a while!" says <%-kevin%>, [your friend from college.](>replace:college) [](){#college}

      "Yeah, <%-maria%>, I haven't seen you in years," says [<%-federico%>.](>replace:work) [](){#work}

      "What about you, <%-pl%>, when was the last time you saw <%-maria%>?"
      `,
    choices: ['#prologue-how-long-has-it-been'],
    snippets: {
      college: `You, <%-kevin%>, and <%-maria%> used to hang out at the student union between classes.`,
      work: `You know <%-federico%> from work, but not well. He and <%-maria%> went to high school together, though, so you decided to invite him.`
    }
  },

  {
    id: 'prologue-i-forget', tags: ['prologue-how-long-has-it-been'],
    optionText: "Oh, I can't even remember",
    /*
    To do: require more unfriendliness before inviting Amy
    */
    content: `
    <%-maria%> furrows her brow. "Come on, <%-pl%>, it's only been a couple of months. I stopped here on my way to LA.

    <%= stat('maria', 'friendliness', -1) %>
    `,
    choices: ['#invite-amy'],
  },

  {
    id: 'maybe-invite-amy', tags: ['invite-amy'],
    optionText: "Sorry...",
    content: `
    You see the wheels turn in <%-maria%>'s head. She would clearly prefer the company of better friends.

    "Hey, would you guys mind if I brought <%-amy%> over? I haven't seen her in ages either."

    You would really rather [not](>write:amy), but you can't say no to your guest.
    `,
    choices: ['invite-amy'],
    snippets: {
      amy: `
      <%-amy%> is <%-maria%>'s ex. <%=amy%> is much, much cooler than you. Every time you've hung out in a group that <%-amy%> was in,
      everyone ended up ignoring you. She and <%-maria%> are still on good, if complicated, terms.
      `
    },
  },

  {
    id: 'invite-amy',
    optionText: "Sounds great!",
    content: `
    "Thanks!" <%-maria%> says. "She'll be here at 7."

    <% print(scheduleArrival('amy', 1)) %>
    `,
    choices: ['advance-time'],
  },

  {
    id: 'prologue-1-year', tags: ['prologue-how-long-has-it-been'],
    optionText: "More than a year ago",
    content: `
    "Yeah, it would have been that Tahoe trip. That was so much fun!" <%-maria%> leans back and looks up at the ceiling.

    "You know, that reminds me of [<%-jen%>](>replace:jen). She's still around, right?"

    [](){#jen}
    `,
    choices: ['#invite-jen'],
    snippets: {
      jen: `
      When <%-maria%> lived in SF, she used to work at a bar downtown. <%-jen%> was a drummer in one of the bands that came through,
      and they've been friends ever since.
      `
    }
  },

  {
    id: 'maybe-invite-jen', tags: ['invite-jen'],
    optionText: "Last I heard, she moved to the East Bay.",
    content: `
    "Awesome! I'm going to text her. I would love to see her again."
    `,
    choices: ['invite-jen'],
  },

  {
    id: 'invite-jen',
    optionText: "Sounds great!",
    content: `
    "OK. She'll be here at 7."

    <% print(scheduleArrival('jen', 1)) %>
    `,
    choices: ['advance-time'],
  },

  /*
  {
    id: 'prologue-10-years', tags: ['prologue-how-long-has-it-been'],
    optionText: "At least ten years ago",
    content: `
    "Yeah, must have been back in college. Wow." <%-maria%> leans back and looks up at the ceiling. "So much has happened...
    You know, I really miss those people. Especially "
    `,
    choices: [],
  },
  */

];