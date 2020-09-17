// enumerator FieldType który będzie definiował typy pól możliwych do użycia w ankiecie (pole tekstowe, pole wielolinijkowe, data, e-mail, pole wyboru, checkbox)

export enum FieldType {
  Text = "TEXT", MultiLineText = "MULTILINETEXT", Date = "DATE", Email = "EMAIL", Select = "SELECT", Checkbox = "CHECKBOX"
}