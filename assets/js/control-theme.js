const iconsGifAndThemes = document.getElementsByClassName('div-header-options');
const buttonDarkTheme = document.getElementById('dark-theme');
const infosMiku = document.querySelector('main p');
const question = document.getElementById('salutation-div');
const answers = document.getElementsByClassName('answers');

let controlsDarkTheme;

function toPlaceThemeDark(){

    if(!controlsDarkTheme){

        document.body.style.backgroundColor = '#0B0B0B';
        document.body.style.transition = '0.5s';

        iconsGifAndThemes[0].innerHTML = `
            <img class="icons-header" src="/assets/img/icons/gif-icon-light.png" alt="Ícone meus Gifs">
            <p>Meus Gifs</p>
        `;

        iconsGifAndThemes[1].innerHTML = `
            <img class="icons-header" src="/assets/img/icons/theme-light.png" alt="Ícone de tema claro">
            <p>Light Mode</p>
        `;

        for (let i = 0; i < iconsGifAndThemes.length; i++) {
            iconsGifAndThemes[i].style.color = '#F2F2F2'
            iconsGifAndThemes[i].style.transition = '0.5s'
        }

        infosMiku.style.color = '#F2F2F2';
        infosMiku.style.transition = '0.5s';

        question.classList.add('answers-questions-black');

        for (let i = 0; i < answers.length; i++) {
            answers[i].classList.add('answers-questions-black');
        }

        controlsDarkTheme = true;

    } else {

        document.body.style.backgroundColor = '#ffffff';
        document.body.style.transition = '0.5s';

        iconsGifAndThemes[0].innerHTML = `
            <img class="icons-header" src="/assets/img/icons/gif-icon-dark.png" alt="Ícone meus Gifs">
            <p>Meus Gifs</p>
        `;

        iconsGifAndThemes[1].innerHTML = `
        <img class="icons-header" src="/assets/img/icons/theme-dark.png" alt="Ícone de tema escuro">
        <p>Dark Mode</p>
        `

        for (let i = 0; i < iconsGifAndThemes.length; i++) {
            iconsGifAndThemes[i].style.color = '#0B0B0B'
            iconsGifAndThemes[i].style.transition = '0.5s'
        }

        infosMiku.style.color = '#0B0B0B';
        infosMiku.style.transition = '0.5s';

        question.classList.remove('answers-questions-black');

        for (let i = 0; i < answers.length; i++) {
            answers[i].classList.remove('answers-questions-black');
        }
      
        controlsDarkTheme = false;

    }

}

buttonDarkTheme.addEventListener('click', toPlaceThemeDark);