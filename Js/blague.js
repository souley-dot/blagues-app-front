

async function getBlagueRondom(){

    try {
let response = await fetch("https://blagues-app-1.onrender.com/apiv1/blague/random")

 if (!response.ok) throw new Error("Erreur serveur");

 const blague = await response.json();

 const ol = document.getElementById("ol");
 
 let liQuestion = document.createElement('li');
 liQuestion.textContent = blague.question;

 let ulResponse = document.createElement('ul');
 let liResponse = document.createElement('li');
 ulResponse.setAttribute('class','ul')


 liResponse.textContent = blague.response;

 ulResponse.appendChild(liResponse);
 liQuestion.appendChild(ulResponse);
ol.appendChild(liQuestion);

    } catch (error) {

        console.error("erreur lors de la recupération ", error)  
    }
}

document.addEventListener("DOMContentLoaded", () => {
let btnRondom=document.getElementById("randomBtn");
btnRondom.addEventListener("click", getBlagueRondom)

})