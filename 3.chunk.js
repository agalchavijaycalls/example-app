webpackJsonp([3],{

/***/ 836:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(132);
	__webpack_require__(133);
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(304);
	var store_1 = __webpack_require__(42);
	var reducers_1 = __webpack_require__(303);
	var book_1 = __webpack_require__(110);
	var book_detail_1 = __webpack_require__(845);
	var BookViewPage = (function () {
	    function BookViewPage(store, bookActions, routeParams$) {
	        this.store = store;
	        this.bookActions = bookActions;
	        this.routeParams$ = routeParams$;
	        this.book$ = routeParams$
	            .select('id')
	            .switchMap(function (id) { return store.let(reducers_1.getBook(id)); });
	        this.isBookInCollection$ = routeParams$
	            .select('id')
	            .switchMap(function (id) { return store.let(reducers_1.isBookInCollection(id)); });
	    }
	    BookViewPage.prototype.addToCollection = function (book) {
	        this.store.dispatch(this.bookActions.addToCollection(book));
	    };
	    BookViewPage.prototype.removeFromCollection = function (book) {
	        this.store.dispatch(this.bookActions.removeFromCollection(book));
	    };
	    BookViewPage = __decorate([
	        core_1.Component({
	            selector: 'book-view-page',
	            directives: [book_detail_1.BookDetailComponent],
	            template: "\n    <book-detail\n      [book]=\"book$ | async\"\n      [inCollection]=\"isBookInCollection$ | async\"\n      (add)=\"addToCollection($event)\"\n      (remove)=\"removeFromCollection($event)\">\n    </book-detail>\n  "
	        }), 
	        __metadata('design:paramtypes', [store_1.Store, book_1.BookActions, router_1.RouteParams])
	    ], BookViewPage);
	    return BookViewPage;
	}());
	exports.BookViewPage = BookViewPage;


/***/ },

/***/ 839:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	/*

	<md-card> is a basic content container component that adds the styles of a material design card.

	While you can use this component alone,
	it also provides a number of preset styles for common card sections, including:
	 - md-card-title
	 - md-card-subtitle
	 - md-card-content
	 - md-card-actions
	 - md-card-footer

	 You can see some examples of cards here:
	 http://embed.plnkr.co/s5O4YcyvbLhIApSrIhtj/

	 TODO(kara): update link to demo site when it exists

	*/
	var MdCard = (function () {
	    function MdCard() {
	    }
	    MdCard = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'md-card',
	            template: "<div class=\"md-card\"> <ng-content></ng-content> </div> ",
	            styles: ["/** * A collection of mixins and CSS classes that can be used to apply elevation to a material * element. * See: https://www.google.com/design/spec/what-is-material/elevation-shadows.html * Examples: * * * .md-foo { *   @include $md-elevation(2); * *   &:active { *     @include $md-elevation(8); *   } * } * * <div id=\"external-card\" class=\"md-elevation-z2\"><p>Some content</p></div> * * For an explanation of the design behind how elevation is implemented, see the design doc at * https://goo.gl/Kq0k9Z. */ /** * The css property used for elevation. In most cases this should not be changed. It is exposed * as a variable for abstraction / easy use when needing to reference the property directly, for * example in a will-change rule. */ /** The default duration value for elevation transitions. */ /** The default easing value for elevation transitions. */ /** * Applies the correct css rules to an element to give it the elevation specified by $zValue. * The $zValue must be between 0 and 24. */ /** * Returns a string that can be used as the value for a transition property for elevation. * Calling this function directly is useful in situations where a component needs to transition * more than one property. * * .foo { *   transition: md-elevation-transition-property-value(), opacity 100ms ease; *   will-change: $md-elevation-property, opacity; * } */ /** * Applies the correct css rules needed to have an element transition between elevations. * This mixin should be applied to elements whose elevation values will change depending on their * context (e.g. when active or disabled). */ md-card { box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); -webkit-transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1); transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1); will-change: box-shadow; display: block; position: relative; padding: 24px; border-radius: 2px; font-family: Roboto, \"Helvetica Neue\", sans-serif; background: white; color: black; } md-card:hover { box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); } .md-card-flat { box-shadow: none; } md-card-title, md-card-subtitle, md-card-content, md-card-actions { display: block; margin-bottom: 16px; } md-card-title { font-size: 24px; font-weight: 400; } md-card-subtitle { font-size: 14px; color: rgba(0, 0, 0, 0.54); } md-card-content { font-size: 14px; } md-card-actions { margin-left: -16px; margin-right: -16px; padding: 8px 0; } md-card-actions[align='end'] { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; } [md-card-image] { width: calc(100% + 48px); margin: 0 -24px 16px -24px; } [md-card-xl-image] { width: 240px; height: 240px; margin: -8px; } md-card-footer { position: absolute; bottom: 0; } md-card-actions [md-button], md-card-actions [md-raised-button] { margin: 0 4px; } /* HEADER STYLES */ md-card-header { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; height: 40px; margin: -8px 0 16px 0; } .md-card-header-text { height: 40px; margin: 0 8px; } [md-card-avatar] { height: 40px; width: 40px; border-radius: 50%; } md-card-header md-card-title { font-size: 14px; } /* TITLE-GROUP STYLES */ [md-card-sm-image], [md-card-md-image], [md-card-lg-image] { margin: -8px 0; } md-card-title-group { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between; margin: 0 -8px; } [md-card-sm-image] { width: 80px; height: 80px; } [md-card-md-image] { width: 112px; height: 112px; } [md-card-lg-image] { width: 152px; height: 152px; } /* MEDIA QUERIES */ @media (max-width: 600px) { md-card { padding: 24px 16px; } [md-card-image] { width: calc(100% + 32px); margin: 16px -16px; } md-card-title-group { margin: 0; } [md-card-xl-image] { margin-left: 0; margin-right: 0; } md-card-header { margin: -8px 0 0 0; } } /* FIRST/LAST CHILD ADJUSTMENTS */ .md-card > :first-child, md-card-content > :first-child { margin-top: 0; } .md-card > :last-child, md-card-content > :last-child { margin-bottom: 0; } [md-card-image]:first-child { margin-top: -24px; } .md-card > md-card-actions:last-child { margin-bottom: -16px; padding-bottom: 0; } md-card-actions [md-button]:first-child, md-card-actions [md-raised-button]:first-child { margin-left: 0; margin-right: 0; } md-card-title:not(:first-child), md-card-subtitle:not(:first-child) { margin-top: -4px; } md-card-header md-card-subtitle:not(:first-child) { margin-top: -8px; } .md-card > [md-card-xl-image]:first-child { margin-top: -8px; } .md-card > [md-card-xl-image]:last-child { margin-bottom: -8px; } "],
	            encapsulation: core_1.ViewEncapsulation.None,
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdCard);
	    return MdCard;
	}());
	exports.MdCard = MdCard;
	/*  The following components don't have any behavior.
	 They simply use content projection to wrap user content
	 for flex layout purposes in <md-card> (and thus allow a cleaner, boilerplate-free API).


	<md-card-header> is a component intended to be used within the <md-card> component.
	It adds styles for a preset header section (i.e. a title, subtitle, and avatar layout).

	You can see an example of a card with a header here:
	http://embed.plnkr.co/tvJl19z3gZTQd6WmwkIa/

	TODO(kara): update link to demo site when it exists
	*/
	var MdCardHeader = (function () {
	    function MdCardHeader() {
	    }
	    MdCardHeader = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'md-card-header',
	            template: "<ng-content select=\"[md-card-avatar]\"></ng-content> <div class=\"md-card-header-text\"> <ng-content select=\"md-card-title, md-card-subtitle\"></ng-content> </div> <ng-content></ng-content> ",
	            encapsulation: core_1.ViewEncapsulation.None,
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdCardHeader);
	    return MdCardHeader;
	}());
	exports.MdCardHeader = MdCardHeader;
	/*

	<md-card-title-group> is a component intended to be used within the <md-card> component.
	It adds styles for a preset layout that groups an image with a title section.

	You can see an example of a card with a title-group section here:
	http://embed.plnkr.co/EDfgCF9eKcXjini1WODm/

	TODO(kara): update link to demo site when it exists
	*/
	var MdCardTitleGroup = (function () {
	    function MdCardTitleGroup() {
	    }
	    MdCardTitleGroup = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'md-card-title-group',
	            template: "<div> <ng-content select=\"md-card-title, md-card-subtitle\"></ng-content> </div> <ng-content select=\"img\"></ng-content> <ng-content></ng-content> ",
	            encapsulation: core_1.ViewEncapsulation.None,
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdCardTitleGroup);
	    return MdCardTitleGroup;
	}());
	exports.MdCardTitleGroup = MdCardTitleGroup;
	exports.MD_CARD_DIRECTIVES = [MdCard, MdCardHeader, MdCardTitleGroup];
	//# sourceMappingURL=card.js.map

/***/ },

/***/ 840:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var AddCommasPipe = (function () {
	    function AddCommasPipe() {
	    }
	    AddCommasPipe.prototype.transform = function (authors) {
	        if (!authors)
	            return '';
	        switch (authors.length) {
	            case 1:
	                return authors[0];
	            case 2:
	                return authors.join(' and ');
	            default:
	                var last = authors[authors.length - 1];
	                var remaining = authors.slice(0, -1);
	                return remaining.join(', ') + ", and " + last;
	        }
	    };
	    AddCommasPipe = __decorate([
	        core_1.Pipe({
	            name: 'addCommas'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AddCommasPipe);
	    return AddCommasPipe;
	}());
	exports.AddCommasPipe = AddCommasPipe;


/***/ },

/***/ 845:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var add_commas_1 = __webpack_require__(840);
	var card_1 = __webpack_require__(839);
	var list_1 = __webpack_require__(466);
	var button_1 = __webpack_require__(467);
	var BookDetailComponent = (function () {
	    function BookDetailComponent() {
	        this.add = new core_1.EventEmitter();
	        this.remove = new core_1.EventEmitter();
	    }
	    Object.defineProperty(BookDetailComponent.prototype, "id", {
	        get: function () {
	            return this.book.id;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BookDetailComponent.prototype, "title", {
	        get: function () {
	            return this.book.volumeInfo.title;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BookDetailComponent.prototype, "subtitle", {
	        get: function () {
	            return this.book.volumeInfo.subtitle;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BookDetailComponent.prototype, "description", {
	        get: function () {
	            return this.book.volumeInfo.description;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BookDetailComponent.prototype, "authors", {
	        get: function () {
	            return this.book.volumeInfo.authors;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BookDetailComponent.prototype, "thumbnail", {
	        get: function () {
	            return this.book.volumeInfo.imageLinks.smallThumbnail;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], BookDetailComponent.prototype, "book", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], BookDetailComponent.prototype, "inCollection", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], BookDetailComponent.prototype, "add", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], BookDetailComponent.prototype, "remove", void 0);
	    BookDetailComponent = __decorate([
	        core_1.Component({
	            selector: 'book-detail',
	            pipes: [add_commas_1.AddCommasPipe],
	            directives: [card_1.MD_CARD_DIRECTIVES, list_1.MD_LIST_DIRECTIVES, button_1.MdButton],
	            template: "\n    <md-card>\n      <md-card-title-group>\n        <md-card-title>{{ title }}</md-card-title>\n        <md-card-subtitle *ngIf=\"subtitle\">{{ subtitle }}</md-card-subtitle>\n        <img md-card-sm-image *ngIf=\"thumbnail\" [src]=\"thumbnail\"/>\n      </md-card-title-group>\n      <md-card-content>\n        <p [innerHtml]=\"description\"></p>\n      </md-card-content>\n      <md-card-footer>\n        <h5 md-subheader>Written By:</h5>\n        <span>\n          {{ authors | addCommas }}\n        </span>\n      </md-card-footer>\n      <md-card-actions align=\"end\">\n        <button md-raised-button color=\"warn\" *ngIf=\"inCollection\" (click)=\"remove.emit(book)\">\n        Remove Book from Collection\n        </button>\n\n        <button md-raised-button color=\"primary\" *ngIf=\"!inCollection\" (click)=\"add.emit(book)\">\n        Add Book to Collection\n        </button>\n      </md-card-actions>\n    </md-card>\n\n  ",
	            styles: ["\n    :host {\n      display: flex;\n      justify-content: center;\n      margin: 75px 0;\n    }\n    md-card {\n      max-width: 600px;\n    }\n    md-card-title {\n      margin-left: 10px;\n    }\n    img {\n      width: 60px;\n      min-width: 60px;\n      margin-left: 5px;\n    }\n    md-card-content {\n      margin-top: 15px;\n      margin-bottom: 125px;\n    }\n    md-card-footer {\n      padding-bottom: 75px;\n    }\n  "]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], BookDetailComponent);
	    return BookDetailComponent;
	}());
	exports.BookDetailComponent = BookDetailComponent;


/***/ }

});