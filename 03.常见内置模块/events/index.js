const events = require('events');

const emitter = new events.EventEmitter();

// emitter内置的事件，监听新的listener注册，在注册之前触发
emitter.on('newListener', (event, listener) => {
  // event为注册的事件名称，listener为注册的事件
  console.log(event, listener);
});

// ! 注册事件
emitter.on('eventA', function (...args) {
  console.log('A1', args);
  console.log(this); //this指向emitter实例
});

// ! 注册事件到 listeners 数组的开始位置
emitter.prependListener('eventA', (...args) => {
  console.log('A2', args); //先输出
});

emitter.on('eventB', (...args) => {
  console.log('B', args);
});

const listenerC = (...args) => {
  console.log('C', args);
};
emitter.on('eventC', listenerC);

// ! 移除指定事件
emitter.removeListener('eventC', listenerC);

// ! 触发事件
emitter.emit('eventA', 1, 2, 3);
emitter.emit('eventB', 4, 5, 6);

console.log(emitter.eventNames());
