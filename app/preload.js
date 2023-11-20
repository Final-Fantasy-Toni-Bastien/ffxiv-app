function submit() {
  localStorage.setItem("prenom", document.getElementById("prenom").value)
  localStorage.setItem("nom", document.getElementById("nom").value)

}

function refresh() {
  const response = fetch("/refresh");
  news();
}
async function news(){
  try {
      const response = await fetch("https://lodestonenews.com/feed/fr.xml");

      if (response.ok) {
          const text = await response.text();
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(text, "text/xml");

          // Vous pouvez maintenant accéder aux éléments du flux RSS comme suit
          const items = xmlDoc.querySelectorAll("item");

          items.forEach(item => {
              const title = item.querySelector("title").textContent;
              const link = item.querySelector("link").textContent;
              const description = item.querySelector("description").textContent;
              document.getElementById("c").innerHTML += (`  
              <a href="${link}" class="lien-carte">
              <div class="carte">
              <div class="carte-contenu">
              <h2 class="carte-titre">${title}<br>
              <p class="card-texte">${description}<p>
              <br>--------<br>   </div></div></a>`);
          });
      } else {
          console.error("Erreur lors de la requête.", response);
      }
  } catch (error) {
      console.error("Une erreur s'est produite :", error);
  }
}

window.onload = function () {

  news()










  //    https://xivapi.com/character/search?name=[name]&server=[server]
  // let prenom = localStorage.getItem("prenom");
  // let nom = localStorage.getItem("nom");
  // console.log(prenom + "" + nom)
  // if ((prenom != "" || prenom) && (nom != "" || nom)) {
  //     let res = await fetch(`https://xivapi.com/character/search?name=${nom}+${prenom}&server=Phantom`)

  // }


  // console.log(resid.character.class_jobs[0].level)

  // var listnolvl1 = [];

  // resid.character.class_jobs.forEach(element => {
  //     if (element.level != 0) {
  //         listnolvl1.push(
  //             {
  //             name: cap(element.name),
  //             value: `Lvl: ${element.level}`,
  //             inline: true
  //         }
  //         );
  //     }

  // });

  // console.log(listnolvl1)

  // function cap(str) {
  //     return str.charAt(0).toUpperCase() + str.slice(1);
  // }

  // //return whether or not the character's lodestone bio matches our token
  // const embed = {
  //     title: `Classe: ${cap(resid.character.active_class_job.name)}`,
  //     description: `Lvl: ${resid.character.active_class_job.level}`,
  //     author: { // Author property
  //         name: char.name,
  //         icon_url: char.avatar
  //     },
  //     url: `https://fr.finalfantasyxiv.com/lodestone/character/${char.id}/`,

  //     fields: listnolvl1,

  //     color: 0x008000, // Color, either in hex (show), or a base-10 integer
  //     footer: { // Footer text
  //         text: "ToniPortal"
  //     },
  //     image: {
  //         url: `${resid.character.portrait}`,
  //     },
  // }



  // message.channel.send({ embeds: [embed] })

}