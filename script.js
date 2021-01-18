//Pokemon sprite from comic-ace17 on Deviantart.com

let panicLevel = 10;
let staminaLevel = 10;
let enemyHitPoints = 10;
let moveCounter = 10;
let message = document.querySelector(".message");
let PL = document.querySelector(".panicLevel");
let SL = document.querySelector(".staminaLevel");
let EHP = document.querySelector(".enemyHitPoints");
let MC = document.querySelector(".moveCounter");
let rollButton = document.querySelector("button");
let IM = document.querySelector(".initialMessage");

const getMessage = () => {
  IM.innerText = `where am i?`;
  getSecondMessage();
};

const getSecondMessage = () => {
  setTimeout(function () {
    IM.innerText = `${IM.innerText} is this a dream?`;
  }, 3000);
  getThirdMessage();
};

const getThirdMessage = () => {
  setTimeout(function () {
    document.querySelector(".battleArenaWrapper").style.display = "block";
    document.querySelector(".messageWrapper").style.display = "none";
  }, 6000);
};

const diceRoll = () => {
  //die roll loops
  let dieNumber = Math.floor(Math.random() * 5);

  if (dieNumber == 0) {
    message.innerText = `You have rolled a 1. You have been hit and you begin to panic.`;
    panicLevel = panicLevel - 2;
    PL.innerText = ` ${panicLevel}`;
  } else if (dieNumber == 1) {
    message.innerText = `You have rolled a 2. You dodge the enemy's attack, but lose stamina.`;
    staminaLevel = staminaLevel - 1;
    SL.innerText = ` ${staminaLevel}`;
  } else if (dieNumber == 2) {
    message.innerText = `You have rolled a 3. You expertly deflect the enemy's attack.`;
  } else if (dieNumber == 3) {
    message.innerText = `You have rolled a 4. The enemy backs away and you regain stamina.`;
    staminaLevel = staminaLevel + 1;
    SL.innerText = ` ${staminaLevel}`;
  } else if (dieNumber == 4) {
    message.innerText = `You have rolled a 5. The enemy dodges, but you manage to strike a glancing blow. You feel your panic subside.`;
    panicLevel = panicLevel - 1;
    enemyHitPoints = enemyHitPoints - 3;
    PL.innerText = ` ${panicLevel}`;
    EHP.innerText = ` ${enemyHitPoints}`;
  } else if (dieNumber == 5) {
    message.innerText = `You have rolled a 6. You land a crushing blow and the enemy takes serious damage. You feel your panic subside and your stamina increase.`;
    enemyHitPoints = enemyHitPoints - 5;
    panicLevel = panicLevel - 3;
    staminaLevel = staminaLevel + 2;
    EHP.innerText = ` ${enemyHitPoints}`;
    PL.innerText = ` ${panicLevel}`;
    SL.innerText = ` ${staminaLevel}`;
  }

  //after end of every turn
  if (enemyHitPoints > 0) {
    panicLevel = panicLevel + 1;
    staminaLevel = staminaLevel - 1;
    PL.innerText = ` ${panicLevel}`;
    SL.innerText = ` ${staminaLevel}`;
  }

  if (enemyHitPoints <= 0) {
    let pic = document.querySelector(".enemyPic");
    message.innerText =
      "You have managed to defeat the enemy!.... Another enemy appears to take the place of his friend!";
    enemyHitPoints = 10;
    EHP.innerText = ` ${enemyHitPoints}`;
    panicLevel = 10;
    staminaLevel = 10;
    PL.innerText = ` ${panicLevel}`;
    SL.innerText = ` ${staminaLevel}`;
    moveCounter = 10;
    MC.innerText = moveCounter;
    pic.style.backgroundImage = "url('./assets/Monster 1.png')";
  }

  //end of game loops
  if (panicLevel >= 20 || staminaLevel <= 0) {
    message.innerText = `YOU DIED`;
    //add Dark Souls 'you died' effect?
    rollButton.style.display = "none";
    setTimeout(function () {
      window.location.reload();
    }, 5000);
  }

  moveCounter = moveCounter - 1;
  MC.innerText = moveCounter;
  if (moveCounter == 0) {
    panicLevel = 20;
    PL.innerText = ` ${panicLevel}`;
    message.innerText = `YOU PANIC AND DIE`;
    rollButton.style.display = "none";
    setTimeout(function () {
      window.location.reload();
    }, 5000);
  }

  if (moveCounter == 1) {
    document.querySelector(".movePlural").innerText = " move";
  }
};
