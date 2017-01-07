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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImt1cnNlLmpzIl0sIm5hbWVzIjpbImN1aWQiLCJyZXF1aXJlIiwiZWVuIiwia2VpbiIsImhhcmRlbiIsInByb3R5cGUiLCJ0cnVseSIsImt1cnNlIiwiZW50aXR5IiwiT0JKRUNUIiwiRlVOQ1RJT04iLCJFcnJvciIsIklEIiwidHJhY2UiLCJjYWNoZSIsInB1c2giLCJuYW1lIiwiY29uc3RydWN0b3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlEQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLE1BQU1ELFFBQVMsS0FBVCxDQUFaO0FBQ0EsSUFBTUUsT0FBT0YsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRyxTQUFTSCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1JLFVBQVVKLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1LLFFBQVFMLFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1NLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFDckM7Ozs7Ozs7Ozs7O0FBV0EsS0FBSSxDQUFDSCxRQUFTRyxNQUFULEVBQWlCQyxNQUFqQixFQUF5QkMsUUFBekIsQ0FBTCxFQUEwQztBQUN6QyxRQUFNLElBQUlDLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSVIsS0FBTUssTUFBTixFQUFjRCxNQUFNSyxFQUFwQixDQUFKLEVBQThCO0FBQzdCLFNBQU9KLE1BQVA7QUFDQTs7QUFFRCxJQUFFO0FBQUUsTUFBSUssUUFBUWIsTUFBWjtBQUFzQixFQUExQixRQUFpQ0UsSUFBS0ssTUFBTU8sS0FBWCxFQUFrQkQsS0FBbEIsQ0FBakM7O0FBRUFOLE9BQU1PLEtBQU4sQ0FBWUMsSUFBWixDQUFrQkYsS0FBbEI7O0FBRUEsS0FBTVYsS0FBTUssTUFBTixFQUFjLE1BQWQsS0FBMEJGLE1BQU9FLE9BQU9RLElBQWQsQ0FBNUIsSUFDRFYsTUFBT0UsT0FBT1MsV0FBZCxLQUErQlgsTUFBT0UsT0FBT1MsV0FBUCxDQUFtQkQsSUFBMUIsQ0FEbEMsRUFFQTtBQUNDLE1BQUlBLE9BQU9SLE9BQU9RLElBQVAsSUFBZVIsT0FBT1MsV0FBUCxDQUFtQkQsSUFBN0M7O0FBRUFILFVBQVlHLElBQVosU0FBc0JILEtBQXRCO0FBQ0E7O0FBRURULFFBQVFHLE1BQU1LLEVBQWQsRUFBa0Isc0JBQVFDLEtBQVIsQ0FBbEIsRUFBbUNMLE1BQW5DOztBQUVBLFFBQU9BLE1BQVA7QUFDQSxDQW5DRDs7QUFxQ0E7Ozs7Ozs7OztBQVNBSixPQUFRLE9BQVIsRUFBaUJHLE1BQU1PLEtBQU4sSUFBZSxFQUFoQyxFQUFxQ1AsS0FBckM7O0FBRUFILE9BQVEsSUFBUixFQUFjLG1CQUFZLElBQVosQ0FBZCxFQUFrQ0csS0FBbEM7O0FBRUFXLE9BQU9DLE9BQVAsR0FBaUJaLEtBQWpCIiwiZmlsZSI6Imt1cnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJrdXJzZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwia3Vyc2Uva3Vyc2UuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImt1cnNlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImt1cnNlXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9rdXJzZS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImt1cnNlLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0TWFya3MgdGhlIG9iamVjdCB3aXRoIHNwZWNpYWwgdHJhY2UgaWRlbnRpZmljYXRpb24uXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImN1aWRcIjogXCJjdWlkXCIsXG5cdFx0XHRcImVlblwiOiBcImVlblwiLFxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGN1aWQgPSByZXF1aXJlKCBcImN1aWRcIiApO1xuY29uc3QgZWVuID0gcmVxdWlyZSggXCJlZW5cIiApO1xuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5cbmNvbnN0IGt1cnNlID0gZnVuY3Rpb24ga3Vyc2UoIGVudGl0eSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJvYmplY3RcIixcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoICFwcm90eXBlKCBlbnRpdHksIE9CSkVDVCwgRlVOQ1RJT04gKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGVudGl0eVwiICk7XG5cdH1cblxuXHRpZigga2VpbiggZW50aXR5LCBrdXJzZS5JRCApICl7XG5cdFx0cmV0dXJuIGVudGl0eTtcblx0fVxuXG5cdGRveyB2YXIgdHJhY2UgPSBjdWlkKCApOyB9d2hpbGUoIGVlbigga3Vyc2UuY2FjaGUsIHRyYWNlICkgKTtcblxuXHRrdXJzZS5jYWNoZS5wdXNoKCB0cmFjZSApO1xuXG5cdGlmKCAoIGtlaW4oIGVudGl0eSwgXCJuYW1lXCIgKSAmJiB0cnVseSggZW50aXR5Lm5hbWUgKSApIHx8XG5cdFx0KCB0cnVseSggZW50aXR5LmNvbnN0cnVjdG9yICkgJiYgdHJ1bHkoIGVudGl0eS5jb25zdHJ1Y3Rvci5uYW1lICkgKSApXG5cdHtcblx0XHRsZXQgbmFtZSA9IGVudGl0eS5uYW1lIHx8IGVudGl0eS5jb25zdHJ1Y3Rvci5uYW1lO1xuXG5cdFx0dHJhY2UgPSBgJHsgbmFtZSB9LSR7IHRyYWNlIH1gO1xuXHR9XG5cblx0aGFyZGVuKCBrdXJzZS5JRCwgU3ltYm9sKCB0cmFjZSApLCBlbnRpdHkgKTtcblxuXHRyZXR1cm4gZW50aXR5O1xufTtcblxuLyo7XG5cdEBub3RlOlxuXHRcdFRoaXMgd2lsbCBiZSB1c2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIGVudGl0eS5cblx0QGVuZC1ub3RlXG5cblx0QHRvZG86XG5cdFx0UHJvdmlkZSBhIG1vcmUgcGVyc2lzdGVudCB3YXkgdG8gdHJhY2sgdHJhY2UgaWRlbnRpdGllcy5cblx0QGVuZC10b2RvXG4qL1xuaGFyZGVuKCBcImNhY2hlXCIsIGt1cnNlLmNhY2hlIHx8IFsgXSwga3Vyc2UgKTtcblxuaGFyZGVuKCBcIklEXCIsIFN5bWJvbC5mb3IoIFwiaWRcIiApLCBrdXJzZSApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGt1cnNlO1xuIl19
