/* eslint-disable no-unused-vars */
'use strict';

const designLegend = document.querySelector ('.js-dropdown__design');
const fillLegend = document.querySelector ('.js-dropdown__fill');
const shareLegend = document.querySelector ('.js-dropdown__share');
const designContent = document.querySelector ('.js-content__design');
const fillContent = document.querySelector ('.js-content__fill');
const shareContent = document.querySelector ('.js-content__share');
const designArrow = document.querySelector ('.js-arrow__design');
const fillArrow = document.querySelector ('.js-arrow__fill');
const shareArrow = document.querySelector ('.js-arrow__share');

const inputName = document.querySelector ('.js-name');
const previewName = document.querySelector ('.js__preview_name');
const inputJob = document.querySelector ('.js-job');
const previewJob = document.querySelector ('.js__preview_job');
const inputEmail = document.querySelector ('.js-email');
const previewEmail = document.querySelector ('.js__preview_email');
const inputTel = document.querySelector ('.js-tel');
const previewTel = document.querySelector ('.js__preview_tel');
const inputLinkedin = document.querySelector ('.js-linkedin');
const previewLinkedin = document.querySelector ('.js__preview_linkedin');
const inputGithub = document.querySelector ('.js-github');
const previewGithub = document.querySelector ('.js__preview_github');
const emailError = document.querySelector('.js-email + span.error');
const nameError = document.querySelector('.js-error-name');
const jobError = document.querySelector('.js-error-job');
const telError = document.querySelector('.js-error-tel');
const linkedinError = document.querySelector('.js-error-linkedin');
const githubError = document.querySelector('.js-error-github');

const btnPalette1 = document.querySelector ('.js-btn-pallete1');
const btnPalette2 = document.querySelector ('.js-btn-pallete2');
const btnPalette3 = document.querySelector ('.js-btn-pallete3');
const btnPalettes = document.querySelector('.js-btn-palletes');
const previewPalette = document.querySelector ('.js-preview');


const btnReset=document.querySelector('.js-btn__reset'); 

// EXPRESIONES REGULARES 

const exp = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	tel: /^\d{7,14}$/ // 7 a 14 numeros.
}