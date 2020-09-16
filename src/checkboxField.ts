import { Field } from './field';
import { FieldLabel } from './fieldLabel';
import { FieldType } from './fieldType';

export class CheckboxField implements Field {
  name: string;
  label: FieldLabel;
  type: FieldType;
  value: string;

  constructor(name: string, type: FieldType, value: string) {
    this.name = name;
    this.label = new FieldLabel(name);
    this.type = type;
    this.value = value;
  }
  render(): HTMLElement {
    // Create input element
    const checkboxField: HTMLInputElement = document.createElement('input');
    // Add attribute 'id'
    checkboxField.setAttribute('id', `${this.name.toLowerCase()}`);
    // Add attribute 'name'
    checkboxField.setAttribute('name', `${this.name.toLowerCase()}`);
    // Set attribute 'type'
    checkboxField.setAttribute('type', `${this.type.toLowerCase()}`);
    return checkboxField;
  }

  getValue(): string {
    const input = document.getElementById(`${this.name.toLowerCase()}`) as HTMLInputElement;
    return input.value;
  }
}