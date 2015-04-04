var util = require( "util" );
var ClassyBase = require( "./classy" );


module.exports = DeleteHandler;


function DeleteHandler ( req, res, next ) {

    ClassyBase.call( this, req, res, next );

    this.on( "delete", this.action );

}

util.inherits( DeleteHandler, ClassyBase );

DeleteHandler.prototype.done = function( data ) {
    this.res.status( 204 ).json( data );
};

DeleteHandler.prototype.handle = function() {
    this.emit( "delete" );
};
