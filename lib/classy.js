var util = require( "util" );
var EventEmitter = require( "events" ).EventEmitter;
var errors = require( "./errors" );


module.exports = ClassyBase;


function ClassyBase ( req, res, next ) {

    EventEmitter.call( this );

    this.req = req;
    this.res = res;
    this.next = next;

    this.on( "error", this.error );
    this.on( "invalid", this.validationError );
    this.on( "respond", this.respond );

}

util.inherits( ClassyBase, EventEmitter );

ClassyBase.prototype.error = function( error ) {
    this.next( error );
};

ClassyBase.prototype.validationError = function( errors ) {
    this.res.status( 400 ).json( errors );
};

ClassyBase.prototype.respond = function( data, status ) {
    this.res.status( status ).json( data );
};

ClassyBase.prototype.onListCreate = function( nextEvent ) {

    var _this = this;

    return function ( err, data ) {

        if ( err ) {
            return _this.emit( "error", err );
        }

        return _this.emit( nextEvent, data );

    };

};

ClassyBase.prototype.onDetailUpdateDelete = function( nextEvent ) {

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
