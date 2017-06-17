"use strict";



define('ember-crud/adapters/application', ['exports', 'emberfire/adapters/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebase.default.extend({});
});
define('ember-crud/app', ['exports', 'ember', 'ember-crud/resolver', 'ember-load-initializers', 'ember-crud/config/environment'], function (exports, _ember, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = void 0;

  _ember.default.MODEL_FACTORY_INJECTIONS = true;

  App = _ember.default.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('ember-crud/components/library-item-form', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({
    buttonLabel: 'Save',

    actions: {
      buttonClicked: function buttonClicked(param) {
        this.sendAction('action', param);
      }
    }
  });
});
define('ember-crud/components/library-item', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({});
});
define('ember-crud/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('ember-crud/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Controller.extend({

    headerMessage: 'Coming Soon',
    responseMessage: '',
    emailAddress: '',

    isValid: _ember.default.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: _ember.default.computed.not('isValid'),

    actions: {
      saveInvitation: function saveInvitation() {
        var _this = this;

        var email = this.get('emailAddress');

        var newInvitation = this.store.createRecord('invitation', {
          email: email
        });

        newInvitation.save().then(function (response) {
          _this.set('responseMessage', 'Thank you! We saved your email address with the following id: ' + response.get('id'));
          _this.set('emailAddress', '');
        });
      }
    }

  });
});
define('ember-crud/helpers/app-version', ['exports', 'ember', 'ember-crud/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = _ember.default.Helper.helper(appVersion);
});
define('ember-crud/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('ember-crud/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('ember-crud/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-crud/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('ember-crud/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ember-crud/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ember-crud/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/index'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('ember-crud/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfire) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberfire.default;
});
define('ember-crud/initializers/export-application-global', ['exports', 'ember', 'ember-crud/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ember-crud/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ember-crud/initializers/store', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('ember-crud/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("ember-crud/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('ember-crud/models/invitation', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    email: _emberData.default.attr('string')
  });
});
define('ember-crud/models/library', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({

    name: _emberData.default.attr('string'),
    address: _emberData.default.attr('string'),
    phone: _emberData.default.attr('string'),

    isValid: _ember.default.computed.notEmpty('name')
  });
});
define('ember-crud/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('ember-crud/router', ['exports', 'ember', 'ember-crud/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = _ember.default.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('about');
    this.route('contact');

    this.route('admin', function () {
      this.route('invitations');
    });

    this.route('libraries', function () {
      this.route('new');
      this.route('edit', { path: '/:library_id/edit' });
    });
  });

  exports.default = Router;
});
define('ember-crud/routes/about', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({});
});
define('ember-crud/routes/admin/invitations', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({
    model: function model() {
      return this.store.findAll('invitation');
    }
  });
});
define('ember-crud/routes/contact', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({});
});
define('ember-crud/routes/libraries/edit', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({
    model: function model(params) {
      return this.store.findRecord('library', params.library_id);
    },


    actions: {
      saveLibrary: function saveLibrary(library) {
        var _this = this;

        library.save().then(function () {
          return _this.transitionTo('libraries');
        });
      },
      willTransition: function willTransition(transition) {

        var model = this.controller.get('model');

        if (model.get('hasDirtyAttributes')) {
          var confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

          if (confirmation) {
            model.rollbackAttributes();
          } else {
            transition.abort();
          }
        }
      }
    }
  });
});
define('ember-crud/routes/libraries/index', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({
    model: function model() {
      return this.store.findAll('library');
    },


    actions: {
      deleteLibrary: function deleteLibrary(library) {
        var confirmation = confirm('Are you sure?');

        if (confirmation) {
          library.destroyRecord();
        }
      }
    }
  });
});
define('ember-crud/routes/libraries/new', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({
    model: function model() {
      return this.store.createRecord('library');
    },


    actions: {
      saveLibrary: function saveLibrary(newLibrary) {
        var _this = this;

        newLibrary.save().then(function () {
          return _this.transitionTo('libraries');
        });
      },
      willTransition: function willTransition() {
        var model = this.controller.get('model');

        if (model.get('isNew')) {
          model.destroyRecord();
        }
      }
    }
  });
});
define('ember-crud/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('ember-crud/services/firebase-app', ['exports', 'emberfire/services/firebase-app'], function (exports, _firebaseApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebaseApp.default;
});
define('ember-crud/services/firebase', ['exports', 'emberfire/services/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebase.default;
});
define("ember-crud/templates/about", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ru4zHHS1", "block": "{\"statements\":[[11,\"h1\",[]],[13],[0,\"About Page\"],[14],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\" A library is a collection of sources of information and similar resources, made accessible to a defined community for reference or borrowing. It provides physical or digital access to material, and may be a physical building or room, or a virtual space, or both. A library's collection can include books, periodicals, newspapers, manuscripts, films, maps, prints, documents, microform, CDs, cassettes, videotapes, DVDs, Blu-ray Discs, e-books, audiobooks, databases, and other formats. Libraries range in size from a few shelves of books to several million items. A library is organized for use and maintained by a public body, an institution, a corporation, or a private individual. Public and institutional collections and services may be intended for use by people who choose not to—or cannot afford to—purchase an extensive collection themselves, who need material no individual can reasonably be expected to have, or who require professional assistance with their research. In addition to providing materials, libraries also provide the services of librarians who are experts at finding and organizing information and at interpreting information needs. Libraries often provide quiet areas for studying, and they also often offer common areas to facilitate group study and collaboration. Libraries often provide public facilities for access to their electronic resources and the Internet. Modern libraries are increasingly being redefined as places to get unrestricted access to information in many formats and from many sources. They are extending services beyond the physical walls of a building, by providing material accessible by electronic means, and by providing the assistance of librarians in navigating and analyzing very large amounts of information with a variety of digital tools. \"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-crud/templates/about.hbs" } });
});
define("ember-crud/templates/admin/invitations", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "GpUuVw3P", "block": "{\"statements\":[[11,\"h1\",[]],[13],[0,\"Invitations\"],[14],[0,\"\\n\\n\"],[11,\"table\",[]],[15,\"class\",\"table table-bordered table-striped\"],[13],[0,\"\\n  \"],[11,\"thead\",[]],[13],[0,\"\\n    \"],[11,\"tr\",[]],[13],[0,\"\\n      \"],[11,\"th\",[]],[13],[0,\"ID\"],[14],[0,\"\\n      \"],[11,\"th\",[]],[13],[0,\"E-mail\"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"tbody\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[11,\"tr\",[]],[13],[0,\"\\n      \"],[11,\"th\",[]],[13],[1,[28,[\"invitation\",\"id\"]],false],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[1,[28,[\"invitation\",\"email\"]],false],[14],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[\"invitation\"]},null],[0,\"  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-crud/templates/admin/invitations.hbs" } });
});
define("ember-crud/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "aLz8UC/r", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n  \"],[19,\"navbar\"],[0,\"\\n  \"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "ember-crud/templates/application.hbs" } });
});
define("ember-crud/templates/components/library-item-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "H8qkkdMw", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"form-horizontal\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[16,\"class\",[34,[\"form-group has-feedback \",[33,[\"if\"],[[28,[\"item\",\"isValid\"]],\"has-success\"],null]]]],[13],[0,\"\\n        \"],[11,\"label\",[]],[15,\"class\",\"col-sm-2 control-label\"],[13],[0,\"Name*\"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"col-sm-10\"],[13],[0,\"\\n          \"],[1,[33,[\"input\"],null,[[\"type\",\"value\",\"class\",\"placeholder\"],[\"text\",[28,[\"item\",\"name\"]],\"form-control\",\"The name of the Library\"]]],false],[0,\"\\n          \"],[6,[\"if\"],[[28,[\"item\",\"isValid\"]]],null,{\"statements\":[[11,\"span\",[]],[15,\"class\",\"glyphicon glyphicon-ok form-control-feedback\"],[13],[14]],\"locals\":[]},null],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n        \"],[11,\"label\",[]],[15,\"class\",\"col-sm-2 control-label\"],[13],[0,\"Address\"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"col-sm-10\"],[13],[0,\"\\n          \"],[1,[33,[\"input\"],null,[[\"type\",\"value\",\"class\",\"placeholder\"],[\"text\",[28,[\"item\",\"address\"]],\"form-control\",\"The address of the Library\"]]],false],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n        \"],[11,\"label\",[]],[15,\"class\",\"col-sm-2 control-label\"],[13],[0,\"Phone\"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"col-sm-10\"],[13],[0,\"\\n          \"],[1,[33,[\"input\"],null,[[\"type\",\"value\",\"class\",\"placeholder\"],[\"text\",[28,[\"item\",\"phone\"]],\"form-control\",\"The phone number of the Library\"]]],false],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"col-sm-offset-2 col-sm-10\"],[13],[0,\"\\n            \"],[11,\"button\",[]],[15,\"type\",\"submit\"],[15,\"class\",\"btn btn-default\"],[16,\"disabled\",[33,[\"unless\"],[[28,[\"item\",\"isValid\"]],true],null],null],[5,[\"action\"],[[28,[null]],\"buttonClicked\",[28,[\"item\"]]]],[13],[1,[26,[\"buttonLabel\"]],false],[14],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-crud/templates/components/library-item-form.hbs" } });
});
define("ember-crud/templates/components/library-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9SiRYzbX", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"panel panel-default library-item\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"panel-heading\"],[13],[0,\"\\n        \"],[11,\"h3\",[]],[15,\"class\",\"panel-title\"],[13],[1,[28,[\"item\",\"name\"]],false],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"panel-body\"],[13],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"Address: \"],[1,[28,[\"item\",\"address\"]],false],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"Phone: \"],[1,[28,[\"item\",\"phone\"]],false],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"panel-footer text-right\"],[13],[0,\"\\n      \"],[18,\"default\"],[0,\"\\n    \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "ember-crud/templates/components/library-item.hbs" } });
});
define("ember-crud/templates/contact", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "834kpJVz", "block": "{\"statements\":[[11,\"h1\",[]],[13],[0,\"Contact Page \"],[14],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"Aishwarya Rajan\"],[14],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"Contact Number : 4698778198 \"],[14],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\" email: aishwaryarajan75@gmail.com \"],[14],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\" \"],[11,\"a\",[]],[15,\"href\",\"https://www.linkedin.com/in/aishwarya-rajan-9240b89b/\"],[13],[0,\" LinkedIn Profile \"],[14],[14],[0,\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-crud/templates/contact.hbs" } });
});
define("ember-crud/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Ux0Gz4bY", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"jumbotron text-center\"],[13],[0,\"\\n  \"],[11,\"h1\",[]],[13],[0,\"Know More!!!\"],[14],[0,\"\\n\\n  \"],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\\n  \"],[11,\"p\",[]],[13],[0,\"Library like a Home!!!\"],[14],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"form-horizontal form-group form-group-lg row\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-1 col-md-5 col-md-offset-2\"],[13],[0,\"\\n      \"],[1,[33,[\"input\"],null,[[\"type\",\"value\",\"class\",\"placeholder\",\"autofocus\"],[\"email\",[28,[\"emailAddress\"]],\"form-control\",\"Please type your e-mail address.\",\"autofocus\"]]],false],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"col-xs-10 col-xs-offset-1 col-sm-offset-0 col-sm-4 col-md-3\"],[13],[0,\"\\n        \"],[11,\"button\",[]],[15,\"class\",\"btn btn-primary btn-lg btn-block\"],[16,\"disabled\",[26,[\"isDisabled\"]],null],[5,[\"action\"],[[28,[null]],\"saveInvitation\"]],[13],[0,\"Request invitation\"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"responseMessage\"]]],null,{\"statements\":[[0,\"     \"],[11,\"div\",[]],[15,\"class\",\"alert alert-success\"],[13],[1,[26,[\"responseMessage\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"  \"],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-crud/templates/index.hbs" } });
});
define("ember-crud/templates/libraries", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pmEY7OWu", "block": "{\"statements\":[[11,\"h1\",[]],[13],[0,\"Libraries\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"well\"],[13],[0,\"\\n  \"],[11,\"ul\",[]],[15,\"class\",\"nav nav-pills\"],[13],[0,\"\\n    \"],[6,[\"link-to\"],[\"libraries.index\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[11,\"a\",[]],[15,\"href\",\"\"],[13],[0,\"List all\"],[14]],\"locals\":[]},null],[0,\"\\n    \"],[6,[\"link-to\"],[\"libraries.new\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[11,\"a\",[]],[15,\"href\",\"\"],[13],[0,\"Add new\"],[14]],\"locals\":[]},null],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[1,[26,[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-crud/templates/libraries.hbs" } });
});
define("ember-crud/templates/libraries/edit", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/WPCH3Ic", "block": "{\"statements\":[[11,\"h2\",[]],[13],[0,\"Edit Library\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"col-md-6\"],[13],[0,\"\\n    \"],[1,[33,[\"library-item-form\"],null,[[\"item\",\"buttonLabel\",\"action\"],[[28,[\"model\"]],\"Save changes\",\"saveLibrary\"]]],false],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"col-md-4\"],[13],[0,\"\\n\"],[6,[\"library-item\"],null,[[\"item\"],[[28,[\"model\"]]]],{\"statements\":[[0,\"      \"],[11,\"br\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"  \"],[14],[0,\"\\n\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-crud/templates/libraries/edit.hbs" } });
});
define("ember-crud/templates/libraries/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "K90CCNV1", "block": "{\"statements\":[[11,\"h2\",[]],[13],[0,\"List\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"col-md-4\"],[13],[0,\"\\n\"],[6,[\"library-item\"],null,[[\"item\"],[[28,[\"library\"]]]],{\"statements\":[[0,\"        \"],[6,[\"link-to\"],[\"libraries.edit\",[28,[\"library\",\"id\"]]],[[\"class\"],[\"btn btn-success btn-xs\"]],{\"statements\":[[0,\"Edit\"]],\"locals\":[]},null],[0,\"\\n        \"],[11,\"button\",[]],[15,\"class\",\"btn btn-danger btn-xs\"],[5,[\"action\"],[[28,[null]],\"deleteLibrary\",[28,[\"library\"]]]],[13],[0,\"Delete\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"    \"],[14],[0,\"\\n\"]],\"locals\":[\"library\"]},null],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-crud/templates/libraries/index.hbs" } });
});
define("ember-crud/templates/libraries/new", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3x044y7d", "block": "{\"statements\":[[11,\"h2\",[]],[13],[0,\"Add a new local Library\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"col-md-6\"],[13],[0,\"\\n    \"],[1,[33,[\"library-item-form\"],null,[[\"item\",\"buttonLabel\",\"action\"],[[28,[\"model\"]],\"Add to library list\",\"saveLibrary\"]]],false],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"col-md-4\"],[13],[0,\"\\n\"],[6,[\"library-item\"],null,[[\"item\"],[[28,[\"model\"]]]],{\"statements\":[[0,\"      \"],[11,\"br\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"  \"],[14],[0,\"\\n\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-crud/templates/libraries/new.hbs" } });
});
define("ember-crud/templates/navbar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5gdpBgc+", "block": "{\"statements\":[[11,\"nav\",[]],[15,\"class\",\"navbar navbar-inverse\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"container-fluid\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"navbar-header\"],[13],[0,\"\\n      \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"navbar-toggle collapsed\"],[15,\"data-toggle\",\"collapse\"],[15,\"data-target\",\"#main-navbar\"],[13],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"sr-only\"],[13],[0,\"Toggle navigation\"],[14],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"icon-bar\"],[13],[14],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"icon-bar\"],[13],[14],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"icon-bar\"],[13],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[6,[\"link-to\"],[\"index\"],[[\"class\"],[\"navbar-brand\"]],{\"statements\":[[0,\"Library App\"]],\"locals\":[]},null],[0,\"\\n    \"],[14],[0,\"\\n\\n    \"],[11,\"div\",[]],[15,\"class\",\"collapse navbar-collapse\"],[15,\"id\",\"main-navbar\"],[13],[0,\"\\n      \"],[11,\"ul\",[]],[15,\"class\",\"nav navbar-nav\"],[13],[0,\"\\n  \"],[6,[\"link-to\"],[\"index\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[11,\"a\",[]],[15,\"href\",\"\"],[13],[0,\"Home\"],[14]],\"locals\":[]},null],[0,\"\\n  \"],[6,[\"link-to\"],[\"libraries\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[11,\"a\",[]],[15,\"href\",\"\"],[13],[0,\"Libraries\"],[14]],\"locals\":[]},null],[0,\"\\n  \"],[6,[\"link-to\"],[\"about\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[11,\"a\",[]],[15,\"href\",\"\"],[13],[0,\"About\"],[14]],\"locals\":[]},null],[0,\"\\n  \"],[6,[\"link-to\"],[\"contact\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[11,\"a\",[]],[15,\"href\",\"\"],[13],[0,\"Contact\"],[14]],\"locals\":[]},null],[0,\"\\n\"],[14],[0,\"\\n\\t  \\n\\t    \"],[11,\"ul\",[]],[15,\"class\",\"nav navbar-nav navbar-right\"],[13],[0,\"\\n        \"],[11,\"li\",[]],[15,\"class\",\"dropdown\"],[13],[0,\"\\n          \"],[11,\"a\",[]],[15,\"class\",\"dropdown-toggle\"],[15,\"data-toggle\",\"dropdown\"],[15,\"role\",\"button\"],[15,\"aria-haspopup\",\"true\"],[15,\"aria-expanded\",\"false\"],[13],[0,\"\\n            Admin\"],[11,\"span\",[]],[15,\"class\",\"caret\"],[13],[14],[0,\"\\n          \"],[14],[0,\"\\n          \"],[11,\"ul\",[]],[15,\"class\",\"dropdown-menu\"],[13],[0,\"\\n          \"],[6,[\"link-to\"],[\"admin.invitations\"],[[\"tagName\"],[\"li\"]],{\"statements\":[[11,\"a\",[]],[15,\"href\",\"\"],[13],[0,\"Invitations\"],[14]],\"locals\":[]},null],[0,\"\\n          \"],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"    \\n    \"],[14],[4,\" /.navbar-collapse \"],[0,\"\\n  \"],[14],[4,\" /.container-fluid \"],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-crud/templates/navbar.hbs" } });
});
define('ember-crud/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _firebase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _firebase.default;
});


define('ember-crud/config/environment', ['ember'], function(Ember) {
  var prefix = 'ember-crud';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("ember-crud/app")["default"].create({"LOG_RESOLVER":true,"LOG_ACTIVE_GENERATION":true,"LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"LOG_VIEW_LOOKUPS":true,"name":"ember-crud","version":"0.0.0+3b235d0f"});
}
//# sourceMappingURL=ember-crud.map
