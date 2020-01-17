const allSqlAction = require("../lib/mysql")
const MSG = require("../config/msgs")

/**
 * @Description: 添加物品
 * @param: [departName,userId(管理员ID)]
 * @return:
 * @auther: yuanrui
 * @date: 2020/1/9 16:19
 */
async function add(thingNo,thingName,thingImg,totalNum,remark,userId) {
    let sql = `insert into thing(thing_no,thing_name,thing_img,total_num,rest_num,remark,create_user) values ("${thingNo}","${thingName}","${thingImg}","${totalNum}","${totalNum}","${remark}", "${userId}")`
    return allSqlAction.allSqlAction(sql).then(res => {
        return MSG.SUCCESS
    }).catch(() => {
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
async function edit(thingName,thingId,userId) {
    let sql = `update thing set thing_name="${thingName}",create_user="${userId}" where id="${thingId}"`
    return allSqlAction.allSqlAction(sql).then(res => {
        return MSG.SUCCESS
    }).catch(() => {
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
async function del(thingId) {
    let sql = `delete from thing where id="${thingId}"`
    return allSqlAction.allSqlAction(sql).then(res => {
        return MSG.SUCCESS
    }).catch(() => {
        return MSG.SQL_ERROR
    })
}

/**
 * @Description: 统计
 * @param:
 * @return:
 * @auther: yuanrui
 * @date: 2020/1/16 19:33
 */
async function stastic() {
    let sql = `SELECT(SELECT COUNT(1) FROM thing) AS thing_count,(SELECT COUNT(1) FROM users) AS user_count`
    return allSqlAction.allSqlAction(sql).then(res => {
        return {
            state: MSG.SUCCESS.state,
            msg: MSG.SUCCESS.msg,
            data: res[0]
        }
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
    let sql = `select * from thing order by create_time desc limit ${(current-1)*size},${size}`
    let sql1 = `select count(1) count from thing`
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
 * @Description: 借出
 * @param: [thingNo,userId]
 * @return:
 * @auther: yuanrui
 * @date: 2020/1/16 18:06
 */
async function borrow(thingNo,userId) {
    state = 0;
    //获取物品id和物品数量
    let sql1 = `SELECT id,rest_num FROM thing WHERE thing_no="${thingNo}"`
    let thing;
    await allSqlAction.allSqlAction(sql1).then(res => {
        thing = res[0];
    }).catch((e) => {
        console.log(e)
        state = 3;
    })
    if(thing == null){
        state = 0;
    } else{
        if(thing.rest_num == 0){
            state = 5
        } else{
            //新增借出记录
            let sql2 = `insert into use_record(thing_id,user_id) values ("${thing.id}","${userId}")`
            await allSqlAction.allSqlAction(sql2).then(res => {
                state = 1
            }).catch((e) => {
                console.log(e)
                state = 3;
            })
            //扣除物品数量
            let sql3 = `update thing set rest_num=rest_num-1 where id="${thing.id}"`
            await allSqlAction.allSqlAction(sql3).then(res => {
                state = 1
            }).catch((e) => {
                console.log(e)
                state = 3;
            })
        }
    }
    let result
    if(state == 1){
        result = MSG.SUCCESS
    } else if(state == 3){
        result = MSG.SQL_ERROR
    } else if(state == 5){
        result = MSG.TING_SHORT_ERROR
    } else{
        result = MSG.FAIL
    }

    return result
}

/**
 * @Description: 归还
 * @param:
 * @return:
 * @auther: yuanrui
 * @date: 2020/1/16 18:07
 */
async function sendback(thingNo,userId) {
    state = 0;
    //获取物品id和物品数量
    let sql1 = `SELECT id,rest_num FROM thing WHERE thing_no="${thingNo}"`
    let thing;
    await allSqlAction.allSqlAction(sql1).then(res => {
        thing = res[0];
    }).catch((e) => {
        console.log(e)
        state = 3;
    })
    if(thing == null){
        state = 0;
    } else{
        //获取首条借出记录
        let records;
        let sql4 = `select id from use_record where thing_id ="${thing.id}" and user_id="${userId}" and state=0`
        await allSqlAction.allSqlAction(sql4).then(res => {
            records = res
        }).catch((e) => {
            console.log(e)
            state = 3;
        })
        if(records.length==0){
            state = 6;
        } else{
            //修改借出记录
            let recordId = records[0].id
            let sql2 = `update use_record set state=1,return_time=now() where id="${recordId}"`
            await allSqlAction.allSqlAction(sql2).then(res => {
                state = 1
            }).catch((e) => {
                console.log(e)
                state = 3;
            })
            //添加物品数量
            let sql3 = `update thing set rest_num=rest_num+1 where id="${thing.id}"`
            await allSqlAction.allSqlAction(sql3).then(res => {
                state = 1
            }).catch((e) => {
                console.log(e)
                state = 3;
            })
        }
    }
    let result
    if(state == 1){
        result = MSG.SUCCESS
    } else if(state == 3){
        result = MSG.SQL_ERROR
    } else if(state == 5){
        result = MSG.TING_SHORT_ERROR
    } else if(state == 6){
        result = MSG.NO_USE_RECORD
    } else{
        result = MSG.FAIL
    }

    return result
}

module.exports={
    add,
    edit,
    del,
    page,
    borrow,
    sendback,
    stastic
}