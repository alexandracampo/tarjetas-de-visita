/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable strict */

const sendBTN = document.querySelector ('.js-shareBtn'); 
const msgShare = document.querySelector ('.js-msgShare'); 


function handleClickSend(event) {
  event.preventDefault(); 

  fetch('https://dev.adalab.es/api/card/', {
    method:'POST',
    headers: {
      'content-type':'application/json',
    },
    body:JSON.stringify(data),
  })
    .then ((response)=>response.json())
    .then ((data)=>{

      if( ! data.success){
        // Mensaje error
        if(data.error.startsWith('Mandatory fields')){
          msgShare.innerHTML = `<p class='error'> Faltan datos, revisa el formulario.</p>`;
        }else if (data.error.startsWith('Database error')){
          msgShare.innerHTML = `<p class='error'> Imagen demasiado grande.</p>`;
        }else{
          msgShare.innerHTML = `<p class='error'> Error. Intentalo de nuevo.</p>`;
        }

      }else{
        // enlace de la tarjeta
        msgShare.innerHTML = `<div class= 'share_card'> 
         <h2 class='share_card_text'> La tarjeta ha sido creada: </h2> 
            <a href='${data.cardURL}' target='_blank' class= 'share_card_cardURL'> Tu tarjeta </a> 
        	<a class="share_card_twitter-share-button" href="https://twitter.com/intent/tweet?text=Mi%20tarjeta%20de%20presentaci%C3%B3n&url=${data.cardURL}"target='_blank' ><i class="fa-brands fa-twitter"></i> Compartir en Twitter</a>
            </div>`;
        sendBTN.classList.add('checked');
      }
    } );
}

sendBTN.addEventListener( 'click', handleClickSend); 


