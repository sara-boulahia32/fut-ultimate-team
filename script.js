const players = [
  {
    name: "Lionel Messi",
    photo: "https://cdn.sofifa.net/players/158/023/25_120.png",
    position: "RW",
    nationality: "Argentina",
    flag: "https://cdn.sofifa.net/flags/ar.png",
    club: "Inter Miami",
    logo: "https://cdn.sofifa.net/meta/team/239235/120.png",
    rating: 93,
    pace: 85,
    shooting: 92,
    passing: 91,
    dribbling: 95,
    defending: 35,
    physical: 65,
  },
  {
    name: "Cristiano Ronaldo",
    photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
    position: "ST",
    nationality: "Portugal",
    flag: "https://cdn.sofifa.net/flags/pt.png",
    club: "Al Nassr",
    logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
    rating: 91,
    pace: 84,
    shooting: 94,
    passing: 82,
    dribbling: 87,
    defending: 34,
    physical: 77,
  },
  {
    name: "Kevin De Bruyne",
    photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
    position: "CM",
    nationality: "Belgium",
    flag: "https://cdn.sofifa.net/flags/be.png",
    club: "Manchester City",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 91,
    pace: 74,
    shooting: 86,
    passing: 93,
    dribbling: 88,
    defending: 64,
    physical: 78,
  },
  {
    name: "Kylian Mbappé",
    photo: "https://cdn.sofifa.net/players/231/747/25_120.png",
    position: "ST",
    nationality: "France",
    flag: "https://cdn.sofifa.net/flags/fr.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 92,
    pace: 97,
    shooting: 89,
    passing: 80,
    dribbling: 92,
    defending: 39,
    physical: 77,
  },
  {
    name: "Virgil van Dijk",
    photo: "https://cdn.sofifa.net/players/203/376/25_120.png",
    position: "CB",
    nationality: "Netherlands",
    flag: "https://cdn.sofifa.net/flags/nl.png",
    club: "Liverpool",
    logo: "https://cdn.sofifa.net/meta/team/8/120.png",
    rating: 90,
    pace: 75,
    shooting: 60,
    passing: 70,
    dribbling: 72,
    defending: 92,
    physical: 86,
  },
  {
    name: "Antonio Rudiger",
    photo: "https://cdn.sofifa.net/players/205/452/25_120.png",
    position: "CB",
    nationality: "Germany",
    flag: "https://cdn.sofifa.net/flags/de.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 88,
    pace: 82,
    shooting: 55,
    passing: 73,
    dribbling: 70,
    defending: 86,
    physical: 86,
  },
  {
    name: "Neymar Jr",
    photo: "https://cdn.sofifa.net/players/190/871/25_120.png",
    position: "LW",
    nationality: "Brazil",
    flag: "https://cdn.sofifa.net/flags/br.png",
    club: "Al-Hilal",
    logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
    rating: 90,
    pace: 91,
    shooting: 83,
    passing: 86,
    dribbling: 94,
    defending: 37,
    physical: 61,
  },
  {
    name: "Mohamed Salah",
    photo:
      "https://imgs.search.brave.com/U0GsfmLmrCkU8yqQPMFuf1D_oOExTbrczeot-Oo-Aws/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZnV0d2l6LmNvbS9h/c3NldHMvaW1nL2Zp/ZmEyMS9mYWNlcy8y/MDkzMzEucG5n",
    position: "RW",
    nationality: "Egypt",
    flag: "https://cdn.sofifa.net/flags/eg.png",
    club: "Liverpool",
    logo: "https://cdn.sofifa.net/meta/team/8/120.png",
    rating: 89,
    pace: 93,
    shooting: 87,
    passing: 81,
    dribbling: 90,
    defending: 45,
    physical: 75,
  },
  {
    name: "Joshua Kimmich",
    photo: "https://cdn.sofifa.net/players/212/622/25_120.png",
    position: "CM",
    nationality: "Germany",
    flag: "https://cdn.sofifa.net/flags/de.png",
    club: "Bayern Munich",
    logo: "https://cdn.sofifa.net/meta/team/503/120.png",
    rating: 89,
    pace: 70,
    shooting: 75,
    passing: 88,
    dribbling: 84,
    defending: 84,
    physical: 81,
  },
  {
    name: "Jan Oblak",
    photo: "https://cdn.sofifa.net/players/200/389/25_120.png",
    position: "GK",
    nationality: "Slovenia",
    flag: "https://cdn.sofifa.net/flags/si.png",
    club: "Atletico Madrid",
    logo: "https://cdn.sofifa.net/meta/team/7980/120.png",
    rating: 91,
    diving: 89,
    handling: 90,
    kicking: 78,
    reflexes: 92,
    speed: 50,
    positioning: 88,
  },
  {
    name: "Luka Modrić",
    photo: "https://cdn.sofifa.net/players/177/003/25_120.png",
    position: "CM",
    nationality: "Croatia",
    flag: "https://cdn.sofifa.net/flags/hr.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 88,
    pace: 74,
    shooting: 78,
    passing: 89,
    dribbling: 90,
    defending: 72,
    physical: 65,
  },
  {
    name: "Vinicius Junior",
    photo: "https://cdn.sofifa.net/players/238/794/25_120.png",
    position: "LW",
    nationality: "Brazil",
    flag: "https://cdn.sofifa.net/flags/br.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 89,
    pace: 91,
    shooting: 88,
    passing: 85,
    dribbling: 94,
    defending: 39,
    physical: 61,
  },
  {
    name: "Brahim Diáz",
    photo: "https://cdn.sofifa.net/players/231/410/25_120.png",
    position: "LW",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 82,
    pace: 85,
    shooting: 74,
    passing: 78,
    dribbling: 85,
    defending: 31,
    physical: 56,
  },
  {
    name: "Karim Benzema",
    photo: "https://cdn.sofifa.net/players/165/153/25_120.png",
    position: "ST",
    nationality: "France",
    flag: "https://cdn.sofifa.net/flags/fr.png",
    club: "Al-Ittihad",
    logo: "https://cdn.sofifa.net/meta/team/476/120.png",
    rating: 90,
    pace: 77,
    shooting: 90,
    passing: 83,
    dribbling: 88,
    defending: 40,
    physical: 78,
  },
  {
    name: "Erling Haaland",
    photo: "https://cdn.sofifa.net/players/239/085/25_120.png",
    position: "ST",
    nationality: "Norway",
    flag: "https://cdn.sofifa.net/flags/no.png",
    club: "Manchester City",
    logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
    rating: 91,
    pace: 89,
    shooting: 94,
    passing: 65,
    dribbling: 80,
    defending: 45,
    physical: 88,
  },
  {
    name: "N'Golo Kanté",
    photo: "https://cdn.sofifa.net/players/215/914/25_120.png",
    position: "CDM",
    nationality: "France",
    flag: "https://cdn.sofifa.net/flags/fr.png",
    club: "Al-Ittihad",
    logo: "https://cdn.sofifa.net/meta/team/476/120.png",
    rating: 87,
    pace: 77,
    shooting: 66,
    passing: 75,
    dribbling: 82,
    defending: 88,
    physical: 82,
  },
  {
    name: "Alphonso Davies",
    photo: "https://cdn.sofifa.net/players/234/396/25_120.png",
    position: "LB",
    nationality: "Canada",
    flag: "https://cdn.sofifa.net/flags/ca.png",
    club: "Bayern Munich",
    logo: "https://cdn.sofifa.net/meta/team/503/120.png",
    rating: 84,
    pace: 96,
    shooting: 68,
    passing: 77,
    dribbling: 82,
    defending: 76,
    physical: 77,
  },
  {
    name: "Yassine Bounou",
    photo: "https://cdn.sofifa.net/players/209/981/25_120.png",
    position: "GK",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Al-Hilal",
    logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
    rating: 84,
    diving: 81,
    handling: 82,
    kicking: 77,
    reflexes: 86,
    speed: 38,
    positioning: 83,
  },
  {
    name: "Bruno Fernandes",
    photo: "https://cdn.sofifa.net/players/212/198/25_120.png",
    position: "CM",
    nationality: "Portugal",
    flag: "https://cdn.sofifa.net/flags/pt.png",
    club: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/120.png",
    rating: 88,
    pace: 75,
    shooting: 85,
    passing: 89,
    dribbling: 84,
    defending: 69,
    physical: 77,
  },
  {
    name: "Jadon Sancho",
    photo: "https://cdn.sofifa.net/players/233/049/25_120.png",
    position: "LW",
    nationality: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    club: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/120.png",
    rating: 84,
    pace: 85,
    shooting: 74,
    passing: 78,
    dribbling: 88,
    defending: 34,
    physical: 63,
  },
  {
    name: "Trent Alexander-Arnold",
    photo: "https://cdn.sofifa.net/players/231/281/25_120.png",
    position: "RB",
    nationality: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    club: "Liverpool",
    rating: 87,
    pace: 76,
    shooting: 66,
    passing: 89,
    dribbling: 80,
    defending: 79,
    physical: 71,
  },
  {
    name: "Achraf Hakimi",
    photo: "https://cdn.sofifa.net/players/235/212/25_120.png",
    position: "RB",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Paris Saint-Germain",
    logo: "https://cdn.sofifa.net/meta/team/591/120.png",
    rating: 84,
    pace: 91,
    shooting: 76,
    passing: 80,
    dribbling: 80,
    defending: 75,
    physical: 78,
  },
  {
    name: "Youssef En-Nesyri",
    photo: "https://cdn.sofifa.net/players/235/410/25_120.png",
    position: "ST",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Fenerbahçe",
    logo: "https://cdn.sofifa.net/meta/team/88/120.png",
    rating: 83,
    pace: 82,
    shooting: 82,
    passing: 63,
    dribbling: 77,
    defending: 36,
    physical: 80,
  },
  {
    name: "Noussair Mazraoui",
    photo: "https://cdn.sofifa.net/players/236/401/25_120.png",
    position: "LB",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/120.png",
    rating: 81,
    pace: 78,
    shooting: 66,
    passing: 77,
    dribbling: 83,
    defending: 77,
    physical: 71,
  },
  {
    name: "Ismael Saibari",
    photo: "https://cdn.sofifa.net/players/259/480/25_120.png",
    position: "CM",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "PSV",
    logo: "https://cdn.sofifa.net/meta/team/682/120.png",
    rating: 83,
    pace: 89,
    shooting: 78,
    passing: 80,
    dribbling: 86,
    defending: 55,
    physical: 84,
  },
  {
    name: "Gianluigi Donnarumma",
    photo: "https://cdn.sofifa.net/players/230/621/25_120.png",
    position: "GK",
    nationality: "Italy",
    flag: "https://cdn.sofifa.net/flags/it.png",
    club: "Paris Saint-Germain",
    logo: "https://cdn.sofifa.net/meta/team/591/120.png",
    rating: 89,
    diving: 88,
    handling: 84,
    kicking: 75,
    reflexes: 90,
    speed: 50,
    positioning: 85,
  },
];

const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        setTimeout(() => {
            menu.classList.remove('-translate-x-full');
            menu.classList.add('translate-x-0');
        }, 10); 
    } else {
        menu.classList.remove('translate-x-0');
        menu.classList.add('-translate-x-full');
        setTimeout(() => {
            menu.classList.add('hidden');
        }, 300); 
    }
});

let activePlayer = [];

let filteredPlayer = players;

let existName = null;

let playerList = document.querySelector(".players_list");

let sideBar_title = document.getElementById("sideBar_title");

const openListPlayers = () => {
  document.getElementById("players_list").toggleAttribute("open", true);
};

const checkPlaceholders = () => {
  document.querySelectorAll(".placeholder_player").forEach((ele) => {
    ele.onclick = () => {
      const targetPosition = ele;
      sideBar_title.textContent = "Substitutes Player";
      filteredPlayer = players.filter(
        (player) =>
          player.position === targetPosition.id &&
          !activePlayer.some((active) => active.name === player.name)
      );
      openListPlayers();
      renderListPlayers(targetPosition);
    };
  });
};
checkPlaceholders();

const closeListPlayers = () => {
  document.getElementById("players_list").toggleAttribute("open", false);
};


const deletePlayer = (target) => {
  const playerName = target.getAttribute("data-name");

  activePlayer = activePlayer.filter(
    (pl) => pl.name.split(" ")[0] !== playerName
  );

  // Create a new placeholder card
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
      <div
        id="${target.id}"
        class="placeholder_player w-16 sm:w-24 md:w-30 lg:w-32 aspect-[1/1.4] relative hover:scale-105 cursor-pointer transition-transform"
      >
        <img
          src="img/8cdd9360-e77b-44c4-95cc-66d004addd93.png"
          alt="Player badge"
          class="absolute w-full h-full z-10"
        />
        
      </div>
    `;

  const placeholderCard = newDiv.firstElementChild;
  target.replaceWith(placeholderCard);
  checkPlaceholders();
};

const editPlayer = (player) => {
  existName = player.name.split(" ")[0]; 
  const targetPosition = document.querySelector(`[data-name='${existName}']`);
  sideBar_title.textContent = "Switch Player";
  
  activePlayer = activePlayer.filter((pl) => pl.name !== player.name);
  openListPlayers();
  filteredPlayer = players.filter(
    (pl) =>
      pl.position === targetPosition.id && pl.name.split(" ")[0] !== existName
  );

  if (targetPosition) {
    renderListPlayers(targetPosition);
  } else {
    console.error("Target position not found for editing.");
  }
  existName = null;
};

const createPlayerCard = (player) => {
  const card = document.createElement("div");
  card.dataset.name = player.name.split(" ")[0];
  card.id = player.position;
  card.className =
    "w-16 sm:w-24 md:w-30 group lg:w-32 xl:w-36 aspect-[1/1.4] relative z-20 cursor-pointer hover:scale-[1.3] transition-transform activePlayers";

    const isGoalkeeper = player.position === "GK";
  card.innerHTML = `
        <img src="img/8cdd9360-e77b-44c4-95cc-66d004addd93.png" alt="Player badge" class="absolute w-full h-full z-10"/>
        <div class="relative z-20 w-full h-full ">
        <div class="absolute hidden z-30 group-hover:flex group-hover:flex-col w-[80%] lg:w-[100%] items-end justify-between pr-2 lg:pr-4 top-0 right-0 space-y-4 md:space-y-[20px] lg:space-y-[25px] lg:top-[10px]">
        </div>
            <img src="${player.photo}" alt="Player Photo" class="absolute w-[50%] lg:w-[60%]  top-[20%] lg:top-[15%] right-[20%]"/>
            <div class="text-[6px] md:text-[11px] lg:text-[14px] text-white pt-[15px] md:pt-[22px] lg:pt-[35px] pl-[8px] md:pl-[12px] lg:pl-[18px]">
                        <p class="font-extrabold ">${player.rating}</p>
                        <p class="font-semibold">${player.position}</p>
                        <img src="${player.flag}" alt="" class="w-[10px] md:w-[12px]">
                        <img src="${player.logo}" alt="" class="w-[10px] md:w-[12px] ">
                    </div>
                <div class="absolute top-[60%] w-full text-center text-white">
                  <p class="text-[30%] md:text-[55%] lg:text-[70%] max-w-[70%] mx-auto w-full truncate  font-semibold">${player.name}</p>
                
                 <div class="text-[5px] md:text-[8px] lg:text-[11px] text-[#393218] flex flex-col gap-0 justify-center items-center">
                  ${
                      isGoalkeeper
                        ? `
                    <div class="flex gap-[1px] text-white">
                        <p>DI</p>
                        <p>HA</p>
                        <p>KI</p>
                        <p>RE</p>
                        <p>SP</p>
                        <p>PO</p>
                    </div>
                    <div class="flex gap-[1px] text-white">
                        <p class="font-extrabold">${player.diving}</p>
                        <p class="font-extrabold">${player.handling}</p>
                        <p class="font-extrabold">${player.kicking}</p>
                        <p class="font-extrabold">${player.reflexes}</p>
                        <p class="font-extrabold">${player.speed}</p>
                        <p class="font-extrabold">${player.positioning}</p>
                    </div>
            </div>
            
        </div>
  `
                        : `
        
                <div class="text-[5px] md:text-[8px] lg:text-[11px] text-[#393218] flex flex-col gap-0 justify-center items-center">
                    <div class="flex gap-[1px] text-white">
                        <p>PA</p>
                        <p>SH</p>
                        <p>PA</p>
                        <p>DR</p>
                        <p>DE</p>
                        <p>PH</p>
                    </div>
                    <div class="flex gap-[1px] text-white">
                        <p class="font-extrabold">${player.passing}</p>
                        <p class="font-extrabold">${player.shooting}</p>
                        <p class="font-extrabold">${player.pace}</p>
                        <p class="font-extrabold">${player.dribbling}</p>
                        <p class="font-extrabold">${player.defending}</p>
                        <p class="font-extrabold">${player.physical}</p>
                        `
                  }
                    </div>
            </div>
            
        </div>
        
       
    `;

  const actionMenu = card.querySelector(".absolute.hidden");
  const seeDet = document.createElement("img");

  const editpl = document.createElement("img");
  editpl.src = "./assets/sync.png";
  editpl.className = "w-2 md:w-4 animate-spin";
  editpl.onclick = () => editPlayer(player, card);

  const deletPl = document.createElement("img");
  deletPl.src = "./assets/trash.svg";
  deletPl.className = "w-2 md:w-4";
  deletPl.onclick = () => deletePlayer(card);

  actionMenu.appendChild(seeDet);
  actionMenu.appendChild(editpl);
  actionMenu.appendChild(deletPl);

  return card;
};

const appendPlayer = (player, targetElement) => {
  if (activePlayer.length >= 11) {
    console.warn("Maximum players reached on the field.");
    return;
  }
  
  openListPlayers();
  if (!targetElement) {
    console.error("Invalid target element.");
    return;
  }

  if (existName && typeof existName === "string") {
    activePlayer = players.filter((pl) => pl.name.split(" ")[0] !== existName);
  }

  const newCard = createPlayerCard(player);
  activePlayer.push(player);

  targetElement.replaceWith(newCard);

  existName = null;
  closeListPlayers();
};


// substitues

const renderListPlayers = (targetPosition) => {
  playerList.innerHTML = "";

  filteredPlayer.forEach((player) => {
    const playerCard = document.createElement("div");
    playerCard.className =
      "flex flex-col py-3 cursor-pointer  rounded-lg bg-[url('img/8cdd9360-e77b-44c4-95cc-66d004addd93.png')] bg-cover bg-center w-16 sm:w-24 md:w-30 lg:w-32 aspect-[1/1.4] relative hover:scale-[1.3] cursor-pointer transition-transform";

      const isGoalkeeper = player.position === "GK";
      playerCard.innerHTML = `
              <div class="flex pl-0 mt-0 lg:mt-4  ">
                      <div class="text-[5px] md:text-[10px] lg:text-[14px] text-white pt-[12px] lg:pt-[12px] pl-[8px] md:pl-[12px] lg:pl-[18px]">
                          <p class="font-extrabold">${player.rating}</p>
                          <p class="font-semibold">${player.position}</p>
                          <img src="${player.flag}" alt="" class="w-[10px] lg:w-[12px]">
                          <img src="${player.logo}" alt="" class="w-[10px] lg:w-[12px]">
                      </div>
                      <div class="text-center text-xs text-white font-extra-bold">
                          <img src="${player.photo}" alt="${player.name}" class=" w-[80%]   top-[20%] lg:top-[15%] right-[20%]">
                          
                      </div>
                  </div><p class=" text-center font-extrabold text-[5px] md:text-[8px] lg:text-[10px]">${player.name}</p>
                     ${
                        isGoalkeeper
                          ? `
                   <div class="text-[5px] md:text-[8px] lg:text-[11px] text-[#393218] flex flex-col gap-0 justify-center items-center">
                      <div class="flex gap-[1px] text-white">
                          <p>DI</p>
                          <p>HA</p>
                          <p>KI</p>
                          <p>RE</p>
                          <p>SP</p>
                          <p>PO</p>
                      </div>
                      <div class="flex gap-[1px] text-white">
                          <p class="font-extrabold">${player.diving}</p>
                          <p class="font-extrabold">${player.handling}</p>
                          <p class="font-extrabold">${player.kicking}</p>
                          <p class="font-extrabold">${player.reflexes}</p>
                          <p class="font-extrabold">${player.speed}</p>
                          <p class="font-extrabold">${player.positioning}</p>
                      </div>
                  </div>
  
   `
                          : `
  
                  <div class="text-[5px] md:text-[8px] lg:text-[11px] text-[#393218] flex flex-col gap-0 justify-center items-center">
                      <div class="flex gap-[1px] text-white">
                          <p>PA</p>
                          <p>SH</p>
                          <p>PA</p>
                          <p>DR</p>
                          <p>DE</p>
                          <p>PH</p>
                      </div>
                      <div class="flex gap-[1px] text-white">
                          <p class="font-extrabold">${player.passing}</p>
                          <p class="font-extrabold">${player.shooting}</p>
                          <p class="font-extrabold">${player.pace}</p>
                          <p class="font-extrabold">${player.dribbling}</p>
                          <p class="font-extrabold">${player.defending}</p>
                          <p class="font-extrabold">${player.physical}</p>
                                `
                    }
                      </div>
                  </div>
  
                    
        `;

    if (targetPosition) {
      playerCard.onclick = () => {
        appendPlayer(player, targetPosition);
      };
    }

    playerList.appendChild(playerCard);
  });
};

let createPlayerPop = document.getElementById("createPop");

const onOpenCreatePlayer = () => {
  createPlayerPop.toggleAttribute("open", true);
};
const onCloseCreatePlayer = () => {
  createPlayerPop.toggleAttribute("open", false);
};

const positionAttributes = {
  GK: [
    { name: "diving", label: "Diving", type: "number" },
    { name: "handling", label: "Handling", type: "number" },
    { name: "kicking", label: "Kicking", type: "number" },
    { name: "reflexes", label: "Reflexes", type: "number" },
    { name: "speed", label: "Speed", type: "number" },
    { name: "positioning", label: "Positioning", type: "number" },
  ],
  CM: [
    { name: "pace", label: "Pace", type: "number" },
    { name: "shooting", label: "Shooting", type: "number" },
    { name: "passing", label: "Passing", type: "number" },
    { name: "dribbling", label: "Dribbling", type: "number" },
    { name: "defending", label: "Defending", type: "number" },
    { name: "physical", label: "Physical", type: "number" },
  ],
};

document.getElementById("positionSelect").addEventListener("change", (e) => {
  let dynamicFields = document.getElementById("dynamicFields");

  dynamicFields.innerHTML = "";
  

  if (e.target.value === "GK") {
    positionAttributes["GK"].forEach((attr) => {
      const field = document.createElement("div");
      field.className = "mb-3";
      field.innerHTML = `
        <label for="${attr.label}" class="block font-medium mb-2">${attr.label}</label>
        <input id="${attr.label}"
          type="${attr.type}"
          name="${attr.name}"
          class="w-full mt-1 px-4 w-full bg-white border border-gray-600 rounded-md mb-4 text-black"
          placeholder="${attr.label}"
        />
      `;
      dynamicFields.appendChild(field);
    });
  } else {
    positionAttributes["CM"].forEach((attr) => {
      const field = document.createElement("div");
      field.innerHTML = `
          <label class="block font-medium">${attr.label}</label>
          <input
            type="${attr.type}"
            name="${attr.name}"
            class="w-full px-4 w-full bg-white border border-gray-600 rounded-md mb-2 text-black"
            placeholder="${attr.label}"
          />
        `;
      dynamicFields.appendChild(field);
    });
  }
});

let playerForm = document.getElementById("playerForm");

document.getElementById("playerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const playerForm = document.getElementById("playerForm");
  let formData = new FormData(playerForm);
  let playerData = Object.fromEntries(formData.entries());

  const nameInput = document.querySelector("input[name='name']");
  const photoInput = document.querySelector("input[name='photo']");
  const urlInput = document.querySelector("input[name='flag']");
  const flagInput = document.querySelector("input[name='logo']");

  const nameError = nameInput.nextElementSibling;
  const photoError = photoInput.nextElementSibling;

  let isValid = true;

  // Name validation
  if (
    nameInput.value.trim().length < 2 ||
    /[^a-zA-Z\s]/.test(nameInput.value.trim()) || /^\s*$/.test(nameInput.value)
  ) {
    nameError.textContent = "Invalid name. Please enter at least 2 letters.";
    nameError.classList.remove("hidden");
    isValid = false;
  } else {
    nameError.textContent = "";
    nameError.classList.add("hidden");
  }

  // Photo URL validation
  const photoRegex =
    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
  if (!photoInput.value.trim()) {
      photoError.textContent = "The photo URL is required.";
      photoError.classList.remove("hidden");
      isValid = false;
  }  else if (photoInput.value && !photoRegex.test(photoInput.value.trim())) {
    photoError.textContent = "Please provide a valid URL.";
    photoError.classList.remove("hidden");
    isValid = false;
  } else {
    photoError.textContent = "";
    photoError.classList.add("hidden");
  }
  if (!isValid) {
    return;
  }
  

  

  players.push(playerData);
  onCloseCreatePlayer();
});
