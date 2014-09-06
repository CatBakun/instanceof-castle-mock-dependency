describe('moduleA Tests', function () {

    var ModuleA;
    beforeEach(function (done) {
        requirejs(['castle'], function (castle) {
            castle.test({
                module: 'moduleA',
                mocks: ['moduleB'], // Comment this line and it will work
                callback: function (module) {
                    ModuleA = module;
                    done();
                }
            });
        });
    });

    it('doesInstanceofWorks', function () {
        chai.expect(ModuleA.doesInstanceofWorks()).to.be.true;
    });

    it('doesDuckTypeWorks', function () {
        chai.expect(ModuleA.doesDuckTypeWorks()).to.be.true;
    });

});
