import { App } from './app';
import { Form } from './form';
import { LocStorage } from './locStorage';
import { DocumentList } from './document-List';

const container = document.querySelector('.containter') as HTMLDivElement;
const newFormForm = document.getElementById('document-form') as HTMLFormElement;
const formName = document.getElementById('dLabel') as HTMLInputElement;

const newFieldForm = document.getElementById('field-form') as HTMLFormElement;
const fieldName = document.getElementById('fLabel') as HTMLInputElement;

const renderBtn = document.getElementById('renderBtn') as HTMLButtonElement ; 
const saveBtn = document.getElementById('saveBtn') as HTMLButtonElement;
const backBtn = document.getElementById('backBtn') as HTMLButtonElement;
const renderedForm = document.getElementById('renderedForm') as HTMLButtonElement;

const formValues = document.getElementById('fieldType') as HTMLSelectElement;



const storage = new LocStorage();

let forms: Form[] = [];

// Listen for a submit for a new Form to be created
newFormForm.addEventListener('submit', function (e) {
  let newForm = App.createNewForm(formName.value);
  forms.push(newForm);
  App.activeForm = newForm;
  newFormForm.style.display = 'none';
  newFieldForm.style.display = 'block';
  e.preventDefault();
});

// Listen for a submit for a new Field to be created
newFieldForm.addEventListener('submit', function (e) {
  let newField = App.createNewField(fieldName.value);
  App.activeForm.formFields.push(newField);
  newFormForm.style.display = 'none';
  newFieldForm.style.display = 'block';
  renderBtn.style.display = 'block';
  console.log(App.activeForm.formFields);
  fieldName.value = '';
  e.preventDefault();
});

// Listen for a call to render the Form
renderBtn.addEventListener('click', function (e) {
  App.activeForm.render(renderedForm);
  storage.saveDocument(App.activeForm);
  newFormForm.style.display = 'none';
  newFieldForm.style.display = 'none';
  renderBtn.style.display = 'none';
  renderedForm.style.display = 'block';
  e.preventDefault();
});

saveBtn.addEventListener('click', function (e) {
  App.activeForm.render(renderedForm);
  storage.saveDocument(App.activeForm);
  newFormForm.style.display = 'none';
  newFieldForm.style.display = 'none';
  saveBtn.style.display = 'none';
  renderedForm.style.display = 'block';
  e.preventDefault();
});