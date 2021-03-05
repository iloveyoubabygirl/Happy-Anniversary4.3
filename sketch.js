var PLAY = 1;
var END = 0;
var gameState = 1;
var phil, philImage, back, backImage, sword, swordImage, heart, heartImage, score, ozzyImage, time, pegImage, peg, sword2Image, hades, hadesImage, health, fireImage, fire1, fire_2, hornImage,f;

function preload() {
  philImage = loadImage("phil.png");
  backImage = loadImage("back.png");
  swordImage = loadImage("sword.png");
  heartImage = loadImage("heart.png");
  ozzyImage = loadImage("Ozzy.png");
  pegImage = loadImage("peg.png");
  sword2Image = loadImage("Sword2.png");
  hadesImage = loadImage("hades.png");
  fireImage = loadImage("fire2.png");
  hornImage = loadImage("horn.png");
}

function setup() {
  createCanvas(1000, 600);


  back = createSprite(500, 300, 1000, 600);
  back.addImage(backImage);
 // f=createSprite(300,300,10,10);
 // f.addImage(philImage)
 // f.scale=0.4;
 // f.debug=true;
 // f.setCollider("rectangle", 0, 3, 100, 280);

  
  fire1 = createSprite(200, 300, 10, 10);
  fire1.addImage(fireImage);
  fire1.scale = 0.5;
  fire1.visible = false;
  fire_2 = createSprite(500, 300, 10, 10);
  fire_2.addImage(fireImage);
  fire_2.scale = 0.5;
  fire_2.visible = false;

  phil = createSprite(200, 200, 10, 10);
  phil.addImage(philImage)
  phil.scale = 0.4;
  phil.debug = false;
  phil.setCollider("rectangle", 0, 3, 100, 280);

  peg = createSprite(200, 200, 10, 10);
  peg.addImage(pegImage);
  peg.scale = 0.4;
  peg.setCollider("rectangle",-10,-10,100,255)

  hades = createSprite(875, 300, 10, 10);
  hades.addImage(hadesImage);
  hades.scale = 1;
  hades.debug = false;
  hades.setCollider("rectangle", 0, 0, 350, width)


  peg.debug = false;


  swordGroup = createGroup();
  sword2Group = createGroup();
  heartGroup = createGroup();
  heart2Group = createGroup();
  fireGroup = createGroup();
  hornGroup = createGroup();
  fire2Group = createGroup();
  fire3Group = createGroup();
  bar1 = createSprite(-10, 300, 10, 1000);
  bar2 = createSprite(1010, 300, 10, 1000);
  bar3 = createSprite(500, 610, 1000, 10);
  bar4 = createSprite(500, -10, 1000, 10);
  time = createSprite(10, 100, 10, 10);
  time.visible = false;
  score = 0;
  health = 20;
}

function draw() {
  background(220);
  if (gameState === PLAY) {
    if (swordGroup.isTouching(phil)) {
      heart2Group.destroyEach()

      heartGroup.destroyEach()
      swordGroup.destroyEach()
      sword2Group.destroyEach()

      gameState = "end";

    }
    if (sword2Group.isTouching(phil)) {
      heart2Group.destroyEach();

      heartGroup.destroyEach();
      swordGroup.destroyEach();
      sword2Group.destroyEach();

      gameState = "end";

    }
    if (fireGroup.isTouching(phil)) {
      fireGroup.destroyEach();
      fire2Group.destroyEach();
      fire3Group.destroyEach();
      gameState = "end";
    }
    if (fire2Group.isTouching(phil)) {
      fireGroup.destroyEach();
      fire2Group.destroyEach();
      fire3Group.destroyEach();
      gameState = "end";
    }
    if (fire3Group.isTouching(phil)) {
      fireGroup.destroyEach();
      fire2Group.destroyEach();
      fire3Group.destroyEach();
      gameState = "end";
    }
    if (fireGroup.isTouching(peg)) {
      fireGroup.destroyEach();
      fire2Group.destroyEach();
      fire3Group.destroyEach();
      gameState = "end";
    }
    if (fire2Group.isTouching(peg)) {
      fireGroup.destroyEach();
      fire2Group.destroyEach();
      fire3Group.destroyEach();
      gameState = "end";
    }
    if (fire3Group.isTouching(peg)) {
      fireGroup.destroyEach();
      fire2Group.destroyEach();
      fire3Group.destroyEach();
      gameState = "end";


    }
    if (phil.isTouching(heartGroup)) {
      heartGroup.destroyEach();
      score = score + 1;
    }
    if (phil.isTouching(heart2Group)) {
      heart2Group.destroyEach();
      score = score + 1;
    }


   // if (score < 25) {
   //   peg.visible = false;
   // }


    if (keyDown("a") && (health > 0)) {
      phil.x = phil.x - 5;
    }
    if (keyDown("w") && (health > 0)) {
      phil.y = phil.y - 5;
    }
    if (keyDown("d") && (health > 0)) {
      phil.x = phil.x + 5;
    }
    if (keyDown("s") && (health > 0)) {
      phil.y = phil.y + 5;
    }
    horn()
    if (score >= 30) {
      hades.visible = true;
      fire1.visible = true;
      fire_2.visible = true;
    }
    if (score <= 29) {
      hades.visible = false;
    }
    if (score >= 0) {

      peg.visible = true;
      if (swordGroup.isTouching(peg)) {
        heart2Group.destroyEach()

        heartGroup.destroyEach()
        swordGroup.destroyEach()
        sword2Group.destroyEach()
        gameState = "end";

      }
      if (sword2Group.isTouching(peg)) {
        heart2Group.destroyEach()

        heartGroup.destroyEach()
        swordGroup.destroyEach()
        sword2Group.destroyEach()

        gameState = "end";

      }
      if (peg.isTouching(heartGroup)) {
        heartGroup.destroyEach();
        score = score + 1;
      }
      if (peg.isTouching(heart2Group)) {
        heart2Group.destroyEach();
        score = score + 1;
      }

      if (hornGroup.isTouching(hades)) {
        health = health - 1;
        hornGroup.destroyEach();

      }
      if (gameState === PLAY && (health <= 0)) {
        fireGroup.destroyEach()
        fire2Group.destroyEach()
        fire3Group.destroyEach()
        hornGroup.destroyEach()
        back.visible = false;
        hades.visible = false;
        fire1.visible = false;
        fire_2.visible = false;
      }
      if (keyDown("LEFT") && (health > 0)) {
        peg.x = peg.x - 5;
      }
      if (keyDown("UP") && (health > 0)) {
        peg.y = peg.y - 5;
      }
      if (keyDown("RIGHT") && (health > 0)) {
        peg.x = peg.x + 5;
      }
      if (keyDown("DOWN") && (health > 0)) {
        peg.y = peg.y + 5;
      }
    }
    phil.visible = true;
    back.visible = true;
    Heart();
    Sword();
    Sword2();
    Heart2();

    fire();
    fire2();
    fire3();
  }

  //phil.x=World.mouseX
  //phil.y=World.mouseY
  phil.collide(bar1);
  phil.collide(bar2);
  phil.collide(bar3);
  phil.collide(bar4);
  peg.collide(bar1);
  peg.collide(bar2);
  peg.collide(bar3);
  peg.collide(bar4);
  phil.collide(hades);
  peg.collide(hades);
  if (gameState === "end") {
    health = 20
    hornGroup.destroyEach();
    heartGroup.destroyEach();
    heart2Group.destroyEach();

    fireGroup.destroyEach();
    fire2Group.destroyEach();
    fire3Group.destroyEach();
    textSize(100)
    fill("red")
    text("GAME OVER", 200, 300);
    fill("blue")
    textSize(40)
    text("Press Space To Play Again", 260, 400)
    back.visible = false;
    peg.visible = false;
    fire1.visible = false;
    fire_2.visible = false;
    phil.visible = false;
    hades.visible = false;
    if (keyDown("space")) {
      gameState = PLAY;
      score = 0;
    }
  }

  drawSprites();
  textSize(20)
  fill("green")
  text("Score:" + score, 900, 50)
  if (gameState === PLAY && (health <= 0)) {

    textSize(60)
    fill("green")
    text("YOU WIN", 350, 300);
  }

  if (gameState === PLAY && (score >= 30)) {
    textSize(30)
    fill("blue")
    text("Hades Health: " + health, 380, 40)
  }
}

function Sword() {
  if (time.x > 0 && (score <= 29)) {
    if (World.frameCount % 300 === 0) {
      var sword
      sword = createSprite(1080, 300, 10, 10);
      sword.addImage(swordImage);
      sword.scale = 0.3;
      sword.lifetime = 80;
      sword.setCollider("Rectangle",-30,7,400,30)
      sword.y = Math.round(random(10, 590));
      sword.velocityX = -15;

      swordGroup.add(sword);
    }
  }
}

function Sword2() {
  if (time.x > 0 && (score >= 15) && (score <= 29)) {
    if (World.frameCount % 310 === 0) {
      var sword2
      sword2 = createSprite(1080, 300, 10, 10);
      sword2.addImage(sword2Image);
      sword2.scale = 0.3;
      sword2.lifetime = 80;
      sword2.setCollider("Rectangle",-30,7,400,30)
      sword2.y = Math.round(random(10, 590));
      sword2.velocityX = -25;

      sword2Group.add(sword2);
    }
  }




}

function Heart() {
  if (time.x > 0 && (score <= 29)) {
    if (World.frameCount % 190 === 0) {
      var heart
      heart = createSprite(1080, 300, 10, 10);
      heart.addImage(heartImage);
      heart.scale = 0.3;
      heart.y = Math.round(random(10, 590));
      heart.velocityX = -12;
      heart.lifetime = 100;
      heart.setCollider("Circle",0,0,90)
      heartGroup.add(heart);
    }
  }
}

function Heart2() {
  if (time.x > 0 && (score <= 29)) {
    if (World.frameCount % 180 === 0) {
      var heart2
      heart2 = createSprite(1080, 300, 10, 10);
      heart2.addImage(heartImage);
      heart2.scale = 0.3;
      heart2.y = Math.round(random(10, 590));
      heart2.velocityX = -12;
      heart2.lifetime = 100;
      heart2.setCollider("Circle",0,0,90)
      heart2Group.add(heart2);
    }
  }
}


function fire() {
  if (score >= 30 && (health > 0)) {
    if (World.frameCount % 180 === 0) {
      var fire
      fire = createSprite(1080, 300, 10, 10);
      fire.addImage(fireImage);
      fire.scale = 0.08;
      fire.y = Math.round(random(10, 590));
      fire.velocityX = -18;
      fire.lifetime = 100;
      fire.setCollider("circle",0,100,300)
      fireGroup.add(fire);
    }

  }

}

function fire2() {
  if (score >= 30 && (health > 0)) {
    if (World.frameCount % 190 === 0) {
      var fire2
      fire2 = createSprite(1080, 300, 10, 10);
      fire2.addImage(fireImage);
      fire2.scale = 0.08;
      fire2.y = Math.round(random(10, 590));
      fire2.velocityX = -18;
      fire2.lifetime = 100;
      fire2.setCollider("circle",0,100,300)
      fire2Group.add(fire2);
    }

  }

}

function fire3() {
  if (score >= 30 && (health > 0)) {
    if (World.frameCount % 200 === 0) {
      var fire3
      fire3 = createSprite(1080, 300, 10, 10);
      fire3.addImage(fireImage);
      fire3.scale = 0.08;
      fire3.y = Math.round(random(10, 590));
      fire3.velocityX = -18;
      fire3.lifetime = 100;
      fire3.setCollider("circle",0,100,300)
      fire3Group.add(fire3);
    }

  }

}

function horn() {
  if (score >= 30 && (health > 0)) {
    if (World.frameCount % 70 === 0) {
      var horn
      horn = createSprite(phil.x, phil.y, 10, 10);
      horn.addImage(hornImage);
      horn.scale = 0.2;
      horn.velocityX = 10;
      horn.lifetime = 100;
      hornGroup.add(horn)
    }
  }
}