const paswd = document.querySelector('#pasword_txt'),
    generate = document.querySelector('#generate'),
    cpy = document.querySelector('#cpy'),
    paswdLenghth = document.querySelector('#slider'),
    copy = document.querySelector('#copy_text'),
    string = 'ABCDEFGHIKLMNOPQRSTVXYZabcdefghiklmnopqrstvxyz0123456789';

// Generating password

generate.addEventListener('click', function () {
    let password = ''
    let checked = document.querySelector('#checkbox').checked
    let finalstr = string
    if (checked) {
        finalstr += '@#$%^&*/=+?'
    }
    for (let i = 0; i < paswdLenghth.value; i++) {
        let paswd = finalstr[Math.floor(Math.random() * finalstr.length)]
        password += paswd
    }
    paswd.innerHTML = password
    finalstr = string
    cpy.style.display = 'block'
})

// Copy

cpy.addEventListener('click', function () {
    navigator.clipboard.writeText(paswd.innerHTML)
    copy.textContent = 'Copied!'
    copy.style.display = 'block'
    setTimeout(() => copy.style.display = 'none', 2000);
})