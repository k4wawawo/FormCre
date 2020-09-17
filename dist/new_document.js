/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/new-document.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fieldType_1 = __webpack_require__(/*! ./fieldType */ "./src/fieldType.ts");
const inputField_1 = __webpack_require__(/*! ./inputField */ "./src/inputField.ts");
const form_1 = __webpack_require__(/*! ./form */ "./src/form.ts");
const checkboxField_1 = __webpack_require__(/*! ./checkboxField */ "./src/checkboxField.ts");
const emailField_1 = __webpack_require__(/*! ./emailField */ "./src/emailField.ts");
const dateField_1 = __webpack_require__(/*! ./dateField */ "./src/dateField.ts");
const textAreaField_1 = __webpack_require__(/*! ./textAreaField */ "./src/textAreaField.ts");
const selectField_1 = __webpack_require__(/*! ./selectField */ "./src/selectField.ts");
class App {
    static createNewForm(name) {
        let form = new form_1.Form(name);
        return form;
    }
    static createNewField(name) {
        let field;
        const selectedFieldType = document.getElementById("fieldType");
        switch (selectedFieldType.value) {
            case 'text':
                field = new inputField_1.InputField(name, fieldType_1.FieldType.Text, '');
                break;
            case 'multiLineText':
                field = new textAreaField_1.TextareaField(name, fieldType_1.FieldType.MultiLineText, '');
                break;
            case 'date':
                field = new dateField_1.DateField(name, fieldType_1.FieldType.Date, '');
                break;
            case 'email':
                field = new emailField_1.EmailField(name, fieldType_1.FieldType.Email, '');
                break;
            case 'select':
                field = new selectField_1.SelectField(name, fieldType_1.FieldType.Select, '');
                break;
            case 'checkbox':
                field = new checkboxField_1.CheckboxField(name, fieldType_1.FieldType.Checkbox, '');
                break;
            default:
                break;
        }
        return field;
    }
}
exports.App = App;


/***/ }),

/***/ "./src/checkboxField.ts":
/*!******************************!*\
  !*** ./src/checkboxField.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fieldLabel_1 = __webpack_require__(/*! ./fieldLabel */ "./src/fieldLabel.ts");
class CheckboxField {
    constructor(name, type, value) {
        this.name = name;
        this.label = new fieldLabel_1.FieldLabel(name);
        this.type = type;
        this.value = value;
    }
    render() {
        const checkboxField = document.createElement('input');
        checkboxField.setAttribute('id', `${this.name.toLowerCase()}`);
        checkboxField.setAttribute('name', `${this.name.toLowerCase()}`);
        checkboxField.setAttribute('type', `${this.type.toLowerCase()}`);
        return checkboxField;
    }
    getValue() {
        const input = document.getElementById(`${this.name.toLowerCase()}`);
        return input.value;
    }
}
exports.CheckboxField = CheckboxField;


/***/ }),

/***/ "./src/dateField.ts":
/*!**************************!*\
  !*** ./src/dateField.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fieldLabel_1 = __webpack_require__(/*! ./fieldLabel */ "./src/fieldLabel.ts");
class DateField {
    constructor(name, type, value) {
        this.name = name;
        this.label = new fieldLabel_1.FieldLabel(name);
        this.type = type;
        this.value = value;
    }
    render() {
        const dateField = document.createElement('input');
        dateField.setAttribute('id', `${this.name.toLowerCase()}`);
        dateField.setAttribute('name', `${this.name.toLowerCase()}`);
        dateField.setAttribute('type', `${this.type.toLowerCase()}`);
        return dateField;
    }
    getValue() {
        const input = document.getElementById(`${this.name.toLowerCase()}`);
        return input.value;
    }
}
exports.DateField = DateField;


/***/ }),

/***/ "./src/emailField.ts":
/*!***************************!*\
  !*** ./src/emailField.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fieldLabel_1 = __webpack_require__(/*! ./fieldLabel */ "./src/fieldLabel.ts");
class EmailField {
    constructor(name, type, value) {
        this.name = name;
        this.label = new fieldLabel_1.FieldLabel(name);
        this.type = type;
        this.value = value;
    }
    render() {
        const emailField = document.createElement('input');
        emailField.setAttribute('id', `${this.name.toLowerCase()}`);
        emailField.setAttribute('name', `${this.name.toLowerCase()}`);
        emailField.setAttribute('type', `${this.type.toLowerCase()}`);
        return emailField;
    }
    getValue() {
        const input = document.getElementById(`${this.name.toLowerCase()}`);
        return input.value;
    }
}
exports.EmailField = EmailField;


/***/ }),

/***/ "./src/fieldLabel.ts":
/*!***************************!*\
  !*** ./src/fieldLabel.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class FieldLabel {
    constructor(name) {
        this.name = name;
    }
    render() {
        const label = document.createElement('label');
        label.setAttribute('for', `${this.name.toLowerCase()}`);
        label.textContent = `${this.name}`;
        return label;
    }
}
exports.FieldLabel = FieldLabel;


/***/ }),

/***/ "./src/fieldType.ts":
/*!**************************!*\
  !*** ./src/fieldType.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FieldType;
(function (FieldType) {
    FieldType["Text"] = "TEXT";
    FieldType["MultiLineText"] = "MULTILINETEXT";
    FieldType["Date"] = "DATE";
    FieldType["Email"] = "EMAIL";
    FieldType["Select"] = "SELECT";
    FieldType["Checkbox"] = "CHECKBOX";
})(FieldType = exports.FieldType || (exports.FieldType = {}));


/***/ }),

/***/ "./src/form.ts":
/*!*********************!*\
  !*** ./src/form.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fieldLabel_1 = __webpack_require__(/*! ./fieldLabel */ "./src/fieldLabel.ts");
class Form {
    constructor(name) {
        this.formFields = [];
        this.formValues = [];
        this.formName = name;
    }
    getValue(htmlElement) {
        this.formFields.forEach(field => {
            const renderedField = document.getElementById(`${field.name.toLowerCase()}`);
            this.formValues.push([`${field.name}`, renderedField.value]);
        });
        const ul = document.createElement('ul');
        ul.textContent = 'Values entered to the form:';
        htmlElement.appendChild(ul);
        this.formValues.forEach(pair => {
            let li = document.createElement('li');
            li.textContent = `${pair[0]}: ${pair[1]}`;
            htmlElement.appendChild(li);
        });
        return this.formValues;
    }
    render(htmlElement) {
        const form = document.createElement('form');
        form.setAttribute('id', `${this.formName.toLowerCase()}`);
        this.formFields.forEach(field => {
            let label = new fieldLabel_1.FieldLabel(field.name);
            form.appendChild(label.render());
            form.appendChild(field.render());
        });
        const header = document.createElement('h3');
        header.textContent = `${this.formName}`;
        htmlElement.appendChild(header);
        const linebreak = document.createElement("br");
        htmlElement.appendChild(linebreak);
        const submitField = document.createElement('input');
        submitField.setAttribute('type', 'submit');
        submitField.setAttribute('id', 'submitRenderedForm');
        submitField.setAttribute('value', 'Submit the Form!');
        form.appendChild(linebreak);
        form.appendChild(submitField);
        htmlElement.appendChild(form);
    }
}
exports.Form = Form;


/***/ }),

/***/ "./src/inputField.ts":
/*!***************************!*\
  !*** ./src/inputField.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fieldLabel_1 = __webpack_require__(/*! ./fieldLabel */ "./src/fieldLabel.ts");
class InputField {
    constructor(name, type, value) {
        this.name = name;
        this.label = new fieldLabel_1.FieldLabel(name);
        this.type = type;
        this.value = value;
    }
    render() {
        const inputField = document.createElement('input');
        inputField.setAttribute('id', `${this.name.toLowerCase()}`);
        inputField.setAttribute('name', `${this.name.toLowerCase()}`);
        inputField.setAttribute('type', `${this.type.toLowerCase()}`);
        return inputField;
    }
    getValue() {
        const input = document.getElementById(`${this.name.toLowerCase()}`);
        return input.value;
    }
}
exports.InputField = InputField;


/***/ }),

/***/ "./src/locStorage.ts":
/*!***************************!*\
  !*** ./src/locStorage.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class LocStorage {
    saveDocument(document) {
        let timeStamp = Date.now();
        let documentID = `${document.formName}-${timeStamp}`;
        let documents;
        let documentIDs;
        if (localStorage.getItem('documents') === null && localStorage.getItem('documentIDs') === null) {
            documents = [];
            documentIDs = [];
        }
        else {
            documents = JSON.parse(localStorage.getItem('documents'));
            documentIDs = JSON.parse(localStorage.getItem('documentIDs'));
        }
        documents.push(document);
        documentIDs.push(documentID);
        localStorage.setItem('documents', JSON.stringify(documents));
        localStorage.setItem('documentIDs', JSON.stringify(documentIDs));
    }
    loadDocument() {
        throw new Error("Method not implemented.");
    }
    getDocuments() {
        throw new Error("Method not implemented.");
    }
}
exports.LocStorage = LocStorage;


/***/ }),

/***/ "./src/new-document.ts":
/*!*****************************!*\
  !*** ./src/new-document.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __webpack_require__(/*! ./app */ "./src/app.ts");
const locStorage_1 = __webpack_require__(/*! ./locStorage */ "./src/locStorage.ts");
const newFormForm = document.getElementById('document-form');
const formName = document.getElementById('dLabel');
const newFieldForm = document.getElementById('field-form');
const fieldName = document.getElementById('fLabel');
const renderBtn = document.getElementById('renderBtn');
const renderedForm = document.getElementById('renderedForm');
const formValues = document.getElementById('formValues');
const documentsList = document.getElementById('documentsList');
const storage = new locStorage_1.LocStorage();
let forms = [];
newFormForm.addEventListener('submit', function (e) {
    let newForm = app_1.App.createNewForm(formName.value);
    forms.push(newForm);
    app_1.App.activeForm = newForm;
    newFormForm.style.display = 'none';
    newFieldForm.style.display = 'block';
    e.preventDefault();
});
newFieldForm.addEventListener('submit', function (e) {
    let newField = app_1.App.createNewField(fieldName.value);
    app_1.App.activeForm.formFields.push(newField);
    newFormForm.style.display = 'none';
    newFieldForm.style.display = 'block';
    renderBtn.style.display = 'block';
    console.log(app_1.App.activeForm.formFields);
    fieldName.value = '';
    e.preventDefault();
});
renderBtn.addEventListener('click', function (e) {
    app_1.App.activeForm.render(renderedForm);
    storage.saveDocument(app_1.App.activeForm);
    newFormForm.style.display = 'none';
    newFieldForm.style.display = 'none';
    renderBtn.style.display = 'none';
    renderedForm.style.display = 'block';
    e.preventDefault();
});


/***/ }),

/***/ "./src/selectField.ts":
/*!****************************!*\
  !*** ./src/selectField.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fieldLabel_1 = __webpack_require__(/*! ./fieldLabel */ "./src/fieldLabel.ts");
class SelectField {
    constructor(name, type, value) {
        this.name = name;
        this.label = new fieldLabel_1.FieldLabel(name);
        this.type = type;
        this.value = value;
    }
    render() {
        const selectField = document.createElement('input');
        selectField.setAttribute('id', `${this.name.toLowerCase()}`);
        selectField.setAttribute('name', `${this.name.toLowerCase()}`);
        selectField.setAttribute('type', `${this.type.toLowerCase()}`);
        return selectField;
    }
    getValue() {
        const input = document.getElementById(`${this.name.toLowerCase()}`);
        return input.value;
    }
}
exports.SelectField = SelectField;


/***/ }),

/***/ "./src/textAreaField.ts":
/*!******************************!*\
  !*** ./src/textAreaField.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fieldLabel_1 = __webpack_require__(/*! ./fieldLabel */ "./src/fieldLabel.ts");
class TextareaField {
    constructor(name, type, value) {
        this.name = name;
        this.label = new fieldLabel_1.FieldLabel(name);
        this.type = type;
        this.value = value;
    }
    render() {
        const textareaField = document.createElement('input');
        textareaField.setAttribute('id', `${this.name.toLowerCase()}`);
        textareaField.setAttribute('name', `${this.name.toLowerCase()}`);
        textareaField.setAttribute('type', `${this.type.toLowerCase()}`);
        return textareaField;
    }
    getValue() {
        const input = document.getElementById(`${this.name.toLowerCase()}`);
        return input.value;
    }
}
exports.TextareaField = TextareaField;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tib3hGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0ZUZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9lbWFpbEZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9maWVsZExhYmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9maWVsZFR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0RmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY1N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldy1kb2N1bWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0RmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHRBcmVhRmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztR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QUFDO0NBQ0Y7QUE1QkQsc0NBNEJDIiwiZmlsZSI6Im5ld19kb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL25ldy1kb2N1bWVudC50c1wiKTtcbiIsImltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJy4vZmllbGRUeXBlJztcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tICcuL2lucHV0RmllbGQnO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJy4vZm9ybSc7IC8vIENUUkwgKyAuXG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHsgQ2hlY2tib3hGaWVsZCB9IGZyb20gJy4vY2hlY2tib3hGaWVsZCc7XG5pbXBvcnQgeyBFbWFpbEZpZWxkIH0gZnJvbSAnLi9lbWFpbEZpZWxkJztcbmltcG9ydCB7IERhdGVGaWVsZCB9IGZyb20gJy4vZGF0ZUZpZWxkJztcbmltcG9ydCB7IFRleHRhcmVhRmllbGQgfSBmcm9tICcuL3RleHRBcmVhRmllbGQnO1xuaW1wb3J0IHsgU2VsZWN0RmllbGQgfSBmcm9tICcuL3NlbGVjdEZpZWxkJztcblxuLy8ga2xhc2EgemFyesSFZHphasSFY2EgeiB3c3p5c3RraW1pIHBvZHN0YXdvd3ltaSBmdW5rY2phbWkgYXBsaWthY2ppIOKAkyByZWFnb3dhbmllbSBuYSBlbGVtZW50eSBpbnRlcmZlanN1LCB3ecWbd2lldGxhbmllbSBmb3JtdWxhcnp5IGl0ZC5cbi8qIFxuXG5FZmVrdGVtIHByYWN5IHBvd2lubmEgYnnEhyBhcGxpa2FjamEga3TDs3JhIHBvendhbGEgd3nFm3dpZXRsacSHIHN0YXR5Y3puaWUgemFrb2Rvd2FueSBmb3JtdWxhcnouIFBvd2lubmEgdGXFvCB1bW/FvGxpd2nEhyBwb2JyYW5pZSB3eW5pa8OzdyBhbmtpZXR5ICh3YXJ0b8WbY2kgZm9ybXVsYXJ6YSkgaSB3ecWbd2lldGxlbmllIGljaCB3IGRvd29sbnltIG1pZWpzY3UgZWtyYW51IChqZWR5bmllIGRsYSB0ZXN0dSBtZXRvZHkgZ2V0VmFsdWUoKSBrbGFzeSBGb3JtKS4gXG5cblByenlrxYJhZG93eSBmb3JtdWxhcnogZG8gd3nFm3dpZXRsZW5pYTogXG4xLlx0SW1pxJkgKHBvbGUgdGVrc3Rvd2UpIFxuMi5cdE5hendpc2tvIChwb2xlIHRla3N0b3dlKSBcbjMuXHRFLW1haWwgKHBvbGUgZS1tYWlsKSBcbjQuXHRXeWJyYW55IGtpZXJ1bmVrIHN0dWRpw7N3IChzZWxlY3QpIFxuNS5cdEN6eSBwcmVmZXJ1amVzeiBlLWxlYXJuaW5nIChjaGVja2JveCkgXG42Llx0VXdhZ2kgKHRleHRhcmVhKSBcblxuKi9cblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gICAgc3RhdGljIGFjdGl2ZUZvcm06IEZvcm07XG5cbiAgICBzdGF0aWMgY3JlYXRlTmV3Rm9ybShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGZvcm0gPSBuZXcgRm9ybShuYW1lKTtcbiAgICAgICAgcmV0dXJuIGZvcm07XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZU5ld0ZpZWxkKG5hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgZmllbGQ6IEZpZWxkO1xuICAgICAgICBjb25zdCBzZWxlY3RlZEZpZWxkVHlwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmllbGRUeXBlXCIpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkRmllbGRUeXBlLnZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgICAgICBmaWVsZCA9IG5ldyBJbnB1dEZpZWxkKG5hbWUsIEZpZWxkVHlwZS5UZXh0LCAnJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ211bHRpTGluZVRleHQnOlxuICAgICAgICAgICAgICAgIGZpZWxkID0gbmV3IFRleHRhcmVhRmllbGQobmFtZSwgRmllbGRUeXBlLk11bHRpTGluZVRleHQsICcnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgZmllbGQgPSBuZXcgRGF0ZUZpZWxkKG5hbWUsIEZpZWxkVHlwZS5EYXRlLCAnJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgICAgICAgICBmaWVsZCA9IG5ldyBFbWFpbEZpZWxkKG5hbWUsIEZpZWxkVHlwZS5FbWFpbCwgJycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgICAgICAgIGZpZWxkID0gbmV3IFNlbGVjdEZpZWxkKG5hbWUsIEZpZWxkVHlwZS5TZWxlY3QsICcnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgIGZpZWxkID0gbmV3IENoZWNrYm94RmllbGQobmFtZSwgRmllbGRUeXBlLkNoZWNrYm94LCAnJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH1cbn1cblxuXG4iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xyXG5pbXBvcnQgeyBGaWVsZExhYmVsIH0gZnJvbSAnLi9maWVsZExhYmVsJztcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnLi9maWVsZFR5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoZWNrYm94RmllbGQgaW1wbGVtZW50cyBGaWVsZCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBGaWVsZExhYmVsO1xyXG4gIHR5cGU6IEZpZWxkVHlwZTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IEZpZWxkVHlwZSwgdmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubGFiZWwgPSBuZXcgRmllbGRMYWJlbChuYW1lKTtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAvLyBDcmVhdGUgaW5wdXQgZWxlbWVudFxyXG4gICAgY29uc3QgY2hlY2tib3hGaWVsZDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICdpZCdcclxuICAgIGNoZWNrYm94RmllbGQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnbmFtZSdcclxuICAgIGNoZWNrYm94RmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICd0eXBlJ1xyXG4gICAgY2hlY2tib3hGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBgJHt0aGlzLnR5cGUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIHJldHVybiBjaGVja2JveEZpZWxkO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xyXG5pbXBvcnQgeyBGaWVsZExhYmVsIH0gZnJvbSAnLi9maWVsZExhYmVsJztcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnLi9maWVsZFR5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGVGaWVsZCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGFiZWw6IEZpZWxkTGFiZWw7XHJcbiAgdHlwZTogRmllbGRUeXBlO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogRmllbGRUeXBlLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBGaWVsZExhYmVsKG5hbWUpO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbiAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIC8vIENyZWF0ZSBpbnB1dCBlbGVtZW50XHJcbiAgICBjb25zdCBkYXRlRmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBkYXRlRmllbGQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnbmFtZSdcclxuICAgIGRhdGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3R5cGUnXHJcbiAgICBkYXRlRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICByZXR1cm4gZGF0ZUZpZWxkO1xyXG4gIH1cclxuICBnZXRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi9maWVsZCc7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tICcuL2ZpZWxkTGFiZWwnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICcuL2ZpZWxkVHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRW1haWxGaWVsZCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGFiZWw6IEZpZWxkTGFiZWw7XHJcbiAgdHlwZTogRmllbGRUeXBlO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogRmllbGRUeXBlLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBGaWVsZExhYmVsKG5hbWUpO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbiAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIC8vIENyZWF0ZSBpbnB1dCBlbGVtZW50XHJcbiAgICBjb25zdCBlbWFpbEZpZWxkOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgZW1haWxGaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgZW1haWxGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3R5cGUnXHJcbiAgICBlbWFpbEZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgcmV0dXJuIGVtYWlsRmllbGQ7XHJcbiAgfVxyXG4gIGdldFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbiAgfVxyXG59IiwiLy8gPT4gd3nFm3dpZXRsYSBldHlraWV0ZVxyXG5leHBvcnQgY2xhc3MgRmllbGRMYWJlbCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIExhYmVsIGVsZW1lbnRcclxuICAgIGNvbnN0IGxhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ2ZvcidcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBBZGQgVGV4dFxyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9YDtcclxuICAgIHJldHVybiBsYWJlbCBhcyBIVE1MRWxlbWVudDtcclxuICB9XHJcbn1cclxuIiwiLy8gZW51bWVyYXRvciBGaWVsZFR5cGUga3TDs3J5IGLEmWR6aWUgZGVmaW5pb3dhxYIgdHlweSBww7NsIG1vxbxsaXd5Y2ggZG8gdcW8eWNpYSB3IGFua2llY2llIChwb2xlIHRla3N0b3dlLCBwb2xlIHdpZWxvbGluaWprb3dlLCBkYXRhLCBlLW1haWwsIHBvbGUgd3lib3J1LCBjaGVja2JveClcclxuXHJcbmV4cG9ydCBlbnVtIEZpZWxkVHlwZSB7XHJcbiAgVGV4dCA9IFwiVEVYVFwiLCBNdWx0aUxpbmVUZXh0ID0gXCJNVUxUSUxJTkVURVhUXCIsIERhdGUgPSBcIkRBVEVcIiwgRW1haWwgPSBcIkVNQUlMXCIsIFNlbGVjdCA9IFwiU0VMRUNUXCIsIENoZWNrYm94ID0gXCJDSEVDS0JPWFwiXHJcbn0iLCJpbXBvcnQgeyBGaWVsZExhYmVsIH0gZnJvbSAnLi9maWVsZExhYmVsJztcclxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcclxuLy8gS2xhc2EgZm9ybSBvZHBvd2lhZGEgemEgcHJ6ZXRyenlteXdhbmllICBjYcWCb8WbY2kgaW5mb3JtYWNqaSBvIGZvcm11bGFyenUgb3JheiBqZWdvIHd5xZt3aWV0bGFuaWUuXHJcblxyXG4vLyBXIGtsYXNpZSBwb3dpbm55IGJ5xIcgcHJ6ZWNob3d5d2FuZSBpbmZvcm1hY2plIG8gd3N6eXN0a2ljaCBwb2xhY2ggZm9ybXVsYXJ6YSAodGFibGljYSBlbGVtZW50w7N3IEZpZWxkKS5cclxuXHJcbi8vIEtsYXNhIHBvd2lubmEgdWRvc3TEmXBuaWHEhyBkd2llIG1ldG9keTpcclxuLy8gLSBnZXRWYWx1ZSgpIHBvYmllcmFqxIVjxIUgd3luaWtpIGZvcm11bGFyemFcclxuLy8gLSByZW5kZXIoKSB3ecWbd2lldGxhasSFY8SFIGZvcm11bGFyeiB3ZSB3c2themFueW0gbWllanNjdS5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybSB7XHJcbiAgZm9ybU5hbWU6IHN0cmluZztcclxuICBmb3JtRmllbGRzOiBGaWVsZFtdID0gW107XHJcbiAgZm9ybVZhbHVlczogW3N0cmluZywgc3RyaW5nXVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5mb3JtTmFtZSA9IG5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZShodG1sRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgIHRoaXMuZm9ybUZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgY29uc3QgcmVuZGVyZWRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2ZpZWxkLm5hbWUudG9Mb3dlckNhc2UoKX1gKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICB0aGlzLmZvcm1WYWx1ZXMucHVzaChbYCR7ZmllbGQubmFtZX1gLCByZW5kZXJlZEZpZWxkLnZhbHVlXSk7XHJcbiAgICB9KTtcclxuICAgIC8vIENyZWF0ZSBhIGhlYWRlciBcclxuICAgIGNvbnN0IHVsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAvLyBTZXQgdGhlIGhlYWRlciB0ZXh0IGNvbnRlbnQgdG8gdGhlIG5hbWUgb2YgdGhlIEZvcm1cclxuICAgIHVsLnRleHRDb250ZW50ID0gJ1ZhbHVlcyBlbnRlcmVkIHRvIHRoZSBmb3JtOic7XHJcbiAgICAvLyBBcHBlbmQgdGhlIGhlYWRlciB0byB0aGUgZWxlbWVudCB3aGVyZSB0aGUgZm9ybSBzaG91bGQgYmUgcmVuZGVyZWRcclxuICAgIGh0bWxFbGVtZW50LmFwcGVuZENoaWxkKHVsKTtcclxuICAgIHRoaXMuZm9ybVZhbHVlcy5mb3JFYWNoKHBhaXIgPT4ge1xyXG4gICAgICBsZXQgbGk6IEhUTUxMSUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBsaS50ZXh0Q29udGVudCA9IGAke3BhaXJbMF19OiAke3BhaXJbMV19YDtcclxuICAgICAgaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQobGkpXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHRoaXMuZm9ybVZhbHVlcztcclxuICB9XHJcblxyXG4gIHJlbmRlcihodG1sRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgIC8vIENyZWF0ZSBmb3JtIGVsZW1lbnRcclxuICAgIGNvbnN0IGZvcm06IEhUTUxGb3JtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5mb3JtTmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gQXBwZW5kIGZpZWxkcyB0byB0aGUgZm9ybVxyXG4gICAgdGhpcy5mb3JtRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBsZXQgbGFiZWwgPSBuZXcgRmllbGRMYWJlbChmaWVsZC5uYW1lKVxyXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsLnJlbmRlcigpKVxyXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkLnJlbmRlcigpKTtcclxuICAgIH0pO1xyXG4gICAgLy8gQ3JlYXRlIGEgaGVhZGVyIHdpdGggdGhlIG5hbWUgb2YgdGhlIEZvcm1cclxuICAgIGNvbnN0IGhlYWRlcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgLy8gU2V0IHRoZSBoZWFkZXIgdGV4dCBjb250ZW50IHRvIHRoZSBuYW1lIG9mIHRoZSBGb3JtXHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgJHt0aGlzLmZvcm1OYW1lfWA7XHJcbiAgICAvLyBBcHBlbmQgdGhlIGhlYWRlciB0byB0aGUgZWxlbWVudCB3aGVyZSB0aGUgZm9ybSBzaG91bGQgYmUgcmVuZGVyZWRcclxuICAgIGh0bWxFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBjb25zdCBsaW5lYnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XHJcbiAgICBodG1sRWxlbWVudC5hcHBlbmRDaGlsZChsaW5lYnJlYWspO1xyXG4gICAgY29uc3Qgc3VibWl0RmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAndHlwZSdcclxuICAgIHN1Ym1pdEZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgc3VibWl0RmllbGQuc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXRSZW5kZXJlZEZvcm0nKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3ZhbHVlJ1xyXG4gICAgc3VibWl0RmllbGQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdTdWJtaXQgdGhlIEZvcm0hJyk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxpbmVicmVhayk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEZpZWxkKTtcclxuICAgIGh0bWxFbGVtZW50LmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi9maWVsZCc7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tICcuL2ZpZWxkTGFiZWwnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICcuL2ZpZWxkVHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRGaWVsZCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGFiZWw6IEZpZWxkTGFiZWw7XHJcbiAgdHlwZTogRmllbGRUeXBlO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogRmllbGRUeXBlLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBGaWVsZExhYmVsKG5hbWUpO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbiAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIC8vIENyZWF0ZSBpbnB1dCBlbGVtZW50XHJcbiAgICBjb25zdCBpbnB1dEZpZWxkOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ25hbWUnXHJcbiAgICBpbnB1dEZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgcmV0dXJuIGlucHV0RmllbGQ7XHJcbiAgfVxyXG4gIGdldFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERhdGFTdG9yYWdlIH0gZnJvbSAnLi9kYXRhU3RvcmFnZSc7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICcuL2Zvcm0nO1xyXG5cclxuLypcclxuIC0gemFwaXN1aiBkb2t1bWVudHkgdcW8eXdhasSFYyBrbHVjemEgZG9rdW1lbnR1IGpha28ga2x1Y3phIGVsZW1lbnR1IHcgbG9jYWxTdG9yYWdlXHJcbiAtIG1ldG9kYSBzYXZlRG9jdW1lbnQoKSBwb3dpbm5hIHd5Z2VuZXJvd2HEhyB1bmlrYWxueSBpZGVudHlmaWthdG9yIGRva3VtZW50dS4gVcW8eWogRGF0ZS5ub3coKSBkbyBwb2JyYW5pYSBkYXR5ICh0aW1lc3RhbXApIHphcGlzYW5pYSBkb2t1bWVudHUuIElkZW5meXRpa2F0b3IgdHfDs3J6IHcgb3BhcmNpdSBvIHN6YWJsb24gXCJkb2N1bWVudC10aW1lc3RhbXBcIi5cclxuIC0gemFwYW1pxJl0YWogd3N6eXN0a2llIGRva3VtZW50eSAoaWQgZG9rdW1lbnR1KSB3IG9zb2JueW0gZWxlbWVuY2llIHcgbG9jYWxTdG9yYWdlICh0YWJsaWNhKS5cclxuIC0gcGFtacSZdGFqLCDFvGUgdyBsb2NhbFN0b3JhZ2UgemFwaXN1amVteSBzdHJpbmdpLiBBYnkgemFwaXNhxIcgb2JpZWt0IHogd2FydG/Fm2NpYW1pIGZvcm11bGFyemEgdcW8eWogb2JpZWt0dSBKU09OIGRvIHNlcmlhbGl6YWNqaSBkYW55Y2guXHJcblxyXG4qL1xyXG5cclxuZXhwb3J0IGNsYXNzIExvY1N0b3JhZ2UgaW1wbGVtZW50cyBEYXRhU3RvcmFnZSB7XHJcbiAgc2F2ZURvY3VtZW50KGRvY3VtZW50OiBGb3JtKTogdm9pZCB7XHJcbiAgICBsZXQgdGltZVN0YW1wOiBudW1iZXIgPSBEYXRlLm5vdygpO1xyXG4gICAgbGV0IGRvY3VtZW50SUQ6IHN0cmluZyA9IGAke2RvY3VtZW50LmZvcm1OYW1lfS0ke3RpbWVTdGFtcH1gO1xyXG4gICAgbGV0IGRvY3VtZW50czogRm9ybVtdO1xyXG4gICAgbGV0IGRvY3VtZW50SURzOiBzdHJpbmdbXTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG9jdW1lbnRzJykgPT09IG51bGwgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RvY3VtZW50SURzJykgPT09IG51bGwpIHtcclxuICAgICAgZG9jdW1lbnRzID0gW107XHJcbiAgICAgIGRvY3VtZW50SURzID0gW107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkb2N1bWVudHMnKSk7XHJcbiAgICAgIGRvY3VtZW50SURzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG9jdW1lbnRJRHMnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnRzLnB1c2goZG9jdW1lbnQpO1xyXG4gICAgZG9jdW1lbnRJRHMucHVzaChkb2N1bWVudElEKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkb2N1bWVudHMnLCBKU09OLnN0cmluZ2lmeShkb2N1bWVudHMpKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkb2N1bWVudElEcycsIEpTT04uc3RyaW5naWZ5KGRvY3VtZW50SURzKSk7XHJcbiAgfVxyXG5cclxuICBsb2FkRG9jdW1lbnQoKTogdm9pZCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICB9XHJcbiAgZ2V0RG9jdW1lbnRzKCk6IHZvaWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9hcHAnO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnLi9mb3JtJztcclxuaW1wb3J0IHsgTG9jU3RvcmFnZSB9IGZyb20gJy4vbG9jU3RvcmFnZSc7XHJcbmltcG9ydCB7IERvY3VtZW50TGlzdCB9IGZyb20gJy4vZG9jdW1lbnRMaXN0JztcclxuXHJcbmNvbnN0IG5ld0Zvcm1Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvY3VtZW50LWZvcm0nKTtcclxuY29uc3QgZm9ybU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZExhYmVsJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbmNvbnN0IG5ld0ZpZWxkRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWVsZC1mb3JtJyk7XHJcbmNvbnN0IGZpZWxkTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmTGFiZWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuY29uc3QgcmVuZGVyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbmRlckJ0bicpO1xyXG5jb25zdCByZW5kZXJlZEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVuZGVyZWRGb3JtJyk7XHJcblxyXG5jb25zdCBmb3JtVmFsdWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1WYWx1ZXMnKTtcclxuY29uc3QgZG9jdW1lbnRzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2N1bWVudHNMaXN0Jyk7XHJcblxyXG5jb25zdCBzdG9yYWdlID0gbmV3IExvY1N0b3JhZ2UoKTtcclxuXHJcbmxldCBmb3JtczogRm9ybVtdID0gW107XHJcblxyXG4vLyBMaXN0ZW4gZm9yIGEgc3VibWl0IGZvciBhIG5ldyBGb3JtIHRvIGJlIGNyZWF0ZWRcclxubmV3Rm9ybUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICBsZXQgbmV3Rm9ybSA9IEFwcC5jcmVhdGVOZXdGb3JtKGZvcm1OYW1lLnZhbHVlKTtcclxuICBmb3Jtcy5wdXNoKG5ld0Zvcm0pO1xyXG4gIEFwcC5hY3RpdmVGb3JtID0gbmV3Rm9ybTtcclxuICBuZXdGb3JtRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIG5ld0ZpZWxkRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLy8gTGlzdGVuIGZvciBhIHN1Ym1pdCBmb3IgYSBuZXcgRmllbGQgdG8gYmUgY3JlYXRlZFxyXG5uZXdGaWVsZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICBsZXQgbmV3RmllbGQgPSBBcHAuY3JlYXRlTmV3RmllbGQoZmllbGROYW1lLnZhbHVlKTtcclxuICBBcHAuYWN0aXZlRm9ybS5mb3JtRmllbGRzLnB1c2gobmV3RmllbGQpO1xyXG4gIG5ld0Zvcm1Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgbmV3RmllbGRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIHJlbmRlckJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBjb25zb2xlLmxvZyhBcHAuYWN0aXZlRm9ybS5mb3JtRmllbGRzKTtcclxuICBmaWVsZE5hbWUudmFsdWUgPSAnJztcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLy8gTGlzdGVuIGZvciBhIGNhbGwgdG8gcmVuZGVyIHRoZSBGb3JtXHJcbnJlbmRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgQXBwLmFjdGl2ZUZvcm0ucmVuZGVyKHJlbmRlcmVkRm9ybSk7XHJcbiAgc3RvcmFnZS5zYXZlRG9jdW1lbnQoQXBwLmFjdGl2ZUZvcm0pO1xyXG4gIG5ld0Zvcm1Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgbmV3RmllbGRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgcmVuZGVyQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgcmVuZGVyZWRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7IiwiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcclxuaW1wb3J0IHsgRmllbGRMYWJlbCB9IGZyb20gJy4vZmllbGRMYWJlbCc7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJy4vZmllbGRUeXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RGaWVsZCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGFiZWw6IEZpZWxkTGFiZWw7XHJcbiAgdHlwZTogRmllbGRUeXBlO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogRmllbGRUeXBlLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBGaWVsZExhYmVsKG5hbWUpO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbiAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIC8vIENyZWF0ZSBpbnB1dCBlbGVtZW50XHJcbiAgICBjb25zdCBzZWxlY3RGaWVsZDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICdpZCdcclxuICAgIHNlbGVjdEZpZWxkLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ25hbWUnXHJcbiAgICBzZWxlY3RGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3R5cGUnXHJcbiAgICBzZWxlY3RGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBgJHt0aGlzLnR5cGUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIHJldHVybiBzZWxlY3RGaWVsZDtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcclxuaW1wb3J0IHsgRmllbGRMYWJlbCB9IGZyb20gJy4vZmllbGRMYWJlbCc7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJy4vZmllbGRUeXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYUZpZWxkIGltcGxlbWVudHMgRmllbGQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogRmllbGRMYWJlbDtcclxuICB0eXBlOiBGaWVsZFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBGaWVsZFR5cGUsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxhYmVsID0gbmV3IEZpZWxkTGFiZWwobmFtZSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGlucHV0IGVsZW1lbnRcclxuICAgIGNvbnN0IHRleHRhcmVhRmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnaWQnXHJcbiAgICB0ZXh0YXJlYUZpZWxkLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ25hbWUnXHJcbiAgICB0ZXh0YXJlYUZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAndHlwZSdcclxuICAgIHRleHRhcmVhRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICByZXR1cm4gdGV4dGFyZWFGaWVsZDtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==