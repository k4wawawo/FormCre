import { Field } from './field';
import { FieldLabel } from './fieldLabel';
import { FieldType } from './fieldType';

export class DateField implements Field {
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
    const dateField: HTMLInputElement = document.createElement('input');
    // Add attribute 'id'
    dateField.setAttribute('id', `${this.name.toLowerCase()}`);
    // Add attribute 'name'
    dateField.setAttribute('name', `${this.name.toLowerCase()}`);
    // Set attribute 'type'
    dateField.setAttribute('type', `${this.type.toLowerCase()}`);
    return dateField;
  }
  getValue(): string {
    const input = document.getElementById(`${this.name.toLowerCase()}`) as HTMLTextAreaElement;
    return input.value;
  }
}