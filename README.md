After building quite a few APIs with Node.js and Express over the last couple years, I started forming some strong opinions about what I liked and disliked. I had gotten very familiar with the [async](https://github.com/caolan/async) library, and rightly so. It's a great tool for maintaining control in the face of all those callbacks. However, I was always left wanting something that felt a little more structured. I wanted a pattern, something I could lean on to standardize the way I do things. Since API routes have common high-level components (validating a request, performing an action in the database, returning a response, etc), `express-classy` is my take on organizing and controlling the logic flow in Express route handlers.


## Example

**add_person.js:**

```javascript
var util = require( "util" );
var CreateHandler = require( "express-classy" ).CreateHandler;


module.exports = AddPerson;


function AddPerson () {
    CreateHandler.call( this );
}

util.inherits( AddPerson, CreateHandler );

AddPerson.prototype.validate = function() {

    this.req.checkBody( "firstName", "'firstName' is required" ).isLength( 1 );
    this.req.checkBody( "lastName", "'lastName' is required" ).isLength( 1 );

    var validationErrors = this.req.validationErrors();

    if ( validationErrors ) {
        return this.emit( "invalid", validationErrors );
    }

    var person = {
        firstName: this.req.body.firstName,
        lastName: this.req.body.lastName
    };

    return this.emit( "create", person );

};

AddPerson.prototype.action = function( person ) {

    // add 'person' to the database here
    // if error, emit "error", passing the error
    // if successful, emit "done", passing the data for response

};
```

**routes.js:**

```javascript
var express = require( "express" );
var router = express.Router();
var AddPerson = require( "./add_person" );


var addPerson = new user.AddPerson();
router.post( "/person", function ( req, res, next ) {
    addPerson.handle( req, res, next );
} );


module.exports = router;
```
