let app = require('../app.js')
const dbHandel = require('../db/handel.js')
const {
    getCountSync,
    getDataSync
} = require('../promisify/index.js')
const {
    DEFAULT_PAGE
} = require('../const/index')
app.get('/aj/list/get', async (req, res) => {
    const myh5 = dbHandel.getModel('myh5')

    const data = await getDataSync(myh5, {
        field : ['work_id']
    })
    console.log(data);

    res.send({
        status: 1,
        message: '删除失败',
        result: {
            info: {
                page: req.query.page || DEFAULT_PAGE.page,
                total: 99,
                limit: req.query.limit || DEFAULT_PAGE.limit,
            },
            data: data
        }
    })
});