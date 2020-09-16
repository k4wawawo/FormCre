import { FieldType } from './fieldType';
import { FieldLabel } from './fieldLabel';

// interfejs Field który będzie definiował podstawowe właściwości i metody pojedynczego pola ankiety.

// Każde pole powinno zawierać: nazwę, etykietę, typ pola, wartość.

// Każde pole powinno także móc wyświetlić swoją zawartość we wskazanym miejscu za pomocą metody render(). => klasy implementujące powinny mieć tą metodę która wyświetla pole formularza we wskazanym miejscu

// Wyświetlone pole powinno składać się z etykiety i samego pola formularza.

export interface Field {
  name: string;
  label: FieldLabel;
  type: FieldType;
  value: string;

  render(): HTMLElement;
  getValue(): string;
}
