const {
    promisify
} = require('util')

const dbHandel = require('./db/handel.js')
// const db = require('../promisify/index.js')
const collection = dbHandel.getModel('myh5')

// dbHandel.getModel('myh5').find({}, (err, docs) => {
//     console.log(docs)
// })


async function aaa() {
    setTimeout(()=>{
        console.log(999)
    }, 0)
    // const a = await dbHandel.getModel('myh5').find({});
    console.log(888)
    // console.log(a)
}

aaa();