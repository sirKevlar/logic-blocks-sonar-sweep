const { sonarSweepData } = require('./sonar-sweep-data.js');

const sonarSweep = (str) => {
  const depths = str.split('\n');
  console.log(depths);
  counter = 0;
  if (depths.length < 2) {
    return 0;
  }
  for (let i = 0; i < depths.length; i++) {
    if (+depths[i + 1] > +depths[i]) {
      counter++;
    }
  }
  return counter;
};

const answer = sonarSweep(sonarSweepData);
console.log(answer);

module.exports = { sonarSweep };
