(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-patients-add-patient-add-patient-module"],{

/***/ "./src/app/pages/patients/add-patient/add-patient-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/patients/add-patient/add-patient-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: AddPatientPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPatientPageRoutingModule", function() { return AddPatientPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_patient_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-patient.page */ "./src/app/pages/patients/add-patient/add-patient.page.ts");




const routes = [
    {
        path: '',
        component: _add_patient_page__WEBPACK_IMPORTED_MODULE_3__["AddPatientPage"]
    }
];
let AddPatientPageRoutingModule = class AddPatientPageRoutingModule {
};
AddPatientPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddPatientPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/patients/add-patient/add-patient.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/patients/add-patient/add-patient.module.ts ***!
  \******************************************************************/
/*! exports provided: AddPatientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPatientPageModule", function() { return AddPatientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_patient_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-patient-routing.module */ "./src/app/pages/patients/add-patient/add-patient-routing.module.ts");
/* harmony import */ var _add_patient_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-patient.page */ "./src/app/pages/patients/add-patient/add-patient.page.ts");







let AddPatientPageModule = class AddPatientPageModule {
};
AddPatientPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_patient_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddPatientPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_add_patient_page__WEBPACK_IMPORTED_MODULE_6__["AddPatientPage"]]
    })
], AddPatientPageModule);



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let AlertService = class AlertService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    print(texte, couleur) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: texte,
                duration: 5000,
                color: couleur,
                position: 'top'
            });
            toast.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");



let ApiService = class ApiService {
    constructor() { }
    addImageForAdresseId(name, adresse, image) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (image === '') {
                    resolve('');
                }
                else {
                    const imgStorageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["default"].storage().ref(adresse + '/' + name + '.png');
                    const newPhoto = image.toString().substring(image.toString().indexOf('base64,') + 7, image.toString().indexOf('(see ') - 1);
                    return imgStorageRef.putString(newPhoto, 'base64', { contentType: 'image/png' }).then(() => {
                        return imgStorageRef.getDownloadURL().then(downloadUrl => {
                            resolve(downloadUrl);
                        });
                    }, (error) => {
                        reject(error);
                    });
                }
            });
        });
    }
    addRecordForAdresseId(name, adresse, record) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (record === '') {
                    resolve('');
                }
                else {
                    const waveStorageRef = firebase__WEBPACK_IMPORTED_MODULE_2__["default"].storage().ref(adresse + '/' + name + '.wav');
                    // tslint:disable-next-line:max-line-length
                    const newWave = record.replace('data:audio/wav;base64,', '');
                    return waveStorageRef.putString(newWave, 'base64', { contentType: 'audio/wav' }).then(() => {
                        return waveStorageRef.getDownloadURL().then(downloadUrl => {
                            resolve(downloadUrl);
                        });
                    }, (error) => {
                        reject(error);
                    });
                }
            });
        });
    }
};
ApiService.ctorParameters = () => [];
ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ })

}]);
//# sourceMappingURL=pages-patients-add-patient-add-patient-module-es2015.js.map