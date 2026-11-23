const footballTeam = {
  team: "Manchester United",
  year: 1878,
  headCoach: "Erik ten Hag",
  players: [
    {
      name: "David de Gea",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Bruno Fernandes",
      position: "midfielder",
      isCaptain: true,
    },
    {
      name: "Marcus Rashford",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Harry Maguire",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Paul Pogba",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Jadon Sancho",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Luke Shaw",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Fred",
      position: "midfielder",
      isCaptain: false,
    },
  ],
};

const team = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCardsContainer = document.getElementById("player-cards");
const playerInput = document.getElementById("players");

team.textContent = footballTeam.team;
year.textContent = footballTeam.year;
headCoach.textContent = footballTeam.headCoach;

function renderPlayers(players) {
  const playerHtml = players.map((player) => {
    return `
      <div class="player-card">
        <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
        <p>Position: ${player.position}</p>
      </div>
    `;
  });

  playerCardsContainer.innerHTML = playerHtml.join("");
}

// initial render
renderPlayers(footballTeam.players);

playerInput.addEventListener("change", (e) => {
  const searchTerm = e.target.value;

  if (searchTerm === "all") {
    renderPlayers(footballTeam.players);
    return;
  }
  const filteredPlayers = footballTeam.players.filter(
    (player) => player.position === searchTerm,
  );
  renderPlayers(filteredPlayers);
});
