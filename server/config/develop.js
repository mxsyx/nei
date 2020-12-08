module.exports = {
  salt: '0sY7fh6;wMt',
  sendNotification: false,
  logger: {
    level: 'debug',
    root: './logs/'
  },
  testDomain: 'https://nei.mxsyx.site',
  onlineDomain: 'https://nei.mxsyx.site',
  mysql: {
    host: 'mysql',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'nei',
    connectionLimit: 100,
    dateStrings: true,
    charset: 'UTF8MB4_GENERAL_CI'
  },
  mongodb: {
    url: 'mongodb://mongodb:27017',
    options: {
      useNewUrlParser: true
    },
    name: 'nei',
    key: 'nei_'
  },
  redis: {
    key: 'nei_',
    db: 10,
    host: 'redis',
    port: '6379',
    expire: 2678400,
    password: 'sOmE_sEcUrE_pAsS'
  },
  // ip 地址查询服务
  ip: {
    disabled: true
  },
  mail: {
    disabled: true
  },
  nos: {
    server: ''
  },
  static: {
    defer: true
  },
  mysqlLog: true
};
