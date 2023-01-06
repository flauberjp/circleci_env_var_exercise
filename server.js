function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function printFavoriteFood() {
  const favoriteFood = process.env.FAVORITE_FOOD;
  console.log(`My favorite food is ${favoriteFood}`);
}

async function main() {
  while (true) {
    console.log("Microservices rock!");
    printFavoriteFood();
    await sleep(5000);
  }
}

main();
