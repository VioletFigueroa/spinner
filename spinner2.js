const spinner = (rotations, speed) => {
  for (let i = speed; i < rotations * speed + speed; i += speed) {
    setTimeout(() => {
      process.stdout.write("\r|   ");
    }, i);
    setTimeout(() => {
      process.stdout.write("\r/   ");
    }, (i / 4) + i);
    setTimeout(() => {
      process.stdout.write("\r-   ");
    }, (i / 2) + i);
    setTimeout(() => {
      process.stdout.write("\r\\   ");
    }, (3 * i / 4) + i);
  }
  setTimeout(() => {
    process.stdout.write("\r|  \n");
  }, rotations * speed + speed);
};
spinner(10,500);