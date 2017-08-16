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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImt1cnNlLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiY3VpZCIsInJlcXVpcmUiLCJlZW4iLCJmbmFtZSIsImhhcmRlbiIsIm1ya2QiLCJubWRlIiwicHJvdHlwZSIsInRydWx5Iiwid2ljaGV2ciIsIklEIiwia3Vyc2UiLCJlbnRpdHkiLCJGVU5DVElPTiIsIk9CSkVDVCIsIkVycm9yIiwidHJhY2UiLCJjYWNoZSIsInB1c2giLCJEYXRlIiwibm93IiwibmFtZSIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0VBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUMsTUFBTUQsUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLFNBQVNILFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUksT0FBT0osUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNSyxPQUFPTCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1NLFVBQVVOLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1PLFFBQVFQLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTVEsVUFBVVIsUUFBUyxTQUFULENBQWhCOztBQUVBLElBQU1TLEtBQUssc0JBQVEsSUFBUixDQUFYOztBQUVBLElBQU1DLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFDckM7Ozs7Ozs7Ozs7O0FBV0EsS0FBSSxDQUFDTCxRQUFTSyxNQUFULEVBQWlCQyxXQUFXQyxNQUE1QixDQUFMLEVBQTJDO0FBQzFDLFFBQU0sSUFBSUMsS0FBSixDQUFXLGdCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJVixLQUFNSyxFQUFOLEVBQVVFLE1BQVYsQ0FBSixFQUF3QjtBQUN2QixTQUFPQSxNQUFQO0FBQ0E7O0FBRUQsSUFBRSxDQUFFLElBQUlJLFFBQVFoQixNQUFaLENBQXNCLENBQTFCLFFBQWlDRSxJQUFLUyxNQUFNTSxLQUFYLEVBQWtCRCxLQUFsQixDQUFqQzs7QUFFQUwsT0FBTU0sS0FBTixDQUFZQyxJQUFaLENBQWtCRixLQUFsQjtBQUNBTCxPQUFNTSxLQUFOLENBQWFELEtBQWIsSUFBdUJHLEtBQUtDLEdBQUwsRUFBdkI7O0FBRUEsS0FBSUMsT0FBT1osUUFBU0gsS0FBTU0sTUFBTixDQUFULEVBQXlCVCxNQUFPUyxPQUFPVSxXQUFkLENBQXpCLENBQVg7O0FBRUEsS0FBSWQsTUFBT2EsSUFBUCxDQUFKLEVBQW1CO0FBQ2xCTCxVQUFZSyxJQUFaLFNBQXNCTCxLQUF0QjtBQUNBOztBQUVEWixRQUFRTSxFQUFSLEVBQVksc0JBQVFNLEtBQVIsQ0FBWixFQUE2QkosTUFBN0I7O0FBRUEsUUFBT0EsTUFBUDtBQUNBLENBbENEOztBQW9DQTs7Ozs7Ozs7Ozs7QUFXQVIsT0FBUSxPQUFSLEVBQWlCTyxNQUFNTSxLQUFOLElBQWUsRUFBaEMsRUFBcUNOLEtBQXJDOztBQUVBWSxPQUFPQyxPQUFQLEdBQWlCYixLQUFqQiIsImZpbGUiOiJrdXJzZS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImt1cnNlXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImt1cnNlL2t1cnNlLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcImt1cnNlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwia3Vyc2VcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMva3Vyc2UuZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcImt1cnNlLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0TWFya3MgdGhlIG9iamVjdCB3aXRoIHNwZWNpYWwgdHJhY2UgaWRlbnRpZmljYXRpb24uXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJjdWlkXCI6IFwiY3VpZFwiLFxyXG5cdFx0XHRcImVlblwiOiBcImVlblwiLFxyXG5cdFx0XHRcImZuYW1lXCI6IFwiZm5hbWVcIixcclxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcclxuXHRcdFx0XCJtcmtkXCI6IFwibXJrZFwiLFxyXG5cdFx0XHRcIm5tZGVcIjogXCJubWRlXCIsXHJcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcclxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCIsXHJcblx0XHRcdFwid2ljaGV2clwiOiBcIndpY2hldnJcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG5cclxuXHRAdG9kbzpcclxuXHRcdEFkZCBkdXJhdGlvbiBjbGVhbiB1cC5cclxuXHRAZW5kLXRvZG9cclxuKi9cclxuXHJcbmNvbnN0IGN1aWQgPSByZXF1aXJlKCBcImN1aWRcIiApO1xyXG5jb25zdCBlZW4gPSByZXF1aXJlKCBcImVlblwiICk7XHJcbmNvbnN0IGZuYW1lID0gcmVxdWlyZSggXCJmbmFtZVwiICk7XHJcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcclxuY29uc3QgbXJrZCA9IHJlcXVpcmUoIFwibXJrZFwiICk7XHJcbmNvbnN0IG5tZGUgPSByZXF1aXJlKCBcIm5tZGVcIiApO1xyXG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcclxuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcclxuY29uc3Qgd2ljaGV2ciA9IHJlcXVpcmUoIFwid2ljaGV2clwiICk7XHJcblxyXG5jb25zdCBJRCA9IFN5bWJvbCggXCJpZFwiICk7XHJcblxyXG5jb25zdCBrdXJzZSA9IGZ1bmN0aW9uIGt1cnNlKCBlbnRpdHkgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImVudGl0eTpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcIm9iamVjdFwiLFxyXG5cdFx0XHRcdFx0XCJmdW5jdGlvblwiXHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCAhcHJvdHlwZSggZW50aXR5LCBGVU5DVElPTiArIE9CSkVDVCApICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBlbnRpdHlcIiApO1xyXG5cdH1cclxuXHJcblx0aWYoIG1ya2QoIElELCBlbnRpdHkgKSApe1xyXG5cdFx0cmV0dXJuIGVudGl0eTtcclxuXHR9XHJcblxyXG5cdGRveyB2YXIgdHJhY2UgPSBjdWlkKCApOyB9d2hpbGUoIGVlbigga3Vyc2UuY2FjaGUsIHRyYWNlICkgKTtcclxuXHJcblx0a3Vyc2UuY2FjaGUucHVzaCggdHJhY2UgKTtcclxuXHRrdXJzZS5jYWNoZVsgdHJhY2UgXSA9IERhdGUubm93KCApO1xyXG5cclxuXHRsZXQgbmFtZSA9IHdpY2hldnIoIG5tZGUoIGVudGl0eSApLCBmbmFtZSggZW50aXR5LmNvbnN0cnVjdG9yICkgKTtcclxuXHJcblx0aWYoIHRydWx5KCBuYW1lICkgKXtcclxuXHRcdHRyYWNlID0gYCR7IG5hbWUgfS0keyB0cmFjZSB9YDtcclxuXHR9XHJcblxyXG5cdGhhcmRlbiggSUQsIFN5bWJvbCggdHJhY2UgKSwgZW50aXR5ICk7XHJcblxyXG5cdHJldHVybiBlbnRpdHk7XHJcbn07XHJcblxyXG4vKjtcclxuXHRAbm90ZTpcclxuXHRcdFRoaXMgd2lsbCBiZSB1c2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIGVudGl0eS5cclxuXHRAZW5kLW5vdGVcclxuXHJcblx0QHRvZG86XHJcblx0XHRQcm92aWRlIGEgbW9yZSBwZXJzaXN0ZW50IHdheSB0byB0cmFjayB0cmFjZSBpZGVudGl0aWVzLlxyXG5cclxuXHRcdFVzZSB3ZWFrIGRhdGEgc3RydWN0dXJlcyBoZXJlLlxyXG5cdEBlbmQtdG9kb1xyXG4qL1xyXG5oYXJkZW4oIFwiY2FjaGVcIiwga3Vyc2UuY2FjaGUgfHwgWyBdLCBrdXJzZSApO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBrdXJzZTtcclxuIl19
//# sourceMappingURL=kurse.support.js.map
