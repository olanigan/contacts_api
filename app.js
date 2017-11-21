const express = require('express'),
      logger = require('morgan');
      bodyParser = require('body-parser');
      app = express(),
      controller = require('./server/controllers');
 
const { PORT=3000, NODE_ENV='development'} = process.env;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

  // START SERVER
  Promise.resolve()
  .then(() => 
    app.listen(PORT, () => 
        console.log(`App listening on port ${PORT}`)))
  .catch((err) => { 
        if (NODE_ENV === 'development') {
            console.error(err.stack);
        }else{
            res.status(404).send({"message":err});
        } 
    });

// ROUTES
app.get('/', (req,res) => res.status(200).redirect('/contacts'))

app.post('/contacts', controller.create);
app.get('/contacts/:contactId', controller.retrieve);
app.get('/contacts', controller.all);
app.put('/contacts/:contactId', controller.update);
app.delete('/contacts/:contactId', controller.delete);

//Handle all unimplemented routes
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the Contacts API. This route is not implemented'
}));


module.exports = app;