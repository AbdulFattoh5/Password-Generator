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

// Burger menu
const burger = document.querySelector('#burger'),
    header = document.querySelector('.header'),
    overlay = document.querySelector('.header_overlay')

burger.addEventListener('click', function () {
    header.classList.toggle('open')
})

overlay.addEventListener('click', function () {
    header.classList.toggle('open')
})

// Theme
const themeBtn = document.querySelector('.theme'),
    themeIcon = document.querySelector('.themeIcon'),
    themeP = document.querySelector('.theme_p'),
    section = document.querySelector('.section'),
    body = document.querySelector('body'),
    h = document.querySelector('.h'),
    generateBtn = document.querySelector('.btn'),
    num = document.querySelector('.out8'),
    p = document.querySelector('.p'),
    h5 = document.querySelector('h5'),
    range = document.querySelector('input[type=range]'),
    menu = document.querySelector('.menu'),
    menuLinkH = document.querySelector('.menu_link_h'),
    link1 = document.querySelector('.link1'),
    link2 = document.querySelector('.link2'),
    link3 = document.querySelector('.link3'),
    app = document.querySelector('.app'),
    app1 = document.querySelector('.app1'),
    burgerSpan1 = document.querySelector('.header_burger-span1'),
    burgerSpan2 = document.querySelector('.header_burger-span2'),
    burgerSpan3 = document.querySelector('.header_burger-span3'),
    themeicon1 = document.querySelector('.themeIcon1'),
    themeicon2 = document.querySelector('.themeIcon2')

function toggleTheme() {
    const themeIcons = document.querySelectorAll(".themeIcon");
    themeIcons.forEach(btn => {
        btn.classList.toggle("hide-button");
    });
    if (themeP.innerHTML == 'Dark') {
        themeP.innerHTML = 'Light'
        section.style.background = '#2e4040'
        body.style.background = 'rgb(88, 88, 88)'
        h.style.color = 'white'
        generateBtn.style.background = '#c7cfc6'
        generateBtn.style.color = 'black'
        num.style.color = 'white'
        p.style.color = 'white'
        h5.style.background = '#c7cfc6'
        h5.style.color = 'black'
        range.style.background = '#5a6e65'
        menu.style.background = '#2e4040'
        menuLinkH.style.color = 'white'
        link1.style.color = 'white'
        link2.style.color = 'white'
        link3.style.color = 'white'
        app.style.color = 'white'
        app1.style.color = 'white'
        burgerSpan1.style.background = 'white'
        burgerSpan2.style.background = 'white'
        burgerSpan3.style.background = 'white'
        themeBtn.style.background = 'white'
        themeP.style.color = 'black'
        themeicon1.style.filter = 'none'
        themeicon2.style.filter = 'none'
        cpy.style.color = '#c7cfc6'
    } else if (themeP.innerHTML == 'Light') {
        themeP.innerHTML = 'Dark'
        section.style.background = '#c2dde4'
        body.style.background = 'white'
        h.style.color = 'black'
        generateBtn.style.background = '#003a44'
        generateBtn.style.color = 'white'
        num.style.color = 'black'
        p.style.color = 'black'
        h5.style.background = '#003a44'
        h5.style.color = 'white'
        range.style.background = '#66a4ac'
        menu.style.background = '#97b1b7'
        menuLinkH.style.color = 'black'
        link1.style.color = 'black'
        link2.style.color = 'black'
        link3.style.color = 'black'
        app.style.color = 'black'
        app1.style.color = 'black'
        burgerSpan1.style.background = 'black'
        burgerSpan2.style.background = 'black'
        burgerSpan3.style.background = 'black'
        themeBtn.style.background = 'black'
        themeP.style.color = 'white'
        themeicon1.style.filter = 'invert()'
        themeicon2.style.filter = 'invert()'
        cpy.style.color = '#003a44'
    }
}

themeBtn.addEventListener('click', function () {
    toggleTheme()
})

// loading
window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
}