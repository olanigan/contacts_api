process.env.NODE_ENV = 'test';
process.env.PORT = 3333;

const app = require('../app');
const request = require('supertest')(app);
const chai = require('chai')
const expect = chai.expect;

let id = 1;


describe('Contacts API', function() {
    describe('returns successful response defaults', function(){
        let response;

        before(function(done) {
            request.get('/contacts').end(function(err, res) {
                response = res;
                done();
            });
        });

        it('status 200', function() {
            
        expect(response.status).to.equal(200);
        });

        it('application/json Content-Type', function() {
        expect(response.header['content-type']).to.match(/application\/json/);
        });
    });
});

  //Test the CREATE route

  describe('/POST', () => {
      it('should create new contact with first_name and last_name', (done) => {
        let contact = {
            first_name: "John",
            last_name: "Doe"
        }
        
        request
            .post('/contacts')
            .send(contact)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res).be.a('object');
                done();
            });
      });

     });

    //TEST the UPDATE ROUTE
     describe('/PUT', () => {
      it('should update contact', (done) => {
        let contact = {
            first_name: "Jonathan",
            last_name: "Sanders"
        }
        
        request
            .put('/contacts/'+id)
            .send(contact)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res).be.a('object');
                done();
            });
      });

  });

    //TEST the DELETE ROUTE
    describe('/DELETE', () => {
      it('should delete contact with existing ID', (done) => {
        let contact = {
            first_name: "Jonathan",
            last_name: "Sanders"
        }
        
        request
            .delete('/contacts/1')
            .send(contact)
            .end((err, res) => { 
                expect(res.status).to.equal(200);
                expect(res).be.a('object');
                done();
            });
      });
    });

 

