const getAnswwers = document.getElementsByClassName('answers');

for (const i of getAnswwers) {
    i.addEventListener('click', (e)=>{
        const contentAnswers = i.textContent;

        async function requestWaifu() {

            try{
        
                const response = await fetch(`https://waifu.it/api/v4/${contentAnswers}`, {
                    headers: {
                        'Authorization': 'MTIxNDI0OTc0ODAxNDQzMjI5Nw--.MTcxNDUwOTI5OQ--.a3c82fbc8d7'
                    }
                });
        
                if(response.status >= 400 &&  response.status <= 500){
                    
                }

                const responseJson = await response.json();
        
                document.body.innerHTML = `<img width="50%" height="50%" src="${responseJson.url}"></img>`;
        
            } catch(error){
        
                console.log(error);
        
            }
            
        }
        requestWaifu();
    });
}



