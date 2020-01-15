const allSqlAction = require("../lib/mysql")
const MSG = require("../config/msgs")

/**
 * @Description: 添加部门
 * @param: [departName,userId(管理员ID)]
 * @return:
 * @auther: yuanrui
 * @date: 2020/1/9 16:19
 */
async function add(departName,userId) {
    let sql = `insert into depart(depart_name,create_user) values ("${departName}", "${userId}")`
    return allSqlAction.allSqlAction(sql).then(res => {
        return MSG.SUCCESS
    }).catch(() => {
        return MSG.SQL_ERROR
    })
}

/**
 * @Description: 修改部门
 * @param: [departName,userId(管理员ID),departId]
 * @return:
 * @auther: yuanrui
 * @date: 2020/1/9 16:19
 */
async function edit(departName,userId,departId) {
    let sql = `update depart set depart_name=${departName}",create_user="${userId} where id="${departId}"`
    return allSqlAction.allSqlAction(sql).then(res => {
        return MSG.SUCCESS
    }).catch(() => {
        return MSG.SQL_ERROR
    })
}

/**
 * @Description: 删除部门
 * @param: [departId,userId(管理员ID)]
 * @return:
 * @auther: yuanrui
 * @date: 2020/1/9 16:19
 */
async function del(departId) {
    let sql = `delete from depart where id="${departId}"`
    return allSqlAction.allSqlAction(sql).then(res => {
        return MSG.SUCCESS
    }).catch(() => {
        return MSG.SQL_ERROR
    })
}

/**
 * @Description: 部门分页
 * @param: [departId,userId(管理员ID)]
 * @return:
 * @auther: yuanrui
 * @date: 2020/1/9 16:19
 */
async function page(current,size) {
    let result = {
        state:MSG.SUCCESS.state,
        msg:MSG.SUCCESS.msg,
    }
    let data = {'current':current};
    let sql = `select * from depart order by create_time desc limit ${(current-1)*size},${size}`
    let sql1 = `select count(1) count from depart`
    await allSqlAction.allSqlAction(sql).then(res => {
        data.records = res;
    }).catch(() => {
        return MSG.SQL_ERROR
    })

    await allSqlAction.allSqlAction(sql1).then(res => {
        data.total = res[0]['count']
    }).catch(() => {
        return MSG.SQL_ERROR
    })
    result.data = data
    return result
}

module.exports={
    add,
    edit,
    del,
    page
}