//first test

function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
}

console.log(gameObject());

//Second Test : Building functions

//get players in both teams
function homeTeamName() {
  return gameObject()["home"]["teamName"];
}

console.log(homeTeamName());

// Number of point scored
function numPointsScored(playerName) {
  return gameObject()["home"]["players"][playerName]?.points || gameObject()["away"]["players"][playerName]?.points;
}

console.log(numPointsScored("Ben Gordon"));
console.log(numPointsScored("Alan Anderson"));

//Shoe size
function shoeSize(playerName) {
  return gameObject()["home"]["players"][playerName]?.shoe || gameObject()["away"]["players"][playerName]?.shoe;
}

console.log(shoeSize("Ben Gordon"));
console.log(shoeSize("Mason Plumlee"));

//team colors
function teamColors(teamName) {
  if (gameObject()["home"]["teamName"] === teamName) {
    return gameObject()["home"]["colors"];
  } else {
    return gameObject()["away"]["colors"];
  }
}

console.log(teamColors("Brooklyn Nets"));
console.log(teamColors("Charlotte Hornets"));

//team names
function teamNames() {
  return [gameObject()["home"]["teamName"], gameObject()["away"]["teamName"]];
}

console.log(teamNames());

//player numbers
function playerNumbers(teamName) {
  const players = teamName === gameObject()["home"]["teamName"] ? gameObject()["home"]["players"] : gameObject()["away"]["players"];
  return Object.values(players).map(player => player.number);
}

console.log(playerNumbers("Brooklyn Nets"));
console.log(playerNumbers("Charlotte Hornets"));

//player stats
function playerStats(playerName) {
  return gameObject()["home"]["players"][playerName] || gameObject()["away"]["players"][playerName];
}

console.log(playerStats("Mason Plumlee"));

//big shoe rounds
function bigShoeRebounds() {
  const players = { ...gameObject()["home"]["players"], ...gameObject()["away"]["players"] };
  let largestShoePlayer = Object.values(players).reduce((prev, curr) => (prev.shoe > curr.shoe ? prev : curr));
  return largestShoePlayer.rebounds;
}

console.log(bigShoeRebounds());

//most points scored

function mostPointsScored() {
  const players = { ...gameObject()["home"]["players"], ...gameObject()["away"]["players"] };
  return Object.keys(players).reduce((prev, curr) => (players[prev].points > players[curr].points ? prev : curr));
}

console.log(mostPointsScored());

//winning team
function winningTeam() {
  const homePoints = Object.values(gameObject()["home"]["players"]).reduce((sum, player) => sum + player.points, 0);
  const awayPoints = Object.values(gameObject()["away"]["players"]).reduce((sum, player) => sum + player.points, 0);
  return homePoints > awayPoints ? gameObject()["home"]["teamName"] : gameObject()["away"]["teamName"];
}

console.log(winningTeam());

//longest name
function playerWithLongestName() {
  const players = { ...gameObject()["home"]["players"], ...gameObject()["away"]["players"] };
  return Object.keys(players).reduce((prev, curr) => (curr.length > prev.length ? curr : prev));
}

console.log(playerWithLongestName());

//Bonus questions

function doesLongNameStealATon() {
  const longestName = playerWithLongestName();
  const players = { ...gameObject()["home"]["players"], ...gameObject()["away"]["players"] };
  return players[longestName].steals > 0;
}

function mostPointsScored() {
  const players = { ...gameObject()["home"]["players"], ...gameObject()["away"]["players"] };
  return Object.keys(players).reduce((prev, curr) => (players[prev].points > players[curr].points ? prev : curr));
}

function winningTeam() {
  const homePoints = Object.values(gameObject()["home"]["players"]).reduce((sum, player) => sum + player.points, 0);
  const awayPoints = Object.values(gameObject()["away"]["players"]).reduce((sum, player) => sum + player.points, 0);
  return homePoints > awayPoints ? gameObject()["home"]["teamName"] : gameObject()["away"]["teamName"];
}

function playerWithLongestName() {
  const players = { ...gameObject()["home"]["players"], ...gameObject()["away"]["players"] };
  return Object.keys(players).reduce((prev, curr) => (curr.length > prev.length ? curr : prev));
}

function doesLongNameStealATon() {
  const longestName = playerWithLongestName();
  const players = { ...gameObject()["home"]["players"], ...gameObject()["away"]["players"] };
  return players[longestName].steals > 0;
}
