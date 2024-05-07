const getAnswwers = document.getElementsByClassName('answers');
const getMain = document.querySelector('main');

localStorage.setItem('My Gifs', myGifs);

for (const i of getAnswwers) {
    i.addEventListener('click', (e)=>{
        
        let contentAnswers;

        switch(i.textContent) {
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
                
                break;
        }   

        async function requestWaifu() {

            try{
        
                const response = await fetch(`https://api.otakugifs.xyz/gif?reaction=${contentAnswers}`);
        
                const responseJson = await response.json();

                if (response.status === 200) {

                    myGifs.push(responseJson);

                    getMain.innerHTML = `
                        <div id="show-gif">
                            <img id="miku-show-gif" src="./assets/img/miku/miku-person-3.png">
                            <img id="gif" src="${responseJson.url}">
                        </div>
                    `

                } else {
                    document.body.innerHTML = `
                        
                    `
                }
                
            } catch(error){
        
                console.log(error);
        
            }
            
        }

        requestWaifu();

    })
};


