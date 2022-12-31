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

    
function main() {
    var t = 1;
    // t = parseInt(readLine());
    while (t--) {
        var n = parseInt(readLine());
        var m = parseInt(readLine());
        var arr1 = readLine().split(" ").map(Number);
        var arr2 = readLine().split(" ").map(Number);
        var res = solution(arr1, arr2, n,m);
        console.log(res);
    }
}

// Solution 1.......................................................
function solution(arr1,arr2,n,m) {
    let ans=[];
    for(let i=0;i<n;i++){
        if(ans.indexOf(arr1[i])==-1)
        ans.push(arr1[i])
    }

    for(let i=0;i<m;i++){
         if(ans.indexOf(arr2[i])==-1)
            ans.push(arr2[i])
    }
    return ans.join(" ");
}
