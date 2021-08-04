var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b82f56df-11f0-4bfa-b184-b80f7334a713","50d419af-63fd-4eff-a9fe-419d8e274268"],"propsByKey":{"b82f56df-11f0-4bfa-b184-b80f7334a713":{"name":"monster doll","sourceUrl":"assets/api/v1/animation-library/gamelab/4IFTei3Gq0QMZolfKwQlhft6jltKM7N5/category_characters/purple_monster.png","frameSize":{"x":280,"y":290},"frameCount":1,"looping":true,"frameDelay":2,"version":"4IFTei3Gq0QMZolfKwQlhft6jltKM7N5","loadedFromSource":true,"saved":true,"sourceSize":{"x":280,"y":290},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4IFTei3Gq0QMZolfKwQlhft6jltKM7N5/category_characters/purple_monster.png"},"50d419af-63fd-4eff-a9fe-419d8e274268":{"name":"sofia","sourceUrl":"assets/api/v1/animation-library/gamelab/NDAxIKjkicarH5SX5GNf.AtK3ZeMVFyr/category_characters/kid_16_walking.png","frameSize":{"x":175,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"NDAxIKjkicarH5SX5GNf.AtK3ZeMVFyr","loadedFromSource":true,"saved":true,"sourceSize":{"x":175,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NDAxIKjkicarH5SX5GNf.AtK3ZeMVFyr/category_characters/kid_16_walking.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var cardboard = createSprite(100,53,105,10);
var cardboard2= createSprite(50,150,98,10);
var cardboard3 = createSprite(102,197,105,10);
var cardboard4 = createSprite(99,250,103,10);
var cardboard5= createSprite(100,348,103,10);
var cardboard6 = createSprite(75,300,50,10);
var cardboard7 = createSprite(349,349,100,10);
var cardboard8= createSprite(224,201,57,10);
var cardboard9= createSprite(252,52,105,10);
var cardboard10= createSprite(174,100,50,10);
var cardboard11= createSprite(374,295,50,10);
var cardboard12= createSprite(73,100,57,10);
var cardboard13= createSprite(100,23,10,50);
var cardboard14 = createSprite(50,74,10,52);
var cardboard15 = createSprite(150,123,10,150);
var cardboard16 = createSprite(148,297,10,103);
var cardboard17 = createSprite(250,325,10,150);
var cardboard18 = createSprite(300,202,10,305);
var cardboard19 = createSprite(200,225,10,50);
var cardboard20 = createSprite(250,153,10,105);
var cardboard21 = createSprite(350,200,10,200);
var cardboard22= createSprite(50,324,10,57);
var cardboard23 = createSprite(200,350,10,100);

cardboard.shapeColor="brown";
cardboard2.shapeColor="brown";
cardboard3.shapeColor="brown";
cardboard4.shapeColor="brown";
cardboard5.shapeColor="brown";
cardboard6.shapeColor="brown";
cardboard7.shapeColor="brown";
cardboard8.shapeColor="brown";
cardboard9.shapeColor="brown";
cardboard10.shapeColor="brown";
cardboard11.shapeColor="brown";
cardboard12.shapeColor="brown";
cardboard13.shapeColor="brown";
cardboard14.shapeColor="brown";
cardboard15.shapeColor="brown";
cardboard16.shapeColor="brown";
cardboard17.shapeColor="brown";
cardboard18.shapeColor="brown";
cardboard19.shapeColor="brown";
cardboard20.shapeColor="brown";
cardboard21.shapeColor="brown";
cardboard22.shapeColor="brown";
cardboard23.shapeColor="brown";

var sofia = createSprite(69,25,20,20);
sofia.setAnimation("sofia");
sofia.scale=0.12;
var toy = createSprite(380,377,20,20);
toy.setAnimation("monster doll");
toy.scale=0.15;


function draw() {
  background("yellow");
  
  if (keyDown("LEFT_ARROW")) 
  {
  sofia.velocityX=-2;
  sofia.velocityY=0;
  }

  if (keyDown("RIGHT_ARROW")) 
  {
  sofia.velocityX=2;
  sofia.velocityY=0;
  }

  if (keyDown("UP_ARROW")) 
  {
    sofia.velocityX=0;
    sofia.velocityY=-2;
  }
  
  if (keyDown("DOWN_ARROW")) 
  {
    sofia.velocityX=0;
    sofia.velocityY=2;
  }
  
  createEdgeSprites();
  sofia.bounceOff(edges);
  sofia.bounceOff(cardboard);
  sofia.bounceOff(cardboard2);
  sofia.bounceOff(cardboard3);
  sofia.bounceOff(cardboard4);
  sofia.bounceOff(cardboard5);
  sofia.bounceOff(cardboard6);
  sofia.bounceOff(cardboard7);
  sofia.bounceOff(cardboard8);
  sofia.bounceOff(cardboard9);
  sofia.bounceOff(cardboard10);
  sofia.bounceOff(cardboard11);
  sofia.bounceOff(cardboard12);
  sofia.bounceOff(cardboard13);
  sofia.bounceOff(cardboard14);
  sofia.bounceOff(cardboard15);
  sofia.bounceOff(cardboard16);
  sofia.bounceOff(cardboard17);
  sofia.bounceOff(cardboard18);
  sofia.bounceOff(cardboard19);
  sofia.bounceOff(cardboard20);
  sofia.bounceOff(cardboard21);
  sofia.bounceOff(cardboard22);
  sofia.bounceOff(cardboard23);


  
    drawSprites();
    if (sofia.isTouching(toy)) 
    {
      sofia.velocityX=0;
      sofia.velocityY=0;
      fill("green");
      textSize(80);
      text("You Win",70,230);
    }
    
    
}

 

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
