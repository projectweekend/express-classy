var util = require( "util" );
var EventEmitter = require( "events" ).EventEmitter;


module.exports = ClassyBase;


function ClassyBase ( req, res, next ) {

    EventEmitter.call( this );

    this.req = req;
    this.res = res;
    this.next = next;

    this.on( "error", this.error );
    this.on( "error.validation", this.validationError );
    this.on( "respond", this.respond );

}

util.inherits( ClassyBase, EventEmitter );


ClassyBase.prototype.error = function( error ) {

    this.next( error );

};


ClassyBase.prototype.validationError = function( errors ) {

    this.respond( errors, 400 );

};


ClassyBase.prototype.respond = function( data, status ) {

    this.res.status( status ).json( data );

};
