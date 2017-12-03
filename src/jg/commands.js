export default {
  runAction: {
    name: 'runAction',
    create: (name, args) => {
      return {'type': 'runAction', name, args};
    },
  },
  write: {
    name: 'write',
    create: (itemId, snippetId) => {
      return {'type': 'write', itemId, snippetId};
    },
  },
  replace: {
    name: 'replace',
    create: (itemId, snippetId, elId) => {
      return {'type': 'replace', itemId, snippetId, elId};
    },
  },
  goToSituation: {
    name: 'goToSituation',
    create: (id) => {
      return {'type': 'goToSituation', id};
    },
  },
  resetGame: {
    name: 'resetGame',
    create: () => ({'type': 'resetGame'}),
  },
};