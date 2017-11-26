import _ from 'lodash';
import JumboGroveDirector from "./director";
import DataUI from "./dataui";

describe('director parsing', () => {
  test('defaults', () => {
    const d = new JumboGroveDirector({id: 'test'});
    expect(d.id).toBe('test');
    expect(d.navHeader).toBe('');
    expect(d.asideHeader).toBe('');
    expect(d.model.currentSituation).toBe(null);
    expect(d.model.player).toBe(null);
    expect(d.model.globalState).toEqual({});
  });
});

describe('director situations', () => {
  test('indexing', () => {
    const d = new JumboGroveDirector({
      id: 'test',
      situations: [{id: 'start'}, {id: 'not_start'}],
    });
    expect(d.situation('start').id).toBe('start');
    expect(d.situation('not_start').id).toBe('not_start');
    expect(d.model.currentSituation).toBe(null);
    expect(d.model.navHeaderHTML).toBe(null);
    expect(d.model.asideHeaderHTML).toBe(null);
  });

  test('starting', () => {
    const d = new JumboGroveDirector({
      id: 'test',
      situations: [{id: 'start'}, {id: 'not_start'}],
    });
    d.start();
    expect(d.model.currentSituation.id).toBe('start');
  });

  test('alternative starting id', () => {
    const d = new JumboGroveDirector({
      id: 'test',
      initialSituation: 'first',
      situations: [{id: 'first'}, {id: 'second'}],
    });
    d.start();
    expect(d.model.currentSituation.id).toBe('first');
  });
});

describe('director lifecycle', () => {
  test('basics', () => {
    const seenCallbacks = {
      init: [],
      willEnter: [],
      didEnter: [],
      willExit: [],
      didExit: [],
      willAct: [],
      didAct: [],
    };
    const logger = (k) => (...args) => seenCallbacks[k].push(args);
    const callbackArgs = _.fromPairs(Object.keys(seenCallbacks).map((k) => {
      return [k, (...args) => { seenCallbacks[k].push(args); return true; }];
    }));

    
    const d = new JumboGroveDirector({
      id: 'test',
      ...callbackArgs,
      situations: [
        {id: 'start'},
        {id: 'not_start'},
      ],
    });
    expect(d.model.currentSituation).toBe(null);
    expect(d.model.navHeaderHTML).toBe(null);
    expect(d.model.asideHeaderHTML).toBe(null);

    const ui = new DataUI();
    d.bindToUI(ui);
    expect(d.model.currentSituation).toBe(null);
    expect(d.model.navHeaderHTML).toBe('');
    expect(d.model.asideHeaderHTML).toBe('');

    expect(seenCallbacks).toEqual({
      init: [[d.model, ui, ui.md]],
      willEnter: [],
      didEnter: [],
      willExit: [],
      didExit: [],
      willAct: [],
      didAct: [],
    });

    d.start();

    expect(d.model.currentSituation.id).toBe('start');
    expect(seenCallbacks).toEqual({
      init: [[d.model, ui, ui.md]],
      willEnter: [[d.model, ui, null, 'start']],
      didEnter: [[d.model, ui, null, 'start']],
      willExit: [],
      didExit: [],
      willAct: [],
      didAct: [],
    });

    d.goTo('not_start');
    expect(seenCallbacks.init).toEqual([[d.model, ui, ui.md]]);
    expect(seenCallbacks.willEnter).toEqual([
      [d.model, ui, null, 'start'],
      [d.model, ui, 'start', 'not_start'],
    ]);
    expect(seenCallbacks.didEnter).toEqual([
      [d.model, ui, null, 'start'],
      [d.model, ui, 'start', 'not_start'],
    ]);
    expect(seenCallbacks.willExit).toEqual([[d.model, ui, 'start', 'not_start']]);
    expect(seenCallbacks.didExit).toEqual([[d.model, ui, 'start', 'not_start']]);
    expect(seenCallbacks.willAct).toEqual([]);
    expect(seenCallbacks.didAct).toEqual([]);

    d.runAction('foo');
    expect(seenCallbacks.init).toEqual([[d.model, ui, ui.md]]);
    expect(seenCallbacks.willEnter).toEqual([
      [d.model, ui, null, 'start'],
      [d.model, ui, 'start', 'not_start'],
    ]);
    expect(seenCallbacks.didEnter).toEqual([
      [d.model, ui, null, 'start'],
      [d.model, ui, 'start', 'not_start'],
    ]);
    expect(seenCallbacks.willExit).toEqual([[d.model, ui, 'start', 'not_start']]);
    expect(seenCallbacks.didExit).toEqual([[d.model, ui, 'start', 'not_start']]);
    expect(seenCallbacks.willAct).toEqual([[d.model, ui, d.situation('not_start'), 'foo']]);
    expect(seenCallbacks.didAct).toEqual([[d.model, ui, d.situation('not_start'), 'foo']]);
  });

  test('goToSmart', () => {
    const seenCallbacks = {
      init: [],
      willEnter: [],
      didEnter: [],
      willExit: [],
      didExit: [],
      willAct: [],
      didAct: [],
    };
    const logger = (k) => (...args) => seenCallbacks[k].push(args);
    const callbackArgs = _.fromPairs(Object.keys(seenCallbacks).map((k) => {
      return [k, (...args) => { seenCallbacks[k].push(args); return true; }];
    }));

    const d = new JumboGroveDirector({
      id: 'test',
      ...callbackArgs,
      situations: [
        {id: 'start'}, {id: 'not_start'},
      ],
    });
    const ui = new DataUI();
    d.bindToUI(ui);
    d.start();
    d.goToSmart('@not_start');
    expect(seenCallbacks.init).toEqual([[d.model, ui, ui.md]]);
    expect(seenCallbacks.willEnter).toEqual([
      [d.model, ui, null, 'start'],
      [d.model, ui, 'start', 'not_start'],
    ]);
    expect(seenCallbacks.didEnter).toEqual([
      [d.model, ui, null, 'start'],
      [d.model, ui, 'start', 'not_start'],
    ]);
    expect(seenCallbacks.willExit).toEqual([[d.model, ui, 'start', 'not_start']]);
    expect(seenCallbacks.didExit).toEqual([[d.model, ui, 'start', 'not_start']]);
    expect(seenCallbacks.willAct).toEqual([]);
    expect(seenCallbacks.didAct).toEqual([]);

    d.goToSmart('>foo');
    expect(seenCallbacks.init).toEqual([[d.model, ui, ui.md]]);
    expect(seenCallbacks.willEnter).toEqual([
      [d.model, ui, null, 'start'],
      [d.model, ui, 'start', 'not_start'],
    ]);
    expect(seenCallbacks.didEnter).toEqual([
      [d.model, ui, null, 'start'],
      [d.model, ui, 'start', 'not_start'],
    ]);
    expect(seenCallbacks.willExit).toEqual([[d.model, ui, 'start', 'not_start']]);
    expect(seenCallbacks.didExit).toEqual([[d.model, ui, 'start', 'not_start']]);
    expect(seenCallbacks.willAct).toEqual([[d.model, ui, d.situation('not_start'), 'foo']]);
    expect(seenCallbacks.didAct).toEqual([[d.model, ui, d.situation('not_start'), 'foo']]);
  })
});

describe('director utilities', () => {
  test('director.situations', () => {
    const d = new JumboGroveDirector({
      id: 'test',
      initialSituation: 'a',
      situations: [
        {id: 'a', tags: ['alphabet', 'starts-with-a']},
        {id: 'b', tags: ['alphabet']},
        {id: 'aardvark', tags: ['starts-with-a']},
      ],
    });
    const ui = new DataUI();
    d.bindToUI(ui);
    d.start();

    expect(_.sortBy(d.situations('#alphabet'), ({id}) => id)).toEqual([
      d.situation('a'), d.situation('b'),
    ]);
    expect(_.sortBy(d.situations('#starts-with-a'), ({id}) => id)).toEqual([
      d.situation('a'), d.situation('aardvark'),
    ]);
    expect(_.sortBy(d.situations('b'), ({id}) => id)).toEqual([
      d.situation('b'),
    ]);
  });

  test('director.isManagedLink', () => {
    const d = new JumboGroveDirector({
      id: 'test',
      situations: [{id: 'start'}],
    });
    expect(d.isManagedLink('>action')).toBe(true);
    expect(d.isManagedLink('@scene')).toBe(true);
    expect(d.isManagedLink('anything else')).toBe(false);
  });
});

describe('director.interpretChoices', () => {
  const d = new JumboGroveDirector({
    id: 'test',
    globalState: {
      isOverrideVisible: false,
    },
    situations: [
      {
        id: 'start',
        tags: [],
        getCanChoose: (model, host) => true,
        getCanSee: (model, host) => true,
        prioritiy: (model, host) => 0,
        displayOrder: (model, host) => 0,
        optionText: (model, host) => 'Go back to start',
      },

      {
        id: 'a',
        tags: ['alphabet', 'starts-with-a'],
        getCanChoose: (model, host) => true,
        getCanSee: (model, host) => true,
        priority: (model, host) => 0,
        displayOrder: (model, host) => 1,
        optionText: (model, host) => `A from ${host.id}`,
      },

      {
        id: 'aardvark',
        tags: ['starts-with-a'],
        getCanChoose: (model, host) => true,
        getCanSee: (model, host) => true,
        priority: (model, host) => 0,
        displayOrder: (model, host) => 2,
        optionText: 'Pet the aardvark',
      },

      {
        id: 'b',
        tags: ['alphabet'],
        getCanChoose: (model, host) => host.id == 'a',
        getCanSee: (model, host) => true,
        priority: (model, host) => 0,
        displayOrder: (model, host) => 3,
        optionText: 'Option B',
      },

      {
        id: 'the-override',
        getCanSee: (model, host) => model.globalState.isOverrideVisible,
        priority: (model, host) => 1,
        optionText: 'THE OVERRIDE',
      },

    ],
  });
  const ui = new DataUI();
  d.bindToUI(ui);
  d.start();

  test('respects displayOrder and getCanSee', () => {
    d.model.globalState.isOverrideVisible = false;
    expect(d.interpretChoices(['#alphabet', 'aardvark', 'the-override'])).toEqual([
      {situationId: 'a', text: 'A from start', isEnabled: true},
      {situationId: 'aardvark', text: 'Pet the aardvark', isEnabled: true},
      {situationId: 'b', text: 'Option B', isEnabled: false},
    ]);
  });

  test('respects priority', () => {
    d.model.globalState.isOverrideVisible = true;
    expect(d.interpretChoices(['#alphabet', 'aardvark', 'the-override'])).toEqual([
      {situationId: 'the-override', text: 'THE OVERRIDE', isEnabled: true},
    ]);
    d.model.globalState.isOverrideVisible = false;
  });

  test('respects atLeast', () => {
    d.model.globalState.isOverrideVisible = true;
    // atLeast = 2
    expect(d.interpretChoices(['#alphabet', 'aardvark', 'the-override'], 2)).toEqual([
      {situationId: 'a', text: 'A from start', isEnabled: true},
      {situationId: 'aardvark', text: 'Pet the aardvark', isEnabled: true},
      {situationId: 'b', text: 'Option B', isEnabled: false},
    ]);
    d.model.globalState.isOverrideVisible = false;
  });

  test('respects atMost', () => {
    d.model.globalState.isOverrideVisible = false;
    const choices = d.interpretChoices(['#alphabet', 'aardvark', 'the-override'], 0, 2);
    expect(choices.length).toBe(2);
    expect(d.situation(choices[0].situationId).getDisplayOrder(d.model, d.model.currentSituation))
      .toBeLessThanOrEqual(d.situation(choices[1].situationId).getDisplayOrder(d.model, d.model.currentSituation));
  });
});