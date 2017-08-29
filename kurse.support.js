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
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              			"mrkd": "mrkd",
              			"nmde": "nmde",
              			"protype": "protype",
              			"truly": "truly",
              			"wichevr": "wichevr"
              		}
              	@end-include
              
              	@todo:
              		Add duration clean up.
              	@end-todo
              */var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var cuid = require("cuid");
var een = require("een");
var fname = require("fname");
var harden = require("harden");
var mrkd = require("mrkd");
var nmde = require("nmde");
var protype = require("protype");
var truly = require("truly");
var wichevr = require("wichevr");

var ID = (0, _symbol2.default)("id");

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

	if (!protype(entity, FUNCTION + OBJECT)) {
		throw new Error("invalid entity");
	}

	if (mrkd(ID, entity)) {
		return entity;
	}

	do {var trace = cuid();} while (een(kurse.cache, trace));

	kurse.cache.push(trace);
	kurse.cache[trace] = Date.now();

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
   
   		Use weak data structures here.
   	@end-todo
   */
harden("cache", kurse.cache || [], kurse);

module.exports = kurse;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImt1cnNlLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiY3VpZCIsInJlcXVpcmUiLCJlZW4iLCJmbmFtZSIsImhhcmRlbiIsIm1ya2QiLCJubWRlIiwicHJvdHlwZSIsInRydWx5Iiwid2ljaGV2ciIsIklEIiwia3Vyc2UiLCJlbnRpdHkiLCJGVU5DVElPTiIsIk9CSkVDVCIsIkVycm9yIiwidHJhY2UiLCJjYWNoZSIsInB1c2giLCJEYXRlIiwibm93IiwibmFtZSIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0VBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUMsTUFBTUQsUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLFNBQVNILFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUksT0FBT0osUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNSyxPQUFPTCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1NLFVBQVVOLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1PLFFBQVFQLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTVEsVUFBVVIsUUFBUyxTQUFULENBQWhCOztBQUVBLElBQU1TLEtBQUssc0JBQVEsSUFBUixDQUFYOztBQUVBLElBQU1DLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFDckM7Ozs7Ozs7Ozs7O0FBV0EsS0FBSSxDQUFDTCxRQUFTSyxNQUFULEVBQWlCQyxXQUFXQyxNQUE1QixDQUFMLEVBQTJDO0FBQzFDLFFBQU0sSUFBSUMsS0FBSixDQUFXLGdCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJVixLQUFNSyxFQUFOLEVBQVVFLE1BQVYsQ0FBSixFQUF3QjtBQUN2QixTQUFPQSxNQUFQO0FBQ0E7O0FBRUQsSUFBRSxDQUFFLElBQUlJLFFBQVFoQixNQUFaLENBQXNCLENBQTFCLFFBQWlDRSxJQUFLUyxNQUFNTSxLQUFYLEVBQWtCRCxLQUFsQixDQUFqQzs7QUFFQUwsT0FBTU0sS0FBTixDQUFZQyxJQUFaLENBQWtCRixLQUFsQjtBQUNBTCxPQUFNTSxLQUFOLENBQWFELEtBQWIsSUFBdUJHLEtBQUtDLEdBQUwsRUFBdkI7O0FBRUEsS0FBSUMsT0FBT1osUUFBU0gsS0FBTU0sTUFBTixDQUFULEVBQXlCVCxNQUFPUyxPQUFPVSxXQUFkLENBQXpCLENBQVg7O0FBRUEsS0FBSWQsTUFBT2EsSUFBUCxDQUFKLEVBQW1CO0FBQ2xCTCxVQUFZSyxJQUFaLFNBQXNCTCxLQUF0QjtBQUNBOztBQUVEWixRQUFRTSxFQUFSLEVBQVksc0JBQVFNLEtBQVIsQ0FBWixFQUE2QkosTUFBN0I7O0FBRUEsUUFBT0EsTUFBUDtBQUNBLENBbENEOztBQW9DQTs7Ozs7Ozs7Ozs7QUFXQVIsT0FBUSxPQUFSLEVBQWlCTyxNQUFNTSxLQUFOLElBQWUsRUFBaEMsRUFBcUNOLEtBQXJDOztBQUVBWSxPQUFPQyxPQUFQLEdBQWlCYixLQUFqQiIsImZpbGUiOiJrdXJzZS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJrdXJzZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwia3Vyc2Uva3Vyc2UuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImt1cnNlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImt1cnNlXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9rdXJzZS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImt1cnNlLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0TWFya3MgdGhlIG9iamVjdCB3aXRoIHNwZWNpYWwgdHJhY2UgaWRlbnRpZmljYXRpb24uXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImN1aWRcIjogXCJjdWlkXCIsXG5cdFx0XHRcImVlblwiOiBcImVlblwiLFxuXHRcdFx0XCJmbmFtZVwiOiBcImZuYW1lXCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJtcmtkXCI6IFwibXJrZFwiLFxuXHRcdFx0XCJubWRlXCI6IFwibm1kZVwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCIsXG5cdFx0XHRcIndpY2hldnJcIjogXCJ3aWNoZXZyXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuXG5cdEB0b2RvOlxuXHRcdEFkZCBkdXJhdGlvbiBjbGVhbiB1cC5cblx0QGVuZC10b2RvXG4qL1xuXG5jb25zdCBjdWlkID0gcmVxdWlyZSggXCJjdWlkXCIgKTtcbmNvbnN0IGVlbiA9IHJlcXVpcmUoIFwiZWVuXCIgKTtcbmNvbnN0IGZuYW1lID0gcmVxdWlyZSggXCJmbmFtZVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBtcmtkID0gcmVxdWlyZSggXCJtcmtkXCIgKTtcbmNvbnN0IG5tZGUgPSByZXF1aXJlKCBcIm5tZGVcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuY29uc3Qgd2ljaGV2ciA9IHJlcXVpcmUoIFwid2ljaGV2clwiICk7XG5cbmNvbnN0IElEID0gU3ltYm9sKCBcImlkXCIgKTtcblxuY29uc3Qga3Vyc2UgPSBmdW5jdGlvbiBrdXJzZSggZW50aXR5ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcIm9iamVjdFwiLFxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggIXByb3R5cGUoIGVudGl0eSwgRlVOQ1RJT04gKyBPQkpFQ1QgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGVudGl0eVwiICk7XG5cdH1cblxuXHRpZiggbXJrZCggSUQsIGVudGl0eSApICl7XG5cdFx0cmV0dXJuIGVudGl0eTtcblx0fVxuXG5cdGRveyB2YXIgdHJhY2UgPSBjdWlkKCApOyB9d2hpbGUoIGVlbigga3Vyc2UuY2FjaGUsIHRyYWNlICkgKTtcblxuXHRrdXJzZS5jYWNoZS5wdXNoKCB0cmFjZSApO1xuXHRrdXJzZS5jYWNoZVsgdHJhY2UgXSA9IERhdGUubm93KCApO1xuXG5cdGxldCBuYW1lID0gd2ljaGV2ciggbm1kZSggZW50aXR5ICksIGZuYW1lKCBlbnRpdHkuY29uc3RydWN0b3IgKSApO1xuXG5cdGlmKCB0cnVseSggbmFtZSApICl7XG5cdFx0dHJhY2UgPSBgJHsgbmFtZSB9LSR7IHRyYWNlIH1gO1xuXHR9XG5cblx0aGFyZGVuKCBJRCwgU3ltYm9sKCB0cmFjZSApLCBlbnRpdHkgKTtcblxuXHRyZXR1cm4gZW50aXR5O1xufTtcblxuLyo7XG5cdEBub3RlOlxuXHRcdFRoaXMgd2lsbCBiZSB1c2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIGVudGl0eS5cblx0QGVuZC1ub3RlXG5cblx0QHRvZG86XG5cdFx0UHJvdmlkZSBhIG1vcmUgcGVyc2lzdGVudCB3YXkgdG8gdHJhY2sgdHJhY2UgaWRlbnRpdGllcy5cblxuXHRcdFVzZSB3ZWFrIGRhdGEgc3RydWN0dXJlcyBoZXJlLlxuXHRAZW5kLXRvZG9cbiovXG5oYXJkZW4oIFwiY2FjaGVcIiwga3Vyc2UuY2FjaGUgfHwgWyBdLCBrdXJzZSApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGt1cnNlO1xuIl19
//# sourceMappingURL=kurse.support.js.map
