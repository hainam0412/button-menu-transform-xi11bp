// Import stylesheets
import './style.css';

// Write Javascript code!
const quizs = document.querySelectorAll('.quiz');
let CnArr = [];
let TtArr = [];
let TdArr = [];
let StArr = [];

for(let quiz of quizs){
  const buttons = quiz.querySelectorAll('button');

  for( let b of buttons){
    b.addEventListener('click', () =>{
      const dataCn = Number(b.getAttribute('data-cn'));
      const dataTt = Number(b.getAttribute('data-tt'));
      const dataTd = Number(b.getAttribute('data-td'));
      const dataSt = Number(b.getAttribute('data-st'));

      CnArr.push(dataCn);
      TtArr.push(dataTt);
      TdArr.push(dataTd);
      StArr.push(dataSt);

    })
  }
}

function sumArr(arr){
  return arr.reduce(function(a, b){
      return a + b;
  }, 0);
}

let newArr = [];

const result = document.getElementById('result');

class s {
  name="";
  value=0;
}

result.addEventListener('click', () =>{
  

  const sumSt = new s();
  const sumTd = new s();
  const sumTt = new s();
  const sumCn = new s();
  sumCn.name = 'Cam nhan';
  sumTt.name = 'Thuc te';
  sumTd.name = 'Tu duy';
  sumSt.name = 'Sang tao';

  sumCn.value = sumArr(CnArr);
  sumTt.value = sumArr(TtArr);
  sumTd.value = sumArr(TdArr);
  sumSt.value = sumArr(StArr);

  console.log(sumCn,sumTt,sumTd,sumSt);

  newArr = [sumCn,sumTt,sumTd,sumSt];
  let sortedArr = [];

  Array.from(newArr).sort((a,b) =>{
    const _a = a.value;
    const _b = b.value;

    if(_a > _b ){
      return -1;
    }else if(_a === _b){
      return 0;
    }else{
      return 1;
    }
  }).forEach((e) =>{
    sortedArr.push(e);
  })

  const finalArr = sortedArr.slice(0,2);

  for(let o of finalArr){
    console.log(o.name);
  }

  CnArr = [];
  TtArr = [];
  TdArr = [];
  StArr = [];

})



