// código do menu lateral feito pelo audi
// todo esse código é do menu lateral
// const menuLinks = document.querySelectorAll('#a01');
// animação do botão de apresentação
// menuLinks.forEach(link => {
//   link.addEventListener('mouseover', () => {
//     const originalText = link.textContent;
//     link.textContent = originalText + 'Apresentacao' ;
//   });

//   link.addEventListener('mouseout', () => {
//     const originalText = link.getAttribute('data-original-text1');
//     link.textContent = originalText;
//   });
// });

// animação do botão do primeiro módulo
// const menuLinks2 = document.querySelectorAll('#a02');

// menuLinks2.forEach(link => {
//   link.addEventListener('mouseover', () => {
//     const originalText = link.textContent;
//     link.textContent = originalText + 'Modulo: Aprendendo' ;
//   });

//   link.addEventListener('mouseout', () => {
//     const originalText = link.getAttribute('data-original-text2');
//     link.textContent = originalText;
//   });
// });
// animação do botão dos segundo módulo
// const menuLinks3 = document.querySelectorAll('#a03');

// menuLinks3.forEach(link => {
//   link.addEventListener('mouseover', () => {
//     const originalText = link.textContent;
//     link.textContent = originalText + 'Módulo: Testes' ;
//   });

//   link.addEventListener('mouseout', () => {
//     const originalText = link.getAttribute('data-original-text3');
//     link.textContent = originalText;
//   });
// });
// animação do botão do terceiro módulo 
// const menuLinks4 = document.querySelectorAll('#a04');

//     menuLinks4.forEach(link => {
//       link.addEventListener('mouseover', () => {
//         const originalText = link.textContent;
//         link.textContent = originalText + 'Referencias' ;
//       });

//       link.addEventListener('mouseout', () => {
//         const originalText = link.getAttribute('data-original-text4');
//         link.textContent = originalText;
//       });
//     });

// fim do código do menu lateral


// teste header
var lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px";
    } else {
        navbar.style.top = "0";
    }

    lastScrollTop = scrollTop;
})


//MODO ESCURO (JAMILLE)
const btnDarkModeToggle = document.getElementById('btn_tema')
const themeSystem = localStorage.getItem('themeSystem') || 'light'


btnDarkModeToggle.addEventListener('click', () => {

    let oldTheme = localStorage.getItem('themeSystem') || 'light'
    let newTheme = oldTheme == "light" ? "dark" : "light"
    localStorage.setItem('themeSystem', newTheme)
    defineCurrentTheme(newTheme)
});


function defineCurrentTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme)
    if (theme == "light") {
        document.getElementById('logo').src = "imgs/logoEGP2.png"
        document.getElementById('img_logo').src = "imgs/logoEGP2.png"
        return
    }
    document.getElementById('logo').src = "imgs/logoEGP1.png"
    document.getElementById('img_logo').src = "imgs/logoEGP1.png"

}

defineCurrentTheme(themeSystem)
//FIM DA FUNÇÃO MODO ESCURO (JAMILLE)

// script do scroollrevel
document.addEventListener('DOMContentLoaded', function () {
    window.sr = ScrollReveal({ reset: true });
    // scrooll revel da página de apresentação
    sr.reveal('.main-content', { duration: 2000 });
    sr.reveal('#para01', { duration: 2000 });
    sr.reveal('#para02', { duration: 2000 });
    // scroollrevel da página do módulo 01
    sr.reveal('#img-1', { duration: 2000 });
    sr.reveal('Título', { duration: 2000 });
    sr.reveal('.bd-callout', { duration: 2000 });
    sr.reveal('.none', { duration: 2000 });
    sr.reveal('.scrool', { duration: 2000 });
    sr.reveal('.accordion', { duration: 2000 });




    // sr.reveal('#principal-main', {duration: 3000});
});




//Amanda// 
/*Está chamando a variavel e a section */
const progressbar = document.querySelector('#progress-bar')

const section = document.querySelector('section')


/*fazer minha animação e scroll*/
const animateProgressBar = () => {
    let scrollMouse = -section.getBoundingClientRect().top;
    let progressWidth = (scrollMouse / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;

    let value = Math.floor(progressWidth)
    console.log(value)

    progressbar.style.width = value + "%"

    if (value < 0) {
        progressbar.style.width = '0%'
    }
}
window.addEventListener('scroll', animateProgressBar)
animateProgressBar()

