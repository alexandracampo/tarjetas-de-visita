'use strict'; 

const localStorageData = JSON.parse(localStorage.getItem ('formData')); 

if(localStorageData){
  data = localStorageData;
  inputName.value = data.name;
  inputJob.value = data.job;
  inputEmail.value = data.email;
  inputTel.value = data.phone;
  profileImage.style.backgroundImage = `url(${data.photo})`; 
  profilePreview.style.backgroundImage = `url(${data.photo})`;
  inputLinkedin.value = data.linkedin;
  inputGithub.value = data.github;
  updatePreview();
  checkSizeName(); 
}


