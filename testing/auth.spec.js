
const request = require('supertest');
const authRouter = require('../auth/auth-router');


describe('auth-router.js', () => {

  describe('Register', () => {
    it('should return 201 Created (registeration completed)', async() => {
        
         request(authRouter)
            .post('/register')
            .send({ username: 'testing1', password: 'pass'})
            .expect(200);
            
    });

    it('should return a 400 error message because we did not provide the password', async () => {
        request(authRouter)
            .post('/register')
            .send({ username: 'testing2' })
            .expect(400);
            
    });

  });


  describe('Login', () => {
    it('should return 200 OK', () => {
        request(authRouter)
        .post('/login')
        .send({ username: 'testing1', password: 'pass'})
        .expect(200);
        
    });

    it('should return a 400 error message because we did not provide the password', async () => {
        request(authRouter)
            .post('/login')
            .send({ username: 'testing1' })
            .expect(400);
           
    });
   
  });

});