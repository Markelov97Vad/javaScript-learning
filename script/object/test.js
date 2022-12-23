const mySity = {
  contry:'New York'
};

// mySity.size = 'big';
// mySity.contry = null
// delete mySity.contry
// console.log(mySity);

// console.log(window)
// console.log(mySity.contry = {});


// function shortcut (string) {
//   if(string === "a" || "e" || "i" || "o" || "u") {
//     console.log('выполнено')
//   }
// }

// console.log(shortcut('method'))

// function shortcut (string) {
//   if(string === "a" || "e" || "i" || "o" || "u") {
//     // let a = string.split('').filter((item) => {
//     //   let b = ["a", "e", "i", "o", "u"]
//     //   item.includes(b)
//     // });
//     let v = []
//     let a = string.split('');
//     console.log(a)

//     for (let i = 0 ; i < a.length; i++) {
//       if(a.includes('a'))
//     }

//     // const b =  a.forEach((item) => {
//     //   // return !(item === "a" || "e" || "i" || "o" || "u");
//     //   return item.indexOf("a") && item.indexOf("e") && item.indexOf("i") && item.indexOf("o") && item.indexOf("u");
//     // })
//     // // indexOf('Ш')
//     // // arr.splice(1, 1);
//     // console.log(b)
//   }
// }

function shortcut(string){
  let vowels = 'aeiou';
  
  let result = [];
  
    for( let i = 0; i < string.length; i++){
    if(!vowels.includes(string[i])){
      result.push(string[i]);
    }
  }
    return result.join('');
  };

console.log(shortcut('method'));
