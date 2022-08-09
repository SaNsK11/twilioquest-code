function calculateMass(array) {
    let result = array.reduce((sum, item) => sum + item.length, 0);
    return result;
}