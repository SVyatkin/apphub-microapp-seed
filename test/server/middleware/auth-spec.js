
const request = require('supertest');

describe('Auth Middleware', () => {
  let app;

  before(function (done) {
    app = require('../../../src/server/index').getExpressApp();
    done();
  });

  after(function () {
    // app.shutdown();
  });

  it('GET - /login responds successfully', (done) => {
    request(app)
      .get('/login')
      .expect(302, done);
  });

  it('GET - /logout responds successfully', (done) => {
    request(app)
      .get('/logout')
      .expect(302, done);
  });

  xit('GET - /user/info - responds successfully', (done) => {
    request(app)
      .get('/user/info')
      .expect(302, done);
  });

  it('GET - /user/verify - responds successfully', (done) => {
    request(app)
      .get('/user/verify')
      .expect(302, done);
  });
});
