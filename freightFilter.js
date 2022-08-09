function scanAndFilter(array , string){
   let output = [];
    array.filter(function(item){
        if (item != string){
            output.push(item);
        }
    });
    return output;
}