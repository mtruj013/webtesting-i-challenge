module.exports = {
  succeed,
  fail,
  repair,
  get,
};


//The item's enhancement increases by 1.
//If the item enhancement level is 20, the enhancement level is not changed.
//The durability of the item is not changed.
function succeed(item) {
   if(item.enhancement >=0 && item.enhancement < 20){
     return item.enhancement + 1;
   } else {
     return item.enhancement;
   }
}

//If the item's enhancement is less than 15, the durability of the item is decreased by 5.
//If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
//If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
function fail(item) {
  if(item.enhancement >= 0 && item.enhancement < 15){
    return item.durability + 5;
  }else if (item.enhancement >= 15){
    return item.durability + 10;
  } else if (item.enhancement > 16){
    return item.durability -1;
  } 
}

//accepts an item object and returns a new item with the durability restored to 100. This method is the simplest of the three and would be a good starting point on this project.
function repair(item) {
  return item.durability = 100;
}


//stretch
//if the enhancement level is 0, the the name is not modified.
//if the enhancement level is greater than 0, change the name to include the enhancement level, preceded by a plus sign ( + ), between square brackets before the item's name. Example: the name of a "Iron Sword" enhanced to 7 would be "[+7] Iron Sword".
function get(item) {
  console.log(item.name)
  if(item.enhancement > 0){
    return `[+${item.enhancement}] ${item.name}`;
  } else if (item.enhancement ==0){
    return item.name;
  }
}
