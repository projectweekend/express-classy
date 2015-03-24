var util = require( "util" );
var ClassyHandler = require( "./classy" );


module.exports = UpdateHandler;


function UpdateHandler ( req, res, next ) {

    ClassyHandler.call( this, req, res, next );

    this.on( "preUpdate", this.preUpdate );
    this.on( "update", this.update );
    this.on( "postUpdate", this.postUpdate );

}

util.inherits( UpdateHandler, ClassyHandler );


UpdateHandler.prototype.validate = function() {
    "Emit 'invalid' and pass errors to send validation error response";
    "Emit 'update' and pass data to invoke 'update' method";
    "Emit 'preUpdate' and pass data to invoke 'preUpdate' method";
    throw new Error( "Not implemented" );
};


UpdateHandler.prototype.preUpdate = function( data ) {
    "Emit 'update' and pass data to invoke 'update' method";
    "Emit 'error' and pass error to send error response";
    throw new Error( "Not implemented" );
};


UpdateHandler.prototype.update = function( data ) {
    "Emit 'error' and pass error to send error response";
    "Emit 'respond' and pass data and status code to send response";
    "Emit 'postUpdate' and pass data to invoke 'postUpdate' method";
    throw new Error( "Not implemented" );
};


UpdateHandler.prototype.postUpdate = function( data ) {
    "Emit 'error' and pass error to send error response";
    "Emit 'respond' and pass data and status code to send response";
    throw new Error( "Not implemented" );
};


UpdateHandler.prototype.handle = function() {
    this.validate();
};
