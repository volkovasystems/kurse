"use strict";

const assert = require( "assert" );
const kurse = require( "./kurse.js" );

assert.deepEqual( kurse( { "name": "simple" } ), { "name": "simple" } );
assert.ok( kurse( function Merchant( ) { } ) );

console.log( "ok" );
