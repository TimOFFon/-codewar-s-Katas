const xMarksTheSpot = (input) => {
    const spot = [];


    if (input.length === 0) {
        return [];
    }


    let count = 0;
    for (let i = 0; i < input.length; i++) {

        for (let j = 0; j < input[i].length; j++) {
            input[i][j] === 'x' ? count++ : count;
        }

    };

    if (count > 1 || count === 0) {
        return [];
    }



    for (let i = 0; i < input.length; i++) {

        if (input[i].findIndex(item => item === 'x') !== -1) {
            spot.push(i);
            spot.push(input[i].findIndex(item => item === 'x'));
        }

    }



    return spot;
};
