/*
Pascal Triangle
Pascal’s triangle is a triangular array of the binomial coefficients. Write a function that takes 
an integer value N as input and prints Nth line of the Pascal’s triangle.

Following is the representation of a pascal triangle of depth 5

1

1 1

1 2 1

1 3 3 1

1 4 6 4 1

Refer to below link for more information

https://en.wikipedia.org/wiki/Pascal%27s_triangle

Input
You will be given N, depth of the traingle

Output
Print pascal triangle cofficients at depth N

Example
Input:
4
Output:
1
3
3
1
At depth 4 the elements are 1 3 3 1.
*/
let fs = require("fs");
let data = fs.readFileSync("input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = [];
  for (let j = 0; j < n; j++) {
    if (j == 0) {
      arr[i][j] = 1;
    } else if (i == j) {
      arr[i][j] = 1;
    } else if (i > 1 && j > 0 && i > j) {
      arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
    }
  }
}
for (let i = n - 1; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(arr[i][j]);
  }
}