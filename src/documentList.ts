import { Form } from "./form";

export class DocumentList {
  static documentsList: Form[];
  static documentIDs: string[];

  // metoda powinna korzystać z klasy LocStorage do pobrania listy dokumentów i zapamiętania jej w wewn. właściwości klasy
  static getDocumentList(): [Form[], string[]] {
    if (localStorage.getItem('documents') === null && localStorage.getItem('documentIDs') === null) {
      this.documentsList = [];
      this.documentIDs = [];
    } else {
      this.documentsList = JSON.parse(localStorage.getItem('documents'));
      this.documentIDs = JSON.parse(localStorage.getItem('documentIDs'));
    }
    return [this.documentsList, this.documentIDs];
  }

  //  metoda powinna wyświetlać listę dokumentów w formie tabeli zawierającej id dokumentu
  static render(htmlElement: HTMLElement) {
    // Create table element
    const docListTable: HTMLTableElement = document.createElement('table');
    // Set attribute 'id'
    docListTable.setAttribute('id', 'documentsTable');
    // Set the text content for the ul
    docListTable.textContent = 'List of all the documents:';
    let listOfDocs: [Form[], string[]] = this.getDocumentList();
    for (let i = 0; i < listOfDocs[0].length; i++) {
      const tr: HTMLTableRowElement = document.createElement('tr');
      tr.textContent = `${listOfDocs[0][i].formName} : ${listOfDocs[1][i]}`;
      docListTable.appendChild(tr);
    }
    htmlElement.appendChild(docListTable);
  };
}
