(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, localRequire(name), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';

    if (has(cache, path)) return cache[path];
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex];
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  var define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  var list = function() {
    var result = [];
    for (var item in modules) {
      if (has(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  globals.require = require;
  globals.require.define = define;
  globals.require.register = define;
  globals.require.list = list;
  globals.require.brunch = true;
})();
require.register("controllers/users-controller", function(exports, require, module) {
var RandomUsersView, SiteView, User, UserView, UsersController, fixture, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

User = require('models/user');

RandomUsersView = require('views/random-users-view');

UserView = require('views/user-view');

SiteView = require('views/site-view');

fixture = [
  {
    login: 'paulmillr'
  }, {
    login: 'molily'
  }, {
    login: 'paulirish'
  }, {
    login: 'addyosmani'
  }, {
    login: 'sindresorhus'
  }, {
    login: 'dhh'
  }, {
    login: 'mehcode'
  }
];

module.exports = UsersController = (function(_super) {
  __extends(UsersController, _super);

  function UsersController() {
    _ref = UsersController.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  UsersController.prototype.beforeAction = function() {
    return this.compose('site', SiteView);
  };

  UsersController.prototype.index = function(params) {
    this.collection = new Chaplin.Collection(fixture);
    return this.view = new RandomUsersView({
      autoRender: true,
      collection: this.collection,
      region: 'main'
    });
  };

  UsersController.prototype.show = function(params) {
    this.model = new User({
      login: params.login
    });
    this.view = new UserView({
      model: this.model,
      region: 'main'
    });
    return this.model.fetch().then(this.view.render);
  };

  return UsersController;

})(Chaplin.Controller);
});

;require.register("initialize", function(exports, require, module) {
var routes;

routes = require('./routes');

jQuery(function() {
  return new Chaplin.Application({
    controllerSuffix: '-controller',
    pushState: false,
    routes: routes
  });
});
});

;require.register("models/user", function(exports, require, module) {
var User, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

module.exports = User = (function(_super) {
  __extends(User, _super);

  function User() {
    _ref = User.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  User.prototype.url = function() {
    return "https://api.github.com/users/" + (this.get('login'));
  };

  return User;

})(Chaplin.Model);
});

;require.register("routes", function(exports, require, module) {
module.exports = function(match) {
  match('@:login', 'users#show');
  return match('', 'users#index');
};
});

;require.register("views/base/view", function(exports, require, module) {
var View, _ref,
  __slice = [].slice,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Handlebars.registerHelper('url', function() {
  var options, params, routeName, _i;
  routeName = arguments[0], params = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), options = arguments[_i++];
  return Chaplin.helpers.reverse(routeName, params);
});

module.exports = View = (function(_super) {
  __extends(View, _super);

  function View() {
    _ref = View.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  View.prototype.getTemplateFunction = function() {
    return this.template;
  };

  return View;

})(Chaplin.View);
});

;require.register("views/random-users-view", function(exports, require, module) {
var RandomUsersView, View, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('/views/base/view');

module.exports = RandomUsersView = (function(_super) {
  __extends(RandomUsersView, _super);

  function RandomUsersView() {
    _ref = RandomUsersView.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  RandomUsersView.prototype.className = 'random-users cell';

  RandomUsersView.prototype.template = require('./templates/random-users');

  return RandomUsersView;

})(View);
});

;require.register("views/site-view", function(exports, require, module) {
var SiteView, View, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('/views/base/view');

module.exports = SiteView = (function(_super) {
  __extends(SiteView, _super);

  function SiteView() {
    _ref = SiteView.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  SiteView.prototype.container = 'body';

  SiteView.prototype.id = 'site-container';

  SiteView.prototype.regions = {
    url: '#page-url',
    main: '#main-container',
    navigation: '#nav-container'
  };

  SiteView.prototype.template = require('./templates/site');

  return SiteView;

})(View);
});

;require.register("views/templates/random-users", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n    <li><a href=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.url || depth0.url),stack1 ? stack1.call(depth0, "users#show", depth0.login, options) : helperMissing.call(depth0, "url", "users#show", depth0.login, options)))
    + "\">@"
    + escapeExpression(((stack1 = depth0.login),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n  ";
  return buffer;
  }

  buffer += "<ul>\n  ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/templates/site", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<h2><a href=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.url || depth0.url),stack1 ? stack1.call(depth0, "users#index", options) : helperMissing.call(depth0, "url", "users#index", options)))
    + "\">GitHub viewer</a></h2>\n<div class=\"cell\" id=\"main-container\"></div>\n";
  return buffer;
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/templates/user", function(exports, require, module) {
var __templateData = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<img class=\"user-avatar\" src=\"";
  if (stack1 = helpers.avatar_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.avatar_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" width=\"100\" height=\"100\" alt=\"\">\n<h3>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n<p><a href=\"https://github.com/";
  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">github.com/";
  if (stack1 = helpers.login) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.login; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></p>\n<strong>Followers:</strong> <span class=\"followers-count\">";
  if (stack1 = helpers.followers) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.followers; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n";
  return buffer;
  });
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
});

;require.register("views/user-view", function(exports, require, module) {
var UserView, View, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('/views/base/view');

module.exports = UserView = (function(_super) {
  __extends(UserView, _super);

  function UserView() {
    _ref = UserView.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  UserView.prototype.className = 'user';

  UserView.prototype.template = require('./templates/user');

  return UserView;

})(View);
});

;
//@ sourceMappingURL=app.js.map