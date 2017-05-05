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
              			"fname": "fname",
              			"harden": "harden",
              			"kein": "kein",
              			"nmde": "nmde",
              			"protype": "protype",
              			"truly": "truly",
              			"wichevr": "wichevr"
              		}
              	@end-include
              */var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var cuid = require("cuid");
var een = require("een");
var fname = require("fname");
var harden = require("harden");
var kein = require("kein");
var nmde = require("nmde");
var protype = require("protype");
var truly = require("truly");
var wichevr = require("wichevr");

harden("ID", (0, _for2.default)("id"));

var kurse = function kurse(entity) {
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

	if (!protype(entity, OBJECT + FUNCTION)) {
		throw new Error("invalid entity");
	}

	if (kein(ID, entity)) {
		return entity;
	}

	do {var trace = cuid();} while (een(kurse.cache, trace));

	kurse.cache.push(trace);

	var name = wichevr(nmde(entity), fname(entity.constructor));

	if (truly(name)) {
		trace = name + "-" + trace;
	}

	harden(ID, (0, _symbol2.default)(trace), entity);

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
harden("cache", kurse.cache || [], kurse);

harden("ID", ID, kurse);

module.exports = kurse;

//# sourceMappingURL=kurse.support.js.map