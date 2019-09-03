const RequestTest = require('supertest');
const app = require('./app');

describe('GET /v1.0/parking/closest', function () {
    it('Respond with json containing a list of closest points', function (done) {
        RequestTest(app)
            .get('/v1.0/parking/closest'+'?lat=35.3230&lon=51.2423&is_for_disabled=true')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});


describe('POST /v1.0/parking/new', function () {
    let data = {
        "username": "dummy",
        "lat": 35.3231,
        "lon": 51.2422,
        "is_for_disabled": true
    };
    it('respond with 201 created', function (done) {
        RequestTest(app)
            .post('/v1.0/parking/new')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});
