function createGame(p1, h, p2) {
  return `
     
  <li>
      <img src="./assets/icon/icon-${p1}.svg" alt=${p1} />
      <strong> ${h}</strong>
      <img src="./assets/icon/icon-${p2}.svg" alt=${p2} />
  </li>
  `
}

function createcard(date, day, games) {
  return `
  <div class="card">
  <h2>${date} <span> ${day}</span></h2>
  <ul>
   ${games}
  </ul>
</div>
  
  `
}

document.querySelector("#app").innerHTML = `     
<header>
 <img src="./assets/logo.svg" alt="Logo" />
</header>
<main id="cards">
 ${createcard("20/11", "Domingo", createGame("qatar", "13:00", "ecuador"))}
 ${createcard(
   "21/11",
   "Segunda",
   createGame("england", "10:00", "iran") +
     createGame("senegal", "13:00", "netherlands") +
     createGame("unitedstates", "16:00", "wales")
 )}
 ${createcard(
   "22/11",
   "Terça",
   createGame("argentina", "07:00", "saudiarabia") +
     createGame("denmark", "10:00", "tunisia") +
     createGame("mexico", "13:00", "poland") +
     createGame("france", "16:00", "australia")
 )}
 ${createcard(
   "23/11",
   "Quarta",
   createGame("morocco", "07:00", "croatia") +
     createGame("germany", "10:00", "japan") +
     createGame("spain", "13:00", "costarica") +
     createGame("belgium", "16:00", "canada")
 )}
 ${createcard(
   "24/11",
   "Quinta",
   createGame("switzerland", "07:00", "cameroon") +
     createGame("uruguay", "10:00", "southkorea") +
     createGame("portugal", "13:00", "ghana") +
     createGame("brazil", "16:00", "serbia")
 )}

${createcard(
  "25/11",
  "Sexta",
  createGame("wales", "07:00", "iran") +
    createGame("qatar", "10:00", "senegal") +
    createGame("netherlands", "13:00", "ecuador") +
    createGame("england", "16:00", "unitedstates")
)} 

${createcard(
  "26/11",
  "sábado",
  createGame("tunisia", "07:00", "australia") +
    createGame("poland", "10:00", "saudiarabia") +
    createGame("france", "13:00", "denmark") +
    createGame("argentina", "16:00", "mexico")
)}

${createcard(
  "27/11",
  "domingo",
  createGame("japan", "07:00", "costarica") +
    createGame("belgium", "10:00", "morocco") +
    createGame("croatia", "13:00", "canada") +
    createGame("spain", "16:00", "germany")
)}

${createcard(
  "28/11",
  "segunda",
  createGame("cameroon", "07:00", "serbia") +
    createGame("southkorea", "10:00", "ghana") +
    createGame("brazil", "13:00", "switzerland") +
    createGame("portugal", "16:00", "uruguay")
)}

${createcard(
  "29/11",
  "terça",
  createGame("ecuador", "07:00", "senegal") +
    createGame("netherlands", "10:00", "qatar") +
    createGame("iran", "13:00", "unitedstates") +
    createGame("wales", "16:00", "england")
)}

${createcard(
  "30/11",
  "quarta",
  createGame("tunisia", "07:00", "france") +
    createGame("australia", "10:00", "denmark") +
    createGame("poland", "13:00", "argentina") +
    createGame("saudiarabia", "16:00", "denmark")
)}

${createcard(
  "01/12",
  "quinta",
  createGame("croatia", "07:00", "belgium") +
    createGame("canada", "10:00", "morocco") +
    createGame("japan", "13:00", "spain") +
    createGame("costarica", "16:00", "germany")
)}

${createcard(
  "02/12",
  "sexta",
  createGame("southkorea", "07:00", "portugal") +
    createGame("ghana", "10:00", "uruguay") +
    createGame("serbia", "16:00", "switzerland") +
    createGame("cameroon", "16:00", "brazil")
)}

</main>`
