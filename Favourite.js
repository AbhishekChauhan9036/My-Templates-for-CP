/*--------------------------------------------------------------------------------------------------------------------------*/
/* Author = Chauhan Abhishek */
/* Codechef Id = https://www.codechef.com/users/abhishek_9036 */
/* LeetCode Id = https://leetcode.com/abhishekchauhan9036/ */
/* GeeksForGeeks Id = https://auth.geeksforgeeks.org/user/abhishekchauhan9036/profile */
/* GitHub Id = https://github.com/AbhishekChauhan9036 */
/* Language = Node.Js */
/* Address = Ballia,UP,INDIA (221716)*/
/*--------------------------------------------------------------------------------------------------------------------------*/

process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}


function solution(arr,n){
     arr.sort((a,b)=>a-b);
     return arr;
}
    
function main() {
    var t = 1;
    // t = parseInt(readLine());
    while (t--) {
        var n = parseInt(readLine());//Number input in js

        var [num1,num2]=readLine().split(" ").map(Number);//two number input in single line like n & m
        
        var str=readLine();//String input in Js
        
        var arr = readLine().split(" ").map(Number);//Array input in JS

        console.log(res);
    }
}

