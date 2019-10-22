const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name ?", (name) => {
  rl.question("What's an activity you like doing ? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("which mean is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
        rl.question("whats your favourite thing to eat for that meal ?  ", (foodthing) => {
          rl.question("which sport is your absolute favourite?  ", (sport) => {
            rl.question("what is your superpower? in a few words, tell us what you are amazing at!  ", (superpower) => {
  
              console.log(`My name is ${name}. An activity I like doing is ${activity}.  I listen to ${music}.  My favourite meal is ${meal}.  For that meal my favourite thing to eat is ${foodthing}.  My favourite sport is ${sport}.  ${superpower} `);

    rl.close();
            });
          });
        });
      });
    });
  });
});

