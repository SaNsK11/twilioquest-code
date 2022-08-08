function scan(inputArray) {
    let contraband = 0;
    inputArray.forEach(function (ele){

        if (ele == 'contraband'){
            contraband++;
        }
    });
    return contraband;

}