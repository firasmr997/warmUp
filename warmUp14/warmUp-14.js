//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false
function isSubset(array, sub) {
    for(var i = 0; i < sub.length; i++) {
        for(var j = 0; j < sub.length; j++) {
            if (sub[j]= undefined)
            return true;
        }
        return false
    }
}
// i don't know how to do it