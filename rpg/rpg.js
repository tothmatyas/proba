let points = document.getElementById("points")
points.innerText = 10

function addstrength(){

    if(points.innerText*1<= 0){
      return  0
    }
    else{
      points.innerText = points.innerText*1-1
    }

   let strength = document.getElementById("strength")
   strength.innerText = strength.innerText*1 + 1


   let dmg = document.getElementById("Damage")
   dmg.innerText = strength.innerText*1 *2
   dmg.innerText +="-"
   dmg.innerText += strength.innerText*1 *3
}

function Addagility(){

   if(points.innerText*1<= 0){
      return  0
    }
    else{
      points.innerText = points.innerText*1-1
    }

   let agility = document.getElementById("agility")
   agility.innerText = agility.innerText*1+1

   let dodge = document.getElementById("dodge")
   if( dodge.innerText*1 < 95)
   dodge.innerText = dodge.innerText*1+5
   
   
}
function addendurance(){
   if(points.innerText*1<= 0){
      return  0
    }
    else{
      points.innerText = points.innerText*1-1
    }

   let endurance = document.getElementById("endurance")
   endurance.innerText = endurance.innerText*1+1

   let hp = document.getElementById("hp")
   if(hp.innerText*1 < 300)
   hp.innerText = endurance.innerText*1 +20
   hp.innerText +="-"
   hp.innerText = endurance.innerText*1 *3
}
function addspeed(){

   if(points.innerText*1<= 0){
      return  0
    }
    else{
      points.innerText = points.innerText*1-1
    }


   let speed = document.getElementById("speed")
   speed.innerText = speed.innerText*1+1

   let characterspeed = document.getElementById("characterspeed")
   if(characterspeed.innerText*1 < 200)
   characterspeed.innerText = characterspeed.innerText*1+5
   characterspeed +="-"
   characterspeed.innerText = characterspeed.innerText*1+5
}