

Blockly.JavaScript['BD_Bitwise_op_and'] = function (block) {
  let code = '';
 
  var o1 = Blockly.JavaScript.valueToCode(block, 'op1', Blockly.JavaScript.ORDER_ATOMIC)
  var o2 = Blockly.JavaScript.valueToCode(block, 'op2', Blockly.JavaScript.ORDER_ATOMIC)
  code = "("+o1 +"&"+o2+")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['BD_Bitwise_op_or'] = function (block) {
  let code = '';
 
  var o1 = Blockly.JavaScript.valueToCode(block, 'op1', Blockly.JavaScript.ORDER_ATOMIC)
  var o2 = Blockly.JavaScript.valueToCode(block, 'op2', Blockly.JavaScript.ORDER_ATOMIC)
  code = "(" +o1 +"|"+o2+ ")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['BD_Bitwise_op_xor'] = function (block) {
  let code = '';
 
  var o1 = Blockly.JavaScript.valueToCode(block, 'op1', Blockly.JavaScript.ORDER_ATOMIC)
  var o2 = Blockly.JavaScript.valueToCode(block, 'op2', Blockly.JavaScript.ORDER_ATOMIC)
  code = "(" + o1 +"^"+o2 + ")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['BD_Bitwise_op_js'] = function (block) {
  let code = '';
 
  var o1 = Blockly.JavaScript.valueToCode(block, 'op1', Blockly.JavaScript.ORDER_ATOMIC)
  var o2 = Blockly.JavaScript.valueToCode(block, 'op2', Blockly.JavaScript.ORDER_ATOMIC)
  code = "(" + o1 +">>"+o2 + ")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['BD_Bitwise_op_bs'] = function (block) {
  let code = '';
 
  var o1 = Blockly.JavaScript.valueToCode(block, 'op1', Blockly.JavaScript.ORDER_ATOMIC)
  var o2 = Blockly.JavaScript.valueToCode(block, 'op2', Blockly.JavaScript.ORDER_ATOMIC)
  code = "(" + o1 +"<<"+o2 + ")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['BD_Bitwise_op_neg'] = function (block) {
  let code = '';
 
 
  var o2 = Blockly.JavaScript.valueToCode(block, 'op2', Blockly.JavaScript.ORDER_ATOMIC)
  code = "(" + "~"+o2+ ")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['BD_Bitwise_op_all'] = function (block) {
  let code = '';
 var  dropdown_name = block.getFieldValue("OPERATOR");
  var o1 = Blockly.JavaScript.valueToCode(block, 'op1', Blockly.JavaScript.ORDER_ATOMIC)
  var o2 = Blockly.JavaScript.valueToCode(block, 'op2', Blockly.JavaScript.ORDER_ATOMIC)
  code = "(" + o1 + dropdown_name +o2 + ")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
