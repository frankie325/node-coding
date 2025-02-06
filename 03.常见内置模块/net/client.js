const net = require('net');

const client = net.createConnection({
  host: 'localhost',
  port: 3000,
});

client.on('data', (data) => {
  console.log(data.toString());
});

client.on('end', () => {
  console.log('disconnected from server');
});

client.on('error', (err) => {
  console.log(err);
});


