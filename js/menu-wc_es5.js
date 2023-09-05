"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              "function" == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          }),
    _typeof(obj)
  );
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}
customElements.define(
  "compodoc-menu",
  /*#__PURE__*/ (function (_HTMLElement) {
    _inherits(_class, _HTMLElement);
    var _super = _createSuper(_class);
    function _class() {
      var _this;
      _classCallCheck(this, _class);
      _this = _super.call(this);
      _this.isNormalMode = _this.getAttribute("mode") === "normal";
      return _this;
    }
    _createClass(_class, [
      {
        key: "connectedCallback",
        value: function connectedCallback() {
          this.render(this.isNormalMode);
        },
      },
      {
        key: "render",
        value: function render(isNormalMode) {
          var tp = lithtml.html(
            '\n        <nav>\n            <ul class="list">\n                <li class="title">\n                    <a href="index.html" data-type="index-link">nx-nest-angular-realworld-app documentation</a>\n                </li>\n\n                <li class="divider"></li>\n                '
              .concat(
                isNormalMode
                  ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>'
                  : "",
                '\n                <li class="chapter">\n                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n                    <ul class="links">\n                        <li class="link">\n                            <a href="overview.html" data-type="chapter-link">\n                                <span class="icon ion-ios-keypad"></span>Overview\n                            </a>\n                        </li>\n                        <li class="link">\n                            <a href="index.html" data-type="chapter-link">\n                                <span class="icon ion-ios-paper"></span>README\n                            </a>\n                        </li>\n                                <li class="link">\n                                    <a href="dependencies.html" data-type="chapter-link">\n                                        <span class="icon ion-ios-list"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class="link">\n                                    <a href="properties.html" data-type="chapter-link">\n                                        <span class="icon ion-ios-apps"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class="chapter modules">\n                        <a data-type="chapter-link" href="modules.html">\n                            <div class="menu-toggler linked" data-bs-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#modules-links"'
                  : 'data-bs-target="#xs-modules-links"',
                '>\n                                <span class="icon ion-ios-archive"></span>\n                                <span class="link-name">Modules</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                        </a>\n                        <ul class="links collapse " '
              )
              .concat(
                isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"',
                '>\n                            <li class="link">\n                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-AppModule-158af6c2187a8605d5ce58a4e5ed4b46b329d1e8edae16f42758186798233784d450b31c6aed9f9b9e6801ef50705034043d4f367651626cc7f4df89fe7c7f6b"'
                  : 'data-bs-target="#xs-controllers-links-module-AppModule-158af6c2187a8605d5ce58a4e5ed4b46b329d1e8edae16f42758186798233784d450b31c6aed9f9b9e6801ef50705034043d4f367651626cc7f4df89fe7c7f6b"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-AppModule-158af6c2187a8605d5ce58a4e5ed4b46b329d1e8edae16f42758186798233784d450b31c6aed9f9b9e6801ef50705034043d4f367651626cc7f4df89fe7c7f6b"'
                  : 'id="xs-controllers-links-module-AppModule-158af6c2187a8605d5ce58a4e5ed4b46b329d1e8edae16f42758186798233784d450b31c6aed9f9b9e6801ef50705034043d4f367651626cc7f4df89fe7c7f6b"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-AppModule-158af6c2187a8605d5ce58a4e5ed4b46b329d1e8edae16f42758186798233784d450b31c6aed9f9b9e6801ef50705034043d4f367651626cc7f4df89fe7c7f6b"'
                  : 'data-bs-target="#xs-injectables-links-module-AppModule-158af6c2187a8605d5ce58a4e5ed4b46b329d1e8edae16f42758186798233784d450b31c6aed9f9b9e6801ef50705034043d4f367651626cc7f4df89fe7c7f6b"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-AppModule-158af6c2187a8605d5ce58a4e5ed4b46b329d1e8edae16f42758186798233784d450b31c6aed9f9b9e6801ef50705034043d4f367651626cc7f4df89fe7c7f6b"'
                  : 'id="xs-injectables-links-module-AppModule-158af6c2187a8605d5ce58a4e5ed4b46b329d1e8edae16f42758186798233784d450b31c6aed9f9b9e6801ef50705034043d4f367651626cc7f4df89fe7c7f6b"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/ArticleModule.html" data-type="entity-link" >ArticleModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-ArticleModule-802e8f61582d6651273230c2692e03a07528958b52ba2d508fcc8e0f85080d3d4054b028f7fd7ecaba235c6fba5dedf2c6a1f45fa549fe1f4e1bdb4264472ad5"'
                  : 'data-bs-target="#xs-controllers-links-module-ArticleModule-802e8f61582d6651273230c2692e03a07528958b52ba2d508fcc8e0f85080d3d4054b028f7fd7ecaba235c6fba5dedf2c6a1f45fa549fe1f4e1bdb4264472ad5"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-ArticleModule-802e8f61582d6651273230c2692e03a07528958b52ba2d508fcc8e0f85080d3d4054b028f7fd7ecaba235c6fba5dedf2c6a1f45fa549fe1f4e1bdb4264472ad5"'
                  : 'id="xs-controllers-links-module-ArticleModule-802e8f61582d6651273230c2692e03a07528958b52ba2d508fcc8e0f85080d3d4054b028f7fd7ecaba235c6fba5dedf2c6a1f45fa549fe1f4e1bdb4264472ad5"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/ArticleController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArticleController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-ArticleModule-802e8f61582d6651273230c2692e03a07528958b52ba2d508fcc8e0f85080d3d4054b028f7fd7ecaba235c6fba5dedf2c6a1f45fa549fe1f4e1bdb4264472ad5"'
                  : 'data-bs-target="#xs-injectables-links-module-ArticleModule-802e8f61582d6651273230c2692e03a07528958b52ba2d508fcc8e0f85080d3d4054b028f7fd7ecaba235c6fba5dedf2c6a1f45fa549fe1f4e1bdb4264472ad5"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-ArticleModule-802e8f61582d6651273230c2692e03a07528958b52ba2d508fcc8e0f85080d3d4054b028f7fd7ecaba235c6fba5dedf2c6a1f45fa549fe1f4e1bdb4264472ad5"'
                  : 'id="xs-injectables-links-module-ArticleModule-802e8f61582d6651273230c2692e03a07528958b52ba2d508fcc8e0f85080d3d4054b028f7fd7ecaba235c6fba5dedf2c6a1f45fa549fe1f4e1bdb4264472ad5"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/ArticleService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArticleService</a>\n                                        </li>\n                                        <li class="link">\n                                            <a href="injectables/CaslFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaslFactory</a>\n                                        </li>\n                                        <li class="link">\n                                            <a href="injectables/TagService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-AuthModule-0d2256de9dac18d6329df9446668d225add0257f764fb5686db5b26632c1965f98e13861ab8c735bea21620fdbbdde17dcecc97cffc820e03afadfa67c9b6840"'
                  : 'data-bs-target="#xs-injectables-links-module-AuthModule-0d2256de9dac18d6329df9446668d225add0257f764fb5686db5b26632c1965f98e13861ab8c735bea21620fdbbdde17dcecc97cffc820e03afadfa67c9b6840"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-AuthModule-0d2256de9dac18d6329df9446668d225add0257f764fb5686db5b26632c1965f98e13861ab8c735bea21620fdbbdde17dcecc97cffc820e03afadfa67c9b6840"'
                  : 'id="xs-injectables-links-module-AuthModule-0d2256de9dac18d6329df9446668d225add0257f764fb5686db5b26632c1965f98e13861ab8c735bea21620fdbbdde17dcecc97cffc820e03afadfa67c9b6840"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>\n                                        </li>\n                                        <li class="link">\n                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>\n                                        </li>\n                                        <li class="link">\n                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/CaslModule.html" data-type="entity-link" >CaslModule</a>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-CaslModule-394dfe91f625f773ab2c6f36a548635880e611126b01c79ad76a979407ccb62c5bae1a153fe429a91d49d96ae74884f78651d51e3aff58e7358277c45a885d78"'
                  : 'data-bs-target="#xs-injectables-links-module-CaslModule-394dfe91f625f773ab2c6f36a548635880e611126b01c79ad76a979407ccb62c5bae1a153fe429a91d49d96ae74884f78651d51e3aff58e7358277c45a885d78"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-CaslModule-394dfe91f625f773ab2c6f36a548635880e611126b01c79ad76a979407ccb62c5bae1a153fe429a91d49d96ae74884f78651d51e3aff58e7358277c45a885d78"'
                  : 'id="xs-injectables-links-module-CaslModule-394dfe91f625f773ab2c6f36a548635880e611126b01c79ad76a979407ccb62c5bae1a153fe429a91d49d96ae74884f78651d51e3aff58e7358277c45a885d78"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/CaslFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaslFactory</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-ProfileModule-6e9b19b3c33382bcbab049fad95e8119f713f304e80c1af69d8e84224ec91b94ed9daf5ec992d3284a981bb28c1fdcc666390e6e1826db7552441849df395778"'
                  : 'data-bs-target="#xs-controllers-links-module-ProfileModule-6e9b19b3c33382bcbab049fad95e8119f713f304e80c1af69d8e84224ec91b94ed9daf5ec992d3284a981bb28c1fdcc666390e6e1826db7552441849df395778"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-ProfileModule-6e9b19b3c33382bcbab049fad95e8119f713f304e80c1af69d8e84224ec91b94ed9daf5ec992d3284a981bb28c1fdcc666390e6e1826db7552441849df395778"'
                  : 'id="xs-controllers-links-module-ProfileModule-6e9b19b3c33382bcbab049fad95e8119f713f304e80c1af69d8e84224ec91b94ed9daf5ec992d3284a981bb28c1fdcc666390e6e1826db7552441849df395778"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/ProfileController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-ProfileModule-6e9b19b3c33382bcbab049fad95e8119f713f304e80c1af69d8e84224ec91b94ed9daf5ec992d3284a981bb28c1fdcc666390e6e1826db7552441849df395778"'
                  : 'data-bs-target="#xs-injectables-links-module-ProfileModule-6e9b19b3c33382bcbab049fad95e8119f713f304e80c1af69d8e84224ec91b94ed9daf5ec992d3284a981bb28c1fdcc666390e6e1826db7552441849df395778"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-ProfileModule-6e9b19b3c33382bcbab049fad95e8119f713f304e80c1af69d8e84224ec91b94ed9daf5ec992d3284a981bb28c1fdcc666390e6e1826db7552441849df395778"'
                  : 'id="xs-injectables-links-module-ProfileModule-6e9b19b3c33382bcbab049fad95e8119f713f304e80c1af69d8e84224ec91b94ed9daf5ec992d3284a981bb28c1fdcc666390e6e1826db7552441849df395778"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/CaslFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaslFactory</a>\n                                        </li>\n                                        <li class="link">\n                                            <a href="injectables/ProfileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/TagModule.html" data-type="entity-link" >TagModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-TagModule-3b1f3666aabe81efe15fb186bd16ca67b1c20e550d2f7c82a9626c509289c0f42eec8461a33518055173fef2cdbe396a0be746aa692f25314ac46f5f3a4cba0a"'
                  : 'data-bs-target="#xs-controllers-links-module-TagModule-3b1f3666aabe81efe15fb186bd16ca67b1c20e550d2f7c82a9626c509289c0f42eec8461a33518055173fef2cdbe396a0be746aa692f25314ac46f5f3a4cba0a"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-TagModule-3b1f3666aabe81efe15fb186bd16ca67b1c20e550d2f7c82a9626c509289c0f42eec8461a33518055173fef2cdbe396a0be746aa692f25314ac46f5f3a4cba0a"'
                  : 'id="xs-controllers-links-module-TagModule-3b1f3666aabe81efe15fb186bd16ca67b1c20e550d2f7c82a9626c509289c0f42eec8461a33518055173fef2cdbe396a0be746aa692f25314ac46f5f3a4cba0a"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/TagController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-TagModule-3b1f3666aabe81efe15fb186bd16ca67b1c20e550d2f7c82a9626c509289c0f42eec8461a33518055173fef2cdbe396a0be746aa692f25314ac46f5f3a4cba0a"'
                  : 'data-bs-target="#xs-injectables-links-module-TagModule-3b1f3666aabe81efe15fb186bd16ca67b1c20e550d2f7c82a9626c509289c0f42eec8461a33518055173fef2cdbe396a0be746aa692f25314ac46f5f3a4cba0a"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-TagModule-3b1f3666aabe81efe15fb186bd16ca67b1c20e550d2f7c82a9626c509289c0f42eec8461a33518055173fef2cdbe396a0be746aa692f25314ac46f5f3a4cba0a"'
                  : 'id="xs-injectables-links-module-TagModule-3b1f3666aabe81efe15fb186bd16ca67b1c20e550d2f7c82a9626c509289c0f42eec8461a33518055173fef2cdbe396a0be746aa692f25314ac46f5f3a4cba0a"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/TagService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-bs-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#controllers-links-module-UsersModule-500c925678d0d3960b3f52bedbf16cd58cf3573ee8b62e8d02da976a2c9695e295b7d1e5050fe3cc22285bfcb463ce943207b4eb931d560ef9e63072312f8996"'
                  : 'data-bs-target="#xs-controllers-links-module-UsersModule-500c925678d0d3960b3f52bedbf16cd58cf3573ee8b62e8d02da976a2c9695e295b7d1e5050fe3cc22285bfcb463ce943207b4eb931d560ef9e63072312f8996"',
                '>\n                                            <span class="icon ion-md-swap"></span>\n                                            <span>Controllers</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="controllers-links-module-UsersModule-500c925678d0d3960b3f52bedbf16cd58cf3573ee8b62e8d02da976a2c9695e295b7d1e5050fe3cc22285bfcb463ce943207b4eb931d560ef9e63072312f8996"'
                  : 'id="xs-controllers-links-module-UsersModule-500c925678d0d3960b3f52bedbf16cd58cf3573ee8b62e8d02da976a2c9695e295b7d1e5050fe3cc22285bfcb463ce943207b4eb931d560ef9e63072312f8996"',
                '>\n                                            <li class="link">\n                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>\n                                            </li>\n                                            <li class="link">\n                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-bs-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links-module-UsersModule-500c925678d0d3960b3f52bedbf16cd58cf3573ee8b62e8d02da976a2c9695e295b7d1e5050fe3cc22285bfcb463ce943207b4eb931d560ef9e63072312f8996"'
                  : 'data-bs-target="#xs-injectables-links-module-UsersModule-500c925678d0d3960b3f52bedbf16cd58cf3573ee8b62e8d02da976a2c9695e295b7d1e5050fe3cc22285bfcb463ce943207b4eb931d560ef9e63072312f8996"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-UsersModule-500c925678d0d3960b3f52bedbf16cd58cf3573ee8b62e8d02da976a2c9695e295b7d1e5050fe3cc22285bfcb463ce943207b4eb931d560ef9e63072312f8996"'
                  : 'id="xs-injectables-links-module-UsersModule-500c925678d0d3960b3f52bedbf16cd58cf3573ee8b62e8d02da976a2c9695e295b7d1e5050fe3cc22285bfcb463ce943207b4eb931d560ef9e63072312f8996"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/CaslFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaslFactory</a>\n                                        </li>\n                                        <li class="link">\n                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class="chapter">\n                            <div class="simple menu-toggler" data-bs-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#entities-links"'
                  : 'data-bs-target="#xs-entities-links"',
                '>\n                                <span class="icon ion-ios-apps"></span>\n                                <span>Entities</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                            <ul class="links collapse " '
              )
              .concat(
                isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"',
                '>\n                                <li class="link">\n                                    <a href="entities/ArticleEntity.html" data-type="entity-link" >ArticleEntity</a>\n                                </li>\n                                <li class="link">\n                                    <a href="entities/CommentEntity.html" data-type="entity-link" >CommentEntity</a>\n                                </li>\n                                <li class="link">\n                                    <a href="entities/FollowEntity.html" data-type="entity-link" >FollowEntity</a>\n                                </li>\n                                <li class="link">\n                                    <a href="entities/TagEntity.html" data-type="entity-link" >TagEntity</a>\n                                </li>\n                                <li class="link">\n                                    <a href="entities/UserEntity.html" data-type="entity-link" >UserEntity</a>\n                                </li>\n                                <li class="link">\n                                    <a href="entities/UserRoles.html" data-type="entity-link" >UserRoles</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-bs-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#classes-links"'
                  : 'data-bs-target="#xs-classes-links"',
                '>\n                            <span class="icon ion-ios-paper"></span>\n                            <span>Classes</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " '
              )
              .concat(
                isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"',
                '>\n                            <li class="link">\n                                <a href="classes/ArticleCommentDto.html" data-type="entity-link" >ArticleCommentDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/ArticleDto.html" data-type="entity-link" >ArticleDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/ArticleFeedQueryParams.html" data-type="entity-link" >ArticleFeedQueryParams</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/ArticlesQueryParams.html" data-type="entity-link" >ArticlesQueryParams</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/CreateArticleCommentDto.html" data-type="entity-link" >CreateArticleCommentDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/CreateArticleDto.html" data-type="entity-link" >CreateArticleDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/DeleteArticlePolicyHandler.html" data-type="entity-link" >DeleteArticlePolicyHandler</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/DeleteUserPolicyHandler.html" data-type="entity-link" >DeleteUserPolicyHandler</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/PasswordTransformer.html" data-type="entity-link" >PasswordTransformer</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/PatchArticlePolicyHandler.html" data-type="entity-link" >PatchArticlePolicyHandler</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/PatchUserPolicyHandler.html" data-type="entity-link" >PatchUserPolicyHandler</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UserDto.html" data-type="entity-link" >UserDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UserLoginDto.html" data-type="entity-link" >UserLoginDto</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UserRegistrationDto.html" data-type="entity-link" >UserRegistrationDto</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class="chapter">\n                            <div class="simple menu-toggler" data-bs-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#injectables-links"'
                  : 'data-bs-target="#xs-injectables-links"',
                '>\n                                <span class="icon ion-md-arrow-round-down"></span>\n                                <span>Injectables</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                            <ul class="links collapse " '
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links"'
                  : 'id="xs-injectables-links"',
                '>\n                                <li class="link">\n                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-bs-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#guards-links"'
                  : 'data-bs-target="#xs-guards-links"',
                '>\n                            <span class="icon ion-ios-lock"></span>\n                            <span>Guards</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " '
              )
              .concat(
                isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"',
                '>\n                            <li class="link">\n                                <a href="guards/PoliciesGuard.html" data-type="entity-link" >PoliciesGuard</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-bs-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#interfaces-links"'
                  : 'data-bs-target="#xs-interfaces-links"',
                '>\n                            <span class="icon ion-md-information-circle-outline"></span>\n                            <span>Interfaces</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " '
              )
              .concat(
                isNormalMode
                  ? ' id="interfaces-links"'
                  : 'id="xs-interfaces-links"',
                '>\n                            <li class="link">\n                                <a href="interfaces/IPolicyHandler.html" data-type="entity-link" >IPolicyHandler</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-bs-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-bs-target="#miscellaneous-links"'
                  : 'data-bs-target="#xs-miscellaneous-links"',
                '>\n                            <span class="icon ion-ios-cube"></span>\n                            <span>Miscellaneous</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " '
              )
              .concat(
                isNormalMode
                  ? 'id="miscellaneous-links"'
                  : 'id="xs-miscellaneous-links"',
                '>\n                            <li class="link">\n                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>\n                            </li>\n                            <li class="link">\n                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>\n                            </li>\n                            <li class="link">\n                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class="chapter">\n                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n                    </li>\n                    <li class="divider"></li>\n                    <li class="copyright">\n                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">\n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        '
              )
          );
          this.innerHTML = tp.strings;
        },
      },
    ]);
    return _class;
  })(/*#__PURE__*/ _wrapNativeSuper(HTMLElement))
);
