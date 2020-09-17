// => wyświetla etykiete
export class FieldLabel {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  render(): HTMLElement {
    // Create Label element
    const label: HTMLLabelElement = document.createElement('label');
    // Add attribute 'for'
    label.setAttribute('for', `${this.name.toLowerCase()}`);
    // Add Text
    label.textContent = `${this.name}`;
    return label as HTMLElement;
  }
}
