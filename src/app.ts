import { FieldType } from './fieldType';
import { InputField } from './inputField';
import { Form } from './form'; // CTRL + .
import { Field } from './field';
import { CheckboxField } from './checkboxField';
import { EmailField } from './emailField';
import { DateField } from './dateField';
import { TextareaField } from './textAreaField';
import { SelectField } from './selectField';

// klasa zarządzająca z wszystkimi podstawowymi funkcjami aplikacji – reagowaniem na elementy interfejsu, wyświetlaniem formularzy itd.
/* 

Efektem pracy powinna być aplikacja która pozwala wyświetlić statycznie zakodowany formularz. Powinna też umożliwić pobranie wyników ankiety (wartości formularza) i wyświetlenie ich w dowolnym miejscu ekranu (jedynie dla testu metody getValue() klasy Form). 

Przykładowy formularz do wyświetlenia: 
1.	Imię (pole tekstowe) 
2.	Nazwisko (pole tekstowe) 
3.	E-mail (pole e-mail) 
4.	Wybrany kierunek studiów (select) 
5.	Czy preferujesz e-learning (checkbox) 
6.	Uwagi (textarea) 

*/

export class App {
    static activeForm: Form;

    static createNewForm(name: string) {
        let form = new Form(name);
        return form;
    }

    static createNewField(name: string) {
        let field: Field;
        const selectedFieldType = document.getElementById("fieldType") as HTMLSelectElement;
        switch (selectedFieldType.value) {
            case 'text':
                field = new InputField(name, FieldType.Text, '');
                break;

            case 'multiLineText':
                field = new TextareaField(name, FieldType.MultiLineText, '');
                break;

            case 'date':
                field = new DateField(name, FieldType.Date, '');
                break;

            case 'email':
                field = new EmailField(name, FieldType.Email, '');
                break;

            case 'select':
                field = new SelectField(name, FieldType.Select, '');
                break;

            case 'checkbox':
                field = new CheckboxField(name, FieldType.Checkbox, '');
                break;

            default:
                break;
        }
        return field;
    }
}
