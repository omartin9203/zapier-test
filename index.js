const authentication = require('./authentication');
const candidateEventTrigger = require('./triggers/candidate_event.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  triggers: { [candidateEventTrigger.key]: candidateEventTrigger },
  authentication: authentication,

  resources: {
    
  }
};
