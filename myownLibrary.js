function isTouching(object1,object2){
    if(Math.round(object1.x - object2.x) < Math.round(object1.width/2+object2.width/2)
    && Math.round(object2.x - object1.x) < Math.round(object1.width/2+object2.width/2)
     && Math.round(object1.y - object2.y) < Math.round(object1.height/2+object2.height/2)
    && Math.round(object2.y - object1.y) < Math.round(object1.height/2+object2.height/2))
    {
      return true;
    }
    else{
      return false;
    }
  }
  
  function bounceoff (object1,object2){
    if(Math.round(object1.x - object2.x) < Math.round(object1.width/2+object2.width/2)
    && Math.round(object2.x - object1.x) < Math.round(object1.width/2+object2.width/2))
    {
    object1.velocityX = object1.velocityX * -1;
    object2.velocityX = object2.velocityX * -1;
    }
  
    if(Math.round((object1.y - object2.y) < Math.round(object1.height/2+object2.height/2)
    && Math.round(object2.y - object1.y) < Math.round(object1.height/2+object2.height/2)))
  {
    object1.velocityY = object1.velocityY * -1;
    object2.velocityY = object2.velocityY * -1;
    }
  }