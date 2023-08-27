import {randomIntFromInterval} from '../../../utils';

// generate random profile
export const generateRandomProfile = () => {
  const age = randomIntFromInterval(1, 20);
  const point = randomIntFromInterval(1000, 5000);

  return {age, point};
};
