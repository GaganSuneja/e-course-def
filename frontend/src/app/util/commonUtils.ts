export const getDate = (date) => {
  return date.split('T')[0];
};
export const randomiseData = (data, pickCount) => {
  let randomisedActivities: any[] = [], pickedIndexes: number[] = [];
  while (randomisedActivities.length !== pickCount && data.length > 0) {
    let pickIndex = Math.floor(Math.random() * pickCount);
    if (!pickedIndexes.includes(pickIndex)) {
      pickedIndexes.push(pickIndex);
      randomisedActivities.push(data[pickIndex]);
    }
  }
  return randomisedActivities;
};

export const randomiseObject = (object): any => {
  let randomisedObject = {};
  let keys = Object.keys(object);

  while (Object.keys(randomisedObject).length !== keys.length) {
    let randomKey = keys[keys.length * Math.random() << 0];
    if (!Object.keys(randomisedObject).includes(randomKey)) {
      randomisedObject[randomKey] = object[randomKey];
    }
  }
  return randomisedObject;
};


export const calculateScore = (dataArray: any[]) => {
  const totalQuestion = dataArray.length;
  let score = 0;
  for (let data of dataArray) {
    if (data.answer === data.submittedAnswer) {
      ++score;
    }
  }
  const percentage = Math.floor((score / totalQuestion) * 100);
  return {
    score,
    totalQuestion,
    percentage
  };

};