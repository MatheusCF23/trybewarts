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