import { Field } from './field';
import { FieldLabel } from './fieldLabel';
import { FieldType } from './fieldType';

export class SelectField implements Field {
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
    const selectField: HTMLInputElement = document.createElement('input');
    // Add attribute 'id'
    selectField.setAttribute('id', `${this.name.toLowerCase()}`);
    // Add attribute 'name'
    selectField.setAttribute('name', `${this.name.toLowerCase()}`);
    // Set attribute 'type'
    selectField.setAttribute('type', `${this.type.toLowerCase()}`);
    return selectField;
  }

  getValue(): string {
    const input = document.getElementById(`${this.name.toLowerCase()}`) as HTMLInputElement;
    return input.value;
  }
}