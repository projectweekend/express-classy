var util = require( "util" );
var ClassyBase = require( "./classy" );


module.exports = CreateHandler;


function CreateHandler () {

    ClassyBase.call( this );

    this.on( "create", this.action );

}

util.inherits( CreateHandler, ClassyBase );

CreateHandler.prototype.done = function( data ) {
    this.res.status( 201 ).json( data );
};

CreateHandler.prototype.handle = function( req, res, next ) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.emit( "validate" );
};
