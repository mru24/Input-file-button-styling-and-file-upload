let file = document.querySelector('#file');
file.addEventListener('change', function () {
  let selectedFiles = file.files;
  for (var i = 0; i < selectedFiles.length; i++) {
    let filesToUpload = selectedFiles[i].name;
    console.log(filesToUpload);
  }
})
