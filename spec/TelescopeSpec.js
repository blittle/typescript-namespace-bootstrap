describe("AutoScope", function () {
    var AutoScope = ROVOR.AutoScope,
        telescope;

    beforeEach(function () {
        telescope = new AutoScope();
    });
    it("The telescope should turn on", function () {
        telescope.start();
        expect(telescope.isOn()).toBeTruthy();
    });
});
