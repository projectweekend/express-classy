var util = require( "util" );
var EventEmitter = require( "events" ).EventEmitter;
var errors = require( "./errors" );


module.exports = ClassyBase;


function ClassyBase () {

    EventEmitter.call( this );

    this.req = null;
    this.res = null;
    this.next = null;

    this.on( "error", this.error );
    this.on( "invalid", this.validationError );
    this.on( "done", this.done );
    this.on( "validate", this.validate );
    this.on( "before", this.before );
    this.on( "after", this.after );

}

util.inherits( ClassyBase, EventEmitter );

ClassyBase.prototype.error = function( error ) {
    this.next( error );
};

ClassyBase.prototype.validationError = function( errors ) {
    this.res.status( 400 ).json( errors );
};

ClassyBase.prototype.done = function( data, status ) {
    this.res.status( status ).json( data );
};

ClassyBase.prototype.validate = function() {
    throw new Error( "Not implemented" );
};

ClassyBase.prototype.before = function( data ) {
    throw new Error( "Not implemented" );
};

ClassyBase.prototype.action = function( data ) {
    throw new Error( "Not implemented" );
};

ClassyBase.prototype.after = function( data ) {
    throw new Error( "Not implemented" );
};

ClassyBase.prototype.handle = function( req, res, next ) {

    this.req = req;
    this.res = res;
    this.next = next;

    throw new Error( "Not implemented" );

};

ClassyBase.prototype.nextOnResult = function( nextEvent, handleNotFound ) {

    var _this = this;

    return function ( err, data ) {

        if ( handleNotFound ) {
            if ( ( err && err.name === "CastError" ) || ( !err && !data ) ) {
                return _this.emit( "error", errors.resourceNotFound( "Not found" ) );
            }
        }

        if ( err ) {
            return _this.emit( "error", err );
        }

        return _this.emit( nextEvent, data );

    };

};
