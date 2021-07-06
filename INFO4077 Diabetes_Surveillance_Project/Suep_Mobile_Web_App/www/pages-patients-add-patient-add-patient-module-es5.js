(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-patients-add-patient-add-patient-module"], {
    /***/
    "./src/app/pages/patients/add-patient/add-patient-routing.module.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/patients/add-patient/add-patient-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: AddPatientPageRoutingModule */

    /***/
    function srcAppPagesPatientsAddPatientAddPatientRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPatientPageRoutingModule", function () {
        return AddPatientPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _add_patient_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-patient.page */
      "./src/app/pages/patients/add-patient/add-patient.page.ts");

      var routes = [{
        path: '',
        component: _add_patient_page__WEBPACK_IMPORTED_MODULE_3__["AddPatientPage"]
      }];

      var AddPatientPageRoutingModule = function AddPatientPageRoutingModule() {
        _classCallCheck(this, AddPatientPageRoutingModule);
      };

      AddPatientPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddPatientPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/patients/add-patient/add-patient.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/pages/patients/add-patient/add-patient.module.ts ***!
      \******************************************************************/

    /*! exports provided: AddPatientPageModule */

    /***/
    function srcAppPagesPatientsAddPatientAddPatientModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPatientPageModule", function () {
        return AddPatientPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _add_patient_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-patient-routing.module */
      "./src/app/pages/patients/add-patient/add-patient-routing.module.ts");
      /* harmony import */


      var _add_patient_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-patient.page */
      "./src/app/pages/patients/add-patient/add-patient.page.ts");

      var AddPatientPageModule = function AddPatientPageModule() {
        _classCallCheck(this, AddPatientPageModule);
      };

      AddPatientPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_patient_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddPatientPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_add_patient_page__WEBPACK_IMPORTED_MODULE_6__["AddPatientPage"]]
      })], AddPatientPageModule);
      /***/
    },

    /***/
    "./src/app/services/alert.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/alert.service.ts ***!
      \*******************************************/

    /*! exports provided: AlertService */

    /***/
    function srcAppServicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return AlertService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var AlertService = /*#__PURE__*/function () {
        function AlertService(toastController) {
          _classCallCheck(this, AlertService);

          this.toastController = toastController;
        }

        _createClass(AlertService, [{
          key: "print",
          value: function print(texte, couleur) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: texte,
                        duration: 5000,
                        color: couleur,
                        position: 'top'
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return AlertService;
      }();

      AlertService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AlertService);
      /***/
    },

    /***/
    "./src/app/services/api.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/services/api.service.ts ***!
      \*****************************************/

    /*! exports provided: ApiService */

    /***/
    function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase */
      "./node_modules/firebase/dist/index.esm.js");

      var ApiService = /*#__PURE__*/function () {
        function ApiService() {
          _classCallCheck(this, ApiService);
        }

        _createClass(ApiService, [{
          key: "addImageForAdresseId",
          value: function addImageForAdresseId(name, adresse, image) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", new Promise(function (resolve, reject) {
                        if (image === '') {
                          resolve('');
                        } else {
                          var imgStorageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["default"].storage().ref(adresse + '/' + name + '.png');
                          var newPhoto = image.toString().substring(image.toString().indexOf('base64,') + 7, image.toString().indexOf('(see ') - 1);
                          return imgStorageRef.putString(newPhoto, 'base64', {
                            contentType: 'image/png'
                          }).then(function () {
                            return imgStorageRef.getDownloadURL().then(function (downloadUrl) {
                              resolve(downloadUrl);
                            });
                          }, function (error) {
                            reject(error);
                          });
                        }
                      }));

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "addRecordForAdresseId",
          value: function addRecordForAdresseId(name, adresse, record) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", new Promise(function (resolve, reject) {
                        if (record === '') {
                          resolve('');
                        } else {
                          var waveStorageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["default"].storage().ref(adresse + '/' + name + '.wav'); // tslint:disable-next-line:max-line-length

                          var newWave = record.replace('data:audio/wav;base64,', '');
                          return waveStorageRef.putString(newWave, 'base64', {
                            contentType: 'audio/wav'
                          }).then(function () {
                            return waveStorageRef.getDownloadURL().then(function (downloadUrl) {
                              resolve(downloadUrl);
                            });
                          }, function (error) {
                            reject(error);
                          });
                        }
                      }));

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }
        }]);

        return ApiService;
      }();

      ApiService.ctorParameters = function () {
        return [];
      };

      ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ApiService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-patients-add-patient-add-patient-module-es5.js.map