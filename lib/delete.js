var util = require( "util" );
var ClassyBase = require( "./classy" );


module.exports = DeleteHandler;


function DeleteHandler () {

    ClassyBase.call( this );

    this.on( "delete", this.action );

}

util.inherits( DeleteHandler, ClassyBase );

DeleteHandler.prototype.done = function( data ) {
    this.res.status( 204 ).json( data );
};

DeleteHandler.prototype.handle = function( req, res, next ) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.emit( "delete" );
};
