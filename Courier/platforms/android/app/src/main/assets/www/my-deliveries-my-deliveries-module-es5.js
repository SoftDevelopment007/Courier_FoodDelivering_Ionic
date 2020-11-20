function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-deliveries-my-deliveries-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/my-deliveries/my-deliveries.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-deliveries/my-deliveries.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyDeliveriesMyDeliveriesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-title>{{'my_deliveries' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\">\r\n\t<ion-list lines=\"none\">\r\n\t\t<h2>{{'pending_deliveries' | translate}}</h2>\r\n\r\n\t\t<ion-item class=\"pending item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/courier.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Courier</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'pickup_arranged' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">20 Jun 2020, 11:40 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 8.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4>Emili Williamson</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\r\n\t\t<ion-item class=\"pending item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/food.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Food</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'pickup_arranged' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">20 Jun 2020, 11:35 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 6.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4>Silver Leaf Restaurant</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\r\n\t\t<h2>{{'past_deliveries' | translate}}</h2>\r\n\r\n\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/grocery.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Grocery</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">18 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4>7-11 Grocery Mart</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\t\r\n\t\t\r\n\t\t\r\n\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/food.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Food</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">15 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4> YoLO Fast Foods</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/grocery.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Grocery</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">18 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4>7-11 Grocery Mart</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\t\r\n\t\t\r\n\t\t\r\n\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/food.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Food</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">15 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4> YoLO Fast Foods</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/grocery.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Grocery</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">18 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4>7-11 Grocery Mart</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\t\r\n\t\t\r\n\t\t\r\n\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/food.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Food</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">15 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4> YoLO Fast Foods</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/grocery.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Grocery</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">18 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4>7-11 Grocery Mart</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\t\r\n\t\t\r\n\t\t\r\n\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/food.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Food</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">15 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4> YoLO Fast Foods</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/grocery.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Grocery</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">18 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4>7-11 Grocery Mart</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\t\r\n\t\t\r\n\t\t\r\n\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/food.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Food</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">15 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4> YoLO Fast Foods</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/grocery.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Grocery</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">18 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4>7-11 Grocery Mart</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\t\r\n\t\t\r\n\t\t\r\n\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/food.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Food</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">15 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4> YoLO Fast Foods</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/grocery.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Grocery</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">18 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4>7-11 Grocery Mart</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\t\r\n\t\t\r\n\t\t\r\n\t\t<ion-item class=\"past item_shadow\" (click)=\"track_delivery()\">\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<div class=\"item_header d-flex\">\r\n\t\t\t\t\t<div class=\"img_box\">\r\n\t\t\t\t\t\t<img src=\"assets/images/food.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text_box\">\r\n\t\t\t\t\t\t<h3 class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"item_title\">Food</span>\r\n\t\t\t\t\t\t\t<span class=\"end status ion-text-end\">{{'delivered' | translate}} </span>\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t<p class=\"d-flex\">\r\n\t\t\t\t\t\t\t<span class=\"date_time\">15 Jun 2020,  1:48 am </span>\r\n\t\t\t\t\t\t\t<span class=\"end price ion-text-end\"> $ 20.50 </span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"item_footer d-flex\">\r\n\t\t\t\t\t<h4> YoLO Fast Foods</h4>\r\n\t\t\t\t\t<h5 class=\"ion-text-center\">\r\n\t\t\t\t\t\t<span class=\"icon_container\">\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-pin ion-text-start\"></ion-icon>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<span class=\"dotted_icon\"></span>\r\n\t\t\t\t\t\t\t<ion-icon class=\"zmdi zmdi-navigation ion-text-end\"></ion-icon>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h5>\r\n\t\t\t\t\t<h4 class=\"ion-text-end\">Samantha Smith</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t\r\n\t</ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/my-deliveries/my-deliveries-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/my-deliveries/my-deliveries-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: MyDeliveriesPageRoutingModule */

  /***/
  function srcAppMyDeliveriesMyDeliveriesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyDeliveriesPageRoutingModule", function () {
      return MyDeliveriesPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _my_deliveries_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-deliveries.page */
    "./src/app/my-deliveries/my-deliveries.page.ts");

    var routes = [{
      path: '',
      component: _my_deliveries_page__WEBPACK_IMPORTED_MODULE_3__["MyDeliveriesPage"]
    }];

    var MyDeliveriesPageRoutingModule = function MyDeliveriesPageRoutingModule() {
      _classCallCheck(this, MyDeliveriesPageRoutingModule);
    };

    MyDeliveriesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyDeliveriesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/my-deliveries/my-deliveries.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/my-deliveries/my-deliveries.module.ts ***!
    \*******************************************************/

  /*! exports provided: MyDeliveriesPageModule */

  /***/
  function srcAppMyDeliveriesMyDeliveriesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyDeliveriesPageModule", function () {
      return MyDeliveriesPageModule;
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _my_deliveries_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-deliveries-routing.module */
    "./src/app/my-deliveries/my-deliveries-routing.module.ts");
    /* harmony import */


    var _my_deliveries_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./my-deliveries.page */
    "./src/app/my-deliveries/my-deliveries.page.ts");

    var MyDeliveriesPageModule = function MyDeliveriesPageModule() {
      _classCallCheck(this, MyDeliveriesPageModule);
    };

    MyDeliveriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _my_deliveries_routing_module__WEBPACK_IMPORTED_MODULE_6__["MyDeliveriesPageRoutingModule"]],
      declarations: [_my_deliveries_page__WEBPACK_IMPORTED_MODULE_7__["MyDeliveriesPage"]]
    })], MyDeliveriesPageModule);
    /***/
  },

  /***/
  "./src/app/my-deliveries/my-deliveries.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/my-deliveries/my-deliveries.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyDeliveriesMyDeliveriesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title {\n  padding: 0 25px !important;\n  font-size: 1.4rem;\n  text-align: center;\n  font-weight: 500;\n}\n\nion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 14px 6px 0px 6px;\n}\n\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 1rem;\n  padding: 9px 6px 16px 6px;\n}\n\nion-list ion-item {\n  padding: 0;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent);\n  --min-height: unset;\n  margin-bottom: 12px;\n  background: var(--white);\n  border-radius: 8px;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n  overflow: hidden;\n}\n\nion-list ion-item .item_inner .item_header {\n  padding: 10px 13px 7px 13px;\n}\n\nion-list ion-item .item_inner .item_header .img_box {\n  width: 48px;\n  min-width: 48px;\n  margin-right: 10px;\n}\n\nion-list ion-item .item_inner .item_header .text_box {\n  width: 100%;\n  overflow: hidden;\n}\n\nion-list ion-item .item_inner .item_header .text_box h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  padding-bottom: 4px;\n  color: var(--text-black);\n}\n\nion-list ion-item .item_inner .item_header .text_box h3 span.item_title {\n  width: 100%;\n  max-width: calc(100% - 131px);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\nion-list ion-item .item_inner .item_header .text_box h3 span.status {\n  min-width: 125px;\n  font-weight: 500;\n  font-size: 0.9rem;\n  letter-spacing: 0.5px;\n}\n\nion-list ion-item .item_inner .item_header .text_box p {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.9rem;\n}\n\nion-list ion-item .item_inner .item_header .text_box p span.price {\n  min-width: 70px;\n}\n\nion-list ion-item .item_inner .item_footer {\n  background: var(--bg-color);\n  padding: 13px 13px 12px 13px;\n}\n\nion-list ion-item .item_inner .item_footer h4 {\n  color: var(--text-black);\n  margin: 0;\n  font-size: 0.87rem;\n  font-weight: 700;\n  letter-spacing: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  min-width: 35%;\n  max-height: 35%;\n}\n\nion-list ion-item .item_inner .item_footer h5 {\n  margin: 0;\n  min-width: 30%;\n  max-height: 30%;\n}\n\nion-list ion-item .item_inner .item_footer h5 .icon_container {\n  display: flex;\n  align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n}\n\nion-list ion-item .item_inner .item_footer h5 ion-icon {\n  color: var(--primary);\n  font-size: 1.3rem;\n  display: block;\n}\n\nion-list ion-item .item_inner .item_footer h5 span.dotted_icon {\n  background: var(--text-light);\n  display: block;\n  min-width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  margin: 0 1px;\n}\n\nion-list ion-item.pending .item_inner .item_header .text_box h3 span.status {\n  color: var(--primary);\n}\n\nion-list ion-item.past .item_inner .item_header .text_box h3 span.status {\n  color: var(--text-dark);\n  font-weight: 600;\n  letter-spacing: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktZGVsaXZlcmllcy9EOlxcTW9iaWxlRnJhbXdvcmtzXFxJb25pY1xcUmVzb3VyY2VzXFxpb25pY1RlbXBsYXRlXFxjb3VyaWVyL3NyY1xcYXBwXFxteS1kZWxpdmVyaWVzXFxteS1kZWxpdmVyaWVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXktZGVsaXZlcmllcy9teS1kZWxpdmVyaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FESUE7RUFDQyx5Q0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQ0REOztBREdDO0VBQ0MsU0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDREY7O0FESUM7RUFDQyxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FDRkY7O0FESUU7RUFDQyxXQUFBO0VBQ0EsZ0JBQUE7QUNGSDs7QURJRztFQUNDLDJCQUFBO0FDRko7O0FESUk7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRkw7O0FES0k7RUFDQyxXQUFBO0VBQ0EsZ0JBQUE7QUNITDs7QURLSztFQUNDLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQ0hOOztBRE1PO0VBQ0MsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDSlI7O0FET087RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0xSOztBRFVLO0VBQ0MsU0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUNSTjs7QURXTztFQUNDLGVBQUE7QUNUUjs7QURnQkc7RUFDQywyQkFBQTtFQUNBLDRCQUFBO0FDZEo7O0FEZ0JJO0VBQ0Msd0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNkTDs7QURpQkk7RUFDQyxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNmTDs7QURpQks7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0FDZk47O0FEa0JLO0VBQ0MscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNoQk47O0FEb0JNO0VBQ0MsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNsQlA7O0FENkJLO0VBQ0MscUJBQUE7QUMzQk47O0FEcUNLO0VBQ0MsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDbkNOIiwiZmlsZSI6InNyYy9hcHAvbXktZGVsaXZlcmllcy9teS1kZWxpdmVyaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG5cdGlvbi10b29sYmFyIGlvbi10aXRsZSB7XHJcblx0XHRwYWRkaW5nOiAwIDI1cHggIWltcG9ydGFudDtcclxuXHRcdGZvbnQtc2l6ZTogMS40cmVtO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHR9XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMTRweCA2cHggMHB4IDZweDtcclxuXHJcblx0aDIge1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG5cdFx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdFx0cGFkZGluZzogOXB4IDZweCAxNnB4IDZweDtcclxuXHR9XHJcblxyXG5cdGlvbi1pdGVtIHtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcblx0XHQtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XHJcblx0XHQtLWhpZ2hsaWdoLWNvbG9yLWZvY3VzZWQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XHJcblx0XHQtLW1pbi1oZWlnaHQ6IHVuc2V0O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTJweDtcclxuXHRcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcblx0XHQuaXRlbV9pbm5lciB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuXHRcdFx0Lml0ZW1faGVhZGVyIHtcclxuXHRcdFx0XHRwYWRkaW5nOiAxMHB4IDEzcHggN3B4IDEzcHg7XHJcblxyXG5cdFx0XHRcdC5pbWdfYm94IHtcclxuXHRcdFx0XHRcdHdpZHRoOiA0OHB4O1xyXG5cdFx0XHRcdFx0bWluLXdpZHRoOiA0OHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnRleHRfYm94IHtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcblx0XHRcdFx0XHRoMyB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjFyZW07XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiA0cHg7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcclxuXHJcblx0XHRcdFx0XHRcdHNwYW4ge1xyXG5cdFx0XHRcdFx0XHRcdCYuaXRlbV90aXRsZSB7XHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0XHRcdG1heC13aWR0aDogY2FsYygxMDAlIC0gMTMxcHgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0XHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHRcdFx0XHRcdFx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdCYuc3RhdHVzIHtcclxuXHRcdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogMTI1cHg7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuOXJlbTtcclxuXHRcdFx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAuNXB4O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHAge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuOXJlbTtcclxuXHJcblx0XHRcdFx0XHRcdHNwYW4ge1xyXG5cdFx0XHRcdFx0XHRcdCYucHJpY2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0bWluLXdpZHRoOiA3MHB4O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Lml0ZW1fZm9vdGVyIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XHJcblx0XHRcdFx0cGFkZGluZzogMTNweCAxM3B4IDEycHggMTNweDtcclxuXHJcblx0XHRcdFx0aDQge1xyXG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAuODdyZW07XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDA7XHJcblx0XHRcdFx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0XHRcdFx0bWluLXdpZHRoOiAzNSU7XHJcblx0XHRcdFx0XHRtYXgtaGVpZ2h0OiAzNSU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRoNSB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRtaW4td2lkdGg6IDMwJTtcclxuXHRcdFx0XHRcdG1heC1oZWlnaHQ6IDMwJTtcclxuXHJcblx0XHRcdFx0XHQuaWNvbl9jb250YWluZXIge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogZml0LWNvbnRlbnQ7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlvbi1pY29uIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDEuM3JlbTtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0c3BhbiB7XHJcblx0XHRcdFx0XHRcdCYuZG90dGVkX2ljb24ge1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHZhcigtLXRleHQtbGlnaHQpO1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogM3B4O1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogM3B4O1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDAgMXB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ji5wZW5kaW5nIHtcclxuXHRcdFx0Lml0ZW1faW5uZXIgLml0ZW1faGVhZGVyIC50ZXh0X2JveCBoMyB7XHJcblxyXG5cdFx0XHRcdHNwYW4ge1xyXG5cdFx0XHRcdFx0Ji5zdGF0dXMge1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVx0XHJcblx0XHQmLnBhc3Qge1xyXG5cdFx0XHQuaXRlbV9pbm5lciAuaXRlbV9oZWFkZXIgLnRleHRfYm94IGgzIHtcclxuXHJcblx0XHRcdFx0c3BhbiB7XHJcblx0XHRcdFx0XHQmLnN0YXR1cyB7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgcGFkZGluZzogMCAyNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTRweCA2cHggMHB4IDZweDtcbn1cbmlvbi1saXN0IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogOXB4IDZweCAxNnB4IDZweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgcGFkZGluZzogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCk7XG4gIC0tbWluLWhlaWdodDogdW5zZXQ7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2hlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHggMTNweCA3cHggMTNweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2hlYWRlciAuaW1nX2JveCB7XG4gIHdpZHRoOiA0OHB4O1xuICBtaW4td2lkdGg6IDQ4cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2hlYWRlciAudGV4dF9ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2hlYWRlciAudGV4dF9ib3ggaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9oZWFkZXIgLnRleHRfYm94IGgzIHNwYW4uaXRlbV90aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEzMXB4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9oZWFkZXIgLnRleHRfYm94IGgzIHNwYW4uc3RhdHVzIHtcbiAgbWluLXdpZHRoOiAxMjVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2hlYWRlciAudGV4dF9ib3ggcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2hlYWRlciAudGV4dF9ib3ggcCBzcGFuLnByaWNlIHtcbiAgbWluLXdpZHRoOiA3MHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1fZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xuICBwYWRkaW5nOiAxM3B4IDEzcHggMTJweCAxM3B4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1fZm9vdGVyIGg0IHtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC44N3JlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDM1JTtcbiAgbWF4LWhlaWdodDogMzUlO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1fZm9vdGVyIGg1IHtcbiAgbWFyZ2luOiAwO1xuICBtaW4td2lkdGg6IDMwJTtcbiAgbWF4LWhlaWdodDogMzAlO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLml0ZW1fZm9vdGVyIGg1IC5pY29uX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAuaXRlbV9mb290ZXIgaDUgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC5pdGVtX2Zvb3RlciBoNSBzcGFuLmRvdHRlZF9pY29uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGV4dC1saWdodCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4td2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwIDFweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtLnBlbmRpbmcgLml0ZW1faW5uZXIgLml0ZW1faGVhZGVyIC50ZXh0X2JveCBoMyBzcGFuLnN0YXR1cyB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtLnBhc3QgLml0ZW1faW5uZXIgLml0ZW1faGVhZGVyIC50ZXh0X2JveCBoMyBzcGFuLnN0YXR1cyB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/my-deliveries/my-deliveries.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/my-deliveries/my-deliveries.page.ts ***!
    \*****************************************************/

  /*! exports provided: MyDeliveriesPage */

  /***/
  function srcAppMyDeliveriesMyDeliveriesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyDeliveriesPage", function () {
      return MyDeliveriesPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MyDeliveriesPage = /*#__PURE__*/function () {
      function MyDeliveriesPage(route) {
        _classCallCheck(this, MyDeliveriesPage);

        this.route = route;
      }

      _createClass(MyDeliveriesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "track_delivery",
        value: function track_delivery() {
          this.route.navigate(['./track-delivery']);
        }
      }]);

      return MyDeliveriesPage;
    }();

    MyDeliveriesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    MyDeliveriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-deliveries',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-deliveries.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/my-deliveries/my-deliveries.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-deliveries.page.scss */
      "./src/app/my-deliveries/my-deliveries.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], MyDeliveriesPage);
    /***/
  }
}]);
//# sourceMappingURL=my-deliveries-my-deliveries-module-es5.js.map