/* eslint-disable strict */
// Botón reset
let allInputErrorList= document.querySelectorAll('.js-msgerror');
const handleReset = () => {
  data.palette = 1,
  data.name = "",
  data.job = "",
  data.phone = "",
  data.email = "",
  data.linkedin = "",
  data.github = "",
  data.photo = "",
  updatePreview();
  previewPalette.classList.remove('palette2');
  previewPalette.classList.remove('palette3');
  previewPalette.classList.add('palette1');
  btnPalette1.checked = true;
  msgShare.innerHTML = "";
  for(let i = 0; i < allInputList.length; i++) {
    allInputList[i].value = '';
  };
  for(let i = 0; i < allInputErrorList.length; i++) {
    allInputErrorList[i].innerHTML = '';
  };

  localStorage.removeItem('formData');
  resetImage();
  sendBTN.classList.remove('checked');
}

btnReset.addEventListener('click', handleReset);

