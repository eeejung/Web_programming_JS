// 콜백헬 만들기

const fs = require('fs');   // 파일시스템 모듈 불러오기

// 비동기적으로 file1.txt 파일 읽기 -> 읽은 후에 수행할 콜백함수
fs.readFile('file1.txt', 'utf8', (err, data1)=>{
    if (err) {  // file1.txt 파일을 읽다가 에러 발생 시
        return console.error('Error reading file1 :' , err);
    }

    fs.writeFile('result.txt', data1, (err)=>{
        if (err) {
            return console.error('Error writing result.txt :' , err);
        }

        fs.readFile('file2.txt', 'utf8', (err, data2)=>{
            if (err) {  // file2.txt 파일을 읽다가 에러 발생 시
                return console.error('Error reading file2:', err);
            }

            fs.appendFile('result.txt', '\n' + data2, (err)=>{
                if (err) {
                    return console.error('Error appending to result.txt:', err);
                }

                fs.readFile('file3.txt', 'utf8', (err, data3)=>{
                    if (err) {  // file3.txt 파일을 읽다가 에러 발생 시
                        return console.error('Error reading file3:', err);
                    }

                    fs.appendFile('result.txt', '\n' + data3, (err)=>{
                        if (err) {
                            return console.error('Error appending to result.txt:', err);
                        }

                        console.log('All files have been successfully merged into result.txt');

                    });
                });
            });
        });        
    }); 
});
