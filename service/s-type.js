const allSqlAction = require("../lib/mysql")

async function typeAdd(parentId, typeName) {
    let sql = `insert into type(parent_id,type_name) values ("${parentId}", "${typeName}")`
    return allSqlAction.allSqlAction(sql).then(res => {
        return { msg: res, code: 1 }
    }).catch(() => {
        return { msg: "sql error", code: 0 }
    })
}

module.exports={
    typeAdd
}