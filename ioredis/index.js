const redis = require('ioredis');

const redisClient = new redis({
  host: 'localhost',
  port: 6379,
});

// 字符串
redisClient.set('key', 'value');

// 集合
redis.sadd('set', 'value1', 'value2', 'value3'); 