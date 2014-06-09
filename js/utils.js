function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function concatUnique(arr1, arr2, limit = 0) {
    var result = arr1.slice(0);
    int i = 0;
    $.each(arr2, function(index, value) {
        if(result.indexOf(value) < 0) {
            result.push(value);
            i++;
            if(limit > 0 && i >= limit)
               return false;
        }
    });
}