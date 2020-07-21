function wakeDog(dogName,dogBreed)
{
    return `Wake ${dogName} the ${dogBreed}`;
}
<<<<<<< HEAD
=======
function walkHome(dogName,dogBreed)
{
    return `walk home with ${dogName} the ${dogBreed}`;
}
>>>>>>> 6dbbd484b5044ff4256d6cf3c302709d60689695
function leashDog(dogName,dogBreed)
{
    return `Leash ${dogName} the ${dogBreed}`;
}
<<<<<<< HEAD
=======
function unleashDog(dogName,dogBreed)
{
    return `unleash ${dogName} the ${dogBreed}`;
}
>>>>>>> 6dbbd484b5044ff4256d6cf3c302709d60689695
function walkToPark(dogName,dogBreed)
{
    return `Walk to the park with ${dogName} the ${dogBreed}`;
}
function throwFrisbee(dogName,dogBreed)
{
<<<<<<< HEAD
    return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}
function walkHome(dogName,dogBreed)
{
    return `Walk home with ${dogName} the ${dogBreed}`;
}
function unleashDog(dogName,dogBreed)
{
    return `Unleash ${dogName} the ${dogBreed}`;
=======
    return `throw Frisbee for ${dogName} the ${dogBreed}`;
>>>>>>> 6dbbd484b5044ff4256d6cf3c302709d60689695
}
let routine=[wakeDog,leashDog,unleashDog,walkHome,walkToPark,throwFrisbee];
function exerciseDog(dogName,dogBreed){
  let res=[];
<<<<<<< HEAD
  for(let i=0 ; i<=routine.length;i++ ){
=======
  for(let i=0 ; i<routine.length;i++ ){
>>>>>>> 6dbbd484b5044ff4256d6cf3c302709d60689695
   res.push(routine[1](dogName,dogBreed));
  }
  return res;
}