// ? anotações guias

//  Variaveis no JS

// var nome = 'thiago'  --> variavel de escopo global e que pode modificar o valor
// let nome = 'thiago' --> variavel sem escopo global e que pode mudar o valor
// const nome = 'thiago' --> variavel sem escopo global e que não pode mudar o valor

// DOM
// const botao = document.getElementById() pega o elemento pelo nome do ID
// const botao = document.getElementsByClassName('texto') pega os elementos pelo nome da classe
// const botao = document.getElementsByName() pega os elementos pelo atributo name
// const botao = document.getElementsByTagName pega os elementos pelo nome doa TAG
// const botao = document.getElementsByTagNameNS() pega o primeiro elemento pelo nome da TAG

// ! código funcional da aula
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const assunto = document.querySelector('#assunto');

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;


function nomeDigitado() {
  let txtNome = document.querySelector('#txtNome');
  if (nome.value.length >= 3) {
    nome.style.borderBottom = '2px solid var(--primary-color)';
    txtNome.innerHTML = 'Nome válido';
    txtNome.style.color = 'var(--primary-color)';
    nomeOk = true;
  } else {
    nome.style.borderBottom = '2px solid red';
    txtNome.innerHTML = 'Nome inválido';
    txtNome.style.color = 'red';
    nomeOk = false;
  }
}

// function validaEmail() {
//   let txtEmail = document.querySelector('#txtEmail');
//   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
//     email.style.borderBottom = '2px solid red';
//     txtEmail.innerHTML = 'Email inválido';
//     txtEmail.style.color = 'red';
//     emailOk = false
//   } else {
//     email.style.borderBottom = '2px solid var(--primary-color)';
//     txtEmail.innerHTML = 'Email válido 👌';
//     txtEmail.style.color = 'var(--primary-color)';
//     emailOk = true;
//   }
// }

function validaEmail() {
  let txtEmail = document.querySelector('#txtEmail');

  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (email.value.match(regex)) {
    email.style.borderBottom = '2px solid var(--primary-color)';
    txtEmail.innerHTML = 'Email válido 👌';
    txtEmail.style.color = 'var(--primary-color)';
    emailOk = true;
  } else {
    email.style.borderBottom = '2px solid red';
    txtEmail.innerHTML = 'Email inválido';
    txtEmail.style.color = 'red';
    emailOk = false
    
  }
}

function assuntoDigitado() {
  let txtAssunto = document.querySelector('#txtAssunto');

  if (assunto.value.length <= 100) {
    assunto.style.borderBottom = '2px solid var(--primary-color)';
    txtAssunto.innerHTML = 'Assunto válido, pode manda-lhe';
    txtAssunto.style.color = 'var(--primary-color)';
    assuntoOk = true;
  } else {
    assunto.style.borderBottom = '2px solid red';
    txtAssunto.innerHTML = 'Assunto inválido, o texto deve de 1 a 100 caracteres';
    txtAssunto.style.color = 'red';
    assuntoOk = false;
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert('Formulário enviado com sucesso!');
  } else {
    alert('Preencha o formulário corretamente antes de enviar...');
  }
}
