"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "kurse",
			"path": "kurse/kurse.js",
			"file": "kurse.js",
			"module": "kurse",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/kurse.git",
			"test": "kurse-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Marks the object with special trace identification.
	@end-module-documentation

	@include:
		{
			"cuid": "cuid",
			"een": "een",
			"kein": "kein",
			"harden": "harden",
			"protype": "protype",
			"truly": "truly"
		}
	@end-include
*/

const cuid = require( "cuid" );
const een = require( "een" );
const kein = require( "kein" );
const harden = require( "harden" );
const protype = require( "protype" );
const truly = require( "truly" );

const kurse = function kurse( entity ){
	/*;
		@meta-configuration:
			{
				"entity:required": [
					"object",
					"function"
				]
			}
		@end-meta-configuration
	*/

	if( !protype( entity, OBJECT, FUNCTION ) ){
		throw new Error( "invalid entity" );
	}

	if( kein( entity, kurse.ID ) ){
		return entity;
	}

	do{ var trace = cuid( ); }while( een( kurse.cache, trace ) );

	kurse.cache.push( trace );

	if( ( kein( entity, "name" ) && truly( entity.name ) ) ||
		( truly( entity.constructor ) && truly( entity.constructor.name ) ) )
	{
		let name = entity.name || entity.constructor.name;

		trace = `${ name }-${ trace }`;
	}

	harden( kurse.ID, Symbol( trace ), entity );

	return entity;
};

/*;
	@note:
		This will be used to keep track of the entity.
	@end-note

	@todo:
		Provide a more persistent way to track trace identities.
	@end-todo
*/
harden( "cache", kurse.cache || [ ], kurse );

harden( "ID", Symbol.for( "id" ), kurse );

module.exports = kurse;
