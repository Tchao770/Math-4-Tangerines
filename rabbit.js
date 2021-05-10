/*
Given 50 white beans and 50 black beans in a bag, write a program that 
will produce a pair drawn randomly, accounting for the decrease in the
particular color already selected
*/
// 0-49 = whites
// 50-100 = blacks
var max = 100;
var mid = 50;
var min = 0;

/*
46-88
0-45

12
5-12
0-4
*/

// mid and max decreases by 1 when white selected
// max is decreased by 1 when black is selected

var DD = 0;
var LL = 0;
var DL = 0;
var killed = false;
var death = 0;

while (max > 0) {
    let pair = [Math.floor(Math.random() * (max - min + 1) + min), Math.floor(Math.random() * (max - min + 1) + min)];
    console.log('********');
    console.log(`${min}, ${mid}, ${max}`);
    console.log(pair);
    if (pair[0] < mid && pair[1] < mid) {
        /*
        if (killed) {
            console.log("DD died")
            killed = !killed;
        }
        else if(!killed){
            DD++;
            console.log('DD saved');
            killed = !killed;
        }
        */
        DD++;
        mid -= 2;
    }
    else if (pair[0] < mid && pair[1] >= mid) {
        DL++;
        mid -= 1;
        console.log('DL');
    }
    else if (pair[0] >= mid && pair[1] < mid) {
        DL++;
        mid -= 1;
        console.log('DL');
    }
    else if (pair[0] >= mid && pair[1] >= mid) {
        LL++;
        console.log('LL');
    }
    console.log('********');
    max -= 2;
}
var total = DD * 2 + DL * 2 + LL * 2
console.log(`DD: ${DD}`);
console.log(`DL: ${DL}`);
console.log(`LL: ${LL}`);
console.log(total);
