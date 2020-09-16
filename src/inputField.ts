import { Field } from './field';
import { FieldLabel } from './fieldLabel';
import { FieldType } from './fieldType';

export class InputField implements Field {
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
    const inputField: HTMLInputElement = document.createElement('input');
    // Set attribute 'id'
    inputField.setAttribute('id', `${this.name.toLowerCase()}`);
    // Set attribute 'name'
    inputField.setAttribute('name', `${this.name.toLowerCase()}`);
    // Set attribute 'name'
    inputField.setAttribute('type', `${this.type.toLowerCase()}`);
    return inputField;
  }
  getValue(): string {
    const input = document.getElementById(`${this.name.toLowerCase()}`) as HTMLInputElement;
    return input.value;
  }
}
