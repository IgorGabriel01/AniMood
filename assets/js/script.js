// Selecionar elementos
const getAnswers = document.getElementsByClassName('answers');
const getBody = document.querySelector('body');
const getMain = document.querySelector('main');
const myGifs = document.querySelector('header div');
const miku = document.querySelector('main section img');
const salutationDiv = document.getElementById('salutation-div');

let myLinkGifs = [];

const storedGifs = JSON.parse(localStorage.getItem('gifs'));
if (storedGifs) {
    myLinkGifs = storedGifs;
}

miku.addEventListener('click', (e) => {
    e.target.setAttribute('src', './assets/img/miku/miku-person-6.png');

    salutationDiv.textContent = 'Não toque na Miku, escolha como você está se sentindo.';
})

function showMyGifs() {
    getMain.innerHTML = `
            <section id="my-gifs-section">
                <img src="./assets/img/miku/miku-person-4.png">
                <div id="div-d-my-gifs">
                    <h2 id="h-meus-gifs">Meus Gifs</h2>
                    <div id="div-gifs"></div>
                </div>
            </section>
            `;

    const divPai = document.getElementById('div-gifs');

    if (myLinkGifs.length) {
        for (const gifObj of myLinkGifs) {
            const gif = document.createElement('img');
            gif.setAttribute('src', gifObj.url);
            divPai.appendChild(gif);
        }
    } else {
        divPai.innerHTML = `<p id="div-gif-vazio">Não há gifs armazenados.</p>`;
    }
}

for (const i of getAnswers) {
    i.addEventListener('click', async () => {
        let contentAnswers;

        switch (i.textContent) {
            case 'Feliz':
                contentAnswers = 'happy';
                break;
            case 'Triste':
                contentAnswers = 'sad';
                break;
            case 'Apaixonado':
                contentAnswers = 'love';
                break;
            case 'Nervoso':
                contentAnswers = 'scared';
                break;
            case 'Sono':
                contentAnswers = 'sleep';
                break;
            case 'Raiva':
                contentAnswers = 'angrystare';
                break;
            default:
                contentAnswers = '';
                break;
        }

        if (!contentAnswers) return;

        try {

            const response = await fetch(`https://api.otakugifs.xyz/gif?reaction=${contentAnswers}`);
            const responseJson = await response.json();

            if (response.status === 200 && responseJson.url) {
                myLinkGifs.push(responseJson);
                localStorage.setItem('gifs', JSON.stringify(myLinkGifs));

                getMain.innerHTML = `
                    <div id="show-gif">
                        <img id="miku-show-gif" src="./assets/img/miku/miku-person-3.png">
                        <div>
                            <img id="gif" src="${responseJson.url}">
                            <div id="in-system-show-gifs">Meus Gifs</div>
                        </div>
                        
                    </div>
                `;
            } else {
                getBody.innerHTML = `
                    <section id="error-body">
                        <h1>Algo deu errado...</h1>
                        <img src="./assets/img/miku/miku-person-5.png">
                    </section>
                `;
            }

            const secondMyGifs = document.getElementById('in-system-show-gifs');

            secondMyGifs.addEventListener('click', showMyGifs)
        } catch (err) {
            console.log(`Erro: ${err}`);
        }
    });
}

myGifs.addEventListener('click', showMyGifs);




