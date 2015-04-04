var util = require( "util" );
var ClassyBase = require( "./classy" );


module.exports = ReadHandler;


function ReadHandler ( req, res, next ) {

    ClassyBase.call( this, req, res, next );

    this.on( "read", this.action );

}

util.inherits( ReadHandler, ClassyBase );

ReadHandler.prototype.done = function( data ) {
    this.res.status( 200 ).json( data );
};

ReadHandler.prototype.handle = function() {
    this.emit( "read" );
};
