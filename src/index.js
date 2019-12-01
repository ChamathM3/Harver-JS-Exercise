const { getRandomWordSync, getRandomWord } = require('word-maker');
const fs = require('fs');
const axios = require('axios');

console.log('It works!');

// YOUR CODE HERE

// FileInput variable use for print all tasks results in to file.
let FileInput = ``;
// runAllTasks = use for run all tasks one after another one.
// if you want to check each result one by one simply change runAllTasks = false;
const runAllTasks =  true;

// if you need to check each tasks one by one at the bottom of this file functions has describe 

// ================== Each Tasks Code ===========================================
// Task 1
taskOne = () =>{
    console.log("Task 1");
    FileInput = 'Task 1 \n';

    // This loop use for print 1 - 100 with random work come from synchronous function
    for (let index = 1; index < 101; index++) {
        console.log(`${index} : `,getRandomWordSync());
        // FileInput store each result in to a file.
        FileInput += `${index} : ${getRandomWordSync()} \n`;
    }
    console.log("===================================");
    FileInput += "=================================== \n";
    if(runAllTasks){
        taskTwo();
    }
}


// Task 2
// This function use for create Fizz Buzz program form getRandomWordSync function
taskTwo = () => {
    console.log("Task 2 - Fizz Buzz program form getRandomWordSync function");
    FileInput = 'Task 2 - Fizz Buzz program form getRandomWordSync function\n';
    for (let index = 1; index < 101; index++) {
        let log;
        // check index devide by 3 and 5. if so it's word FizzBuzz
        if(index%3 == 0 && index%5 == 0){
            log = `${index} : FizzBuzz`;
        }else if(index%3 == 0){
            // check index can be devide by 3. if so it's word Fizz
            log = `${index} : Fizz`;
        }else if(index%5 == 0){
            // check index can be devide by 5. if so it's word Buzz
            log = `${index} : Buzz`;
        }else{
            // word does not multiplication of 3 or 5 so it should show random word
            log = `${index} : ${getRandomWordSync()}`;
        }

        console.log(log);
        FileInput += `${log} \n`;
    }
    console.log("===================================");
    FileInput += `=================================== \n`;

    if(runAllTasks){
        taskThreePartOne();
    }

}
// Task 3 part 1
// This function use for Do task 1 when word recevice from asynchronous way.
// To execute that use async await.
taskThreePartOne =  async () => {
    console.log("Task 3 : part 1 - Task 1 with asynchronous getRandomWord function");
    FileInput += `Task 3 : part 1 - Task 1 with asynchronous getRandomWord function \n`;
    for (let index = 1; index < 101; index++) {
        console.log(`${index} : `, await getRandomWord());
        FileInput += `${index} :  ${await getRandomWord()} \n`;  
    }

    console.log("===================================");
    FileInput += `=================================== \n`;
    if(runAllTasks){
        taskThreePartTwo();
    }
}

// Task 3 part 2
// This function use for Do task 2 when word recevice from asynchronous way.
// To execute that use async await.
taskThreePartTwo =  async () => {
;
    console.log("Task 3 : part 2 - Task 2 with asynchronous getRandomWord function");
    FileInput += `Task 3 : part 2 - Task 2 with asynchronous getRandomWord function \n`;
    
        for (let index = 1; index < 101; index++) {
                let message;
                if(index%3 == 0 && index%5 == 0){
                    // check index devide by 3 and 5. if so it's word FizzBuzz
                    message = `${index} : FizzBuzz`;
                }else if(index%3 == 0){
                    // check index can be devide by 3. if so it's word Fizz
                    message = `${index} : Fizz`;
                }else if(index%5 == 0){
                    // check index can be devide by 5. if so it's word Buzz
                    message = `${index} : Buzz`;
                }else{
                    // word does not multiplication of 3 or 5 so it should show random word
                    message = `${index} : ${await getRandomWord()}`;
                }
    
                console.log(message);
                FileInput += `${message} \n`;
        }
        
        if(runAllTasks){
            taskFourASyncSolution();
        }
    }

//Task 4
// Fizz Buzz program with error handling (when asynchronous getRandomWord function use.)

taskFourASyncSolution =  async () => {

    console.log("===================================");
    FileInput += `=================================== \n`;
    console.log("Task 4 : part 1 - Fizz Buzz program with error handling (when asynchronous getRandomWord function use.)");
    FileInput += `Task 4 \n`;
    
    
        for (let index = 1; index < 101; index++) {
                let message;
                if(index%3 == 0 && index%5 == 0){
                    // check index devide by 3 and 5. if so it's word FizzBuzz
                    message = `${index} : FizzBuzz`;
                }else if(index%3 == 0){
                    // check index can be devide by 3. if so it's word Fizz
                    message = `${index} : Fizz`;
                }else if(index%5 == 0){
                    // check index can be devide by 5. if so it's word Buzz
                    message = `${index} : Buzz`;
                }else{
                    // if error happend it should print "It shouldn't break anything!" otherwise random word
                    message = `${index} : ${await getRandomWord({ withErrors: true})
                    .then(res => res)
                    .catch(error => `It shouldn't break anything!`)}`;
                }
    
                console.log(message);
                FileInput += `${message} \n`;
        }
        if(runAllTasks){
            taskFourSyncSolution();
        }
    }

//Task 4
// Fizz Buzz program with error handling (when synchronous  getRandomWordSync function use.)
taskFourSyncSolution = () => {

    console.log("===================================");
    FileInput += `=================================== \n`;
    console.log("Task 4 : part 2 - Fizz Buzz program with error handling (when synchronous  getRandomWordSync function use.)");
    FileInput += `Task 4 : part 2 - Fizz Buzz program with error handling (when synchronous  getRandomWordSync function use.) \n`;
    
        for (let index = 1; index < 101; index++) {
                let message;
                if(index%3 == 0 && index%5 == 0){
                    // check index devide by 3 and 5. if so it's word FizzBuzz
                    message = `${index} : FizzBuzz`;
                }else if(index%3 == 0){
                     // check index can be devide by 3. if so it's word Fizz
                    message = `${index} : Fizz`;
                }else if(index%5 == 0){
                    // check index can be devide by 5. if so it's word Buzz
                    message = `${index} : Buzz`;
                }else{
                    try{
                        // if there isn't error it should print random word
                        message = `${index} : ${getRandomWordSync({ withErrors: true })}`;
                    }
                    catch(err){
                        // when error it should print  "It shouldn't break anything!"
                        message = `${index} : It shouldn't break anything!`;
                    }
                }
    
                console.log(message);
                FileInput += `${message} \n`;    
    
        }

        if(runAllTasks){
            printTasksInAFile();
        }
    }


// Task 5 - Node developers
// part 1 : print results to a file
printTasksInAFile = () =>{
    // write all results in to "results.txt" file.
    fs.writeFile("results.txt", FileInput, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("===================================");
        console.log("The file was saved!");
        if(runAllTasks){
            sendResponceToHTTPEndPoint();
        }
    });
}

// Task 5 - Frontend developers
// part 2 : send result to HTTP endpoint 

sendResponceToHTTPEndPoint = () =>{

    axios.post('/HTTPEndpoint', {
        data:FileInput
      })
      .then(function (response) {
        // console.log(response);
        console.log("===================================");
        console.log("Sent data to HTTP end point");
        if(runAllTasks){
            bonasTaskCall();
        }
      })
      .catch(function (error) {
        // console.log(error);
        console.log("===================================");
        console.log("Sent data to HTTP end point");
        if(runAllTasks){
            bonasTaskCall();
        }
      });
}


// Bonus task
bonasTask = () =>{
    return new Promise((resolve, reject) => {
        var wordsArray = [];
        for (let i = 1; i < 101; i++) {
            getRandomWord({slow:true}).then((res) => {
                wordsArray.push({ 'word':res, 'index': i})
                 //console.log(`${i}: ${res}`)
                if(wordsArray.length == 100){
                    resolve(wordsArray)
                }
            });
        }

    })
}

// To check bonus task call this function.
bonasTaskCall = () =>{
    console.log("===================================");
    console.log("Bonus task");
    bonasTask().then((res) => {
        const list = res.sort((a,b) => a.index - b.index).map((res, index, array) => res.word)
        let number = 0;
        list.forEach(element => {
            number ++;
            console.log(`${number} : ${element}`);
        });   
    });
}




// if you want to check each task mannually please run commnted function one by one and set default value runAllTasks = false.
// each task funtion
     taskOne();
    // taskTwo();
    // taskThreePartOne(); 
    // taskThreePartTwo();
    // taskFourASyncSolution();
    // taskFourSyncSolution();
    // printTasksInAFile();
    // sendResponceToHTTPEndPoint();
    // bonasTaskCall();

