var util = require( "util" );
var ClassyBase = require( "./classy" );


module.exports = UpdateHandler;


function UpdateHandler ( req, res, next ) {

    ClassyBase.call( this, req, res, next );

    this.on( "pre.update", this.preUpdate );
    this.on( "update", this.update );
    this.on( "post.update", this.postUpdate );

}

util.inherits( UpdateHandler, ClassyBase );


UpdateHandler.prototype.validate = function() {
    "Emit 'error.validation' and pass errors to send validation error response";
    "Emit 'update' and pass data to invoke 'update' method";
    "Emit 'pre.update' and pass data to invoke 'preUpdate' method";
    throw new Error( "Not implemented" );
};


UpdateHandler.prototype.preUpdate = function( data ) {
    "Emit 'update' and pass data to invoke 'update' method";
    "Emit 'error' and pass error to send error response";
    throw new Error( "Not implemented" );
};


UpdateHandler.prototype.update = function( data ) {
    "Emit 'error' and pass error to send error response";
    "Emit 'respond' and pass data to send response";
    "Emit 'post.update' and pass data to invoke 'postUpdate' method";
    throw new Error( "Not implemented" );
};


UpdateHandler.prototype.postUpdate = function( data ) {
    "Emit 'error' and pass error to send error response";
    "Emit 'respond' and pass data to send response";
    throw new Error( "Not implemented" );
};


UpdateHandler.prototype.respond = function( data ) {
    this.res.status( 200 ).json( data );
};


UpdateHandler.prototype.handle = function() {
    this.validate();
};
