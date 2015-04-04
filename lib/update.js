var util = require( "util" );
var ClassyBase = require( "./classy" );


module.exports = UpdateHandler;


function UpdateHandler ( req, res, next ) {

    ClassyBase.call( this, req, res, next );

    this.on( "update", this.action );

}

util.inherits( UpdateHandler, ClassyBase );

UpdateHandler.prototype.done = function( data ) {
    this.res.status( 200 ).json( data );
};

UpdateHandler.prototype.handle = function() {
    this.emit( "validate" );
};
