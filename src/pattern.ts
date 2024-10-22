/*
 *****
 *****
 *****
 *****
 *****
 */

function p1() {
  let col = 5;
  let row = 5;
  for (let i = 0; i < row; i++) {
    let line = "";
    for (let j = 0; j < col; j++) {
      line += "*";
    }
    console.log(line);
  }
}

/*
 *
 **
 ***
 ****
 *****
 */
function p2() {
  let row = 5;
  for (let i = 0; i < row; i++) {
    let line = "";
    for (let j = 0; j < i + 1; j++) {
      line += "*";
    }
    console.log(line);
  }
}

/*
1
12
123
1234
12345
*/
function p3() {
  let row = 5;
  for (let i = 1; i <= row; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j.toString();
    }
    console.log(line);
  }
}

/*
1
22
333
4444
55555
*/
function p4() {
  let row = 5;
  for (let i = 1; i <= row; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += i.toString();
    }
    console.log(line);
  }
}

/*
 *****
 ****
 ***
 **
 *
 * */

function p5() {
  let row = 5;
  for (let i = row; i > 0; i--) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += "*";
    }
    console.log(line);
  }
}

/*
12345
1234
123
12
1
*/
function p6() {
  let row = 5;
  for (let i = row; i > 0; i--) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j.toString();
    }
    console.log(line);
  }
}

/*
 *
 ***
 *****
 *******
 *********
 */
function p7() {
  let row = 5;
  for (let i = 1; i <= row; i++) {
    let line = "";
    //spaces
    for (let j = 1; j <= row - i; j++) {
      line += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      line += "*";
    }

    console.log(line);
  }
}

/*
 *********
 *******
 *****
 ***
 *
 */
function p8() {
  let row = 5;
  for (let i = row; i > 0; i--) {
    let line = "";
    //spaces
    for (let j = 1; j <= row - i; j++) {
      line += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      line += "*";
    }

    console.log(line);
  }
}

/*
 *
 **
 ***
 ****
 *****
 ****
 ***
 **
 *
 */

function p9(row: number) {
  for (let i = 0; i < row; i++) {
    let line: string = "";
    for (let j = 0; j < Math.min(i + 1, row - i - 1); j++) {
      line += "*";
    }
    console.log(line);
  }
}

/*
1
10
101
1010
10101
*/

function p10(row: number) {
  for (let i = 0; i < row; i++) {
    let line: string = "";
    for (let j = 0; j < i + 1; j++) {
      j % 2 === 0 ? (line += "1") : (line += "0");
    }
    console.log(line);
  }
}

/*
1      1
12    21
123  321
12344321
*/
function p11(row: number) {
  for (let i = 0; i < row; i++) {
    let line: string = "";
    //number
    for (let j = 0; j <= i; j++) {
      line += (j + 1).toString();
    }

    //spaces
    for (let k = 0; k < 2 * (row - i - 1); k++) line += " ";
    //numbers
    for (let l = i + 1; l > 0; l--) line += l.toString();

    console.log(line);
  }
}

/*
1
2 3
4 5 6
7 8 9 10
*/
function P12(n: number) {
  let i = 1;
  for (let j = 0; j < n; j++) {
    let line: string = "";
    for (let l = 0; l <= j; l++) {
      line += i + " ";
      i++;
    }
    console.log(line);
  }
}

function P13(n: number) {
  let i = 65;
  for (let j = 0; j < n; j++) {
    let line: string = "";
    for (let l = 0; l <= j; l++) {
      line += String.fromCharCode(i) + " ";
      i++;
    }
    console.log(line);
  }
}

/*
 **********
 ****  ****
 ***    ***
 **      **
 *        *
 *        *
 **      **
 ***    ***
 ****  ****
 **********
 */

function p14(n: number) {
  //first half
  for (let i = 0; i < n; i++) {
    let line: string = "";

    //number
    for (let j = 0; j < n - i; j++) line += "*";

    //spaces
    for (let k = 0; k < 2 * i; k++) line += " ";

    //number
    for (let l = 0; l < n - i; l++) line += "*";

    console.log(line);
  }

  //second half
  for (let i = 0; i < n; i++) {
    let line: string = "";

    //number
    for (let j = 0; j < i + 1; j++) line += "*";

    //spaces
    for (let k = 0; k < 2 * (n - i - 1); k++) line += " ";

    //number
    for (let l = 0; l < i + 1; l++) line += "*";

    console.log(line);
  }
}

/*
 *          *
 **        **
 ***      ***
 ****    ****
 *****  *****
 ************
 *****  *****
 ****    ****
 ***      ***
 **        **
 *          *
 */

function p15(n: number) {
  for (let i = 0; i <= n * 2; i++) {
    let line = "";
    //stars
    for (let j = 0; (j <= i && i <= n) || (j <= n * 2 - i && i >= n); j++)
      line += "*";
    //spaces
    for (let k = 0; k < 2 * (n - i) || k < 2 * (i - n); k++) line += " ";
    //stars
    for (let l = 0; (l <= i && i <= n) || (l <= n * 2 - i && i >= n); l++)
      line += "*";

    console.log(line);
  }
}

/*
 *****
 *   *
 *   *
 *   *
 *****
 */

function p16(n: number) {
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n; j++) {
      line += j === 0 || j === n - 1 || i === 0 || i === n - 1 ? "*" : " ";
    }
    console.log(line);
  }
}

function p17(n: number) {
  let l = n * 2 - 1;
  for (let i = 0; i < l; i++) {
    let line = "";
    for (let j = 0; j < n * 2 - 1; j++) {
      line += Math.max(
        n - Math.min(i, j),
        n - Math.min(l - i - 1, l - j - 1)
      ).toString();
    }
    console.log(line);
  }
}

p17(4);
