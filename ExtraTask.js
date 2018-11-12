function MatrixCoordinats(r, c, r0, c0) {
    let arrayRow = [];
    let arrayColomn = [];
    let Rezults = [];
    let steps = Math.max(r,c)-1;
    console.log(steps);

    Rezults.push([r0, c0]);

    for (let i = 0; i <= r; i++) {
        arrayRow.push(i);
    }
    console.log(arrayRow);

    for (let i = 0; i <= c; i++) {
        arrayColomn.push(i);
    }
    console.log(arrayColomn);
    console.log(Rezults);

    for (let i = 2; i <= 2; i++){

    }
}

MatrixCoordinats(8, 10, 6, 1);



