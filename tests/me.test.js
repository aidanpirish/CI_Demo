var server = require("../server");
var chai = require("chai");


describe("multiplication", function () {
  it("should multiply 2 and 3", function () {
    var product = server.multiply(2, 3);
    var expect = chai.expect;
    expect(product).to.equal(6);
  });
});