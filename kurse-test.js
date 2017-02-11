"use strict";

const kurse = require( "./kurse.js" );

console.log( kurse( { "name": "simple" } ) );
console.log( kurse( function Merchant( ) { } ) );
console.log( kurse( ) );
