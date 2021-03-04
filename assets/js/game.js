/* Updated code to match snapshot - end of module 3  */
/* Game Functions */

// function to start a new game
var startGame = function() {
  // reset player stats
  playerInfo.reset();

  // fight each enemy robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyInfo.length; i++) {
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
    debugger; 

    var name = ""
    // if player is still alive, keep fight next enemy
    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

      // pick new enemy to fight based on the index of the enemyInfo array
      var pickedEnemyObj = enemyInfo[i];

      // set health for picked enemy
      pickedEnemyObj.health = randomNumber(40, 60);

      console.log(pickedEnemyObj);

      var fightOrSkip = function() {
        // ask player if htye'd like to fight or skip using fightOrSkip function
        
        // repeat and execute as long as theenemy-robot is alive 
        while(enemy.health > 0 && playerInfo.health > 0) {
          fightOrSkip(); // <-- Replace code with this function call
          var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        }

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip") {
          // confirm player wants to skip
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");

          // if yes (true), leave fight
          if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye");
            // subtract money from playerMoney for skipping, but don't let them go into the negative
            playerInfo.money = Math.max(0, playerInfo.money - 10);

            // return true if player wants to leave
            return true;
          }

            shop();
          }
        }
      }

      // pass the pickedEnemyObj object variable's value into the fight function, where it will assume the vaue of the enemy parameter 
      while (playerInfo.health > 0 && enemy.health > 0) {
        // ask player if they'd like to fight or skip using fightOrSkip function
        if (fightOrSkip()) {
          // if true, leave fight by breaking loop
          break;
        }
      }

    // if player is not alive, break out of the loop and let endGame function run
   } else {
      break;
    }
  }

  // after loop ends, we are either out of player.health or enemies to fight, so run the endGame function
  endGame();
};

// function to end the entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");

  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of" + playerInfo.money + '. ');
  } else {
    window.alert("You've lost your robot in battle!");
  }

  // ask player if thye'd like to play again
  var playAgainConfirm = window.confirm('Would you like to play again?');

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert('Thank you for playing Battlebots! Come back soon!');
  }
};

// fight function (now with parameter for enemy's object holding name, health, and attack values)
var fight = function(enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === 'skip' || promptFight === 'SKIP') {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        shop();
        break;
      }
    }
    
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    // remove enemy's health by subtracting the amount we set in the damage variable
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name +
        ' attacked ' +
        enemy.name +
        ' now has ' +
        enemy.health +
        ' health remaining.'
    );
    
    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // ask if player wants to use the store before next round
      var storeConfirm = window.confirm('The fight is over, visit the sotre before the next round?');

      // if yes, take them to the store() function
      if (storeConfirm) {
        shop();
      }

        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
      }

      var damage = randomNumber(enemy.attack - 3, enemy.attack);

    // remove enemy's health by subtracting the amount we set in the damage variable
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name +
        ' attacked ' +
        playerInfo.name +
        ' now has ' +
        playerInfo.health +
        ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};

// go to shop between battles function
var shop = function() {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    'Would you like to REFILL your health, UPGRADE your attac, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
  );
  shopOptionPrompt = parseInt(shopOptionPrompt);

  // use switch case to carry out action
  switch (shopOptionPrompt) {
    case 1: 
      playerInfo.refillHealth();
      break;
    case 2:
      playerInfo.upgradeAttack();
      break;
    case 3:
      window.alert('Leaving the store.');
      break;
    default:
      window.alert('You did not pick a valid option. Try again.');
      shop();
      break;
  }
}

// use switch case to carry out action
debugger;
switch (shopOptionPrompt) {
  case 1:

// fucntion to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
};
/* End Game Functions */

/* Game Info / Variables */

// function to set name
var getPlayerName = function() {
  var name = "";

  // ******************************
  var name = ""
  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }
  // ******************************

  console.log("Your robot's name is " + name);
  return name
};
// player info 
var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    window.alert("Refilling player's health by 20 for 7 dollars.");
    this.health += 20;
    this.money -= 7;
  },
  upgradeAttack: function() {
    window.alert("Upgrading player's attack by 6 for 7 dollars.");
    this.attack += 6;
    this.money -= 7;
  }
};

// enemy information
var enemyInfo = [
  {
    name: 'Roborto',
    attack: randomNumber(10, 14)
  },
  {
    name: 'Amy Android',
    attack: randomNumber(10, 14)
  },
  {
    name: 'Robo Trumble',
    attack: randomNumber(10, 14)
  }
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);

/* End Game Info / Variables */

/* Run Game */
startGame();

