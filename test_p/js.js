
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('file');
    const preview = document.getElementById('preview');

    // Open file dialog on click
    uploadArea.addEventListener('click', () => {
      fileInput.click();
    });

    // Highlight on drag
    uploadArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadArea.classList.add('dragover');
    });

    // Remove highlight
    uploadArea.addEventListener('dragleave', () => {
      uploadArea.classList.remove('dragover');
    });

    // // Handle drop
    // uploadArea.addEventListener('drop', (e) => {
    //   e.preventDefault();
    //   uploadArea.classList.remove('dragover');
    //   const file = e.dataTransfer.files[0];
    //   if (file) {
    //     fileInput.files = e.dataTransfer.files; // update input
    //     previewImage(file);
    //   }
    // });

    // Handle file selection
    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        previewImage(fileInput.files[0]);
      }
    });

function previewImage(file) {
  const imageUrl = URL.createObjectURL(file);
  preview.innerHTML = `<img src="${imageUrl}" alt="Preview" />`;
}


document.getElementById("text1").addEventListener("change", (e) => {
    document.getElementsByClassName("mpreview")[0].innerHTML = e.target.value;
  });