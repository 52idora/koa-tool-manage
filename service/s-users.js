const allSqlAction = require("../lib/mysql")
const MSG = require("../config/msgs")

/**
 * @Description: 添加会员
 * @param: [departName,userId(管理员ID)]
 * @return:
 * @auther: yuanrui
 * @date: 2020/1/9 16:19
 */
async function add(nickName,departId,userId) {
    let sql = `insert into users(nick_name,depart_id,create_user) values ("${nickName}","${departId}", "${userId}")`
    return allSqlAction.allSqlAction(sql).then(res => {
        let sql1 = `update depart set member_num=member_num+1 where id="${departId}"`
        allSqlAction.allSqlAction(sql1)
        return MSG.SUCCESS
    }).catch(() => {
        return MSG.SQL_ERROR
    })
}

/**
 * @Description: 修改会员
 * @param: [departName,userId(管理员ID),departId]
 * @return:
 * @auther: yuanrui
 * @date: 2020/1/9 16:19
 */
async function edit(nickName,departId,userId,createUser) {
    let sql = `update users set nick_name="${nickName}",depart_id="${departId}",create_user="${createUser}" where id="${userId}"`
    return allSqlAction.allSqlAction(sql).then(res => {
        return MSG.SUCCESS
    }).catch(() => {
        return MSG.SQL_ERROR
    })
}

/**
 * @Description: 删除会员
 * @param: [departId,userId(管理员ID)]
 * @return:
 * @auther: yuanrui
 * @date: 2020/1/9 16:19
 */
async function del(userId) {
    let sql = `delete from users where id="${userId}"`
    return allSqlAction.allSqlAction(sql).then(res => {
        return MSG.SUCCESS
    }).catch(() => {
        return MSG.SQL_ERROR
    })
}

/**
 * @Description: 会员分页
 * @param: [departId,userId(管理员ID)]
 * @return:
 * @auther: yuanrui
 * @date: 2020/1/9 16:19
 */
async function page(current,size,keyword) {
    let result = {
        state:MSG.SUCCESS.state,
        msg:MSG.SUCCESS.msg,
    }
    let data = {'current':current};
    let sql,sql1;
    if(keyword==null){
        sql = `SELECT u.id,u.nick_name,d.depart_name FROM users u LEFT JOIN depart d ON u.depart_id=d.id order by u.create_time desc limit ${(current-1)*size},${size}`
        sql1 = `select count(1) count from users`
    } else{
        sql = `SELECT u.id,u.nick_name,d.depart_name FROM users u LEFT JOIN depart d ON u.depart_id=d.id where u.nick_name like concat("%","${keyword}","%") order by u.create_time desc limit ${(current-1)*size},${size}`
        sql1 = `select count(1) count from users where nick_name like concat("%","${keyword}","%")`
    }
    console.log(sql1)
    await allSqlAction.allSqlAction(sql).then(res => {
        data.records = res;
    }).catch(() => {
        return MSG.SQL_ERROR
    })

    await allSqlAction.allSqlAction(sql1).then(res => {
        data.total = res[0]['count']
    }).catch((e) => {
        console.log(e)
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