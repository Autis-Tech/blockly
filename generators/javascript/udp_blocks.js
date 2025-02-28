Blockly.JavaScript['send_udp_packet'] = function(block) {
  var ip = block.getFieldValue('IP');
  var port = block.getFieldValue('PORT');
  var data = block.getFieldValue('DATA');

  var code = `
    (async () => {
      const dgram = require('dgram');
      const socket = dgram.createSocket('udp4');
      const message = Buffer.from('${data}');
      socket.send(message, ${port}, '${ip}', (err) => {
        if (err) console.error(err);
        socket.close();
      });
    })();
  `;
  
  return code;
};
