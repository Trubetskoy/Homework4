function MatrixCoordinats(r, c, r0, c0) {
    let Rezults = [];
    let steps = Math.max(r, c) + 3;

    Rezults.push([r0, c0]);
    //turn right
    c0 += 1;
    Rezults.push([r0, c0]);
    //turn down
    r0 += 1;
    Rezults.push([r0, c0]);

    for (let i = 2; i <= steps; i += 2) {
        //turn left
        for (let j = 1; j <= i; j++) {
            c0 -= 1;
            Rezults.push([r0, c0]);
        }
        //turn up
        for (let j = 1; j <= i; j++) {
            r0 -= 1;
            Rezults.push([r0, c0]);
        }
        //turn right
        for (let j = 0; j <= i; j++) {
            c0 += 1;
            Rezults.push([r0, c0]);
        }
        //turn down
        for (let j = 0; j <= i; j++) {
            r0 += 1;
            Rezults.push([r0, c0]);
        }
    }
    let FilteredRezult = Rezults.filter(function (rezult) {
        if ((rezult[0] >= 0 && rezult[0] < r) && (rezult[1] >= 0 && rezult[1] < c)) {
            return true
        }
    });
    console.log('Rezult', FilteredRezult);
}

MatrixCoordinats(5, 5, 0, 3);



