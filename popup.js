let note = document.getElementById('note');

chrome.storage.sync.get('note', function(data) {
  note.value = data.note;
});

note.addEventListener('input', function() {
  chrome.storage.sync.set({'note': note.value});
});

let saveButton = document.getElementById('save');

saveButton.addEventListener('click', function() {
  chrome.storage.sync.set({'note': note.value}, function() {
    alert('Nota guardada');
  });
});

