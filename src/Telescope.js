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
//@ sourceMappingURL=Telescope.js.map
