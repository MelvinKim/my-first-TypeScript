import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

//declare an empty array
let theCoaches: Coach[] = [];
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

//traditional array
for(let i=0; i < theCoaches.length; i++){
    console.log("using traditional array " + theCoaches[i].getDailyWorkout());
}

//loop
for(let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
    
}