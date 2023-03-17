var floor_1, floor_2, floor_3, floor_4, floor_5;
var floor_1Img, floor_2Img, floor_3Img, floor_4Img, floor_5Img;
var spikes, spikesImg, hole, holeImg;
var wizard, wizardIdleAnimation, wizardRunAnimation;
var zombie, zombieRunAnimation;
var stoneWand, stoneWandImage, emeraldWand, emeraldWandImage, rubyWand, rubyWandImage;
var chest, chestImage,tile;
var gameState = "start";

function preload(){
    // Floor Image Load
    floor_1Img = loadImage('GameAssets/GameAssetsSorted/Floor/floor_1.png');
    floor_2Img = loadImage('GameAssets/GameAssetsSorted/Floor/floor_2.png');
    floor_3Img = loadImage('GameAssets/GameAssetsSorted/Floor/floor_3.png');
    floor_4Img = loadImage('GameAssets/GameAssetsSorted/Floor/floor_4.png');
    floor_5Img = loadImage('GameAssets/GameAssetsSorted/Floor/floor_5.png');
    // Obstacles Image Load
    spikesImg = loadImage('GameAssets/GameAssetsSorted/Obstacles/floor_spikes_anim_f3.png');
    holeImg = loadImage('GameAssets/GameAssetsSorted/Obstacles/hole.png');
    // Wizard Animation Load
    wizardIdleAnimation = loadAnimation("GameAssets/GameAssetsSorted/WizardIdle/wizzard_m_idle_anim_f0.png", "GameAssets/GameAssetsSorted/WizardIdle/wizzard_m_idle_anim_f1.png", "GameAssets/GameAssetsSorted/WizardIdle/wizzard_m_idle_anim_f2.png", "GameAssets/GameAssetsSorted/WizardIdle/wizzard_m_idle_anim_f3.png");
    wizardRunAnimation = loadAnimation("GameAssets/GameAssetsSorted/WizardRun/wizzard_m_run_anim_f0.png", "GameAssets/GameAssetsSorted/WizardRun/wizzard_m_run_anim_f1.png", "GameAssets/GameAssetsSorted/WizardRun/wizzard_m_run_anim_f2.png", "GameAssets/GameAssetsSorted/WizardRun/wizzard_m_run_anim_f3.png");
    // Zombie Animation Load
    zombieRunAnimation = loadAnimation("GameAssets/GameAssetsSorted/ZombieRun/big_zombie_run_anim_f0.png", "GameAssets/GameAssetsSorted/ZombieRun/big_zombie_run_anim_f1.png", "GameAssets/GameAssetsSorted/ZombieRun/big_zombie_run_anim_f2.png", "GameAssets/GameAssetsSorted/ZombieRun/big_zombie_run_anim_f3.png")
    // Wands Image Load
    stoneWandImage = loadImage('GameAssets/GameAssetsSorted/Wands/weapon_spear.png');
    emeraldWandImage = loadImage('GameAssets/GameAssetsSorted/Wands/weapon_green_magic_staff.png');
    rubyWandImage = loadImage('GameAssets/GameAssetsSorted/Wands/weapon_red_magic_staff.png');
    // Chest Image Load
    chestImage = loadImage('GameAssets/GameAssetsSorted/chest_mimic_open_anim_f0.png');
}

function setup() {
    createCanvas(855, 335);

    //PC
    wizard = createSprite(153,152);
    wizard.addAnimation('WizardIdleAnimation', wizardIdleAnimation);
    wizard.addAnimation('WizardRunAnimation', wizardRunAnimation);
    wizard.changeAnimation('WizardIdleAnimation');
    wizard.scale = 2;
    //NPC
    zombie = createSprite(50, 150);
    zombie.addAnimation('ZombieRunAnimation', zombieRunAnimation);
    zombie.scale = 2.25;
    zombie.visible = false;

    //rewards
    stoneWand = createSprite(169,156);
    stoneWand.addImage('StoneWandImage', stoneWandImage);
    stoneWand.scale = 1.65;

    emeraldWand = createSprite(169,156);
    emeraldWand.addImage('EmeraldWandImage', emeraldWandImage);
    emeraldWand.scale = 1.65;

    rubyWand = createSprite(169,156);
    rubyWand.addImage('RubyWandImage', rubyWandImage);
    rubyWand.scale = 1.65;
    

    chest = createSprite(830,150);
    chest.addImage('ChestImage', chestImage);
    chest.scale = 1.5;
    chest.rotation = 90;

    for(var i=0; i<5;i++){
        var floorImages = [floor_1Img, floor_2Img, floor_3Img, floor_4Img, floor_5Img];
        randomImg = floorImages[Math.round(random(0,4))]
    }

    spawnTiles(105,randomImg)
    spawnTiles(130,randomImg)
    spawnTiles(155,randomImg)
    spawnTiles(180,randomImg)
    spawnTiles(205,randomImg)
    spawnTiles(230,randomImg)

}

function draw() {
    background("black");

    //------------------------------GAME STATE START-------------------------//
    if(keyDown(RIGHT_ARROW)) {
        gameState="play";
        //Wizard Animation Changes & Moves Forward
    }

    // var floorImages = [floor_1Img, floor_2Img, floor_3Img, floor_4Img, floor_5Img];
    // randomImg = floorImages[Math.round(random(0,4))]

    if(gameState==="start"){

    //  spawnTiles(105,randomImg)
    //  spawnTiles(130,randomImg)
    //  spawnTiles(155,randomImg)
    //  spawnTiles(180,randomImg)
    //  spawnTiles(205,randomImg)
    //  spawnTiles(230,randomImg)
     fill("white");
     textSize(20);
     stroke("teal");
     strokeWeight(2);
     text("Click To Start The Game", 345,150);
    }
    if(gameState === "play"){
     zombie.visible = true;
    //  spawnTiles(105,randomImg)
    //  spawnTiles(130,randomImg)
    //  spawnTiles(155,randomImg)
    //  spawnTiles(180,randomImg)
    //  spawnTiles(205,randomImg)
    //  spawnTiles(230,randomImg)
    }
    

    drawSprites();

    //THE MOUSE CURSOR
    fill("white");
    text(mouseX + "," + mouseY, mouseX, mouseY);
}

function spawnTiles(y,img){
    // var randomFloorPos = Math.round(random(1,5));
    
    for(var i=15; i<845;i=i+30){
      tile = createSprite(i,y,30,30);
      //tile.shapeColor = color;
      tile.addImage(img)
    }
    

    // switch(randomFloorPos){
    //   case 1: tile.addImage(floor_1Img);
    //   break;
    //   case 2: tile.addImage(floor_2Img);
    //   break;
    //   case 3: tile.addImage(floor_3Img);
    //   break;
    //   case 4: tile.addImage(floor_4Img);
    //   break;
    //   case 5: tile.addImage(floor_5Img);
    //   break;
    //   default:break;
    // }
}

function createTileSprites (){

 var randomFloorPos = Math.round(random(1,5));
//  switch(){

//  }

// var floor1Pos = [{x:015,y:230,image:floor_1Img},
// {x:040,y:230,image:floor_1Img},
// {x:065,y:230,image:floor_2Img},
// {x:090,y:230,image:floor_3Img},
// {x:115,y:230,image:floor_4Img},
// {x:140,y:230,image:floor_5Img},
// {x:165,y:230,image:floor_1Img},
// {x:190,y:230,image:floor_1Img},
// {x:215,y:230,image:floor_1Img},
// {x:240,y:230,image:floor_1Img},
// {x:265,y:230,image:floor_1Img},
// {x:290,y:230,image:floor_1Img},
// {x:315,y:230,image:floor_1Img},
// {x:340,y:230,image:floor_1Img},
// {x:365,y:230,image:floor_1Img},
// {x:390,y:230,image:floor_1Img},
// {x:415,y:230,image:floor_1Img},
// {x:440,y:230,image:floor_1Img},
// {x:465,y:230,image:floor_1Img},
// {x:490,y:230,image:floor_1Img},
// {x:515,y:230,image:floor_1Img},
// {x:540,y:230,image:floor_1Img},
// {x:565,y:230,image:floor_1Img},
// {x:590,y:230,image:floor_1Img},
// {x:615,y:230,image:floor_1Img},
// {x:640,y:230,image:floor_1Img},
// {x:665,y:230,image:floor_1Img},
// {x:690,y:230,image:floor_2Img},
// {x:715,y:230,image:floor_1Img},
// {x:740,y:230,image:floor_5Img},
// {x:765,y:230,image:floor_4Img},
// {x:790,y:230,image:floor_3Img},
// {x:815,y:230,image:floor_2Img},
// {x:840,y:230,image:floor_1Img},]

// var floor2Pos =[{x:015,y:205,image:floor_1},
// {x:040,y:205,image:floor_1},
// {x:065,y:205,image:floor_1},
// {x:090,y:205,image:floor_1},
// {x:115,y:205,image:floor_1},
// {x:140,y:205,image:floor_1},
// {x:165,y:205,image:floor_1},
// {x:190,y:205,image:floor_1},
// {x:215,y:205,image:floor_1},
// {x:240,y:205,image:floor_1},
// {x:265,y:205,image:floor_1},
// {x:290,y:205,image:floor_1},
// {x:315,y:205,image:floor_1},
// {x:340,y:205,image:floor_1},
// {x:365,y:205,image:floor_1},
// {x:390,y:205,image:floor_1},
// {x:415,y:205,image:floor_1},
// {x:440,y:205,image:floor_1},
// {x:465,y:205,image:floor_1},
// {x:490,y:205,image:floor_1},
// {x:515,y:205,image:floor_1},
// {x:540,y:205,image:floor_1},
// {x:565,y:205,image:floor_1},
// {x:590,y:205,image:floor_1},
// {x:615,y:205,image:floor_1},
// {x:640,y:205,image:floor_1},
// {x:665,y:205,image:floor_1},
// {x:690,y:205,image:floor_1},
// {x:715,y:205,image:floor_1},
// {x:740,y:205,image:floor_1},
// {x:765,y:205,image:floor_1},
// {x:790,y:205,image:floor_1},
// {x:815,y:205,image:floor_1},
// {x:840,y:205,image:floor_1},]

// var floor3Pos = [{x:015,y:180,image:floor_1Img},
// {x:040,y:180,image:floor_1Img},
// {x:065,y:180,image:floor_1Img},
// {x:090,y:180,image:floor_1Img},
// {x:115,y:180,image:floor_1Img},
// {x:140,y:180,image:floor_1Img},
// {x:165,y:180,image:floor_1Img},
// {x:190,y:180,image:floor_1Img},
// {x:215,y:180,image:floor_1Img},
// {x:240,y:180,image:floor_1Img},
// {x:265,y:180,image:floor_1Img},
// {x:290,y:180,image:floor_1Img},
// {x:315,y:180,image:floor_1Img},
// {x:340,y:180,image:floor_1Img},
// {x:365,y:180,image:floor_1Img},
// {x:390,y:180,image:floor_1Img},
// {x:415,y:180,image:floor_1Img},
// {x:440,y:180,image:floor_1Img},
// {x:465,y:180,image:floor_1Img},
// {x:490,y:180,image:floor_1Img},
// {x:515,y:180,image:floor_1Img},
// {x:540,y:180,image:floor_1Img},
// {x:565,y:180,image:floor_1Img},
// {x:590,y:180,image:floor_1Img},
// {x:615,y:180,image:floor_1Img},
// {x:640,y:180,image:floor_1Img},
// {x:665,y:180,image:floor_1Img},
// {x:690,y:180,image:floor_1Img},
// {x:715,y:180,image:floor_1Img},
// {x:740,y:180,image:floor_1Img},
// {x:765,y:180,image:floor_1Img},
// {x:790,y:180,image:floor_1Img},
// {x:815,y:180,image:floor_1Img},
// {x:840,y:180,image:floor_1Img},]

// var floor4pos = [{x:015,y:155,image:floor_1Img},
// {x:040,y:155,image:floor_1Img},
// {x:065,y:155,image:floor_1Img},
// {x:090,y:155,image:floor_1Img},
// {x:115,y:155,image:floor_1Img},
// {x:140,y:155,image:floor_1Img},
// {x:165,y:155,image:floor_1Img},
// {x:190,y:155,image:floor_1Img},
// {x:215,y:155,image:floor_1Img},
// {x:240,y:155,image:floor_1Img},
// {x:265,y:155,image:floor_1Img},
// {x:290,y:155,image:floor_1Img},
// {x:315,y:155,image:floor_1Img},
// {x:340,y:155,image:floor_1Img},
// {x:365,y:155,image:floor_1Img},
// {x:390,y:155,image:floor_1Img},
// {x:415,y:155,image:floor_1Img},
// {x:440,y:155,image:floor_1Img},
// {x:465,y:155,image:floor_1Img},
// {x:490,y:155,image:floor_1Img},
// {x:515,y:155,image:floor_1Img},
// {x:540,y:155,image:floor_1Img},
// {x:565,y:155,image:floor_1Img},
// {x:590,y:155,image:floor_1Img},
// {x:615,y:155,image:floor_1Img},
// {x:640,y:155,image:floor_1Img},
// {x:665,y:155,image:floor_1Img},
// {x:690,y:155,image:floor_1Img},
// {x:715,y:155,image:floor_1Img},
// {x:740,y:155,image:floor_1Img},
// {x:765,y:155,image:floor_1Img},
// {x:790,y:155,image:floor_1Img},
// {x:815,y:155,image:floor_1Img},
// {x:840,y:155,image:floor_1Img},]

// var floor5Pos = [{x:015,y:130,image:floor_1},
// {x:040,y:130,image:floor_1},
// {x:065,y:130,image:floor_1},
// {x:090,y:130,image:floor_1},
// {x:115,y:130,image:floor_1},
// {x:140,y:130,image:floor_1},
// {x:165,y:130,image:floor_1},
// {x:190,y:130,image:floor_1},
// {x:215,y:130,image:floor_1},
// {x:240,y:130,image:floor_1},
// {x:265,y:130,image:floor_1},
// {x:290,y:130,image:floor_1},
// {x:315,y:130,image:floor_1},
// {x:340,y:130,image:floor_1},
// {x:365,y:130,image:floor_1},
// {x:390,y:130,image:floor_1},
// {x:415,y:130,image:floor_1},
// {x:440,y:130,image:floor_1},
// {x:465,y:130,image:floor_1},
// {x:490,y:130,image:floor_1},
// {x:515,y:130,image:floor_1},
// {x:540,y:130,image:floor_1},
// {x:565,y:130,image:floor_1},
// {x:590,y:130,image:floor_1},
// {x:615,y:130,image:floor_1},
// {x:640,y:130,image:floor_1},
// {x:665,y:130,image:floor_1},
// {x:690,y:130,image:floor_1},
// {x:715,y:130,image:floor_1},
// {x:740,y:130,image:floor_1},
// {x:765,y:130,image:floor_1},
// {x:790,y:130,image:floor_1},
// {x:815,y:130,image:floor_1},
// {x:840,y:130,image:floor_1},]

// var floor6pos = [{x:015,y:105,image:floor_1Img},
// {x:040,y:105,image:floor_1Img},
// {x:065,y:105,image:floor_1Img},
// {x:090,y:105,image:floor_1Img},
// {x:115,y:105,image:floor_1Img},
// {x:140,y:105,image:floor_1Img},
// {x:165,y:105,image:floor_1Img},
// {x:190,y:105,image:floor_1Img},
// {x:215,y:105,image:floor_1Img},
// {x:240,y:105,image:floor_1Img},
// {x:265,y:105,image:floor_1Img},
// {x:290,y:105,image:floor_1Img},
// {x:315,y:105,image:floor_1Img},
// {x:340,y:105,image:floor_1Img},
// {x:365,y:105,image:floor_1Img},
// {x:390,y:105,image:floor_1Img},
// {x:415,y:105,image:floor_1Img},
// {x:440,y:105,image:floor_1Img},
// {x:465,y:105,image:floor_1Img},
// {x:490,y:105,image:floor_1Img},
// {x:515,y:105,image:floor_1Img},
// {x:540,y:105,image:floor_1Img},
// {x:565,y:105,image:floor_1Img},
// {x:590,y:105,image:floor_1Img},
// {x:615,y:105,image:floor_1Img},
// {x:640,y:105,image:floor_1Img},
// {x:665,y:105,image:floor_1Img},
// {x:690,y:105,image:floor_1Img},
// {x:715,y:105,image:floor_1Img},
// {x:740,y:105,image:floor_1Img},
// {x:765,y:105,image:floor_1Img},
// {x:790,y:105,image:floor_1Img},
// {x:815,y:105,image:floor_1Img},
// {x:840,y:105,image:floor_1Img},]
}