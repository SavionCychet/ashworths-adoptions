function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about-page/about-page.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-page/about-page.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutPageAboutPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>WHO ARE WE?</h1>\r\n<p>\r\n    Ashworth's Adoptions is a non-profit dog shelter located in St. Louis, MO. Our team is\r\nmade up of volunteers and animal specialists who work to bring in dogs from the streets\r\nand give them new homes. Our organization was etablished this year in 2020 and\r\nso far, we've already rescued over 100 dogs!\r\n</p>\r\n\r\n<h1>OUR MISSION</h1>\r\n<p>\r\n    With the rising rate of euthenization and animal abuse, we at Ashworth's devote our \r\nresources to finding abandoned or injured dogs left on the streets. Our mission is to \r\nbring them in, treat them if needed, and find new, loving homes for them. \r\nWhile our organization is geared towards dogs, we would\r\none day like to have the reach and resources to rescue\r\nother animals as well, and beyond the borders of just\r\nSt. Louis.\r\n</p>\r\n\r\n<h1>HOW YOU CAN HELP</h1>\r\n<p>\r\n    \r\nAny donations of any amount are greatly appreciated. 100% of donations go directly towards\r\nour resources for helping dogs. You can also become a temporary member of our team \r\nand become a volunteer! We currently have 34 volunteers of all ages on our team\r\nand we're always looking for more! The more hands we have helping our cause, the more dogs we can save\r\nfrom the streets!\r\n</p>\r\n\r\n<div class=\"buttons\">\r\n<button type=\"button\" class=\"btn btn-primary\" id=\"donate-btn\">DONATE</button>\r\n<button type=\"button\" class=\"btn btn-primary\" id=\"volunteer-btn\"> VOLUNTEER</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/adopt-page/adopt-page.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adopt-page/adopt-page.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdoptPageAdoptPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>DOGS CURRENTLY UP FOR ADOPTION</h1>\n\n<div class=\"row\">\n    <div class=\"card\" id=\"card-1\" style=\"width: 18rem;\">\n        <img src=\"../../assets/images/lucky.jpg\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Lucky</h5>\n          <p class=\"card-text\">\n            Age: 1\n            <br>\n              Gender: Male\n            <br>\n            Breed: Chihuahua\n          </p>\n          <a href=\"#\" class=\"btn btn-primary\">Learn More</a>\n        </div>\n      </div>\n    \n      <div class=\"card\" id=\"card-2\" style=\"width: 18rem;\">\n        <img src=\"../../assets/images/maxwell.jpg\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Maxwell</h5>\n          <p class=\"card-text\">Age: 3\n              <br>\n              Gender: Male\n              <br>\n              Breed: Unknown</p>\n          <a href=\"#\" class=\"btn btn-primary\">Learn More</a>\n        </div>\n      </div>\n    \n      <div class=\"card\" id=\"card-3\" style=\"width: 18rem;\">\n        <img src=\"../../assets/images/daisy.jpg\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Daisy</h5>\n          <p class=\"card-text\">Age: 2\n              <br>\n              Gender: Female\n              <br>\n              Breed: Golden retriever</p>\n          <a href=\"#\" class=\"btn btn-primary\">Learn More</a>\n        </div>\n      </div>\n      </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<navbar></navbar>\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-page/contact-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-page/contact-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactPageContactPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>CONTACT US!</h1>\n<h2>HAVE A QUESTION OR CONCERN? OR JUST NEED TO CONTACT ONE OF OUR \n    REPRESENTATIVES? SEND US AN EMAIL! WE'LL RESPOND WITHIN 24 HOURS!\n</h2>\n<form>\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlInput1\">NAME</label>\n      <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"name\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"exampleFormControlInput1\">EMAIL ADDRESS</label>\n        <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"email@example.com\">\n      </div>\n\n    <div class=\"form-group\">\n      \n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleFormControlTextarea1\">MESSAGE</label>\n      <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" placeholder=\"Your message...\" rows=\"3\"></textarea>\n    </div>\n  </form>\n\n  <button type=\"button\" class=\"btn btn-primary\">SEND</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/donate-page/donate-page.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donate-page/donate-page.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDonatePageDonatePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>DONATE TO ASHWORTH'S!</h1>\n<p>Your donations are a big help in keeping our mission alive!</p>\n\n<h2>SELECT AMOUNT</h2>\n\n\n<div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">$</span>\n      <span class=\"input-group-text\">0.00</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\">\n    <button type=\"button\" class=\"btn btn-primary\">DONATE VIA PAYPAL</button>\n\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer>\n    <div class=\"socials\">\n        <p>Follow us</p>\n        <img class=\"icon\" src=\"./../../assets/images/social media icons/facebook.png\"/>\n        <img class=\"icon\" src=\"./../../assets/images/social media icons/instagram.png\"/>\n        <img class=\"icon\" src=\"./../../assets/images/social media icons/twitter.png\"/>\n\n        <p class=\"news-sub\">Subscribe to our newsletter</p>\n        <form>\n            <div class=\"form-group\">\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n            </div>\n        </form>\n        <button type=\"button\" class=\"btn btn-primary\">Subscribe</button>\n        \n    </div>\n    <!-- <p>copyright</p> -->\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePageHomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<imgslider></imgslider>\n<welcome></welcome>\n<h1>RECENT RESCUES</h1>\n<new-rescues></new-rescues>\n<h2>NEWLY ADOPTED</h2>\n<new-adopts></new-adopts>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/imgslider/imgslider.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imgslider/imgslider.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppImgsliderImgsliderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img src=\"../../assets/images/image-1.jpg\" class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"../../assets/images/image-2.jpg\" class=\"d-block w-100\" alt=\"...\">\n          </div>\n          <div class=\"carousel-item\">\n            <img src=\"../../assets/images/image-3.jpg\" class=\"d-block w-100\" alt=\"...\">\n          </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-dark bg-primary\">\r\n        <ul class=\"nav justify-content-center\">\r\n            <li class=\"nav-link \" id=\"home-link\">\r\n              <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n            <li class=\"nav-link \" id=\"about-link\">\r\n              <a class=\"nav-link\" routerLink=\"/about\">About<span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n            <li class=\"nav-link \" id=\"breeds-link\">\r\n              <a class=\"nav-link\" routerLink=\"/adopt\">Adopt <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n            <li class=\"nav-link \" id=\"contact-link\">\r\n              <a class=\"nav-link\" routerLink=\"/contact\">Contact <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n            <li class=\"nav-link \" id=\"register-link\">\r\n                    <a class=\"nav-link\" routerLink=\"/donate\">Donate <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n          </ul>\r\n    </nav>\r\n\r\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-adopts/new-adopts.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-adopts/new-adopts.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewAdoptsNewAdoptsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"card\" id=\"card-1\" style=\"width: 18rem;\">\n        <img src=\"../../assets/images/biscuit.jpg\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Biscuit</h5>\n          <p class=\"card-text\">\n            Age: 2\n            <br>\n              Gender: Male\n            <br>\n            Breed: Terrier\n          </p>\n          <a href=\"#\" class=\"btn btn-primary\">Learn More</a>\n        </div>\n      </div>\n    \n      <div class=\"card\" id=\"card-2\" style=\"width: 18rem;\">\n        <img src=\"../../assets/images/fido.jpg\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Fido</h5>\n          <p class=\"card-text\">Age: 1\n              <br>\n              Gender: Male\n              <br>\n              Breed: Boxer</p>\n          <a href=\"#\" class=\"btn btn-primary\">Learn More</a>\n        </div>\n      </div>\n    \n      <div class=\"card\" id=\"card-3\" style=\"width: 18rem;\">\n        <img src=\"../../assets/images/finti.jpg\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Fenti</h5>\n          <p class=\"card-text\">Age: 1\n              <br>\n              Gender: Female\n              <br>\n              Breed: Stabyhoun</p>\n          <a href=\"#\" class=\"btn btn-primary\">Learn More</a>\n        </div>\n      </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"card\" id=\"card-1\" style=\"width: 18rem;\">\n            <img src=\"../../assets/images/cychet.jpg\" class=\"card-img-top\" alt=\"...\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Cychet</h5>\n              <p class=\"card-text\">\n                Age: 1\n                <br>\n                  Gender: Male\n                <br>\n                Breed: Dalmatian (possibly mixed)\n              </p>\n              <a href=\"#\" class=\"btn btn-primary\">Learn More</a>\n            </div>\n          </div>\n        \n          <div class=\"card\" id=\"card-2\" style=\"width: 18rem;\">\n            <img src=\"../../assets/images/todoroki.jpg\" class=\"card-img-top\" alt=\"...\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Todoroki</h5>\n              <p class=\"card-text\">Age: 3\n                  <br>\n                  Gender: Male\n                  <br>\n                  Breed: Shuba Inu</p>\n              <a href=\"#\" class=\"btn btn-primary\">Learn More</a>\n            </div>\n          </div>\n        \n          <div class=\"card\" id=\"card-3\" style=\"width: 18rem;\">\n            <img src=\"../../assets/images/xarthur.jpg\" class=\"card-img-top\" alt=\"...\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Xarthur</h5>\n              <p class=\"card-text\">Age: 1\n                  <br>\n                  Gender: Male\n                  <br>\n                  Breed: Corgi</p>\n              <a href=\"#\" class=\"btn btn-primary\">Learn More</a>\n            </div>\n          </div>\n          </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-rescues/new-rescues.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-rescues/new-rescues.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewRescuesNewRescuesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n<div class=\"card\" id=\"card-1\" style=\"width: 18rem;\">\n    <img src=\"../../assets/images/lucky.jpg\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Lucky</h5>\n      <p class=\"card-text\">\n        Age: 1\n        <br>\n          Gender: Male\n        <br>\n        Breed: Chihuahua\n      </p>\n      <a href=\"#\" class=\"btn btn-primary\">Learn More</a>\n    </div>\n  </div>\n\n  <div class=\"card\" id=\"card-2\" style=\"width: 18rem;\">\n    <img src=\"../../assets/images/maxwell.jpg\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Maxwell</h5>\n      <p class=\"card-text\">Age: 3\n          <br>\n          Gender: Male\n          <br>\n          Breed: Unknown</p>\n      <a href=\"#\" class=\"btn btn-primary\">Learn More</a>\n    </div>\n  </div>\n\n  <div class=\"card\" id=\"card-3\" style=\"width: 18rem;\">\n    <img src=\"../../assets/images/daisy.jpg\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Daisy</h5>\n      <p class=\"card-text\">Age: 2\n          <br>\n          Gender: Female\n          <br>\n          Breed: Golden retriever</p>\n      <a href=\"#\" class=\"btn btn-primary\">Learn More</a>\n    </div>\n  </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWelcomeWelcomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">WELCOME TO ASHWORTH'S</h1>\n      <p class=\"lead\">GIVING NEW HOMES TO WELL DESERVING PUPS</p>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/about-page/about-page.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/about-page/about-page.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutPageAboutPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    margin-top: 3%;\r\n    font-family: \"moon\";\r\n}\r\n\r\np{\r\n    margin-left: 20%;\r\n    margin-right: 20%;\r\n}\r\n\r\n.btn {\r\n    font-family: 'moon';\r\n    display: -webkit-box;\r\n    display: flex;\r\n    background-color: #ff7c55;\r\n    border-color: #ff7c55;\r\n}\r\n\r\n.btn:active:focus{\r\n    background-color: #ff7c55;\r\n    border-color: #ff7c55;\r\n    box-shadow: none;\r\n}\r\n\r\n.buttons{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    margin: 5%;\r\n}\r\n\r\n#donate-btn{\r\n    margin-right: 1%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtcGFnZS9hYm91dC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtcGFnZS9hYm91dC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwibW9vblwiO1xyXG59XHJcblxyXG5we1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnbW9vbic7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2M1NTtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmN2M1NTtcclxufVxyXG5cclxuLmJ0bjphY3RpdmU6Zm9jdXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3YzU1O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY3YzU1O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmJ1dHRvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1JTtcclxufVxyXG5cclxuI2RvbmF0ZS1idG57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/about-page/about-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/about-page/about-page.component.ts ***!
    \****************************************************/

  /*! exports provided: AboutPageComponent */

  /***/
  function srcAppAboutPageAboutPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function () {
      return AboutPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutPageComponent =
    /*#__PURE__*/
    function () {
      function AboutPageComponent() {
        _classCallCheck(this, AboutPageComponent);
      }

      _createClass(AboutPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutPageComponent;
    }();

    AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about-page/about-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about-page.component.css */
      "./src/app/about-page/about-page.component.css")).default]
    })], AboutPageComponent);
    /***/
  },

  /***/
  "./src/app/adopt-page/adopt-page.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/adopt-page/adopt-page.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdoptPageAdoptPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  font-family: 'moon';\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 3%;\n}\n\n.card-img-top, .card {\n  border-radius: 15px;\n}\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n#card-2, #card-3 {\n  margin-left: 5%;\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n\n.btn {\n  background-color: #ff7c55;\n  border-color: #ff7c55;\n  font-family: \"moon\";\n}\n\n.btn:active:focus {\n  background-color: #ff7c55;\n  border-color: #ff7c55;\n  box-shadow: none;\n}\n\n/*# sourceMappingURL=adopt-page.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRvcHQtcGFnZS9hZG9wdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG9wdC1wYWdlL2Fkb3B0LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQjtFQUNuQixvQkFBYTtFQUViLGFBQVk7RUFDZix3QkFBQTtVQUVELHVCQUFxQjtFQUNqQixjQUFhO0FDQ2pCOztBREVBO0VBQ0ksbUJBQWE7QUNDakI7O0FBRUE7RURDQyxvQkFBQTtFQUVBLGFBQVM7RUFDTix3QkFBZTtVQUVmLHVCQUFpQjtFQUNwQix5QkFBQTtVQUVHLG1CQUFBO0VBQ0EsOEJBQXlCO0VBQ3pCLDZCQUFxQjtVQUV4QixtQkFBQTtBQ0NEOztBQUVBO0VEQ0ksZUFBYztFQUNkLGNBQVk7RUFDZixpQkFBQTtBQ0NEOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBRWIsZ0JBQWdCO0FBQzFCOztBQUNBLG1EQUFtRCIsImZpbGUiOiJzcmMvYXBwL2Fkb3B0LXBhZ2UvYWRvcHQtcGFnZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/adopt-page/adopt-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/adopt-page/adopt-page.component.ts ***!
    \****************************************************/

  /*! exports provided: AdoptPageComponent */

  /***/
  function srcAppAdoptPageAdoptPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdoptPageComponent", function () {
      return AdoptPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdoptPageComponent =
    /*#__PURE__*/
    function () {
      function AdoptPageComponent() {
        _classCallCheck(this, AdoptPageComponent);
      }

      _createClass(AdoptPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdoptPageComponent;
    }();

    AdoptPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-adopt-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./adopt-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/adopt-page/adopt-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./adopt-page.component.css */
      "./src/app/adopt-page/adopt-page.component.css")).default]
    })], AdoptPageComponent);
    /***/
  },

  /***/
  "./src/app/app-routing/app-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/app-routing/app-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ashworths-adoptions';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing/app-routing.module */
    "./src/app/app-routing/app-routing.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _imgslider_imgslider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./imgslider/imgslider.component */
    "./src/app/imgslider/imgslider.component.ts");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");
    /* harmony import */


    var _new_rescues_new_rescues_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./new-rescues/new-rescues.component */
    "./src/app/new-rescues/new-rescues.component.ts");
    /* harmony import */


    var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./about-page/about-page.component */
    "./src/app/about-page/about-page.component.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/home-page/home-page.component.ts");
    /* harmony import */


    var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./contact-page/contact-page.component */
    "./src/app/contact-page/contact-page.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _new_adopts_new_adopts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./new-adopts/new-adopts.component */
    "./src/app/new-adopts/new-adopts.component.ts");
    /* harmony import */


    var _adopt_page_adopt_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./adopt-page/adopt-page.component */
    "./src/app/adopt-page/adopt-page.component.ts");
    /* harmony import */


    var _donate_page_donate_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./donate-page/donate-page.component */
    "./src/app/donate-page/donate-page.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _imgslider_imgslider_component__WEBPACK_IMPORTED_MODULE_8__["ImgsliderComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"], _new_rescues_new_rescues_component__WEBPACK_IMPORTED_MODULE_10__["NewRescuesComponent"], _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_11__["AboutPageComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_12__["HomePageComponent"], _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_13__["ContactPageComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _new_adopts_new_adopts_component__WEBPACK_IMPORTED_MODULE_15__["NewAdoptsComponent"], _adopt_page_adopt_page_component__WEBPACK_IMPORTED_MODULE_16__["AdoptPageComponent"], _donate_page_donate_page_component__WEBPACK_IMPORTED_MODULE_17__["DonatePageComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([{
        path: '',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_12__["HomePageComponent"]
      }, {
        path: 'about',
        component: _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_11__["AboutPageComponent"]
      }, {
        path: 'adopt',
        component: _adopt_page_adopt_page_component__WEBPACK_IMPORTED_MODULE_16__["AdoptPageComponent"]
      }, {
        path: 'contact',
        component: _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_13__["ContactPageComponent"]
      }, {
        path: 'donate',
        component: _donate_page_donate_page_component__WEBPACK_IMPORTED_MODULE_17__["DonatePageComponent"]
      }])],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/contact-page/contact-page.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/contact-page/contact-page.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactPageContactPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-group{\r\n    margin-left: 20%;\r\n    margin-right: 20%;\r\n    margin-top: 3%;\r\n}\r\n\r\nh1{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    font-family: \"moon\";\r\n    margin-top: 3%;\r\n}\r\n\r\nh2{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    font-family: \"moon\";\r\n    font-size: 18px;\r\n    margin-left: 20%;\r\n    margin-right: 20%;\r\n}\r\n\r\n.btn{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin-left: 20%;\r\n    margin-top: 3%;\r\n    background-color: #ff7c55;\r\n    border-color: #ff7c55;\r\n}\r\n\r\n.btn:active:focus{\r\n    background-color: #ff7c55;\r\n    border-color: #ff7c55;\r\n    box-shadow: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1wYWdlL2NvbnRhY3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LXBhZ2UvY29udGFjdC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1vb25cIjtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcblxyXG5oMntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1vb25cIjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3YzU1O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY3YzU1O1xyXG59XHJcblxyXG4uYnRuOmFjdGl2ZTpmb2N1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjdjNTU7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZjdjNTU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/contact-page/contact-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/contact-page/contact-page.component.ts ***!
    \********************************************************/

  /*! exports provided: ContactPageComponent */

  /***/
  function srcAppContactPageContactPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function () {
      return ContactPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactPageComponent =
    /*#__PURE__*/
    function () {
      function ContactPageComponent() {
        _classCallCheck(this, ContactPageComponent);
      }

      _createClass(ContactPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactPageComponent;
    }();

    ContactPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'contact-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-page/contact-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-page.component.css */
      "./src/app/contact-page/contact-page.component.css")).default]
    })], ContactPageComponent);
    /***/
  },

  /***/
  "./src/app/donate-page/donate-page.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/donate-page/donate-page.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDonatePageDonatePageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1, h2{\r\n    font-family: 'moon';\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    margin-top: 3%;\r\n}\r\n\r\np{\r\n    font-family: 'moon';\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.input-group{\r\n    width: 15%;\r\n    font-family: 'moon';\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    margin-left: 43%;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n}\r\n\r\n.btn {\r\n    font-family: 'moon';\r\n    display: -webkit-box;\r\n    display: flex;\r\n    background-color: #ff7c55;\r\n    border-color: #ff7c55;\r\n}\r\n\r\n.btn:active:focus{\r\n    background-color: #ff7c55;\r\n    border-color: #ff7c55;\r\n    box-shadow: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uYXRlLXBhZ2UvZG9uYXRlLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZG9uYXRlLXBhZ2UvZG9uYXRlLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLCBoMntcclxuICAgIGZvbnQtZmFtaWx5OiAnbW9vbic7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtZmFtaWx5OiAnbW9vbic7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBmb250LWZhbWlseTogJ21vb24nO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQzJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdtb29uJztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3YzU1O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY3YzU1O1xyXG59XHJcblxyXG4uYnRuOmFjdGl2ZTpmb2N1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjdjNTU7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZjdjNTU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/donate-page/donate-page.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/donate-page/donate-page.component.ts ***!
    \******************************************************/

  /*! exports provided: DonatePageComponent */

  /***/
  function srcAppDonatePageDonatePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonatePageComponent", function () {
      return DonatePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DonatePageComponent =
    /*#__PURE__*/
    function () {
      function DonatePageComponent() {
        _classCallCheck(this, DonatePageComponent);
      }

      _createClass(DonatePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DonatePageComponent;
    }();

    DonatePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-donate-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./donate-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/donate-page/donate-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./donate-page.component.css */
      "./src/app/donate-page/donate-page.component.css")).default]
    })], DonatePageComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "footer{\r\n    background-color: #ff7c55;\r\n    Width: 100%;\r\n    bottom: 0;\r\n}\r\n\r\n.socials{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -webkit-box-pack: start;\r\n            justify-content: flex-start;\r\n    margin-left: 2%;\r\n}\r\n\r\n.icon{\r\n    margin-left: 2%;\r\n    height: 35px;\r\n    margin-top: 0.7%;\r\n}\r\n\r\np{\r\n    color: white;\r\n    margin-top: 1%;\r\n}\r\n\r\n.news-sub{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin-left: 2%;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n}\r\n\r\n.btn{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin-left: 1%;\r\n    margin-top: 0.7%;\r\n    height: 20%;\r\n}\r\n\r\nform{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin-left: 1%;\r\n    margin-top: 0.7%;\r\n    height: 20%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix1QkFBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsZUFBZTtJQUNmLHFCQUF5QjtZQUF6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2M1NTtcclxuICAgIFdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4uc29jaWFsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcblxyXG4uaWNvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbi10b3A6IDAuNyU7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxufVxyXG5cclxuLm5ld3Mtc3Vie1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgbWFyZ2luLXRvcDogMC43JTtcclxuICAgIGhlaWdodDogMjAlO1xyXG59XHJcblxyXG5mb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgIG1hcmdpbi10b3A6IDAuNyU7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/home-page/home-page.component.css":
  /*!***************************************************!*\
    !*** ./src/app/home-page/home-page.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePageHomePageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body{\r\n    background: #ff7c55\r\n}\r\n\r\nh1, h2{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    font-family: \"moon\";\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgYmFja2dyb3VuZDogI2ZmN2M1NVxyXG59XHJcblxyXG5oMSwgaDJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwibW9vblwiO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home-page/home-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/home-page/home-page.component.ts ***!
    \**************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomePageComponent =
    /*#__PURE__*/
    function () {
      function HomePageComponent() {
        _classCallCheck(this, HomePageComponent);
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomePageComponent;
    }();

    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'home-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-page.component.css */
      "./src/app/home-page/home-page.component.css")).default]
    })], HomePageComponent);
    /***/
  },

  /***/
  "./src/app/imgslider/imgslider.component.css":
  /*!***************************************************!*\
    !*** ./src/app/imgslider/imgslider.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppImgsliderImgsliderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltZ3NsaWRlci9pbWdzbGlkZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/imgslider/imgslider.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/imgslider/imgslider.component.ts ***!
    \**************************************************/

  /*! exports provided: ImgsliderComponent */

  /***/
  function srcAppImgsliderImgsliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImgsliderComponent", function () {
      return ImgsliderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ImgsliderComponent =
    /*#__PURE__*/
    function () {
      function ImgsliderComponent() {
        _classCallCheck(this, ImgsliderComponent);
      }

      _createClass(ImgsliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImgsliderComponent;
    }();

    ImgsliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'imgslider',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./imgslider.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/imgslider/imgslider.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./imgslider.component.css */
      "./src/app/imgslider/imgslider.component.css")).default]
    })], ImgsliderComponent);
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.css":
  /*!*********************************************!*\
    !*** ./src/app/navbar/navbar.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar-dark {\n  background-color: #ff7c55 !important;\n  font-family: \"Moon\";\n}\n\n.navbar-nav {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-left: 10%;\n}\n\n.nav-link {\n  color: white;\n}\n\n/*# sourceMappingURL=navbar.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQW9DO0VBQ3BDLG1CQUFtQjtBQ0N2Qjs7QURFQTtFQUNJLG9CQUFhO0VBRWIsYUFBYTtFQUVoQiw4QkFBQTtFQ0FDLDZCQUE2QjtVREdwQixtQkFBSztFQUNmLGdCQUFBO0FDQUQ7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0EsK0NBQStDIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/new-adopts/new-adopts.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/new-adopts/new-adopts.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewAdoptsNewAdoptsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-img-top, .card {\n  border-radius: 15px;\n}\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.card, #card-2, #card-3, #card-4, #card-5, #card-6 {\n  margin-left: 5%;\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n\n.btn {\n  background-color: #ff7c55;\n  border-color: #ff7c55;\n  font-family: \"moon\";\n}\n\n.btn:active:focus {\n  background-color: #ff7c55;\n  border-color: #ff7c55;\n  box-shadow: none;\n}\n\n/*# sourceMappingURL=new-adopts.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWFkb3B0cy9uZXctYWRvcHRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXctYWRvcHRzL25ldy1hZG9wdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQjtBQ0N2Qjs7QURFQTtFQUNJLG9CQUFhO0VBRWIsYUFBYTtFQUNiLHdCQUFtQjtVQ0ViLHVCQUF1QjtFRENqQyx5QkFBeUI7VUFFckIsbUJBQWM7RUFDZCw4QkFBaUI7RUFFcEIsNkJBQUE7VUFFRyxtQkFBQTtBQ0FKOztBQUVBO0VERUMsZUFBQTtFQ0FDLGNBQWM7RURFaEIsaUJBQWlCO0FDQWpCOztBQUVBO0VERUMseUJBQUE7RUNBQyxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUViLGdCQUFnQjtBQUMxQjs7QUFDQSxtREFBbUQiLCJmaWxlIjoic3JjL2FwcC9uZXctYWRvcHRzL25ldy1hZG9wdHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/new-adopts/new-adopts.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/new-adopts/new-adopts.component.ts ***!
    \****************************************************/

  /*! exports provided: NewAdoptsComponent */

  /***/
  function srcAppNewAdoptsNewAdoptsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewAdoptsComponent", function () {
      return NewAdoptsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NewAdoptsComponent =
    /*#__PURE__*/
    function () {
      function NewAdoptsComponent() {
        _classCallCheck(this, NewAdoptsComponent);
      }

      _createClass(NewAdoptsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewAdoptsComponent;
    }();

    NewAdoptsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'new-adopts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-adopts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-adopts/new-adopts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-adopts.component.css */
      "./src/app/new-adopts/new-adopts.component.css")).default]
    })], NewAdoptsComponent);
    /***/
  },

  /***/
  "./src/app/new-rescues/new-rescues.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/new-rescues/new-rescues.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewRescuesNewRescuesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-img-top, .card {\n  border-radius: 15px;\n}\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.card, #card-2, #card-3 {\n  margin-left: 5%;\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n\n.btn {\n  background-color: #ff7c55;\n  border-color: #ff7c55;\n  font-family: \"moon\";\n}\n\n.btn:active:focus {\n  background-color: #ff7c55;\n  border-color: #ff7c55;\n  box-shadow: none;\n}\n\n/*# sourceMappingURL=new-rescues.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXJlc2N1ZXMvbmV3LXJlc2N1ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25ldy1yZXNjdWVzL25ldy1yZXNjdWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7QUNDdkI7O0FERUE7RUFDSSxvQkFBYTtFQUViLGFBQWE7RUFDYix3QkFBbUI7VUNFYix1QkFBdUI7RURDakMseUJBQXVCO1VBRW5CLG1CQUFjO0VBQ2QsOEJBQWlCO0VBQ3BCLDZCQUFBO1VBRUcsbUJBQUE7QUNDSjs7QUFFQTtFRENDLGVBQUE7RUNDQyxjQUFjO0VEQ2hCLGlCQUFpQjtBQ0NqQjs7QUFFQTtFRENDLHlCQUFBO0VDQ0MscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFFYixnQkFBZ0I7QUFDMUI7O0FBQ0Esb0RBQW9EIiwiZmlsZSI6InNyYy9hcHAvbmV3LXJlc2N1ZXMvbmV3LXJlc2N1ZXMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/new-rescues/new-rescues.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/new-rescues/new-rescues.component.ts ***!
    \******************************************************/

  /*! exports provided: NewRescuesComponent */

  /***/
  function srcAppNewRescuesNewRescuesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewRescuesComponent", function () {
      return NewRescuesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NewRescuesComponent =
    /*#__PURE__*/
    function () {
      function NewRescuesComponent() {
        _classCallCheck(this, NewRescuesComponent);
      }

      _createClass(NewRescuesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewRescuesComponent;
    }();

    NewRescuesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'new-rescues',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-rescues.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-rescues/new-rescues.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-rescues.component.css */
      "./src/app/new-rescues/new-rescues.component.css")).default]
    })], NewRescuesComponent);
    /***/
  },

  /***/
  "./src/app/welcome/welcome.component.css":
  /*!***********************************************!*\
    !*** ./src/app/welcome/welcome.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppWelcomeWelcomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".jumbotron {\n  background-color: #ff7c55;\n}\n\n.display-4, .lead {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  color: white;\n}\n\n/*# sourceMappingURL=welcome.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtBQ0M3Qjs7QURFQTtFQUNJLG9CQUFhO0VBRWIsYUFBWTtFQUNmLHdCQUFBO1VDRVMsdUJBQXVCO0VBQy9CLFlBQVk7QUFDZDs7QUFDQSxnREFBZ0QiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/welcome/welcome.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/welcome/welcome.component.ts ***!
    \**********************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WelcomeComponent =
    /*#__PURE__*/
    function () {
      function WelcomeComponent() {
        _classCallCheck(this, WelcomeComponent);
      }

      _createClass(WelcomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WelcomeComponent;
    }();

    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'welcome',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./welcome.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./welcome.component.css */
      "./src/app/welcome/welcome.component.css")).default]
    })], WelcomeComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyClQLG9JnAjdFrXa5yvzc2BvWfikTBCYu0",
        authDomain: "ashworths-adoptions.firebaseapp.com",
        databaseURL: "https://ashworths-adoptions.firebaseio.com",
        projectId: "ashworths-adoptions",
        storageBucket: "ashworths-adoptions.appspot.com",
        messagingSenderId: "223466100658",
        appId: "1:223466100658:web:36f64f33725b54e63cf6ab",
        measurementId: "G-9G5TP5J4GZ"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\enoch\Code-projects\Ashworths-Adoptions\ashworths-adoptions\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map