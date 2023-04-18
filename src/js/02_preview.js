/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable strict */

let data = {
  palette: 1,
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};


let allInputList = document.querySelectorAll('.js-input');

function handleInputForm(event) {
  data[event.target.id] = event.target.value;
  localStorage.setItem('formData', JSON.stringify(data)); 
  updatePreview();
}

function updatePreview() {
  if (data.name === '') {
    previewName.innerHTML = 'Nombre Apellidos';
  } else {
    previewName.innerHTML = data.name;
  }
  previewEmail.href = `mailto:${data.email}`;
  if (data.job === '') {
    previewJob.innerHTML = 'Front-end developer';
  } else {
    previewJob.innerHTML = data.job;
  }
  previewTel.href = `tel:+34${data.phone}`;
  if (!data.linkedin.includes ('https://www.')) {
    previewLinkedin.href = `https://www.${data.linkedin}`;
  } else {
    previewLinkedin.href = `${data.linkedin}`;
  }
  if (!data.github.includes ('https://github.com/')) {
    previewGithub.href = `https://github.com/${data.github}`;
  } else {
    previewGithub.href = `${data.github}`;
  }
}


// FUNCIONES -PALETTES

function handlePalettes(event) {
  const num = parseInt(event.target.id);
  data.palette = num;
  previewPalette.classList.remove('palette1');
  previewPalette.classList.remove('palette2');
  previewPalette.classList.remove('palette3');
  previewPalette.classList.add(`palette${num}`);
}


/* function handlePalette1() {
  data.palette = 1;
  previewPalette.classList.remove('palette2');
  previewPalette.classList.remove('palette3');
  previewPalette.classList.add('palette1');
}

function handlePalette2() {
  data.palette = 2;
  previewPalette.classList.remove('palette1');
  previewPalette.classList.remove('palette3');
  previewPalette.classList.add('palette2');
}

function handlePalette3() {
  data.palette = 3;
  previewPalette.classList.remove('palette1');
  previewPalette.classList.remove('palette2');
  previewPalette.classList.add('palette3');
}

function handlePalettes(event) {
  if(event.target.id === 'palette1') {
    handlePalette1();
  }
  if(event.target.id === 'palette2') {
    handlePalette2();
  }
  if(event.target.id === 'palette3') {
    handlePalette3();
  }
} */

const telef =  /^\+?(\d.*){3,}$/ ;

inputEmail.addEventListener('change', function () {
  // Cada vez que el usuario escribe algo, verificamos si
  // los campos del formulario son válidos.

  if (inputEmail.validity.valid) {
    // En caso de que haya un mensaje de error visible, si el campo
    // es válido, eliminamos el mensaje de error.
    emailError.innerHTML = ''; // Restablece el contenido del mensaje
    emailError.className = 'error'; // Restablece el estado visual del mensaje
  } else {
    // Si todavía hay un error, muestra el error exacto
    showError();
  }
});

/* VALIDACIÓN TELF */

function showErrorTel() {
  console.log('hola');
  if(inputTel.value === '') {
    // Si el campo está vacío muestra el mensaje de error. 
    telError.textContent = 'Debe introducir un número de teléfono válido.';
  } else if(telef.test(inputTel.value)) {
    telError.innerHTML = '';
  } else {
    // Si el campo no contiene de 7 a 14 número muestra el mensaje de error. 
    telError.textContent = 'El valor introducido debe ser un número de teléfono válido.';
  }
}

function showError() {
  if(email.validity.valueMissing) {
    // Si el campo está vacío
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'Debe introducir una dirección de correo electrónico.';
  } else if(email.validity.typeMismatch) {
    // Si el campo no contiene una dirección de correo electrónico
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'El valor introducido debe ser una dirección de correo electrónico.';
  } else {
    emailError.innerHTML = '';
  }
}

inputTel.addEventListener('change', function () {
  showErrorTel();
});

inputName.addEventListener('keyup', function () {
  checkSizeName();
  if (inputName.value === "") {
    nameError.innerHTML = 'Rellena tus datos';
    nameError.className = 'error';
  } else {
    nameError.innerHTML = '';
  }
});

inputJob.addEventListener('change', function () {
  if (inputJob.value === "") {
    jobError.innerHTML = 'Rellena tus datos';
    jobError.className = 'error';
  } else {
    jobError.innerHTML = '';
  }
});

inputLinkedin.addEventListener('change', function () {
  if (inputLinkedin.value === "") {
    linkedinError.innerHTML = 'Rellena tus datos';
    linkedinError.className = 'error';
  } else {
    linkedinError.innerHTML = '';
  }
});

inputGithub.addEventListener('change', function () {
  if (inputGithub.value === "") {
    githubError.innerHTML = 'Rellena tus datos';
    githubError.className = 'error';
  } else {
    githubError.innerHTML = '';
  }
});


function checkSizeName(){
  if (inputName.value.length > 20) {
    previewName.classList.remove('preview__card__name');
    previewName.classList.add('preview__card__name__small');
  }
}



for(let i = 0; i < allInputList.length; i++) {
  allInputList[i].addEventListener('input', handleInputForm);
}

/* btnPalettes.addEventListener('click', handlePalettes); */
btnPalette1.addEventListener('click', handlePalettes);
btnPalette2.addEventListener('click', handlePalettes);
btnPalette3.addEventListener('click', handlePalettes);
