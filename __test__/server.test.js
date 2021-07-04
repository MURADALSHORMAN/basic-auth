'use strict';
const supergoose = require('@code-fellows/supergoose');
const { app } = require('../src/server');
const mockRequest = supergoose(app);


describe('Authraization', () => {

    it('can create a new user', async () => {
      let user = { username: 'test', password: 'test' };
      const res = await mockRequest.post('/signup').send(user);
      expect(res.status).toBe(200);
    //   expect(res.body.password).toBe('$2b$10$.AeBmeRPzdoYvIODYfRkx.CjB2OCi9X2mmsvmI19ynm4p0llCgFWy');
    });


    it('can login to his account', async () => {
        let user = { username: 'test', password: 'test' };
        await mockRequest.post('/signup').send(user);
        const res = await mockRequest.post('/signin').set({'authorization':'Basic dGVzdDp0ZXN0'}).send(user);
        console.log(res.body);
        expect(res.body.username).toBe(user.username);
        expect(res.status).toBe(200);
      });
});