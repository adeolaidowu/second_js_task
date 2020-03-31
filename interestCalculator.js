const data = [
    { principal: 2500 , time: 1.8},
    { principal: 1000, time: 5},
    { principal: 3000 , time: 1},
    { principal: 2000 , time: 3}
];

const interestCalculator = (arr) => {
    const interestData = [...arr];
    const arrLength = interestData.length;
    for (let i = 0; i < arrLength; i++){
        if((interestData[i].principal >= 2500 )){
            if(interestData[i].time > 1 && interestData[i].time < 3){
                interestData[i].rate = 3;
            } else if(interestData[i].time >= 3){
                interestData[i].rate = 4;
            }else {
                interestData[i].rate = 1;
            }
        } else if(interestData[i].principal < 2500 || interestData[i].time <= 1){
            interestData[i].rate = 2;
        }
    }
    interestData.forEach((item) => {
        item.interest = (item.principal * item.rate * item.time) / 100;
    });
    console.log(interestData);
    return interestData;
}

interestCalculator(data);