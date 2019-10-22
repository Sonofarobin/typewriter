const greeting = "Hello from Lighthouse";
let counter = 0

for  (const char of greeting ){
  setTimeout(() => {process.stdout.write(char)
  }, counter)
  counter += 125;
  };
setTimeout(() => {process.stdout.write('\n')
}, counter)



