import { DataStorage } from './dataStorage';
import { Form } from './form';

/*
 - zapisuj dokumenty używając klucza dokumentu jako klucza elementu w localStorage
 - metoda saveDocument() powinna wygenerować unikalny identyfikator dokumentu. Użyj Date.now() do pobrania daty (timestamp) zapisania dokumentu. Idenfytikator twórz w oparciu o szablon "document-timestamp".
 - zapamiętaj wszystkie dokumenty (id dokumentu) w osobnym elemencie w localStorage (tablica).
 - pamiętaj, że w localStorage zapisujemy stringi. Aby zapisać obiekt z wartościami formularza użyj obiektu JSON do serializacji danych.

*/

export class LocStorage implements DataStorage {
  saveDocument(document: Form): void {
    let timeStamp: number = Date.now();
    let documentID: string = `${document.formName}-${timeStamp}`;
    let documents: Form[];
    let documentIDs: string[];
    if (localStorage.getItem('documents') === null && localStorage.getItem('documentIDs') === null) {
      documents = [];
      documentIDs = [];
    } else {
      documents = JSON.parse(localStorage.getItem('documents'));
      documentIDs = JSON.parse(localStorage.getItem('documentIDs'));
    }

    documents.push(document);
    documentIDs.push(documentID);
    localStorage.setItem('documents', JSON.stringify(documents));
    localStorage.setItem('documentIDs', JSON.stringify(documentIDs));
  }

  loadDocument(): void {
    throw new Error("Method not implemented.");
  }
  getDocuments(): void {
    throw new Error("Method not implemented.");
  }
}


