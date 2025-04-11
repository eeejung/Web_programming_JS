// 각각의 비동기 함수의 setTimeout을 호출
// 불규칙적으로 수행된게 아니라 마치 순차적으로 수행된 것 처럼 진행됨
// -> 근데 이게 너무 복잡해지고 깊어지면 ? => 콜백 헬
        // (모든 과정을 비동기로 처리하면 콜백 안에 콜백을 계속 포함하는 형식)

function firstTask(callback) {
    setTimeout(() => {
        console.log("First task done");
        callback();
    }, 1000);
}

function secondTask(callback) {
    setTimeout(() => {
        console.log("Second task done");
        callback();
    }, 1000);
}

function thirdTask(callback) {
    setTimeout(() => {
        console.log("Third task done");
        callback();
    }, 1000);
}

// 콜백 헬 형태의 코드
firstTask(() => {
    secondTask(() => {
        thirdTask(() => {
            console.log("All tasks are done");
        });
    });
}); 