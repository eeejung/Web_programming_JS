const fs = require('fs').promises;

async function mergeFiles() {
    try {
        const data1 = await fs.readFile('file1.txt', 'utf8');
        await fs.writeFile('result.txt', data1);

        const data2 = await fs.readFile('file2.txt', 'utf8');
        await fs.appendFile('result.txt', '\n' + data2);

        const data3 = await fs.readFile('file3.txt', 'utf8');
        await fs.appendFile('result.txt', '\n' + data3);

        console.log('All files have been successfully merged into result.txt');

    } catch (err) {
        console.error('Error:', err);
    }

}

mergeFiles();   