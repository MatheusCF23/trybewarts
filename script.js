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
  input.id = 'rate' + index;
  input.value = index;
  div.appendChild(input);
  const label = document.createElement('label');
  label.setAttribute('for', 'rate' + index);
  label.innerText = index;
  div.appendChild(label);
}

const agreement = document.getElementById('agreement');
agreement.addEventListener('change', function (event) {
  if (event.target.checked === true) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
});

document.getElementById('textarea').addEventListener('input', function (event) {
  const counter = document.getElementById('counter');
  counter.innerText = 500 - Number(event.target.value.length);
});
