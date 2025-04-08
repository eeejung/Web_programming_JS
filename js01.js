const readline = require("readline");

// 입출력에 대한 interface 설정을 하나의 객체로 넘겨주는 것 (그래서 {}로 감싸야함)
const rl = readline.createInterface(
    {
        input : process.stdin, 
        output : process.stdout
    }
);

// readline.question('message', successCallback()) == 비동기 함수이므로 응답이 들어왔을 때 수행할 함수를 인수로 넣어줘야함
// 사용자 입력이 들어오면 -> 함수의 인자로 들어가짐
rl.question('What is Your Name ? ', (answer)=>{
    console.log(`안녕하세요? ${answer} 님`);    // 변수를 포함하는 format string을 지정할 때 `` 사용
    rl.close();   // io 정리작업
});
