const spin = ["\r/","\r-","\r\\","\r|","\r/","\r-","\r\\","\r|"];

const spinner2 = (spinner) => {
  let timer = 0;
  for (const char of spinner) {
    timer += 150;
    setTimeout(() => {
      process.stdout.write(char);
    }, timer);
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, timer += 200);
};
spinner2(spin);