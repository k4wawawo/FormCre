import { Form } from "./form";

export interface DataStorage {
  saveDocument(document: Form): void; //metoda powinna pobierać jako parametr obiekt z wartościami pól formularza (typ any) i zwracać identyfikator dokumentu (string)
  loadDocument(): void // metoda powinna pobierać jako parametr identyfikator dokumentu i zwracać obiekt z wartościami dokumentu (czyli wartościami wypełnionych przez użytkownika pól formularza)
  getDocuments(): void // metoda powinna zwracać tablicę idenfikatorów wszystkich zapisanych dokumentów.
}