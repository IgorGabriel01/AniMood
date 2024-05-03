const getAnswwers = document.getElementsByClassName('answers');
const getMain = document.querySelector('main');

for (const i of getAnswwers) {
    i.addEventListener('click', (e)=>{
        let contentAnswers;

        switch(i) {
            case 'Feliz':
                contentAnswers = 'happy';
            break;
                
            case 'Triste':
                contentAnswers = 'happy';
            break;
                
            case 'Apaixonado':
                contentAnswers = 'hapy';
            break;
                
            case 'Nervoso':
                contentAnswers = 'hapy';
            break;

            default:
                break;
        }   

        async function requestWaifu() {

            try{
        
                const response = await fetch(`https://api.otakugifs.xyz/gif?reaction=${contentAnswers}`);
        
                const responseJson = await response.json();

                console.log(responseJson);

                
            } catch(error){
        
                console.log(error);
        
            }
            
        }
        requestWaifu();
    })
};


