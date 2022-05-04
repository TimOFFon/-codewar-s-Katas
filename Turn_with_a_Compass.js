function direction(facing, turn) {
    const compas = {
        'N': 0,
        'NE': 45,
        'E': 90,
        'SE': 135,
        'S': 180,
        'SW': 225,
        'W': 270,
        'NW': 315
    }
    
    let startDegree = compas[facing];
    let mooveArrow = startDegree + turn;
  
  
    while (mooveArrow >= 360) {
        mooveArrow = mooveArrow - 360;
    }

    if (Math.sign(mooveArrow) === -1) {
        mooveArrow = (mooveArrow * (-1))
        while (mooveArrow > 360) {
            mooveArrow = mooveArrow - 360;
        }
        mooveArrow = 360 - mooveArrow;
    }
    
    let goal = '';
    Object.keys(compas).forEach((key) => {

        if (compas[key] === mooveArrow) {
            return goal = key;
        }
    });
    return goal;
}
