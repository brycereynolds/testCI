var request = require('supertest');
var assert = require('assert')
require('should');

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      assert.equal(1, [1,2,3].indexOf(2));
    })
  })
})

describe('Homepage', function(){
  it('should have hello world', function(){
    request('localhost:8000')
      .post('/')
      .send()
      .expect(200)
      .end(function(err, res){
        if (err) throw err;
        res.should.exist();
        res.status.should.equal(200);
        res.body.should.contain('World');
        done();
      });
  })
});

// describe('Suite one', function(){
//   it (function(done){
//     request.post('localhost:8000').end(function(res){
//   console.log(res);
//       expect(res).to.exist;
//       expect(res.status).to.equal(200);
//       expect(res.body).to.contain('World');
//       done();
//     });
//   });
// });