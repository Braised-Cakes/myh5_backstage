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
        field: ['work_id']
    })
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


app.get('/aj/list/add', async (req, res) => {
    const myh5 = dbHandel.getModel('myh5')
    const count = await getCountSync(myh5, {})
    new myh5({
        work_id: count + 1,
        username: '9999'
    }).save((err, docs) => {
        if (err) throw err
        res.send({
            msg: '创建成功'
        })
    })
});

/**
 * 列表页， 删除
 */
app.get('/aj/list/del', async (req, res) => {
    const myh5 = dbHandel.getModel('myh5')
    myh5.remove({
        work_id: req.query.work_id
    }, () => {
        res.send({
            status: 1,
            msg: '删除成功'
        });
    })
});