(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-folder-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ folder === null ? 'Quoi de neuf ?' : folder }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">{{ folder }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\" *ngIf=\"folder === null\"> <app-presentation></app-presentation> </div>\n  <div id=\"container\" *ngIf=\"folder === 'Sensibilisation'\"> <app-sensibilisation></app-sensibilisation> </div>\n  <div id=\"container\" *ngIf=\"folder === 'Deconnexion'\"> <app-deconnexion></app-deconnexion> </div>\n  <app-patients *ngIf=\"folder === 'Patients'\"></app-patients>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deconnexion/deconnexion.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deconnexion/deconnexion.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<img srcset=\"../assets/img/logout.png\" width=\"70%\"/>\n\n<h6> <p class=\"ion-padding-horizontal\"> Souhaitez vous vraiment être déconnecté ? <br> Vous devrez a nouveau vous reconnecté après la fermeture de cette session. </p> </h6>\n<ion-button (click)=\"deconnexion()\" mode=\"ios\" color=\"primary\">Se deconnecté</ion-button>\n\n<p class=\"ion-padding-vertical\">\n    <a (click)=\"about()\" [style.fontWeight]=\"'500'\">A propos de Suep</a>\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patients/patients.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patients/patients.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list class=\"ion-padding-horizontal\">\n  <ion-list-header>\n    La liste de vos patients\n  </ion-list-header>\n\n  <h6 *ngIf=\"patients.length === 0\"><p class=\"ion-text-center\">Aucun patient enregistré</p></h6>\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size-lg=\"4\" size-md=\"6\" size-sm=\"6\" size=\"6\">\n        <ion-card (click)=\"openPageAddPatient()\" button=\"true\" class=\"ion-no-padding\" style=\"margin: 4px;\">\n          <img srcset=\"../assets/img/add-patient.png\"/>\n          <ion-card-header>\n            <ion-card-subtitle [style.textTransform]=\"'capitalize'\">Patient</ion-card-subtitle>\n            <ion-card-title [style.textTransform]=\"'capitalize'\">Ajouter </ion-card-title>\n          </ion-card-header>\n          <ion-card-content [style.textTransform]=\"'capitalize'\">\n              Cliquez ici\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size-lg=\"4\" size-md=\"6\" size-sm=\"6\" size=\"6\" *ngFor=\"let patient of patients; let i = index\">\n        <ion-card button=\"true\" (click)=\"openPageApercu(patient.id)\" class=\"ion-no-padding\" style=\"margin: 4px;\">\n          <img [srcset]=\"patient.photo === '' ? (patient.sexe === 'm' ? '../assets/img/patient.png' : '../assets/img/patiente.png') : patient.photo\"/>\n          <ion-card-header>\n            <ion-card-subtitle [style.textTransform]=\"'capitalize'\">{{ patient.email.length>15 ? (patient.email | slice:0:13)+'..' : patient.email}}</ion-card-subtitle>\n            <ion-card-title [style.textTransform]=\"'capitalize'\">{{ (patient.nom + ' ' + patient.prenom).length > 10 ? patient.prenom : patient.nom + ' ' + patient.prenom }} </ion-card-title>\n          </ion-card-header>\n          <ion-card-content [style.textTransform]=\"'capitalize'\">\n            {{patient.description === '' ? (patient.telephone.length>10)? (patient.telephone | slice:0:8)+'..':(patient.telephone) : (patient.description.length>10)? (patient.description | slice:0:8)+'..':(patient.description)}}\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/presentation/presentation.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/presentation/presentation.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img srcset=\"../assets/img/whatsup.png\" width=\"70%\"/>\n\n<h6> <p class=\"ion-padding-horizontal\"> Consultez les nouvelles informations qui vous concernes dans les differents items. </p> </h6>\n\n<ion-grid class=\"ion-padding-horizontal\">\n    <ion-row>\n        <ion-col size-lg=\"4\" size-md=\"6\" size-sm=\"6\" size=\"6\">\n            <ion-card (click)=\"infoSymptomesDiabete()\"  routerDirection=\"forward\" class=\"ion-no-padding\" style=\"margin: 4px;\">\n                <img srcset=\"../assets/img/symptome.png\"/>\n                <ion-card-header>\n                    <ion-card-title>Infos.</ion-card-title>\n                </ion-card-header>\n                <ion-card-content>\n                    Consultez les infos sur le diabete.\n                </ion-card-content>\n            </ion-card>\n        </ion-col>\n\n        <ion-col size-lg=\"4\" size-md=\"6\" size-sm=\"6\" size=\"6\">\n            <ion-card button=\"true\" (click)=\"openPageStatistique()\" class=\"ion-no-padding\" style=\"margin: 4px;\">\n                <img srcset=\"../assets/img/stat.png\"/>\n                <ion-card-header>\n                    <ion-card-title>Statistiques</ion-card-title>\n                </ion-card-header>\n                <ion-card-content>\n                    Consultez les statistiques de l'épidémie.\n                </ion-card-content>\n            </ion-card>\n        </ion-col>\n\n    </ion-row>\n</ion-grid>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sensibilisation/sensibilisation.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sensibilisation/sensibilisation.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img srcset=\"../assets/img/sensibilisation.png\" width=\"70%\"/>\n\n<form [formGroup]=\"sensibiliseForm\" (ngSubmit)=\"send()\">\n  <ion-list align=\"center\" lines=\"inset\">\n    <ion-item lines=\"inset\">\n      <ion-label color=\"dark\" position=\"stacked\">Message de sensibilisation pour vos patients </ion-label>\n      <ion-textarea [disabled]=\"isLoading\" rows=\"7\" autocapitalize=\"on\" formControlName=\"texte\" inputmode=\"text\"></ion-textarea>\n    </ion-item>\n\n    <div class=\"ion-padding ion-margin-top\">\n      <ion-button expand=\"block\" shape=\"round\" mode=\"ios\" type=\"submit\" [disabled]=\"sensibiliseForm.invalid || isLoading\" class=\"ion-no-margin\">Envoyer à {{patients.length}} patient{{patients.length > 1 ? 's' : ''}}</ion-button>\n    </div>\n  </ion-list>\n  <div *ngIf=\"isLoading\" class=\"ion-text-center\">\n    <ion-spinner name=\"lines-small\"></ion-spinner>\n  </div>\n</form>\n");

/***/ }),

/***/ "./src/app/folder/folder-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/folder/folder-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FolderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageRoutingModule", function() { return FolderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./folder.page */ "./src/app/folder/folder.page.ts");




const routes = [
    {
        path: '',
        component: _folder_page__WEBPACK_IMPORTED_MODULE_3__["FolderPage"]
    }
];
let FolderPageRoutingModule = class FolderPageRoutingModule {
};
FolderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FolderPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/folder.module.ts":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.module.ts ***!
  \*****************************************/
/*! exports provided: FolderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageModule", function() { return FolderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./folder-routing.module */ "./src/app/folder/folder-routing.module.ts");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./folder.page */ "./src/app/folder/folder.page.ts");
/* harmony import */ var _pages_deconnexion_deconnexion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/deconnexion/deconnexion.component */ "./src/app/pages/deconnexion/deconnexion.component.ts");
/* harmony import */ var _pages_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/presentation/presentation.component */ "./src/app/pages/presentation/presentation.component.ts");
/* harmony import */ var _pages_sensibilisation_sensibilisation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/sensibilisation/sensibilisation.component */ "./src/app/pages/sensibilisation/sensibilisation.component.ts");
/* harmony import */ var _pages_patients_patients_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/patients/patients.component */ "./src/app/pages/patients/patients.component.ts");











let FolderPageModule = class FolderPageModule {
};
FolderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__["FolderPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_6__["FolderPage"], _pages_deconnexion_deconnexion_component__WEBPACK_IMPORTED_MODULE_7__["DeconnexionComponent"], _pages_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_8__["PresentationComponent"], _pages_sensibilisation_sensibilisation_component__WEBPACK_IMPORTED_MODULE_9__["SensibilisationComponent"], _pages_patients_patients_component__WEBPACK_IMPORTED_MODULE_10__["PatientsComponent"]]
    })
], FolderPageModule);



/***/ }),

/***/ "./src/app/folder/folder.page.scss":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2ZvbGRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL2ZvbGRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/folder/folder.page.ts":
/*!***************************************!*\
  !*** ./src/app/folder/folder.page.ts ***!
  \***************************************/
/*! exports provided: FolderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPage", function() { return FolderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let FolderPage = class FolderPage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    }
};
FolderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
FolderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-folder',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./folder.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./folder.page.scss */ "./src/app/folder/folder.page.scss")).default]
    })
], FolderPage);



/***/ }),

/***/ "./src/app/pages/deconnexion/deconnexion.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/deconnexion/deconnexion.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlY29ubmV4aW9uL2RlY29ubmV4aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/deconnexion/deconnexion.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/deconnexion/deconnexion.component.ts ***!
  \************************************************************/
/*! exports provided: DeconnexionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeconnexionComponent", function() { return DeconnexionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authentification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentification.service */ "./src/app/services/authentification.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");






let DeconnexionComponent = class DeconnexionComponent {
    constructor(alertController, authentificationService, navCtrl, alert, appComponent) {
        this.alertController = alertController;
        this.authentificationService = authentificationService;
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.appComponent = appComponent;
    }
    ngOnInit() { }
    deconnexion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authentificationService.signOut().then(() => {
                this.navCtrl.navigateBack('home');
                this.appComponent.afficheMenu = true;
            }, () => {
                this.alert.print('Une erreur est survenue lors de la deconnexion, veuillez reesayer', 'danger');
            });
        });
    }
    about() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'A Propos',
                message: '<h6> Suep v1.0 </h6>' +
                    '<small>Application de surveillance épidemologique (Diabete) </small> <br>' +
                    '<small> Projet d\'étude réalisé par </small> <br> <br>' +
                    '<small>• SEFFI TCHANGA PEGUY </small> <br>' +
                    '<small>• ETALI ETALI MATHIAS JUNIOR</small><br>' +
                    '<small>• NOUSSI NICOLAS </small><br>' +
                    '<small>• TEKOH PALMA ACHU </small> <br><br>' +
                    '<small>2021 • Groupe 1</small>',
                buttons: [
                    {
                        text: 'Fermer',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }
                ]
            });
            yield alert.present();
        });
    }
};
DeconnexionComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _services_authentification_service__WEBPACK_IMPORTED_MODULE_2__["AuthentificationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] }
];
DeconnexionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deconnexion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./deconnexion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deconnexion/deconnexion.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./deconnexion.component.scss */ "./src/app/pages/deconnexion/deconnexion.component.scss")).default]
    })
], DeconnexionComponent);



/***/ }),

/***/ "./src/app/pages/patients/patients.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/patients/patients.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnRzL3BhdGllbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/patients/patients.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/patients/patients.component.ts ***!
  \******************************************************/
/*! exports provided: PatientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsComponent", function() { return PatientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_patient_add_patient_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-patient/add-patient.page */ "./src/app/pages/patients/add-patient/add-patient.page.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var _apercu_apercu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apercu/apercu.page */ "./src/app/pages/patients/apercu/apercu.page.ts");






let PatientsComponent = class PatientsComponent {
    constructor(modalController) {
        this.modalController = modalController;
        this.coordinates = null;
        this.patients = [];
    }
    ngOnInit() {
        firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore().collection('patients').where('medecin', '==', firebase__WEBPACK_IMPORTED_MODULE_4__["default"].auth().currentUser.email).onSnapshot((docRef) => {
            this.patients = [];
            const appel = this;
            docRef.forEach(function (doc) {
                const tmp = doc.data();
                tmp.id = doc.id;
                appel.patients.push(tmp);
            });
        });
    }
    openPageAddPatient() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_patient_add_patient_page__WEBPACK_IMPORTED_MODULE_3__["AddPatientPage"]
            });
            return yield modal.present();
        });
    }
    openPageApercu(idPatient) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _apercu_apercu_page__WEBPACK_IMPORTED_MODULE_5__["ApercuPage"],
                componentProps: {
                    id: idPatient
                }
            });
            return yield modal.present();
        });
    }
};
PatientsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
PatientsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patients',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./patients.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patients/patients.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./patients.component.scss */ "./src/app/pages/patients/patients.component.scss")).default]
    })
], PatientsComponent);



/***/ }),

/***/ "./src/app/pages/presentation/presentation.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/presentation/presentation.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/presentation/presentation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/presentation/presentation.component.ts ***!
  \**************************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _statistique_statistique_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statistique/statistique.page */ "./src/app/pages/presentation/statistique/statistique.page.ts");




let PresentationComponent = class PresentationComponent {
    constructor(modalController, alertController) {
        this.modalController = modalController;
        this.alertController = alertController;
    }
    ngOnInit() { }
    openPageStatistique() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _statistique_statistique_page__WEBPACK_IMPORTED_MODULE_3__["StatistiquePage"]
            });
            return yield modal.present();
        });
    }
    infoSymptomesDiabete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Infos. Diabete',
                message: 'Le diabète est une maladie chronique caractérisée par une augmentation anormale du taux de sucre ' +
                    'dans le sang. Véritable préoccupation de santé publique, sa prévalence ne cesse d’augmenter en raison du ' +
                    'style de vie et du vieillissement de la population. Une prise en charge efficace permet au patient de vivre ' +
                    'normalement et de réduire les complications qui y sont liées.\n' +
                    'Symptômes :\n' +
                    '\n' +
                    'Diabète de type 1. L’apparition du diabète est soudaine. Elle s’accompagne des symptômes suivants : une soif anormale et une bouche sèche, un besoin fréquent d’uriner, une fatigue et un manque d’énergie, une forte perte de poids malgré un appétit augmenté, des infections récurrentes, une difficulté de cicatrisation et une vision trouble.\n' +
                    '\n' +
                    'Diabète de type 2. Plus sournois, ce diabète évolue durant de nombreuses années de manière silencieuse.\n' +
                    '\n' +
                    'Modalités de diagnostic :\n' +
                    '\n' +
                    'Glycémie à jeun égale ou supérieure à 1,26g/l, à deux reprises, réalisée au laboratoire de biologie médicale.',
                buttons: [
                    {
                        text: 'Fermer',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }
                ]
            });
            yield alert.present();
        });
    }
};
PresentationComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
PresentationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-presentation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./presentation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/presentation/presentation.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./presentation.component.scss */ "./src/app/pages/presentation/presentation.component.scss")).default]
    })
], PresentationComponent);



/***/ }),

/***/ "./src/app/pages/sensibilisation/sensibilisation.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/sensibilisation/sensibilisation.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbnNpYmlsaXNhdGlvbi9zZW5zaWJpbGlzYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/sensibilisation/sensibilisation.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/sensibilisation/sensibilisation.component.ts ***!
  \********************************************************************/
/*! exports provided: SensibilisationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensibilisationComponent", function() { return SensibilisationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var _services_sms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sms.service */ "./src/app/services/sms.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");






let SensibilisationComponent = class SensibilisationComponent {
    constructor(formBuilder, smsService, alertService) {
        this.formBuilder = formBuilder;
        this.smsService = smsService;
        this.alertService = alertService;
        this.isLoading = false;
        this.patients = [];
        this.listNumber = [];
        this.sensibiliseForm = this.formBuilder.group({
            texte: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
        firebase__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collection('patients').where('medecin', '==', firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser.email).onSnapshot((docRef) => {
            this.patients = [];
            const appel = this;
            docRef.forEach(function (doc) {
                appel.patients.push(doc.data());
            });
        });
    }
    send() {
        this.isLoading = true;
        const appel = this;
        this.patients.forEach(function (patient) {
            appel.listNumber.push(patient.telephone);
        });
        this.smsService.getData(this.listNumber, appel.sensibiliseForm.value.texte).then(() => {
            this.isLoading = false;
            this.alertService.print('Opération éffectuée', 'dark');
        }, (error) => {
            this.isLoading = false;
            this.alertService.print('Une erreur est survenue lors de l\'opération, veillez reesayer', 'danger');
        });
    }
};
SensibilisationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_sms_service__WEBPACK_IMPORTED_MODULE_4__["SmsService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
SensibilisationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sensibilisation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sensibilisation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sensibilisation/sensibilisation.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sensibilisation.component.scss */ "./src/app/pages/sensibilisation/sensibilisation.component.scss")).default]
    })
], SensibilisationComponent);



/***/ }),

/***/ "./src/app/services/sms.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/sms.service.ts ***!
  \*****************************************/
/*! exports provided: SmsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmsService", function() { return SmsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let SmsService = class SmsService {
    constructor(http) {
        this.http = http;
        this.accountSid = 'AC02114244dad72bc114cf6ccf2166a85c';
        this.authToken = '0454f3f569691230a2fc41e10508f005';
    }
    // tslint:disable-next-line:variable-name
    getData(numbers, message) {
        let cmp = 0;
        const appel = this;
        return new Promise((resolve, reject) => {
            // tslint:disable-next-line:variable-name
            numbers.forEach(function (number) {
                cmp++;
                const head = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                    .set('d', 'From=+15853784079')
                    .set('d', 'Body=' + message)
                    .set('d', 'To=' + number)
                    .set('u', 'AC02114244dad72bc114cf6ccf2166a85c:0454f3f569691230a2fc41e10508f005');
                return appel.http.post('https://api.twilio.com/2010-04-01/Accounts/AC02114244dad72bc114cf6ccf2166a85c/Messages.json', { title: 'Angular POST Request Example' }, { headers: head })
                    .subscribe((result) => {
                    cmp++;
                    if (cmp === numbers.length) {
                        resolve();
                    }
                }, (error) => {
                    reject(error);
                });
            });
        });
    }
};
SmsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SmsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SmsService);



/***/ })

}]);
//# sourceMappingURL=folder-folder-module-es2015.js.map