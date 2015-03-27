var util = require( "util" );
var ClassyBase = require( "./classy" );


module.exports = CreateHandler;


function CreateHandler ( req, res, next ) {

    ClassyBase.call( this, req, res, next );

    this.on( "pre.create", this.preCreate );
    this.on( "create", this.create );
    this.on( "post.create", this.postCreate );

}

util.inherits( CreateHandler, ClassyBase );


CreateHandler.prototype.validate = function() {
    "Emit 'error.validation' and pass errors to send validation error response";
    "Emit 'create' and pass data to invoke 'create' method";
    "Emit 'pre.create' and pass data to invoke 'preCreate' method";
    throw new Error( "Not implemented" );
};


CreateHandler.prototype.preCreate = function( data ) {
    "Emit 'create' and pass data to invoke 'create' method";
    "Emit 'error' and pass error to send error response";
    throw new Error( "Not implemented" );
};


CreateHandler.prototype.create = function( data ) {
    "Emit 'error' and pass error to send error response";
    "Emit 'respond' and pass data and status code to send response";
    "Emit 'post.create' and pass data to invoke 'postCreate' method";
    throw new Error( "Not implemented" );
};


CreateHandler.prototype.postCreate = function( data ) {
    "Emit 'error' and pass error to send error response";
    "Emit 'respond' and pass data and status code to send response";
    throw new Error( "Not implemented" );
};


CreateHandler.prototype.handle = function() {
    this.validate();
};
