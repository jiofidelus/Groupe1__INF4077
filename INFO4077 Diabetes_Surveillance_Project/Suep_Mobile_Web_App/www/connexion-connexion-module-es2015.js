(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["connexion-connexion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/connexion/connexion.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/connexion/connexion.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border ion-padding\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"dark\" icon=\"arrow-back-outline\" defaultHref=\"/home\" text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Connexion</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form #form=\"ngForm\" (ngSubmit)=\"connexion(form)\">\n    <ion-list class=\"ion-no-margin ion-no-padding\">\n      <ion-item>\n        <ion-label position=\"floating\">Votre adresse email</ion-label>\n        <ion-input name=\"identifiant\" ngModel required inputmode=\"email\" autocomplete=\"true\" type=\"email\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Votre mot de passe</ion-label>\n        <ion-input name=\"password\" ngModel required inputmode=\"password\" type=\"password\"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class=\"ion-padding ion-margin-top\">\n      <ion-button mode=\"ios\" expand=\"block\" shape=\"round\" type=\"submit\" [disabled]=\"form.invalid\" class=\"ion-no-margin\">Se connecter</ion-button>\n    </div>\n    <div class=\"ion-padding ion-text-center\">\n      <ion-text [style.fontWeight]=\"'bold'\" [style.fontSize]=\"'13px'\" color=\"dark\"><span class=\"ion-margin-vertical\" (click)=\"presentResetPassword()\">J'ai oublié mon mot de passe</span></ion-text>\n    </div>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/connexion/connexion-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/connexion/connexion-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ConnexionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnexionPageRoutingModule", function() { return ConnexionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _connexion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connexion.page */ "./src/app/connexion/connexion.page.ts");




const routes = [
    {
        path: '',
        component: _connexion_page__WEBPACK_IMPORTED_MODULE_3__["ConnexionPage"]
    }
];
let ConnexionPageRoutingModule = class ConnexionPageRoutingModule {
};
ConnexionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConnexionPageRoutingModule);



/***/ }),

/***/ "./src/app/connexion/connexion.module.ts":
/*!***********************************************!*\
  !*** ./src/app/connexion/connexion.module.ts ***!
  \***********************************************/
/*! exports provided: ConnexionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnexionPageModule", function() { return ConnexionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _connexion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connexion-routing.module */ "./src/app/connexion/connexion-routing.module.ts");
/* harmony import */ var _connexion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connexion.page */ "./src/app/connexion/connexion.page.ts");







let ConnexionPageModule = class ConnexionPageModule {
};
ConnexionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _connexion_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConnexionPageRoutingModule"]
        ],
        declarations: [_connexion_page__WEBPACK_IMPORTED_MODULE_6__["ConnexionPage"]]
    })
], ConnexionPageModule);



/***/ }),

/***/ "./src/app/connexion/connexion.page.scss":
/*!***********************************************!*\
  !*** ./src/app/connexion/connexion.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvbm5leGlvbi9jb25uZXhpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/connexion/connexion.page.ts":
/*!*********************************************!*\
  !*** ./src/app/connexion/connexion.page.ts ***!
  \*********************************************/
/*! exports provided: ConnexionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnexionPage", function() { return ConnexionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_authentification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentification.service */ "./src/app/services/authentification.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");





let ConnexionPage = class ConnexionPage {
    constructor(appComponant, navCtrl, loadingController, alertController, authService) {
        this.appComponant = appComponant;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.authService = authService;
        this.isLoading = false;
    }
    ngOnInit() {
    }
    connexion(form) {
        this.present();
        this.authService.signInUser(form.value.identifiant, form.value.password).then(() => {
            this.dismiss();
            this.appComponant.afficheMenu = false;
            this.navCtrl.navigateForward('folder');
        }, (error) => {
        });
    }
    present() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                message: 'Veillez patienter...',
            }).then(a => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss();
                    }
                });
            });
        });
    }
    dismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController.dismiss();
        });
    }
    presentResetPassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Mot de passe oublié ?',
                message: 'Entrez l\'adresse email de votre compte. Nous enverrons un email à cette adresse.',
                inputs: [
                    {
                        name: 'emailRecup',
                        type: 'text',
                        placeholder: 'Email'
                    }
                ],
                buttons: [
                    {
                        text: 'Annuler',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }, {
                        text: 'Réinitialiser',
                        handler: (data) => {
                            return new Promise(() => {
                                this.authService.resetPassword(data.emailRecup).then(() => {
                                    this.dismiss();
                                    // this.notification('Les informations de reinitialisation ont été envoyer a votre adresse email', 'dark');
                                }, (error) => {
                                });
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ConnexionPage.ctorParameters = () => [
    { type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _services_authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthentificationService"] }
];
ConnexionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-connexion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./connexion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/connexion/connexion.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./connexion.page.scss */ "./src/app/connexion/connexion.page.scss")).default]
    })
], ConnexionPage);



/***/ })

}]);
//# sourceMappingURL=connexion-connexion-module-es2015.js.map