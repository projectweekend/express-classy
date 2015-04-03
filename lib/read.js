var util = require( "util" );
var ClassyBase = require( "./classy" );
var errors = require( "./errors" );


module.exports = ReadHandler;


function ReadHandler ( req, res, next ) {

    ClassyBase.call( this, req, res, next );

    this.on( "pre.read", this.preRead );
    this.on( "read", this.read );
    this.on( "post.read", this.postRead );

}

util.inherits( ReadHandler, ClassyBase );


ReadHandler.prototype.onReadList = function( nextEvent ) {

    var _this = this;

    return function ( err, data ) {

        if ( err ) {
            return _this.emit( "error", err );
        }

        return _this.emit( nextEvent, data );

    };

};

ReadHandler.prototype.onReadDetail = function( nextEvent ) {

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

ReadHandler.prototype.preRead = function() {
    "Parse URL or query params in this step";
    "Emit 'read' and pass data to invoke 'read' method";
    "Emit 'error' and pass error to send error response";
    throw new Error( "Not implemented" );
};

ReadHandler.prototype.read = function( data ) {
    "Emit 'error' and pass error to send error response";
    "Emit 'respond' and pass data to send response";
    "Emit 'post.read' and pass data to invoke 'postRead' method";
    throw new Error( "Not implemented" );
};

ReadHandler.prototype.postRead = function( data ) {
    "Emit 'error' and pass error to send error response";
    "Emit 'respond' and pass data to send response";
    throw new Error( "Not implemented" );
};

ReadHandler.prototype.respond = function( data ) {
    this.res.status( 200 ).json( data );
};

ReadHandler.prototype.handle = function() {
    "Emit 'pre.read' and pass data to invoke 'preRead' method";
    "Emit 'read' and pass data to invoke 'read' method";
    this.read();
};
