var util = require( "util" );
var ClassyBase = require( "./classy" );
var errors = require( "./errors" );


module.exports = CreateHandler;


function CreateHandler ( req, res, next ) {

    ClassyBase.call( this, req, res, next );

    this.on( "pre.create", this.preCreate );
    this.on( "create", this.create );
    this.on( "post.create", this.postCreate );

}

util.inherits( CreateHandler, ClassyBase );

CreateHandler.prototype.onCreateResult = function( nextEvent ) {

    var _this = this;

    return function ( err, data ) {

        if ( err ) {
            return _this.emit( "error", err );
        }

        return _this.emit( nextEvent, data );

    };

};

CreateHandler.prototype.onCreateNestedResult = function( nextEvent ) {

    var _this = this;

    return function ( err, data ) {

        if ( ( err && err.name === "CastError" ) || !data ) {
            return _this.emit( "error", errors.resourceNotFound( "Not found" ) );
        }

        if ( err ) {
            return _this.emit( "error", err );
        }

        return _this.emit( nextEvent, data );

    };

};

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
    "Emit 'respond' and pass data to send response";
    "Emit 'post.create' and pass data to invoke 'postCreate' method";
    throw new Error( "Not implemented" );
};


CreateHandler.prototype.postCreate = function( data ) {
    "Emit 'error' and pass error to send error response";
    "Emit 'respond' and pass data to send response";
    throw new Error( "Not implemented" );
};


CreateHandler.prototype.respond = function( data ) {
    this.res.status( 201 ).json( data );
};


CreateHandler.prototype.handle = function() {
    this.validate();
};
