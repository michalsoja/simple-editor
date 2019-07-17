import { loadavg } from "os";

const btnSave = document.querySelector('.form__button--save-js');
const btnLoad = document.querySelector('.form__button--load-js');
const textarea = document.querySelector('.form__textarea-js');

btnSave.addEventListener('click', (e)=>{
    e.preventDefault();
    localStorage.setItem('itemValue', textarea.value);
})

btnLoad.addEventListener('click', (e)=>{
    e.preventDefault();
    textarea.value = localStorage.getItem('itemValue');
})