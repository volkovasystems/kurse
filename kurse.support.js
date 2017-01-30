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

var _for = require("babel-runtime/core-js/symbol/for");

var _for2 = _interopRequireDefault(_for);

var _symbol = require("babel-runtime/core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cuid = require("cuid");
var een = require("een");
var kein = require("kein");
var harden = require("harden");
var protype = require("protype");
var truly = require("truly");

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

	if (!protype(entity, OBJECT, FUNCTION)) {
		throw new Error("invalid entity");
	}

	if (kein(entity, kurse.ID)) {
		return entity;
	}

	do {
		var trace = cuid();
	} while (een(kurse.cache, trace));

	kurse.cache.push(trace);

	if (kein(entity, "name") && truly(entity.name) || truly(entity.constructor) && truly(entity.constructor.name)) {
		var name = entity.name || entity.constructor.name;

		trace = name + "-" + trace;
	}

	harden(kurse.ID, (0, _symbol2.default)(trace), entity);

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

harden("ID", (0, _for2.default)("id"), kurse);

module.exports = kurse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImt1cnNlLmpzIl0sIm5hbWVzIjpbImN1aWQiLCJyZXF1aXJlIiwiZWVuIiwia2VpbiIsImhhcmRlbiIsInByb3R5cGUiLCJ0cnVseSIsImt1cnNlIiwiZW50aXR5IiwiT0JKRUNUIiwiRlVOQ1RJT04iLCJFcnJvciIsIklEIiwidHJhY2UiLCJjYWNoZSIsInB1c2giLCJuYW1lIiwiY29uc3RydWN0b3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTREQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLE1BQU1ELFFBQVMsS0FBVCxDQUFaO0FBQ0EsSUFBTUUsT0FBT0YsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRyxTQUFTSCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1JLFVBQVVKLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1LLFFBQVFMLFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1NLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFDckM7Ozs7Ozs7Ozs7O0FBV0EsS0FBSSxDQUFDSCxRQUFTRyxNQUFULEVBQWlCQyxNQUFqQixFQUF5QkMsUUFBekIsQ0FBTCxFQUEwQztBQUN6QyxRQUFNLElBQUlDLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSVIsS0FBTUssTUFBTixFQUFjRCxNQUFNSyxFQUFwQixDQUFKLEVBQThCO0FBQzdCLFNBQU9KLE1BQVA7QUFDQTs7QUFFRCxJQUFFO0FBQUUsTUFBSUssUUFBUWIsTUFBWjtBQUFzQixFQUExQixRQUFpQ0UsSUFBS0ssTUFBTU8sS0FBWCxFQUFrQkQsS0FBbEIsQ0FBakM7O0FBRUFOLE9BQU1PLEtBQU4sQ0FBWUMsSUFBWixDQUFrQkYsS0FBbEI7O0FBRUEsS0FBTVYsS0FBTUssTUFBTixFQUFjLE1BQWQsS0FBMEJGLE1BQU9FLE9BQU9RLElBQWQsQ0FBNUIsSUFDRFYsTUFBT0UsT0FBT1MsV0FBZCxLQUErQlgsTUFBT0UsT0FBT1MsV0FBUCxDQUFtQkQsSUFBMUIsQ0FEbEMsRUFFQTtBQUNDLE1BQUlBLE9BQU9SLE9BQU9RLElBQVAsSUFBZVIsT0FBT1MsV0FBUCxDQUFtQkQsSUFBN0M7O0FBRUFILFVBQVlHLElBQVosU0FBc0JILEtBQXRCO0FBQ0E7O0FBRURULFFBQVFHLE1BQU1LLEVBQWQsRUFBa0Isc0JBQVFDLEtBQVIsQ0FBbEIsRUFBbUNMLE1BQW5DOztBQUVBLFFBQU9BLE1BQVA7QUFDQSxDQW5DRDs7QUFxQ0E7Ozs7Ozs7OztBQVNBSixPQUFRLE9BQVIsRUFBaUJHLE1BQU1PLEtBQU4sSUFBZSxFQUFoQyxFQUFxQ1AsS0FBckM7O0FBRUFILE9BQVEsSUFBUixFQUFjLG1CQUFZLElBQVosQ0FBZCxFQUFrQ0csS0FBbEM7O0FBRUFXLE9BQU9DLE9BQVAsR0FBaUJaLEtBQWpCIiwiZmlsZSI6Imt1cnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJrdXJzZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwia3Vyc2Uva3Vyc2UuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImt1cnNlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImt1cnNlXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMva3Vyc2UuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJrdXJzZS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdE1hcmtzIHRoZSBvYmplY3Qgd2l0aCBzcGVjaWFsIHRyYWNlIGlkZW50aWZpY2F0aW9uLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJjdWlkXCI6IFwiY3VpZFwiLFxuXHRcdFx0XCJlZW5cIjogXCJlZW5cIixcblx0XHRcdFwia2VpblwiOiBcImtlaW5cIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBjdWlkID0gcmVxdWlyZSggXCJjdWlkXCIgKTtcbmNvbnN0IGVlbiA9IHJlcXVpcmUoIFwiZWVuXCIgKTtcbmNvbnN0IGtlaW4gPSByZXF1aXJlKCBcImtlaW5cIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuXG5jb25zdCBrdXJzZSA9IGZ1bmN0aW9uIGt1cnNlKCBlbnRpdHkgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwib2JqZWN0XCIsXG5cdFx0XHRcdFx0XCJmdW5jdGlvblwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCAhcHJvdHlwZSggZW50aXR5LCBPQkpFQ1QsIEZVTkNUSU9OICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBlbnRpdHlcIiApO1xuXHR9XG5cblx0aWYoIGtlaW4oIGVudGl0eSwga3Vyc2UuSUQgKSApe1xuXHRcdHJldHVybiBlbnRpdHk7XG5cdH1cblxuXHRkb3sgdmFyIHRyYWNlID0gY3VpZCggKTsgfXdoaWxlKCBlZW4oIGt1cnNlLmNhY2hlLCB0cmFjZSApICk7XG5cblx0a3Vyc2UuY2FjaGUucHVzaCggdHJhY2UgKTtcblxuXHRpZiggKCBrZWluKCBlbnRpdHksIFwibmFtZVwiICkgJiYgdHJ1bHkoIGVudGl0eS5uYW1lICkgKSB8fFxuXHRcdCggdHJ1bHkoIGVudGl0eS5jb25zdHJ1Y3RvciApICYmIHRydWx5KCBlbnRpdHkuY29uc3RydWN0b3IubmFtZSApICkgKVxuXHR7XG5cdFx0bGV0IG5hbWUgPSBlbnRpdHkubmFtZSB8fCBlbnRpdHkuY29uc3RydWN0b3IubmFtZTtcblxuXHRcdHRyYWNlID0gYCR7IG5hbWUgfS0keyB0cmFjZSB9YDtcblx0fVxuXG5cdGhhcmRlbigga3Vyc2UuSUQsIFN5bWJvbCggdHJhY2UgKSwgZW50aXR5ICk7XG5cblx0cmV0dXJuIGVudGl0eTtcbn07XG5cbi8qO1xuXHRAbm90ZTpcblx0XHRUaGlzIHdpbGwgYmUgdXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBlbnRpdHkuXG5cdEBlbmQtbm90ZVxuXG5cdEB0b2RvOlxuXHRcdFByb3ZpZGUgYSBtb3JlIHBlcnNpc3RlbnQgd2F5IHRvIHRyYWNrIHRyYWNlIGlkZW50aXRpZXMuXG5cdEBlbmQtdG9kb1xuKi9cbmhhcmRlbiggXCJjYWNoZVwiLCBrdXJzZS5jYWNoZSB8fCBbIF0sIGt1cnNlICk7XG5cbmhhcmRlbiggXCJJRFwiLCBTeW1ib2wuZm9yKCBcImlkXCIgKSwga3Vyc2UgKTtcblxubW9kdWxlLmV4cG9ydHMgPSBrdXJzZTtcbiJdfQ==
