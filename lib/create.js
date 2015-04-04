var util = require( "util" );
var ClassyBase = require( "./classy" );


module.exports = CreateHandler;


function CreateHandler ( req, res, next ) {

    ClassyBase.call( this, req, res, next );

    this.on( "create", this.action );

}

util.inherits( CreateHandler, ClassyBase );

CreateHandler.prototype.done = function( data ) {
    this.res.status( 201 ).json( data );
};

CreateHandler.prototype.handle = function() {
    this.emit( "validate" );
};
