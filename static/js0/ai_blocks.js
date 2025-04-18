/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Blocks for Blockly's Block Factory application.
 */
'use strict';

Blockly.Blocks['custom_diamond'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("菱形积木块");
    this.setOutputShape(Blockly.OUTPUT_SHAPE_DIAMOND);

    this.setColour(120);
    this.setTooltip("这是一个菱形积木块");
  }
};

Blockly.Blocks['factory_base'] = {
  // Base of new block.
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField('name')
        .appendField(new Blockly.FieldTextInput('block_type'), 'NAME');
    this.appendStatementInput('INPUTS')
        .setCheck('Input')
        .appendField('inputs');
    var dropdown = new Blockly.FieldDropdown([
        ['automatic inputs', 'AUTO'],
        ['external inputs', 'EXT'],
        ['inline inputs', 'INT']]);
    this.appendDummyInput()
        .appendField(dropdown, 'INLINE');
    dropdown = new Blockly.FieldDropdown([
        ['no connections', 'NONE'],
        ['鈫?left output', 'LEFT'],
        ['鈫?top+bottom connections', 'BOTH'],
        ['鈫?top connection', 'TOP'],
        ['鈫?bottom connection', 'BOTTOM']],
        function(option) {
          this.getSourceBlock().updateShape_(option);
          // Connect a shadow block to this new input.
          this.getSourceBlock().spawnOutputShadow_(option);
        });
    this.appendDummyInput()
        .appendField(dropdown, 'CONNECTIONS');
    this.appendValueInput('TOOLTIP')
        .setCheck('String')
        .appendField('tooltip');
    this.appendValueInput('HELPURL')
        .setCheck('String')
        .appendField('help url');
    this.appendValueInput('COLOUR')
        .setCheck('Colour')
        .appendField('colour');
    this.setTooltip('Build a custom block by plugging\n' +
        'fields, inputs and other blocks here.');
    this.setHelpUrl(
        'https://developers.google.com/blockly/guides/create-custom-blocks/block-factory');
  },
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('connections', this.getFieldValue('CONNECTIONS'));
    return container;
  },
  domToMutation: function(xmlElement) {
    var connections = xmlElement.getAttribute('connections');
    this.updateShape_(connections);
  },
  spawnOutputShadow_: function(option) {
    // Helper method for deciding which type of outputs this block needs
    // to attach shadow blocks to.
    switch (option) {
      case 'LEFT':
        this.connectOutputShadow_('OUTPUTTYPE');
        break;
      case 'TOP':
        this.connectOutputShadow_('TOPTYPE');
        break;
      case 'BOTTOM':
        this.connectOutputShadow_('BOTTOMTYPE');
        break;
      case 'BOTH':
        this.connectOutputShadow_('TOPTYPE');
        this.connectOutputShadow_('BOTTOMTYPE');
        break;
    }
  },
  connectOutputShadow_: function(outputType) {
    // Helper method to create & connect shadow block.
    var type = this.workspace.newBlock('type_null');
    type.setShadow(true);
    type.outputConnection.connect(this.getInput(outputType).connection);
    if (this.rendered) {
      type.initSvg();
      type.render();
    }
  },
  updateShape_: function(option) {
    var outputExists = this.getInput('OUTPUTTYPE');
    var topExists = this.getInput('TOPTYPE');
    var bottomExists = this.getInput('BOTTOMTYPE');
    if (option === 'LEFT') {
      if (!outputExists) {
        this.addTypeInput_('OUTPUTTYPE', 'output type');
      }
    } else if (outputExists) {
      this.removeInput('OUTPUTTYPE');
    }
    if (option === 'TOP' || option === 'BOTH') {
      if (!topExists) {
        this.addTypeInput_('TOPTYPE', 'top type');
      }
    } else if (topExists) {
      this.removeInput('TOPTYPE');
    }
    if (option === 'BOTTOM' || option === 'BOTH') {
      if (!bottomExists) {
        this.addTypeInput_('BOTTOMTYPE', 'bottom type');
      }
    } else if (bottomExists) {
      this.removeInput('BOTTOMTYPE');
    }
  },
  addTypeInput_: function(name, label) {
    this.appendValueInput(name)
        .setCheck('Type')
        .appendField(label);
    this.moveInputBefore(name, 'COLOUR');
  }
};

var FIELD_MESSAGE = 'fields %1 %2';
var FIELD_ARGS = [
  {
    "type": "field_dropdown",
    "name": "ALIGN",
    "options": [['left', 'LEFT'], ['right', 'RIGHT'], ['centre', 'CENTRE']],
  },
  {
    "type": "input_statement",
    "name": "FIELDS",
    "check": "Field"
  }
];

var TYPE_MESSAGE = 'type %1';
var TYPE_ARGS = [
  {
    "type": "input_value",
    "name": "TYPE",
    "check": "Type",
    "align": "RIGHT"
  }
];

Blockly.Blocks['input_value'] = {
  // Value input.
  init: function() {
    this.jsonInit({
      "message0": "value input %1 %2",
      "args0": [
        {
          "type": "field_input",
          "name": "INPUTNAME",
          "text": "NAME"
        },
        {
          "type": "input_dummy"
        }
      ],
      "message1": FIELD_MESSAGE,
      "args1": FIELD_ARGS,
      "message2": TYPE_MESSAGE,
      "args2": TYPE_ARGS,
      "previousStatement": "Input",
      "nextStatement": "Input",
      "colour": 210,
      "tooltip": "A value socket for horizontal connections.",
      "helpUrl": "https://www.youtube.com/watch?v=s2_xaEvcVI0#t=71"
    });
  },
  onchange: function() {
    inputNameCheck(this);
  }
};
Blockly.Blocks['input_object'] = {
    // Statement input.
    init: function() {
        this.jsonInit({
            "message0": "statement input %1 %2",
            "args0": [
              {
                  "type": "field_input",
                  "name": "INPUTNAME",
                  "text": "NAME"
              },
              {
                  "type": "input_dummy"
              },
            ],
            "message1": FIELD_MESSAGE,
            "args1": FIELD_ARGS,
            "message2": TYPE_MESSAGE,
            "args2": TYPE_ARGS,
            "previousStatement": "Input",
            "nextStatement": "Input",
            "colour": 210,
            "tooltip": "A statement socket for enclosed vertical stacks.",
            "helpUrl": "https://www.youtube.com/watch?v=s2_xaEvcVI0#t=246"
        });
    },
    onchange: function() {
        inputNameCheck(this);
    }
};
Blockly.Blocks['properties_join'] = {
    // Statement object.
    init: function() {
        this.appendDummyInput()
              .appendField(new Blockly.FieldLabelSerializable("对象名"), "TEXT_NAME")
              .appendField(new Blockly.FieldTextInput("myObj"), "TEXT_INPUT");
        this.jsonInit({
        message0:"",
        output:"String",
        style:"text_blocks",
        tooltip:"该对象可以将各个属性组合在一起.",
        mutator:"text_join_mutator"
        });
    },
    onchange: function() {
        inputNameCheck(this);
    }
};

Blockly.Blocks['input_statement'] = {
  // Statement input.
  init: function() {
    this.jsonInit({        
        "message0": '属性1 %1%2',
        "args0": [
          {
              "type": "input_value",
              "name": "VALUE",
              "check": "String"
          }
        ],
        "message1": '属性2 %1%2',
        "args1": [
          {
              "type": "input_value",
              "name": "VALUE",
              "check": "String"
          }
        ],
        "message2": '属性3： %1',
        "args2": [
          {
              "type": "input_value",
              "name": "VALUE",
              "check": "String"
          }
        ],
        "output": "text",
        "colour": 160,
        "tooltip": "返回含属性值的对象.",
        "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    });
  },
  onchange: function() {
    inputNameCheck(this);
  }
};

Blockly.Blocks['input_dummy'] = {
  // Dummy input.
  init: function() {
    this.jsonInit({
      "message0": "dummy input",
      "message1": FIELD_MESSAGE,
      "args1": FIELD_ARGS,
      "previousStatement": "Input",
      "nextStatement": "Input",
      "colour": 210,
      "tooltip": "For adding fields without any block connections." +
                 "Alignment options (left, right, centre) only affect " +
                 "multi-row blocks.",
      "helpUrl": "https://www.youtube.com/watch?v=s2_xaEvcVI0#t=293"
    });
  }
};

Blockly.Blocks['input_end_row'] = {
  // End-row input.
  init: function() {
    this.jsonInit({
      "message0": "end-row input",
      "message1": FIELD_MESSAGE,
      "args1": FIELD_ARGS,
      "previousStatement": "Input",
      "nextStatement": "Input",
      "colour": 210,
      "tooltip": "For adding fields without any block connections that will " +
                 "be rendered on a separate row from any following inputs. " +
                 "Alignment options (left, right, centre) only affect " +
                 "multi-row blocks.",
      "helpUrl": "https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks#block_inputs"
    });
  }
};

Blockly.Blocks['field_static'] = {
  // Text value.
  init: function() {
    this.setColour(160);
    this.appendDummyInput('FIRST')
        .appendField('text')
        .appendField(new Blockly.FieldTextInput(''), 'TEXT');
    this.setPreviousStatement(true, 'Field');
    this.setNextStatement(true, 'Field');
    this.setTooltip('Static text that serves as a label.');
    this.setHelpUrl('https://www.youtube.com/watch?v=s2_xaEvcVI0#t=88');
  },
};

Blockly.Blocks['field_label_serializable'] = {
  // Text value that is saved to XML.
  init: function() {
    this.setColour(160);
    this.appendDummyInput('FIRST')
        .appendField('text')
        .appendField(new Blockly.FieldTextInput(''), 'TEXT')
        .appendField(',')
        .appendField(new Blockly.FieldTextInput('NAME'), 'FIELDNAME');
    this.setPreviousStatement(true, 'Field');
    this.setNextStatement(true, 'Field');
    this.setTooltip('Static text that serves as a label, and is saved to' +
      ' XML. Use only if you want to modify this label at runtime.');
    this.setHelpUrl('https://www.youtube.com/watch?v=s2_xaEvcVI0#t=88');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['field_input'] = {
  // Text input.
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendField('text input')
        .appendField(new Blockly.FieldTextInput('default'), 'TEXT')
        .appendField(',')
        .appendField(new Blockly.FieldTextInput('NAME'), 'FIELDNAME');
    this.setPreviousStatement(true, 'Field');
    this.setNextStatement(true, 'Field');
    this.setTooltip('An input field for the user to enter text.');
    this.setHelpUrl('https://www.youtube.com/watch?v=s2_xaEvcVI0#t=319');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['field_number'] = {
  // Numeric input.
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendField('numeric input')
        .appendField(new Blockly.FieldNumber(0), 'VALUE')
        .appendField(',')
        .appendField(new Blockly.FieldTextInput('NAME'), 'FIELDNAME');
    this.appendDummyInput()
        .appendField('min')
        .appendField(new Blockly.FieldNumber(-Infinity), 'MIN')
        .appendField('max')
        .appendField(new Blockly.FieldNumber(Infinity), 'MAX')
        .appendField('precision')
        .appendField(new Blockly.FieldNumber(0, 0), 'PRECISION');
    this.setPreviousStatement(true, 'Field');
    this.setNextStatement(true, 'Field');
    this.setTooltip('An input field for the user to enter a number.');
    this.setHelpUrl('https://www.youtube.com/watch?v=s2_xaEvcVI0#t=319');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['field_angle'] = {
  // Angle input.
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendField('angle input')
        .appendField(new Blockly.FieldAngle('90'), 'ANGLE')
        .appendField(',')
        .appendField(new Blockly.FieldTextInput('NAME'), 'FIELDNAME');
    this.setPreviousStatement(true, 'Field');
    this.setNextStatement(true, 'Field');
    this.setTooltip('An input field for the user to enter an angle.');
    this.setHelpUrl('https://www.youtube.com/watch?v=s2_xaEvcVI0#t=372');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};
Blockly.Blocks['imagestest'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("images/car.jpg",45,40,{ alt: "*", flipRtl: "FALSE" }));
    this.setColour(255);    
 this.setTooltip("");this.setOutput(true, null);
 this.setHelpUrl("");
  }
};
Blockly.Blocks['field_dropdown'] = {
  // Dropdown menu.
  init: function() {
    this.appendDummyInput()
        .appendField('dropdown')
        .appendField(new Blockly.FieldTextInput('NAME'), 'FIELDNAME');
    this.optionList_ = ['text', 'text', 'text'];
    this.updateShape_();
    this.setPreviousStatement(true, 'Field');
    this.setNextStatement(true, 'Field');
    this.setMutator(new Blockly.icons.MutatorIcon(
        ['field_dropdown_option_text', 'field_dropdown_option_image'], this));
    this.setColour(160);
    this.setTooltip('Dropdown menu with a list of options.');
    this.setHelpUrl('https://www.youtube.com/watch?v=s2_xaEvcVI0#t=386');
  },
  mutationToDom: function(workspace) {
    // Create XML to represent menu options.
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('options', JSON.stringify(this.optionList_));
    return container;
  },
  domToMutation: function(container) {
    // Parse XML to restore the menu options.
    var value = JSON.parse(container.getAttribute('options'));
    if (typeof value === 'number') {
      // Old format from before images were added.  November 2016.
      this.optionList_ = [];
      for (var i = 0; i < value; i++) {
        this.optionList_.push('text');
      }
    } else {
      this.optionList_ = value;
    }
    this.updateShape_();
  },
  decompose: function(workspace) {
    // Populate the mutator's dialog with this block's components.
    var containerBlock = workspace.newBlock('field_dropdown_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.optionList_.length; i++) {
      var optionBlock = workspace.newBlock(
          'field_dropdown_option_' + this.optionList_[i]);
      optionBlock.initSvg();
      connection.connect(optionBlock.previousConnection);
      connection = optionBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function(containerBlock) {
    // Reconfigure this block based on the mutator dialog's components.
    var optionBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    this.optionList_.length = 0;
    var data = [];
    while (optionBlock) {
      if (optionBlock.type === 'field_dropdown_option_text') {
        this.optionList_.push('text');
      } else if (optionBlock.type === 'field_dropdown_option_image') {
        this.optionList_.push('image');
      }
      data.push([optionBlock.userData_, optionBlock.cpuData_]);
      optionBlock = optionBlock.nextConnection &&
          optionBlock.nextConnection.targetBlock();
    }
    this.updateShape_();
    // Restore any data.
    for (var i = 0; i < this.optionList_.length; i++) {
      var userData = data[i][0];
      if (userData !== undefined) {
        if (typeof userData === 'string') {
          this.setFieldValue(userData || 'option', 'USER' + i);
        } else {
          this.setFieldValue(userData.src, 'SRC' + i);
          this.setFieldValue(userData.width, 'WIDTH' + i);
          this.setFieldValue(userData.height, 'HEIGHT' + i);
          this.setFieldValue(userData.alt, 'ALT' + i);
        }
        this.setFieldValue(data[i][1] || 'OPTIONNAME', 'CPU' + i);
      }
    }
  },
  saveConnections: function(containerBlock) {
    // Store all data for each option.
    var optionBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (optionBlock) {
      optionBlock.userData_ = this.getUserData(i);
      optionBlock.cpuData_ = this.getFieldValue('CPU' + i);
      i++;
      optionBlock = optionBlock.nextConnection &&
          optionBlock.nextConnection.targetBlock();
    }
  },
  updateShape_: function() {
    // Delete everything.
    var i = 0;
    while (this.getInput('OPTION' + i)) {
      this.removeInput('OPTION' + i);
      this.removeInput('OPTION_IMAGE' + i, true);
      i++;
    }
    // Rebuild block. 
    var src = 'https://www.gstatic.com/codesite/ph/images/star_on.gif';
    for (var i = 0; i <= this.optionList_.length; i++) {
      var type = this.optionList_[i];
      if (type === 'text') {
        this.appendDummyInput('OPTION' + i)
            .appendField('鈥?')
            .appendField(new Blockly.FieldTextInput('option'), 'USER' + i)
            .appendField(',')
            .appendField(new Blockly.FieldTextInput('OPTIONNAME'), 'CPU' + i);
      } else if (type === 'image') {
        this.appendDummyInput('OPTION' + i)
            .appendField('鈥?')
            .appendField('image')
            .appendField(new Blockly.FieldTextInput(src), 'SRC' + i);
        this.appendDummyInput('OPTION_IMAGE' + i)
            .appendField(' ')
            .appendField('width')
            .appendField(new Blockly.FieldNumber('15', 0, NaN, 1), 'WIDTH' + i)
            .appendField('height')
            .appendField(new Blockly.FieldNumber('15', 0, NaN, 1), 'HEIGHT' + i)
            .appendField('alt text')
            .appendField(new Blockly.FieldTextInput('*'), 'ALT' + i)
            .appendField(',')
            .appendField(new Blockly.FieldTextInput('OPTIONNAME'), 'CPU' + i);
      }
    }
  },
  onchange: function() {
    if (this.workspace && this.optionList_.length < 1) {
      this.setWarningText('Drop down menu must\nhave at least one option.');
    } else {
      fieldNameCheck(this);
    }
  },
  getUserData: function(n) {
    if (this.optionList_[n] === 'text') {
      return this.getFieldValue('USER' + n);
    }
    if (this.optionList_[n] === 'image') {
      return {
        src: this.getFieldValue('SRC' + n),
        width: Number(this.getFieldValue('WIDTH' + n)),
        height: Number(this.getFieldValue('HEIGHT' + n)),
        alt: this.getFieldValue('ALT' + n)
      };
    }
    throw 'Unknown dropdown type';
  }
};

Blockly.Blocks['field_dropdown_container'] = {
  // Container.
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendField('add options');
    this.appendStatementInput('STACK');
    this.setTooltip('Add, remove, or reorder options\n' +
                    'to reconfigure this dropdown menu.');
    this.setHelpUrl('https://www.youtube.com/watch?v=s2_xaEvcVI0#t=386');
    this.contextMenu = false;
  }
};

Blockly.Blocks['field_dropdown_option_text'] = {
  // Add text option.
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendField('文本类数据集')
        .appendField(new Blockly.FieldDropdown([
            ['none', 'none'],['datasets/text/1.csv', 'datasets/text/1.csv'],
        ['datasets/text/2.csv', 'datasets/text/2.csv'],
        ['datasets/text/3.csv', 'datasets/text/3.csv']
        ]), 'FIELDNAME');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('数据集存放在datasets下text文件夹中.');
    this.setHelpUrl('https://www.youtube.com/watch?v=s2_xaEvcVI0#t=386');
    this.contextMenu = false;
  }
};
Blockly.JavaScript['field_dropdown_option_text'] = function(block) {
    var text_text = block.getFieldValue('FIELDNAME');
    var code = text_text + '\n'; // 示例代码生成逻辑
    return code;
};

Blockly.Blocks['field_dropdown_option_image'] = {
  // Add image option.
  init: function() {
    this.setColour(160);
    var input = this.appendDummyInput()
        .appendField('图像类数据集');
    var options = [
        ['none', 'NONE'],
        [{'src': 'datasets/images/1.png', 'width': 50, 'height': 25, 'alt': 'Canada'}, 'datasets/images/1.png'],
        [{'src': 'datasets/images/2.png', 'width': 50, 'height': 25, 'alt': 'USA'}, 'datasets/images/2.png'],
        [{'src': 'datasets/images/3.png', 'width': 50, 'height': 25, 'alt': 'Mexico'}, 'datasets/images/3.png']
    ];
    input.appendField(new Blockly.FieldDropdown(options), 'FIELDNAME');
  
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('数据集存放在datasets下images文件夹中.');
    this.setHelpUrl('https://www.youtube.com/watch?v=s2_xaEvcVI0#t=386');
    this.contextMenu = false;
  }
};
Blockly.JavaScript['field_dropdown_option_image'] = function(block) {
    var text_text = block.getFieldValue('FIELDNAME');
    var code = text_text + '\n'; // 示例代码生成逻辑
    return code;
};

Blockly.Blocks['open_file'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("打开文件");
        this.setOutput(true, "String"); // 假设输出是文本类型
        this.setColour(230); // 设置颜色
        this.setTooltip(''); // 设置提示信息
        this.setHelpUrl(''); // 设置帮助链接
    }
};

Blockly.JavaScript['custom_object'] = function(block) {
    var objname = block.getFieldValue('objectname');
    var value='';
    var pname='';
    var str=objname+'.';
    for (var i=1; i<6; i=i+1) {
        pname=block.getFieldValue('name'+i);
        if (pname=='none'|| pname=='') break;
        value=value+str+pname+'='+block.getFieldValue('value'+i)+';\n';
    }
    for (var i=1; i<3; i=i+1) {
        pname=block.getFieldValue('funname'+i);
        if (pname=='none'|| pname=='') break;
        value=value+str+pname+'();\n';
    }
    //value=value+";\n";
    return value;
};
Blockly.Python['custom_object'] = function(block) {
    var objname = block.getFieldValue('objectname');
    var value='';
    var pname='';
    var str=objname+'.';
    for (var i=1; i<6; i=i+1) {
        pname=block.getFieldValue('name'+i);
        if (pname=='none'|| pname=='') break;
        value=value+str+pname+'='+block.getFieldValue('value'+i)+'\n';
    }
    for (var i=1; i<3; i=i+1) {
        pname=block.getFieldValue('funname'+i);
        if (pname=='none'|| pname=='') break;
        value=value+str+pname+'()\n';
    }
    
    return value;
}; 
Blockly.JavaScript['open_file'] = function(block) {
    var code = 'openFile(${block.getFieldValue("FILE")});'; // 假设你已经有了一个openFile函数定义在别处
    return [code, Blockly.JavaScript.ORDER_ATOMIC]; // 返回JavaScript代码和顺序类型
};
Blockly.Blocks['js_function_expression'] = {
    /**
     * Block for redering a function expression.
     * @this Blockly.Block
     */
    init: function() {
        this.setColour(290);
        this.appendDummyInput()
            .appendField("function");
        this.appendValueInput('NAME');
        this.appendValueInput('PARAM0')
            .appendField("(");
        this.appendDummyInput('END')
            .appendField(")");
        this.appendStatementInput('STACK');
        this.setInputsInline(true);

        this.setTooltip('Function expression.');


        this.setOutput(true); 
    }
};
Blockly.JavaScript['js_function_expression'] = function(block) {
    var branch = Blockly.JavaScript.statementToCode(block, 'STACK');
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var args = [];
    for (var i = 0; i < block.paramCount; i++) {
        args[i] = Blockly.JavaScript.valueToCode(block, 'PARAM' + i, Blockly.JavaScript.ORDER_ATOMIC);
    }
    var code = 'yak.' + name + '=' + 'function ' +  '(' + args.join(', ') + ') {\n' + branch + '}';
    if (block.outputConnection) {
        return [code, Blockly.JavaScript.ORDER_ATOMIC];
    } else {
        return code + ';\n';
    }
};

Blockly.Blocks['field_checkbox'] = {
  // Checkbox.
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendField('checkbox')
        .appendField(new Blockly.FieldCheckbox('TRUE'), 'CHECKED')
        .appendField(',')
        .appendField(new Blockly.FieldTextInput('NAME'), 'FIELDNAME');
    this.setPreviousStatement(true, 'Field');
    this.setNextStatement(true, 'Field');
    this.setTooltip('Checkbox field.');
    this.setHelpUrl('https://www.youtube.com/watch?v=s2_xaEvcVI0#t=485');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['field_colour'] = {
  // Colour input.
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendField('colour')
        .appendField(new Blockly.FieldColour('#ff0000'), 'COLOUR')
        .appendField(',')
        .appendField(new Blockly.FieldTextInput('NAME'), 'FIELDNAME');
    this.setPreviousStatement(true, 'Field');
    this.setNextStatement(true, 'Field');
    this.setTooltip('Colour input field.');
    this.setHelpUrl('https://www.youtube.com/watch?v=s2_xaEvcVI0#t=495');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['field_variable'] = {
  // Dropdown for variables.
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendField('variable')
        .appendField(new Blockly.FieldTextInput('item'), 'TEXT')
        .appendField(',')
        .appendField(new Blockly.FieldTextInput('NAME'), 'FIELDNAME');
    this.setPreviousStatement(true, 'Field');
    this.setNextStatement(true, 'Field');
    this.setTooltip('Dropdown menu for variable names.');
    this.setHelpUrl('https://www.youtube.com/watch?v=s2_xaEvcVI0#t=510');
  },
  onchange: function() {
    fieldNameCheck(this);
  }
};

Blockly.Blocks['field_image'] = {
  // Image.
  init: function() {
    this.setColour(160);
    var src = 'https://www.gstatic.com/codesite/ph/images/star_on.gif';
    this.appendDummyInput()
        .appendField('image')
        .appendField(new Blockly.FieldTextInput(src), 'SRC');
    this.appendDummyInput()
        .appendField('width')
        .appendField(new Blockly.FieldNumber('15', 0, NaN, 1), 'WIDTH')
        .appendField('height')
        .appendField(new Blockly.FieldNumber('15', 0, NaN, 1), 'HEIGHT')
        .appendField('alt text')
        .appendField(new Blockly.FieldTextInput('*'), 'ALT')
        .appendField('flip RTL')
        .appendField(new Blockly.FieldCheckbox('false'), 'FLIP_RTL');
    this.setPreviousStatement(true, 'Field');
    this.setNextStatement(true, 'Field');
    this.setTooltip('Static image (JPEG, PNG, GIF, SVG, BMP).\n' +
                    'Retains aspect ratio regardless of height and width.\n' +
                    'Alt text is for when collapsed.');
    this.setHelpUrl('https://www.youtube.com/watch?v=s2_xaEvcVI0#t=567');
  }
};

Blockly.Blocks['type_group'] = {
  // Group of types.
  init: function() {
    this.typeCount_ = 2;
    this.updateShape_();
    this.setOutput(true, 'Type');
    this.setMutator(new Blockly.icons.MutatorIcon(['type_group_item'], this));
    this.setColour(230);
    this.setTooltip('Allows more than one type to be accepted.');
    this.setHelpUrl('https://www.youtube.com/watch?v=s2_xaEvcVI0#t=677');
  },
  mutationToDom: function(workspace) {
    // Create XML to represent a group of types.
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('types', this.typeCount_);
    return container;
  },
  domToMutation: function(container) {
    // Parse XML to restore the group of types.
    this.typeCount_ = parseInt(container.getAttribute('types'), 10);
    this.updateShape_();
    for (var i = 0; i < this.typeCount_; i++) {
      this.removeInput('TYPE' + i);
    }
    for (var i = 0; i < this.typeCount_; i++) {
      var input = this.appendValueInput('TYPE' + i)
                      .setCheck('Type');
      if (i === 0) {
        input.appendField('any of');
      }
    }
  },
  decompose: function(workspace) {
    // Populate the mutator's dialog with this block's components.
    var containerBlock = workspace.newBlock('type_group_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.typeCount_; i++) {
      var typeBlock = workspace.newBlock('type_group_item');
      typeBlock.initSvg();
      connection.connect(typeBlock.previousConnection);
      connection = typeBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function(containerBlock) {
    // Reconfigure this block based on the mutator dialog's components.
    var typeBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    while (typeBlock) {
      connections.push(typeBlock.valueConnection_);
      typeBlock = typeBlock.nextConnection &&
          typeBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (var i = 0; i < this.typeCount_; i++) {
      var connection = this.getInput('TYPE' + i).connection.targetConnection;
      if (connection && !connections.includes(connection)) {
        connection.disconnect();
      }
    }
    this.typeCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.typeCount_; i++) {
      connections[i]?.reconnect(this, 'TYPE' + i);
    }
  },
  saveConnections: function(containerBlock) {
    // Store a pointer to any connected child blocks.
    var typeBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (typeBlock) {
      var input = this.getInput('TYPE' + i);
      typeBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      typeBlock = typeBlock.nextConnection &&
          typeBlock.nextConnection.targetBlock();
    }
  },
  updateShape_: function() {
    // Modify this block to have the correct number of inputs.
    // Add new inputs.
    for (var i = 0; i < this.typeCount_; i++) {
      if (!this.getInput('TYPE' + i)) {
        var input = this.appendValueInput('TYPE' + i);
        if (i === 0) {
          input.appendField('any of');
        }
      }
    }
    // Remove deleted inputs.
    while (this.getInput('TYPE' + i)) {
      this.removeInput('TYPE' + i);
      i++;
    }
  }
};

Blockly.Blocks['type_group_container'] = {
  // Container.
  init: function() {
    this.jsonInit({
      "message0": "add types %1 %2",
      "args0": [
        {"type": "input_dummy"},
        {"type": "input_statement", "name": "STACK"}
      ],
      "colour": 230,
      "tooltip": "Add, or remove allowed type.",
      "helpUrl": "https://www.youtube.com/watch?v=s2_xaEvcVI0#t=677"
    });
  }
};

Blockly.Blocks['type_group_item'] = {
  // Add type.
  init: function() {
    this.jsonInit({
      "message0": "type",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Add a new allowed type.",
      "helpUrl": "https://www.youtube.com/watch?v=s2_xaEvcVI0#t=677"
    });
  }
};

Blockly.Blocks['type_null'] = {
  // Null type.
  valueType: null,
  init: function() {
    this.jsonInit({
      "message0": "any",
      "output": "Type",
      "colour": 230,
      "tooltip": "Any type is allowed.",
      "helpUrl": "https://www.youtube.com/watch?v=s2_xaEvcVI0#t=602"
    });
  }
};

Blockly.Blocks['type_boolean'] = {
  // Boolean type.
  valueType: 'Boolean',
  init: function() {
    this.jsonInit({
      "message0": "Boolean",
      "output": "Type",
      "colour": 230,
      "tooltip": "Booleans (true/false) are allowed.",
      "helpUrl": "https://www.youtube.com/watch?v=s2_xaEvcVI0#t=602"
    });
  }
};

Blockly.Blocks['type_number'] = {
  // Number type.
  valueType: 'Number',
  init: function() {
    this.jsonInit({
      "message0": "Number",
      "output": "Type",
      "colour": 230,
      "tooltip": "Numbers (int/float) are allowed.",
      "helpUrl": "https://www.youtube.com/watch?v=s2_xaEvcVI0#t=602"
    });
  }
};

Blockly.Blocks['type_string'] = {
  // String type.
  valueType: 'String',
  init: function() {
    this.jsonInit({
      "message0": "String",
      "output": "Type",
      "colour": 230,
      "tooltip": "Strings (text) are allowed.",
      "helpUrl": "https://www.youtube.com/watch?v=s2_xaEvcVI0#t=602"
    });
  }
};

Blockly.Blocks['type_list'] = {
  // List type.
  valueType: 'Array',
  init: function() {
    this.jsonInit({
      "message0": "Array",
      "output": "Type",
      "colour": 230,
      "tooltip": "Arrays (lists) are allowed.",
      "helpUrl": "https://www.youtube.com/watch?v=s2_xaEvcVI0#t=602"
    });
  }
};

Blockly.Blocks['type_other'] = {
  // Other type.
  init: function() {
    this.jsonInit({
      "message0": "other %1",
      "args0": [{"type": "field_input", "name": "TYPE", "text": ""}],
      "output": "Type",
      "colour": 230,
      "tooltip": "Custom type to allow.",
      "helpUrl": "https://www.youtube.com/watch?v=s2_xaEvcVI0#t=702"
    });
  }
};

Blockly.Blocks['colour_hue'] = {
  // Set the colour of the block.
  init: function() {
    this.appendDummyInput()
        .appendField('hue:')
        .appendField(new Blockly.FieldAngle('0', this.validator), 'HUE');
    this.setOutput(true, 'Colour');
    this.setTooltip('Paint the block with this colour.');
    this.setHelpUrl('https://www.youtube.com/watch?v=s2_xaEvcVI0#t=55');
  },
  validator: function(text) {
    // Update the current block's colour to match.
    var hue = parseInt(text, 10);
    if (!isNaN(hue)) {
      this.getSourceBlock().setColour(hue);
    }
  },
  mutationToDom: function(workspace) {
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('colour', this.getColour());
    return container;
  },
  domToMutation: function(container) {
    this.setColour(container.getAttribute('colour'));
  }
};
Blockly.JavaScript['doStatement'] = function(block) {
    var text_text = block.getFieldValue('TEXT');
    var code = text_text + ';\n'; // 生成顺序结构的语句
    //var code = 'console.log("Hello, World!");\n'; // 直接添加控制台输出代码
    return code;
};

Blockly.Python['doStatement'] = function(block) {
    var text_text = block.getFieldValue('TEXT');
    var code = text_text + '\n'; // 生成顺序结构的语句
    return code;
};
Blockly.Blocks['doReady'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("数据集准备语句")
            .appendField(new Blockly.FieldTextInput("abc"), "TEXT");
        this.setTooltip('请输入要执行的数据集准备语句，这些语句将顺序执行.');
        this.setColour(80);
        this.setHelpUrl(''); 
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};
Blockly.JavaScript['doReady'] = function(block) {
    var text_text = block.getFieldValue('TEXT');
    var code = text_text + ';\n'; // 生成数据集准备语句
    return code;
};
Blockly.Blocks['SelectModel'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("模型选择语句")
            .appendField(new Blockly.FieldTextInput("abc"), "TEXT");
        this.setTooltip('请输入所选择的模型，模型所需要的包将自动生成.');
        this.setColour(100);
        this.setHelpUrl(''); 
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};
Blockly.JavaScript['SelectModel'] = function(block) {
    var text_text = block.getFieldValue('TEXT');
    var code = text_text + ';\n'; // 生成模型选择语句
    return code;
};
Blockly.Blocks['doTrain'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("执行训练语句")
            .appendField(new Blockly.FieldTextInput("abc"), "TEXT");
        this.setTooltip('请输入要执行的训练语句，这些语句将顺序执行.');
        this.setColour(140);
        this.setHelpUrl(''); 
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};
Blockly.JavaScript['doTrain'] = function(block) {
    var text_text = block.getFieldValue('TEXT');
    var code = text_text + ';\n'; // 生成训练语句
    return code;
};
Blockly.Blocks['doTest'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("执行测试语句")
            .appendField(new Blockly.FieldTextInput("abc"), "TEXT");
        this.setTooltip('请输入要执行的测试语句，这些语句将顺序执行.');
        this.setColour(220);
        this.setHelpUrl(''); 
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};
Blockly.JavaScript['doTest'] = function(block) {
    var text_text = block.getFieldValue('TEXT');
    var code = text_text + ';\n'; // 生成测试语句
    return code;
};
Blockly.Blocks['doOtherAI'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("执行其它AI语句")
            .appendField(new Blockly.FieldTextInput("abc"), "TEXT");
        this.setTooltip('请输入要执行的AI处理语句，这些语句将顺序执行.');
        this.setColour(240);
        this.setHelpUrl(''); 
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};
Blockly.JavaScript['doOtherAI'] = function(block) {
    var text_text = block.getFieldValue('TEXT');
    var code = text_text + ';\n'; // 生成AI处理语句
    return code;
};

//valueTocode(generator,'[\'comment\']','//','\n',block);// 示例代码生成逻辑
//function valueTocode(generator,type,beforStr,afterStr,block){
//       eval('Blockly.'+generator+type+'='+beforStr+block.getFieldValue('TEXT')+afterStr);
//}
Blockly.JavaScript['textcomment'] = function(block) {
    var text_text = block.getFieldValue('TEXT');
    var code = '//' + text_text + ''; // 示例代码生成逻辑
    return code;
};
Blockly.Python['textcomment'] = function(block) {
    var text_text = block.getFieldValue('TEXT');
    var code = '//' + text_text + ''; // 示例代码生成逻辑
    return code;
};

/**
 * Check to see if more than one field has this name.
 * Highly inefficient (On^2), but n is small.
 * @param {!Blockly.Block} referenceBlock Block to check.
 */
function fieldNameCheck(referenceBlock) {
  if (!referenceBlock.workspace) {
    // Block has been deleted.
    return;
  }
  var name = referenceBlock.getFieldValue('FIELDNAME').toLowerCase();
  var count = 0;
  var blocks = referenceBlock.workspace.getAllBlocks(false);
  for (var i = 0, block; block = blocks[i]; i++) {
    var otherName = block.getFieldValue('FIELDNAME');
    if (block.isEnabled() && !block.getInheritedDisabled() &&
        otherName && otherName.toLowerCase() === name) {
      count++;
    }
  }
  var msg = (count > 1) ?
      'There are ' + count + ' field blocks\n with this name.' : null;
  referenceBlock.setWarningText(msg);
}

/**
 * Check to see if more than one input has this name.
 * Highly inefficient (On^2), but n is small.
 * @param {!Blockly.Block} referenceBlock Block to check.
 */
function inputNameCheck(referenceBlock) {
  if (!referenceBlock.workspace) {
    // Block has been deleted.
    return;
  }
  var name = referenceBlock.getFieldValue('INPUTNAME').toLowerCase();
  var count = 0;
  var blocks = referenceBlock.workspace.getAllBlocks(false);
  for (var i = 0, block; block = blocks[i]; i++) {
    var otherName = block.getFieldValue('INPUTNAME');
    if (block.isEnabled() && !block.getInheritedDisabled() &&
        otherName && otherName.toLowerCase() === name) {
      count++;
    }
  }
  var msg = (count > 1) ?
      'There are ' + count + ' input blocks\n with this name.' : null;
  referenceBlock.setWarningText(msg);
}

// Make a set of all of block types that are required for the block factory.
var reservedBlockFactoryBlocks =
    new Set(Object.getOwnPropertyNames(Blockly.Blocks));
