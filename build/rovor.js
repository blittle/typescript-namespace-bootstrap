var ROVOR;
(function (ROVOR) {
    var Telescope = (function () {
        function Telescope(name) {
            this.name = name;
        }
        Telescope.prototype.start = function () {
            this.on = true;
            return this;
        };
        Telescope.prototype.stop = function () {
            this.on = false;
            return this;
        };
        Telescope.prototype.isOn = function () {
            return this.on;
        };
        Telescope.someMethod = function someMethod() {
        };
        return Telescope;
    })();
    ROVOR.Telescope = Telescope;    
})(ROVOR || (ROVOR = {}));
var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ROVOR;
(function (ROVOR) {
    var AutoScope = (function (_super) {
        __extends(AutoScope, _super);
        function AutoScope(name) {
            if (typeof name === "undefined") { name = "AutoScope Telescope"; }
                _super.call(this, name);
            this.name = name;
        }
        AutoScope.prototype.start = function () {
            this.bootup();
            _super.prototype.start.call(this);
            return this;
        };
        AutoScope.prototype.bootup = function () {
        };
        return AutoScope;
    })(ROVOR.Telescope);
    ROVOR.AutoScope = AutoScope;    
})(ROVOR || (ROVOR = {}));
//@ sourceMappingURL=rovor.js.map
