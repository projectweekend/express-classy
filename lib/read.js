var util = require( "util" );
var ClassyHandler = require( "./classy" );


module.exports = ReadHandler;


function ReadHandler ( req, res, next ) {

    ClassyHandler.call( this, req, res, next );

    this.on( "pre.read", this.preRead );
    this.on( "read", this.read );
    this.on( "post.read", this.postRead );

}

util.inherits( ReadHandler, ClassyHandler );


ReadHandler.prototype.preRead = function() {
    "Parse URL or query params in this step";
    "Emit 'read' and pass data to invoke 'read' method";
    "Emit 'error' and pass error to send error response";
    throw new Error( "Not implemented" );
};


ReadHandler.prototype.read = function( data ) {
    "Emit 'error' and pass error to send error response";
    "Emit 'respond' and pass data and status code to send response";
    "Emit 'post.read' and pass data to invoke 'postRead' method";
    throw new Error( "Not implemented" );
};


ReadHandler.prototype.postRead = function( data ) {
    "Emit 'error' and pass error to send error response";
    "Emit 'respond' and pass data and status code to send response";
    throw new Error( "Not implemented" );
};


ReadHandler.prototype.handle = function() {
    "Emit 'pre.read' and pass data to invoke 'preRead' method";
    "Emit 'read' and pass data to invoke 'read' method";
    this.read();
};
