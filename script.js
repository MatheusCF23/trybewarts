function loginTryber() {
  const email = document.getElementsByName('email')[0].value;
  const password = document.getElementsByName('password')[0].value;

  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const loginBTN = document.getElementById('loginBTN');
loginBTN.addEventListener('click', loginTryber);

for (let index = 1; index < 11; index += 1) {
  const div = document.createElement('div');
  document.getElementById('nota').appendChild(div);
  const input = document.createElement('input');
  input.type = 'radio';
  input.name = 'rate';
  input.id = index;
  input.value = index;
  div.appendChild(input);
  const label = document.createElement('label');
  label.setAttribute('for', index);
  label.innerText = index;
  div.appendChild(label);
}

const submitButton = document.getElementById('submit-btn');
document.getElementById('agreement').addEventListener('change', (event) => {
  if (event.target.checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

document.getElementById('textarea').addEventListener('input', (event) => {
  const counter = document.getElementById('counter');
  counter.innerText = 500 - Number(event.target.value.length);
});

// Preenche Formulario Enviado

function adicionaNome() {
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  document.getElementById('nome').innerText = 'Nome: '.concat(nome, ' ', sobrenome);
}
document.getElementById('input-name').addEventListener('input', adicionaNome);
document.getElementById('input-lastname').addEventListener('input', adicionaNome);

function adicionaEmail(event) {
  const mail = event.target.value;
  document.getElementById('email').innerText = 'Email: '.concat(mail);
}
document.getElementById('input-email').addEventListener('input', adicionaEmail);

function adicionaCasa() {
  const casa = document.getElementById('house').value;
  document.getElementById('casa').innerText = 'Casa: '.concat(casa);
}
document.getElementById('house').addEventListener('change', adicionaCasa);
adicionaCasa();

function adicionaFamilia() {
  const familia = document.querySelectorAll('input[name="family"]:checked');
  if (familia.length !== 0) {
    document.getElementById('family').innerText = 'Família: '.concat(familia[0].value);
  }
}
const radioFamily = document.getElementsByName('family');
for (let index = 0; index < radioFamily.length; index += 1) {
  radioFamily[index].addEventListener('change', adicionaFamilia);
}

function adicionaMaterias() {
  const materias = document.querySelectorAll('input[name="subject"]:checked');
  if (materias.length > 1) {
    let text = 'Matérias: '.concat(materias[0].value);
    for (let index = 1; index < materias.length; index += 1) {
      text = text.concat(', ', materias[index].value);
    }
    document.getElementById('materias').innerText = text;
  } else if (materias.length === 1) {
    const text = 'Matérias: '.concat(materias[0].value);
    document.getElementById('materias').innerText = text;
  }
}
const materiaCheck = document.getElementsByName('subject');
for (let index = 0; index < materiaCheck.length; index += 1) {
  materiaCheck[index].addEventListener('change', adicionaMaterias);
}

function adicionaNota() {
  const nota = document.querySelectorAll('input[name="rate"]:checked');
  if (nota.length !== 0) {
    document.getElementById('avaliacao').innerText = 'Avaliação: '.concat(nota[0].value);
  }
}
const notas = document.getElementsByName('rate');
for (let index = 0; index < notas.length; index += 1) {
  notas[index].addEventListener('change', adicionaNota);
}

function adicionaComentario() {
  const comment = document.getElementById('textarea').value;
  if (comment.length !== 0) {
    document.getElementById('observacoes').innerText = 'Observações: '.concat(comment);
  }
}
document.getElementById('textarea').addEventListener('input', adicionaComentario);

document.getElementById('submit-btn').addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('evaluation-form').style.display = 'none';
  document.getElementById('form-data').style.display = 'block';
});
