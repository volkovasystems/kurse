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
			"protype": "protype"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImt1cnNlLmpzIl0sIm5hbWVzIjpbImN1aWQiLCJyZXF1aXJlIiwiZWVuIiwia2VpbiIsImhhcmRlbiIsInByb3R5cGUiLCJrdXJzZSIsImVudGl0eSIsIk9CSkVDVCIsIkZVTkNUSU9OIiwiRXJyb3IiLCJJRCIsInRyYWNlIiwiY2FjaGUiLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdEQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLE1BQU1ELFFBQVMsS0FBVCxDQUFaO0FBQ0EsSUFBTUUsT0FBT0YsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRyxTQUFTSCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1JLFVBQVVKLFFBQVMsU0FBVCxDQUFoQjs7QUFFQSxJQUFNSyxRQUFRLFNBQVNBLEtBQVQsQ0FBZ0JDLE1BQWhCLEVBQXdCO0FBQ3JDOzs7Ozs7Ozs7OztBQVdBLEtBQUksQ0FBQ0YsUUFBU0UsTUFBVCxFQUFpQkMsTUFBakIsRUFBeUJDLFFBQXpCLENBQUwsRUFBMEM7QUFDekMsUUFBTSxJQUFJQyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlQLEtBQU1JLE1BQU4sRUFBY0QsTUFBTUssRUFBcEIsQ0FBSixFQUE4QjtBQUM3QixTQUFPSixNQUFQO0FBQ0E7O0FBRUQsSUFBRTtBQUFFLE1BQUlLLFFBQVFaLE1BQVo7QUFBc0IsRUFBMUIsUUFBaUNFLElBQUtJLE1BQU1PLEtBQVgsRUFBa0JELEtBQWxCLENBQWpDOztBQUVBTixPQUFNTyxLQUFOLENBQVlDLElBQVosQ0FBa0JGLEtBQWxCOztBQUVBUixRQUFRRSxNQUFNSyxFQUFkLEVBQWtCLHNCQUFRQyxLQUFSLENBQWxCLEVBQW1DTCxNQUFuQzs7QUFFQSxRQUFPQSxNQUFQO0FBQ0EsQ0EzQkQ7O0FBNkJBOzs7Ozs7Ozs7QUFTQUgsT0FBUSxPQUFSLEVBQWlCRSxNQUFNTyxLQUFOLElBQWUsRUFBaEMsRUFBcUNQLEtBQXJDOztBQUVBRixPQUFRLElBQVIsRUFBYyxtQkFBWSxJQUFaLENBQWQsRUFBa0NFLEtBQWxDOztBQUVBUyxPQUFPQyxPQUFQLEdBQWlCVixLQUFqQiIsImZpbGUiOiJrdXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwia3Vyc2VcIixcblx0XHRcdFwicGF0aFwiOiBcImt1cnNlL2t1cnNlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJrdXJzZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJrdXJzZVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMva3Vyc2UuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJrdXJzZS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdE1hcmtzIHRoZSBvYmplY3Qgd2l0aCBzcGVjaWFsIHRyYWNlIGlkZW50aWZpY2F0aW9uLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJjdWlkXCI6IFwiY3VpZFwiLFxuXHRcdFx0XCJlZW5cIjogXCJlZW5cIixcblx0XHRcdFwia2VpblwiOiBcImtlaW5cIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgY3VpZCA9IHJlcXVpcmUoIFwiY3VpZFwiICk7XG5jb25zdCBlZW4gPSByZXF1aXJlKCBcImVlblwiICk7XG5jb25zdCBrZWluID0gcmVxdWlyZSggXCJrZWluXCIgKTtcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuXG5jb25zdCBrdXJzZSA9IGZ1bmN0aW9uIGt1cnNlKCBlbnRpdHkgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwib2JqZWN0XCIsXG5cdFx0XHRcdFx0XCJmdW5jdGlvblwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCAhcHJvdHlwZSggZW50aXR5LCBPQkpFQ1QsIEZVTkNUSU9OICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBlbnRpdHlcIiApO1xuXHR9XG5cblx0aWYoIGtlaW4oIGVudGl0eSwga3Vyc2UuSUQgKSApe1xuXHRcdHJldHVybiBlbnRpdHk7XG5cdH1cblxuXHRkb3sgdmFyIHRyYWNlID0gY3VpZCggKTsgfXdoaWxlKCBlZW4oIGt1cnNlLmNhY2hlLCB0cmFjZSApICk7XG5cblx0a3Vyc2UuY2FjaGUucHVzaCggdHJhY2UgKTtcblxuXHRoYXJkZW4oIGt1cnNlLklELCBTeW1ib2woIHRyYWNlICksIGVudGl0eSApO1xuXG5cdHJldHVybiBlbnRpdHk7XG59O1xuXG4vKjtcblx0QG5vdGU6XG5cdFx0VGhpcyB3aWxsIGJlIHVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgZW50aXR5LlxuXHRAZW5kLW5vdGVcblxuXHRAdG9kbzpcblx0XHRQcm92aWRlIGEgbW9yZSBwZXJzaXN0ZW50IHdheSB0byB0cmFjayB0cmFjZSBpZGVudGl0aWVzLlxuXHRAZW5kLXRvZG9cbiovXG5oYXJkZW4oIFwiY2FjaGVcIiwga3Vyc2UuY2FjaGUgfHwgWyBdLCBrdXJzZSApO1xuXG5oYXJkZW4oIFwiSURcIiwgU3ltYm9sLmZvciggXCJpZFwiICksIGt1cnNlICk7XG5cbm1vZHVsZS5leHBvcnRzID0ga3Vyc2U7XG4iXX0=
