


Blockly.Blocks['BD_Bitwise_op_and'] = {
  init: function () {
   
    this.appendValueInput("op1")
      .setCheck("Number");
	  
	this.appendValueInput("op2")
	  .appendField("& (and)")
      .setCheck("Number");
   
   this.setInputsInline(true);
    this.setOutput(true, null);

    this.setColour(80);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['BD_Bitwise_op_or'] = {
  init: function () {
   
    this.appendValueInput("op1")
      .setCheck("Number");
	  
	this.appendValueInput("op2")
	  .appendField("| (or)")
      .setCheck("Number");
   
   this.setInputsInline(true);
    this.setOutput(true, null);

    this.setColour(80);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['BD_Bitwise_op_xor'] = {
  init: function () {
   
    this.appendValueInput("op1")
      .setCheck("Number");
	  
	this.appendValueInput("op2")
	  .appendField("^ (xor)")
      .setCheck("Number");
   
   this.setInputsInline(true);
    this.setOutput(true, null);

    this.setColour(80);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['BD_Bitwise_op_js'] = {
  init: function () {
   
    this.appendValueInput("op1")
      .setCheck("Number");
	  
	this.appendValueInput("op2")
	  .appendField(">>")
      .setCheck("Number");
   
   this.setInputsInline(true);
    this.setOutput(true, null);

    this.setColour(80);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['BD_Bitwise_op_bs'] = {
  init: function () {
   
    this.appendValueInput("op1")
      .setCheck("Number");
	  
	this.appendValueInput("op2")
	  .appendField("<<")
      .setCheck("Number");
   
   this.setInputsInline(true);
    this.setOutput(true, null);

    this.setColour(80);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['BD_Bitwise_op_neg'] = {
  init: function () {
   
   
	  
	this.appendValueInput("op2")
	  .appendField("~ (neg.)")
      .setCheck("Number");
	  
   this.setInputsInline(true);
    this.setOutput(true, null);

    this.setColour(80);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['BD_Bitwise_op_all'] = {
  init: function () {
   
    this.appendValueInput("op1")
      .setCheck("Number");
	  
	this.appendDummyInput()
      .appendField("Select bitwise operator")
      .appendField(new Blockly.FieldDropdown([
        ["and", "&"],
        ["or", "|"],
        ["xor", "^"],
        ["shift right", ">>"],
        ["shift left", "<<"]
      ]), "OPERATOR");
	  
	this.appendValueInput("op2") 
      .setCheck("Number");
   
   this.setInputsInline(true);
    this.setOutput(true, "Number");

    this.setColour(70);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

/*
Blockly.Blocks['ds18b20_get_temperature'] = {
  init: function() {
    this.appendValueInput("device")
        .setCheck("Number")
        .appendField("DS18B20 get temperature (C) of device");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
    this.setColour(30);
 this.setTooltip("get temperature of device index N");
 this.setHelpUrl("");
  }
};
*/