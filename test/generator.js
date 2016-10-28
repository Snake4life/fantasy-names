var should = require('chai').should(), generator = require('../generator');

describe('#generator', function() {
  it('Produces a single name with 2 arguments', function() {
    generator('military', 'nato').split('\n').length.should.equal(1);
  });
  
  it('Produces a single name with 3 arguments', function() {
    generator('military', 'nato', 1).split('\n').length.should.equal(1);
  });
  
  it('Produces no names with 3 arguments', function() {
    generator('military', 'nato', -10).should.be.empty;
  });
  
  it('Produces no names with 4 arguments', function() {
    generator('military', 'nato', 0, 0).should.be.empty;
  });
  
  it('Produces a single name with 4 arguments', function() {
    generator('military', 'nato', 1, 0).split('\n').length.should.equal(1);
  });
  
  it('Produces ten names with 4 arguments', function() {
    generator('military', 'nato', 10, 0).split('\n').length.should.equal(10);
  });
});
