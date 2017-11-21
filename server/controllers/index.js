const db = require('../models'),
Contact = db.Contact;

//Check for successful database connection
db.sequelize.authenticate()
  .then(() => console.log("Database successfully connected"))
  .catch((err) => console.log("Error", err));

Contact.sync();

module.exports = {
    //Handles the creation of new contact
    create(req, res){
         console.log('REQUEST BODY', req.body);
        return Contact.create({
            first_name: req.body.first_name,
            last_name : req.body.last_name,
            phone: req.body.phone,
            email: req.body.email 
        })
        .then((contact) => res.status(200).send(contact))
        .catch((err) => res.status(400).send(err));
    },

    //Handles the retrieval of contact by ID
    retrieve(req, res){
        let id = req.params.contactId;
        
        return Contact.findById(id)
        .then((contact) => {
            //Check for valid result
            if(!contact){
                //Return error message
                return res.status(200).send({
                    message: 'Contact with ID ' + id + ' not found' 
                });
            }
            return res.status(200).send(contact)
        })
        .catch((err) => res.status(400).send(err));
    },

    //Handle the retrieval of all contacts
    all(req, res){
        return Contact.findAll()
        .then((contacts) => {
            //Check for valid result
            if(!contacts){
                //Return error message
                return res.status(200).send({
                    message: 'No contacts found in Database' 
                });
            }
            return res.status(200).send(contacts);
        })
        .catch((err) => res.status(400).send(err));
    },

    //Handles the modification of contact by ID
    update(req, res){
        return Contact.findById(req.params.id)
        .then((contact) => {
            if(!contact){
               //Return error message
               return res.status(200).send({
                    message: 'Contact with ID ' + req.params.id + ' not found' 
                }); 
            }
            //Update returned entry
            return contact.update({
                first_name: req.body.first_name,
                last_name : req.body.last_name,
                phone: req.body.phone,
                email: req.body.email      
            })
            .then((contact) => res.status(200).send(contact))
            .catch((err) => res.status(400).send(err));
        })
        .catch((err) => res.status(400).send(err));
    },

    //Handles the removal of contact by ID
    delete(req, res){
        return Contact.findById(req.params.id)
        .then((contact) => {
            if(!contact){
               //Return error message
               return res.status(200).send({
                    message: 'Contact with ID ' + req.params.id + ' not found' 
                }); 
            }
            //Remove returned entry
            return contact.destroy()
            .then((contact) => res.status(200).send(contact))
            .catch((err) => res.status(400).send(err));
        })
        .catch((err) => res.status(400).send(err));
    }

}