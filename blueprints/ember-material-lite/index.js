var RSVP  = require('rsvp');
var chalk = require('chalk');

module.exports = {
  description: 'install ember-material-lite into a typical project',
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  beforeInstall: function (options) {
    return RSVP.all([
      this.addBowerPackageToProject('material-design-lite', '~1.0.4')
    ]);
  },

  afterInstall: function () {
    return RSVP.all([
      this.addPackageToProject('ember-cli-sass', '^5.1.0'),
      this.addPackageToProject('ember-new-computed', '~1.0.0'),
      this.addPackageToProject('ember-legacy-views', '~0.2.0'),
      this.addPackageToProject('ember-truth-helpers', '~1.1.0'),
      this.addPackageToProject('ember-composability', '~0.2.0'),
    ]);
  }
};
