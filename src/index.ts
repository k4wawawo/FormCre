const newDocumentBtn = document.getElementById('newDocument') as HTMLButtonElement;
const documentsListBtn = document.getElementById('documentsList') as HTMLButtonElement;


// Listen for a call to create a new Document
newDocumentBtn.addEventListener('click', function (e) {
  window.location.href = 'new-document.html';
  e.preventDefault();
});

// Listen for a call to view the List of the Documents
documentsListBtn.addEventListener('click', function (e) {
  window.location.href = 'document-list.html';
  e.preventDefault();
});

