const assert = require( "assert" );
const kurse = require( "./kurse.js" );
const mrkd = require( "mrkd" );

assert.ok( kurse( { "name": "simple" } ) );

assert.equal( mrkd( Symbol( "id" ), kurse( { "name": "simple" } ) ), true, "should be equal" );

console.log( "ok" );
