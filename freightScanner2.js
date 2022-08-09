function scan(array) {
    let output = [];

    array.forEach(function(item,index){
        if(item == 'contraband'){
            output.push(index);
        }
    });
    return output;
}