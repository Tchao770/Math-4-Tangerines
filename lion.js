/*

*/
var lions = 100;

const lionObj = {};
for (let i = 1; i <= lions; i++) {
    lionObj[i] = false;
}
// Initial marking
for (let i = 1; i <= 30; i++) {
    let rand = Math.floor(Math.random() * (lions - 1 + 1) + 1);
    if (!lionObj[rand])
        lionObj[rand] = true;
    else
        i--;
}

var selected = [];
var marked = 0;
var captured = 30;
for (let i = 1; i <= captured; i++) {
    let rand = Math.floor(Math.random() * (lions - 1 + 1) + 1);
    if (selected.indexOf(rand) < 0) {
        selected.push({ rand: lionObj[rand] });
        if (lionObj[rand]) {
            marked++;
        }
    }
}
var totalPop = captured * captured/marked;
console.table(selected);
console.log("Marked: " + marked + "/" + captured);
console.log("Total Population: " + totalPop);
/*
20 Initially marked

marked/total grabbed
1st:
5/20
2nd:
4/20
3rd:
0/20
4th:
8/25
6/25
*/