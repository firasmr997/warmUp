// 1-using + operator combine your partner first and last name .

// 2-find if the number 13 is a multiple of 3 or not.


// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]

// 4-calculate your age in seconds.


// your code is here
function fullName(firstName, lastName) {
    return firstName+ " " + lastName
}

    if (13%3 === 1) {
        alert("The number 13 is not a multiple of 3")
    }


function average(array) {
    var sum=0;
    for (var i = 0; i<array.length; i++) {
        sum= sum+array[i];
    }
    return sum/array.length;
}


function ageSec(age) {
    return age*365*24*60*60;
}