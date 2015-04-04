var util = require( "util" );
var ClassyBase = require( "./classy" );


module.exports = UpdateHandler;


function UpdateHandler () {

    ClassyBase.call( this );

    this.on( "update", this.action );

}

util.inherits( UpdateHandler, ClassyBase );

UpdateHandler.prototype.done = function( data ) {
    this.res.status( 200 ).json( data );
};

UpdateHandler.prototype.handle = function( req, res, next ) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.emit( "validate" );
};
