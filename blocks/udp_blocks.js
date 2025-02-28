Blockly.defineBlocksWithJsonArray([
  {
      "type": "send_udp_packet",
      "message0": "Send UDP to IP %1 Port %2 Data %3",
      "args0": [
        {
            "type": "field_input",
            "name": "IP",
            "text": "192.168.43.42"
        },
        {
            "type": "field_number",
            "name": "PORT",
            "value": 2390,
            "min": 0,
            "max": 65535
        },
        {
            "type": "field_input",
            "name": "DATA",
            "text": "Hello"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Send a UDP packet",
      "helpUrl": ""
  }
]);
