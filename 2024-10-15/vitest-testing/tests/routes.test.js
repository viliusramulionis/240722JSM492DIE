import { test, expect, describe, it } from 'vitest';
import request from 'supertest';
import app from '../index.js';

// test('Testing GET /users route', () => {
//     request(app)
//     .get('/users')
//     // .expect('Content-Type', /json/)
//     .expect(200)
//     .end((err, res) => {
//         // console.log(res.body)
//         expect(res.body)
//         .not.toEqual('Įvyko klaida')
//     })
// });

// Test Suite
test('Testing GET /users/:id route', () => {
    request(app)
    .get('/users/1')
    .expect(200)
});

describe('Testing GET /users/login route', () => {
    // Test Suite
    it('Should successfully login', () => {
        request(app)
        .post('/users/login')
        .send({
            email: 'info@test.com',
            password: '123456'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, resp) => {
            expect(err).toBeNull();
        });
    })

    it('Should fail because of bad email', () => {
        request(app)
        .post('/users/login')
        .send({
            email: 'info@test2.com',
            password: '123456'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, resp) => {
            expect(err).not.toBeNull();
        });
    });

    it('Should fail because of bad password', () => {
        request(app)
        .post('/users/login')
        .send({
            email: 'info@test.com',
            password: '12345'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, resp) => {
            expect(err).not.toBeNull();
        });
    }); 
});