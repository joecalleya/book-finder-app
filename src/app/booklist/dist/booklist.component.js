"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BooklistComponent = void 0;
var core_1 = require("@angular/core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var BooklistComponent = /** @class */ (function () {
    function BooklistComponent(firestore) {
        this.firestore = firestore;
        this.faBook = free_solid_svg_icons_1.faBook;
    }
    BooklistComponent.prototype.getSaved = function () {
        var _this = this;
        this.firestore.collection('savedBooks').get().toPromise().then(function (response) {
            _this.savedBooks = response.docs.map(function (d) { return d.data(); });
        });
    };
    BooklistComponent.prototype.ngOnInit = function () {
        this.getSaved();
    };
    BooklistComponent.prototype.handleSave = function (item) {
        this.firestore.collection('savedBooks').add(item);
    };
    __decorate([
        core_1.Input()
    ], BooklistComponent.prototype, "searchResult");
    BooklistComponent = __decorate([
        core_1.Component({
            selector: 'app-booklist',
            templateUrl: './booklist.component.html',
            styleUrls: ['./booklist.component.scss']
        })
    ], BooklistComponent);
    return BooklistComponent;
}());
exports.BooklistComponent = BooklistComponent;
