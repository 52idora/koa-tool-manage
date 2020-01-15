const config = {
    // 数据库配置
    database: {
        DATABASE: 'library',
        USERNAME: 'root',
        PASSWORD: 'fuzhi001',
        PORT: '3306',
        HOST: '192.168.60.20'
    },
    // sys系统配置
    sys: {
      JWT_SECRET: "5ad2c6d54087f12e4b14b020a3ab1c6c933d137a6a04d1a5d3d5370075298f0c"
    },
    //默认值配置
    default:{
        USERID: 1
    }
}

module.exports = config