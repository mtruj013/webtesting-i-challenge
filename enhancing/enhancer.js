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
   if(item.enhancemnet >=0 && item.enhancement < 20){
     return item.enhancement + 1;
   } else {
     return item.enhancement;
   }
}


function fail(item) {
  if(item.enhancement >= 0 && item.enhancement < 15){
    return item.durability - 5;
  }else if (item.enhancement >= 15){
    return item.durability + 10;
  } else if (item.enhancement > 16){
    return item.durability-1;
  }
}

//accepts an item object and returns a new item with the durability restored to 100. This method is the simplest of the three and would be a good starting point on this project.
function repair(item) {
  return { ...item };
}

//stretch
function get(item) {
  return { ...item };
}
