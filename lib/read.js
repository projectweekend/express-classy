var util = require( "util" );
var ClassyBase = require( "./classy" );


module.exports = ReadHandler;


function ReadHandler () {

    ClassyBase.call( this );

    this.on( "read", this.action );

}

util.inherits( ReadHandler, ClassyBase );

ReadHandler.prototype.done = function( data ) {
    this.res.status( 200 ).json( data );
};

ReadHandler.prototype.handle = function( req, res, next ) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.emit( "read" );
};
