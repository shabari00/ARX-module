/*
Max occurrences
Given a sorted list of n non negative integers. Find the integer which is occurring the 
maximum number of times. If no such number exists, please print -1. If there are multiple numbers 
with the same maximum occurrence count. Print all of them in ascending order.

Input
First line n denoting the length of the list Following n lines contains the elements of the list

Output
m lines containing the numbers which are occurring the maximum number of times

Example
Input:

5
1
2
2
2
3
Output:

2
5 denotes the length of the list. 1 is occurring once and so is 3. 2 is occurring 3 times 
which is the maximum. So 2 is the output

Input:

5
1
2
2
3
3
Output:

2
3
5 denotes the length of the list. 1 is occuring only once. 2 is occuring 2 times and 3 is also occuring 2 times 
which is the maximum times a number is occuring in the given list. So 2 and 3 both are in the output.
*/
let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
