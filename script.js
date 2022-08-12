function loginTryber() {
    let email = document.getElementsByName('email')[0].value;
    let password = document.getElementsByName('password')[0].value;
    
    if(email === 'tryber@teste.com' && password === '123456') {
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
}

document.getElementById('loginBTN').addEventListener('click', loginTryber);

for(let index=1; index<11; index+=1) {
    let div = document.createElement('div');
    document.getElementById('nota').appendChild(div);
    let input = document.createElement('input');
    input.type = 'radio';
    input.name = 'rate';
    input.id = 'rate'+index;
    input.value = index;
    div.appendChild(input);
    let label = document.createElement('label');
    label.setAttribute('for', 'rate'+index);
    label.innerText = index;
    div.appendChild(label);
}

document.getElementById('agreement').addEventListener('change', function (event) {
    if(event.target.checked === true) {
        document.getElementById('submit-btn').disabled = false;
    } else {
        document.getElementById('submit-btn').disabled = true;
    }
})