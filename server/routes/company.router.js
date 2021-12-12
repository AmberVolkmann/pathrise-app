const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const jobBoards = require('../../jobBoards.json');

var boards = JSON.stringify(jobBoards);
var parsed = JSON.parse(boards);



function parseJson(object){
    var arr = []
    object.job_boards.forEach(function(key) {
      arr.push(key.root_domain);
    });
    return arr;
}

// console.log(parseJson(parsed));

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "job_opportunities";'
    console.log('in shelf router.get')
    pool.query(queryText)
        .then(result => {
            console.log(result.rows)
            res.send(result.rows)
        }).catch(error => {
            console.log('error in contribution GET', error)
            res.sendStatus(500);
        })          
});


router.put('/', (req, res) => {
    const queryText = `UPDATE "job_opportunities" SET "job_source" = $1 WHERE "job_url" IS $2;`;
    const queryValues = [
        "unknown",
        NULL
    ];
    pool.query(queryText, queryValues)
    .then(()=> {
        res.sendStatus(201);
        console.log(queryValues)
    }).catch((err) => {
        console.log('Error in router.put on update null router', err);
        res.sendStatus(500);
    })
});

// const meow = async () => {
//     await router.get('/job_url', (req, res) => {
//         const queryText = 'SELECT job_url FROM "job_opportunities";'
//         console.log('in shelf router.get')
//         pool.query(queryText)
//             .then(result => {
//                 console.log(result.rows)
//                 let data = result.rows;
//                 trial(data);
//             }).catch(error => {
//                 console.log('error in jobUrl GET', error)
//                 res.sendStatus(500);
//             })          
//     });
    
// }

// meow();

router.get('/job_url', (req, res) => {
    const queryText = 'SELECT job_url FROM "job_opportunities";'
    pool.query(queryText)
        .then(result => {
            // console.log(result.rows)
            let data = result.rows;
            trial(data);
        }).catch(error => {
            console.log('error in jobUrl GET', error)
            res.sendStatus(500);
        })          
});

function trial(data) {
    let queryText = '';
    data.forEach(jobUrl => {
        if(jobUrl.job_url == null) {
            jobUrl.job_url = '';
        }
        let t = jobUrl.job_url;
        arr = parseJson(parsed);
        arr.forEach(job_source => {
            if (t.includes(job_source)){
                // console.log("yes bitch" + job_source + "t" + t);
                // UPDATE STATMENT HERE
                // FIELD job_source = jobSource WHERE t = url
                
                try{
                    queryText = `UPDATE "job_opportunities" SET "job_source" = $1 WHERE "job_url" = $2;`;
                    queryValues = [
                        job_source,
                        t
                    ]
                    pool.query(queryText, queryValues);
                }
                catch{
                    throw(console.error());
                }
                
            }
            else if (t == ''){
                // do nothing
                //
            }
            else {
                try{
                    // UPDATE 
                    // job_source = 'Company Website'
                    queryText = `UPDATE "job_opportunities" SET "job_source" = 'EEEEEEE'`;
                    // queryValues = 
                    //     ['Company Website'];
                    pool.query(queryText);
                }
                catch{
                    throw(console.error());
                }

                
            }
        });
            
        

        // if (t.includes("2426096")){
        //     console.log("yes it does");
        // }
    })
}

// function whatever() {
//     const string = "foo";
//     const substring = "oo";

//     console.log(string.includes(substring)); // true

    
// }

// whatever();

// trial();


// parseJson(parsed);

// For each record in the database 
// If the job source is empty:
// 

module.exports = router;