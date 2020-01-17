const allSqlAction = require("../lib/mysql")
const MSG = require("../config/msgs")

/**
 * @Description: 添加物品
 * @param: [departName,userId(管理员ID)]
 * @return:
 * @auther: yuanrui
 * @date: 2020/1/9 16:19
 */
async function add(parentId,typeName,userId) {
    let sql = `insert into type(parent_id,type_name,create_user) values ("${parentId}","${typeName}", "${userId}")`
    return allSqlAction.allSqlAction(sql).then(res => {
        return MSG.SUCCESS
    }).catch((e)=> {
        console.log(e)
        return MSG.SQL_ERROR
    })
}

/**
 * @Description: 修改物品
 * @param: [departName,userId(管理员ID),departId]
 * @return:
 * @auther: yuanrui
 * @date: 2020/1/9 16:19
 */
async function edit(parentId,typeName,typeId,userId) {
    let sql = `update type set type_name="${typeName}",parent_id="${parentId}",create_user="${userId}" where id="${typeId}"`
    return allSqlAction.allSqlAction(sql).then(res => {
        return MSG.SUCCESS
    }).catch((e) => {
        console.log(e)
        return MSG.SQL_ERROR
    })
}

/**
 * @Description: 删除物品
 * @param: [thingId]
 * @return:
 * @auther: yuanrui
 * @date: 2020/1/9 16:19
 */
async function del(typeId) {
    let sql = `delete from type where id="${typeId}"`
    return allSqlAction.allSqlAction(sql).then(res => {
        return MSG.SUCCESS
    }).catch(() => {
        return MSG.SQL_ERROR
    })
}

/**
 * @Description: 物品分页
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
    let sql = `SELECT t.id,t.type_name,p.type_name parent_name FROM type t LEFT JOIN type p ON p.id=t.parent_id order by t.parent_id asc limit ${(current-1)*size},${size}`
    let sql1 = `select count(1) count from type`
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

/**
 * @Description: 删除物品
 * @param: [thingId]
 * @return:
 * @auther: yuanrui
 * @date: 2020/1/9 16:19
 */
async function all() {
    let sql = `SELECT id,type_name FROM type`
    return allSqlAction.allSqlAction(sql).then(res => {
        return {
                state:MSG.SUCCESS.state,
                msg:MSG.SUCCESS.msg,
                data:res
               }
    }).catch(() => {
        return MSG.SQL_ERROR
    })
}

module.exports={
    add,
    edit,
    del,
    page,
    all
}