var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let arr = [14,14,11,11,12,13,14,12,11,11,12,12,14];

    arr.sort();
    console.log(arr);
    let count = 0;

    if(arr.length < 1){
        console.error("no data");
    }

    let currentId = arr[0];
    let currentCount = 0;

    let winnerID = 0;
    let winnerCount = 0;

    for(let i in arr){

        if(currentId == arr[i]){
            currentCount++;
        }

        //when the id changed or the end of the array
        if(currentId != arr[i] || i== arr.length -1){
            console.log(currentId + " with " + currentCount);
            if(winnerCount < currentCount){
                winnerID = currentId;
                winnerCount = currentCount;
            }

            //hop to next id
            currentId = arr[i];
            currentCount = 1;
        }
    }

    //if there are more than one winner , we are screwed in this case

    console.log("winner is "+ winnerID + " with count "+ winnerCount);
    res.render('index', { title: 'Express' });
});

module.exports = router;
