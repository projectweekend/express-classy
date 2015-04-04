var util = require( "util" );
var ClassyBase = require( "./classy" );
var errors = require( "./errors" );


module.exports = DeleteHandler;


function DeleteHandler ( req, res, next ) {

    ClassyBase.call( this, req, res, next );

    this.on( "pre.delete", this.preDel );
    this.on( "delete", this.del );
    this.on( "post.delete", this.postDel );

}

util.inherits( DeleteHandler, ClassyBase );

DeleteHandler.prototype.onDeleteResult = function( nextEvent ) {

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

DeleteHandler.prototype.preDel = function() {
    "Parse URL or query params in this step";
    "Emit 'delete' and pass data to invoke 'delete' method";
    "Emit 'error' and pass error to send error response";
    throw new Error( "Not implemented" );
};

DeleteHandler.prototype.del = function( data ) {
    "Emit 'error' and pass error to send error response";
    "Emit 'respond' and pass data to send response";
    "Emit 'post.delete' and pass data to invoke 'postDel' method";
    throw new Error( "Not implemented" );
};

DeleteHandler.prototype.postDel = function( data ) {
    "Emit 'error' and pass error to send error response";
    "Emit 'respond' and pass data to send response";
    throw new Error( "Not implemented" );
};

DeleteHandler.prototype.respond = function( data ) {
    this.res.status( 204 ).json( data );
};

DeleteHandler.prototype.handle = function() {
    "Emit 'pre.delete' and pass data to invoke 'preDel' method";
    "Emit 'delete' and pass data to invoke 'delete' method";
    this.del();
};
