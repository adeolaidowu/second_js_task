const animeFunc = (num) => {
  let output = [];
  for (let i = 1; i <= num; i++) {
    switch (true) {
      case i % 2 === 0 && i % 3 === 0 && i % 5 === 0:
        output.push("Yu-Gi-Oh");
        break;
      case i % 2 === 0 && i % 3 === 0:
        output.push("Yu-Gi");
        break;
      case i % 3 === 0 && i % 5 === 0:
        output.push("Gi-Oh");
        break;
      case i % 2 === 0 && i % 5 === 0:
        output.push("Yu-Oh");
        break;
      case i % 2 === 0:
        output.push("Yu");
        break;
      case i % 3 === 0:
        output.push("Gi");
        break;
      case i % 5 === 0:
        output.push("Oh");
        break;
      default:
        output.push(i);
    }
  }
  console.log(output);
};

animeFunc(30);
