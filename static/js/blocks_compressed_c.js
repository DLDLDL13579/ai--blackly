"use strict";
Blockly.Blocks.colour = {}; Blockly.Blocks.colour_picker = { init: function () { this.setHelpUrl(Blockly.Msg.COLOUR_PICKER_HELPURL); this.setColour(20); this.appendDummyInput().appendField(new Blockly.FieldColour("#ff0000"), "COLOUR"); this.setOutput(!0, "Colour"); this.setTooltip(Blockly.Msg.COLOUR_PICKER_TOOLTIP) } };
Blockly.Blocks.colour_random = { init: function () { this.setHelpUrl(Blockly.Msg.COLOUR_RANDOM_HELPURL); this.setColour(20); this.appendDummyInput().appendField(Blockly.Msg.COLOUR_RANDOM_TITLE); this.setOutput(!0, "Colour"); this.setTooltip(Blockly.Msg.COLOUR_RANDOM_TOOLTIP) } };
Blockly.Blocks.colour_rgb = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.COLOUR_RGB_HELPURL); this.setColour(20); this.appendValueInput("RED").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_RGB_TITLE).appendField(Blockly.Msg.COLOUR_RGB_RED); this.appendValueInput("GREEN").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_RGB_GREEN); this.appendValueInput("BLUE").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_RGB_BLUE);
        this.setOutput(!0, "Colour"); this.setTooltip(Blockly.Msg.COLOUR_RGB_TOOLTIP)
    }
};
Blockly.Blocks.colour_blend = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.COLOUR_BLEND_HELPURL); this.setColour(20); this.appendValueInput("COLOUR1").setCheck("Colour").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_BLEND_TITLE).appendField(Blockly.Msg.COLOUR_BLEND_COLOUR1); this.appendValueInput("COLOUR2").setCheck("Colour").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_BLEND_COLOUR2); this.appendValueInput("RATIO").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.COLOUR_BLEND_RATIO); this.setOutput(!0,
            "Colour"); this.setTooltip(Blockly.Msg.COLOUR_BLEND_TOOLTIP)
    }
};
Blockly.Blocks.lists = {}; Blockly.Blocks.lists_create_empty = { init: function () { this.setHelpUrl(Blockly.Msg.LISTS_CREATE_EMPTY_HELPURL); this.setColour(260); this.setOutput(!0, "Array"); this.appendDummyInput().appendField(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE); this.setTooltip(Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP) } };
Blockly.Blocks.lists_create_with = {
    init: function () { this.setColour(260); this.appendValueInput("ADD0").appendField(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH); this.appendValueInput("ADD1"); this.appendValueInput("ADD2"); this.setOutput(!0, "Array"); this.setMutator(new Blockly.Mutator(["lists_create_with_item"])); this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP); this.itemCount_ = 3 }, mutationToDom: function () { var a = document.createElement("mutation"); a.setAttribute("items", this.itemCount_); return a }, domToMutation: function (a) {
        for (var b =
            0; b < this.itemCount_; b++)this.removeInput("ADD" + b); this.itemCount_ = parseInt(a.getAttribute("items"), 10); for (b = 0; b < this.itemCount_; b++)a = this.appendValueInput("ADD" + b), 0 == b && a.appendField(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH); 0 == this.itemCount_ && this.appendDummyInput("EMPTY").appendField(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE)
    }, decompose: function (a) {
        var b = Blockly.Block.obtain(a, "lists_create_with_container"); b.initSvg(); for (var c = b.getInput("STACK").connection, e = 0; e < this.itemCount_; e++) {
            var d = Blockly.Block.obtain(a,
                "lists_create_with_item"); d.initSvg(); c.connect(d.previousConnection); c = d.nextConnection
        } return b
    }, compose: function (a) {
        if (0 == this.itemCount_) this.removeInput("EMPTY"); else for (var b = this.itemCount_ - 1; 0 <= b; b--)this.removeInput("ADD" + b); this.itemCount_ = 0; for (a = a.getInputTargetBlock("STACK"); a;)b = this.appendValueInput("ADD" + this.itemCount_), 0 == this.itemCount_ && b.appendField(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH), a.valueConnection_ && b.connection.connect(a.valueConnection_), this.itemCount_++, a = a.nextConnection &&
            a.nextConnection.targetBlock(); 0 == this.itemCount_ && this.appendDummyInput("EMPTY").appendField(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE)
    }, saveConnections: function (a) { a = a.getInputTargetBlock("STACK"); for (var b = 0; a;) { var c = this.getInput("ADD" + b); a.valueConnection_ = c && c.connection.targetConnection; b++; a = a.nextConnection && a.nextConnection.targetBlock() } }
};
Blockly.Blocks.lists_create_with_container = { init: function () { this.setColour(260); this.appendDummyInput().appendField(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD); this.appendStatementInput("STACK"); this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP); this.contextMenu = !1 } };
Blockly.Blocks.lists_create_with_item = { init: function () { this.setColour(260); this.appendDummyInput().appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP); this.contextMenu = !1 } };
Blockly.Blocks.lists_repeat = { init: function () { this.setHelpUrl(Blockly.Msg.LISTS_REPEAT_HELPURL); this.setColour(260); this.setOutput(!0, "Array"); this.interpolateMsg(Blockly.Msg.LISTS_REPEAT_TITLE, ["ITEM", null, Blockly.ALIGN_RIGHT], ["NUM", "Number", Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setTooltip(Blockly.Msg.LISTS_REPEAT_TOOLTIP) } };
Blockly.Blocks.lists_length = { init: function () { this.setHelpUrl(Blockly.Msg.LISTS_LENGTH_HELPURL); this.setColour(260); this.interpolateMsg(Blockly.Msg.LISTS_LENGTH_TITLE, ["VALUE", ["Array", "String"], Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setOutput(!0, "Number"); this.setTooltip(Blockly.Msg.LISTS_LENGTH_TOOLTIP) } };
Blockly.Blocks.lists_isEmpty = { init: function () { this.setHelpUrl(Blockly.Msg.LISTS_IS_EMPTY_HELPURL); this.setColour(260); this.interpolateMsg(Blockly.Msg.LISTS_IS_EMPTY_TITLE, ["VALUE", ["Array", "String"], Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setInputsInline(!0); this.setOutput(!0, "Boolean"); this.setTooltip(Blockly.Msg.LISTS_TOOLTIP) } };
Blockly.Blocks.lists_indexOf = { init: function () { var a = [[Blockly.Msg.LISTS_INDEX_OF_FIRST, "FIRST"], [Blockly.Msg.LISTS_INDEX_OF_LAST, "LAST"]]; this.setHelpUrl(Blockly.Msg.LISTS_INDEX_OF_HELPURL); this.setColour(260); this.setOutput(!0, "Number"); this.appendValueInput("VALUE").setCheck("Array").appendField(Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST); this.appendValueInput("FIND").appendField(new Blockly.FieldDropdown(a), "END"); this.setInputsInline(!0); this.setTooltip(Blockly.Msg.LISTS_INDEX_OF_TOOLTIP) } };
Blockly.Blocks.lists_getIndex = {
    init: function () {
        var a = [[Blockly.Msg.LISTS_GET_INDEX_GET, "GET"], [Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE, "GET_REMOVE"], [Blockly.Msg.LISTS_GET_INDEX_REMOVE, "REMOVE"]]; this.WHERE_OPTIONS = [[Blockly.Msg.LISTS_GET_INDEX_FROM_START, "FROM_START"], [Blockly.Msg.LISTS_GET_INDEX_FROM_END, "FROM_END"], [Blockly.Msg.LISTS_GET_INDEX_FIRST, "FIRST"], [Blockly.Msg.LISTS_GET_INDEX_LAST, "LAST"], [Blockly.Msg.LISTS_GET_INDEX_RANDOM, "RANDOM"]]; this.setHelpUrl(Blockly.Msg.LISTS_GET_INDEX_HELPURL);
        this.setColour(260); a = new Blockly.FieldDropdown(a, function (a) { this.sourceBlock_.updateStatement_("REMOVE" == a) }); this.appendValueInput("VALUE").setCheck("Array").appendField(Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST); this.appendDummyInput().appendField(a, "MODE").appendField("", "SPACE"); this.appendDummyInput("AT"); Blockly.Msg.LISTS_GET_INDEX_TAIL && this.appendDummyInput("TAIL").appendField(Blockly.Msg.LISTS_GET_INDEX_TAIL); this.setInputsInline(!0); this.setOutput(!0); this.updateAt_(!0); var b = this; this.setTooltip(function () {
            var a =
                b.getFieldValue("MODE") + "_" + b.getFieldValue("WHERE"); return Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_" + a]
        })
    }, mutationToDom: function () { var a = document.createElement("mutation"); a.setAttribute("statement", !this.outputConnection); var b = this.getInput("AT").type == Blockly.INPUT_VALUE; a.setAttribute("at", b); return a }, domToMutation: function (a) { var b = "true" == a.getAttribute("statement"); this.updateStatement_(b); a = "false" != a.getAttribute("at"); this.updateAt_(a) }, updateStatement_: function (a) {
        a != !this.outputConnection &&
        (this.unplug(!0, !0), a ? (this.setOutput(!1), this.setPreviousStatement(!0), this.setNextStatement(!0)) : (this.setPreviousStatement(!1), this.setNextStatement(!1), this.setOutput(!0)))
    }, updateAt_: function (a) {
        this.removeInput("AT"); this.removeInput("ORDINAL", !0); a ? (this.appendValueInput("AT").setCheck("Number"), Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL").appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) : this.appendDummyInput("AT"); var b = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function (b) {
            var e =
                "FROM_START" == b || "FROM_END" == b; if (e != a) { var d = this.sourceBlock_; d.updateAt_(e); d.setFieldValue(b, "WHERE"); return null }
        }); this.getInput("AT").appendField(b, "WHERE"); Blockly.Msg.LISTS_GET_INDEX_TAIL && this.moveInputBefore("TAIL", null)
    }
};
Blockly.Blocks.lists_setIndex = {
    init: function () {
        var a = [[Blockly.Msg.LISTS_SET_INDEX_SET, "SET"], [Blockly.Msg.LISTS_SET_INDEX_INSERT, "INSERT"]]; this.WHERE_OPTIONS = [[Blockly.Msg.LISTS_GET_INDEX_FROM_START, "FROM_START"], [Blockly.Msg.LISTS_GET_INDEX_FROM_END, "FROM_END"], [Blockly.Msg.LISTS_GET_INDEX_FIRST, "FIRST"], [Blockly.Msg.LISTS_GET_INDEX_LAST, "LAST"], [Blockly.Msg.LISTS_GET_INDEX_RANDOM, "RANDOM"]]; this.setHelpUrl(Blockly.Msg.LISTS_SET_INDEX_HELPURL); this.setColour(260); this.appendValueInput("LIST").setCheck("Array").appendField(Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST);
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(a), "MODE").appendField("", "SPACE"); this.appendDummyInput("AT"); this.appendValueInput("TO").appendField(Blockly.Msg.LISTS_SET_INDEX_INPUT_TO); this.setInputsInline(!0); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.LISTS_SET_INDEX_TOOLTIP); this.updateAt_(!0); var b = this; this.setTooltip(function () { var a = b.getFieldValue("MODE") + "_" + b.getFieldValue("WHERE"); return Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_" + a] })
    },
    mutationToDom: function () { var a = document.createElement("mutation"), b = this.getInput("AT").type == Blockly.INPUT_VALUE; a.setAttribute("at", b); return a }, domToMutation: function (a) { a = "false" != a.getAttribute("at"); this.updateAt_(a) }, updateAt_: function (a) {
        this.removeInput("AT"); this.removeInput("ORDINAL", !0); a ? (this.appendValueInput("AT").setCheck("Number"), Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL").appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) : this.appendDummyInput("AT"); var b = new Blockly.FieldDropdown(this.WHERE_OPTIONS,
            function (b) { var e = "FROM_START" == b || "FROM_END" == b; if (e != a) { var d = this.sourceBlock_; d.updateAt_(e); d.setFieldValue(b, "WHERE"); return null } }); this.moveInputBefore("AT", "TO"); this.getInput("ORDINAL") && this.moveInputBefore("ORDINAL", "TO"); this.getInput("AT").appendField(b, "WHERE")
    }
};
Blockly.Blocks.lists_getSublist = {
    init: function () {
        this.WHERE_OPTIONS_1 = [[Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START, "FROM_START"], [Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END, "FROM_END"], [Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST, "FIRST"]]; this.WHERE_OPTIONS_2 = [[Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START, "FROM_START"], [Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END, "FROM_END"], [Blockly.Msg.LISTS_GET_SUBLIST_END_LAST, "LAST"]]; this.setHelpUrl(Blockly.Msg.LISTS_GET_SUBLIST_HELPURL); this.setColour(260);
        this.appendValueInput("LIST").setCheck("Array").appendField(Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST); this.appendDummyInput("AT1"); this.appendDummyInput("AT2"); Blockly.Msg.LISTS_GET_SUBLIST_TAIL && this.appendDummyInput("TAIL").appendField(Blockly.Msg.LISTS_GET_SUBLIST_TAIL); this.setInputsInline(!0); this.setOutput(!0, "Array"); this.updateAt_(1, !0); this.updateAt_(2, !0); this.setTooltip(Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP)
    }, mutationToDom: function () {
        var a = document.createElement("mutation"), b = this.getInput("AT1").type ==
            Blockly.INPUT_VALUE; a.setAttribute("at1", b); b = this.getInput("AT2").type == Blockly.INPUT_VALUE; a.setAttribute("at2", b); return a
    }, domToMutation: function (a) { var b = "true" == a.getAttribute("at1"); a = "true" == a.getAttribute("at2"); this.updateAt_(1, b); this.updateAt_(2, a) }, updateAt_: function (a, b) {
        this.removeInput("AT" + a); this.removeInput("ORDINAL" + a, !0); b ? (this.appendValueInput("AT" + a).setCheck("Number"), Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL" + a).appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) :
            this.appendDummyInput("AT" + a); var c = new Blockly.FieldDropdown(this["WHERE_OPTIONS_" + a], function (c) { var d = "FROM_START" == c || "FROM_END" == c; if (d != b) { var g = this.sourceBlock_; g.updateAt_(a, d); g.setFieldValue(c, "WHERE" + a); return null } }); this.getInput("AT" + a).appendField(c, "WHERE" + a); 1 == a && (this.moveInputBefore("AT1", "AT2"), this.getInput("ORDINAL1") && this.moveInputBefore("ORDINAL1", "AT2")); Blockly.Msg.LISTS_GET_SUBLIST_TAIL && this.moveInputBefore("TAIL", null)
    }
};
Blockly.Blocks.logic = {};
Blockly.Blocks.controls_if = {
    init: function () {
        this.setColour(200); this.appendValueInput("IF0").setCheck("Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_FLOAT VAR_DOUBLE Aster Boolean".split(" ")).appendField(Blockly.Msg.CONTROLS_IF_MSG_IF); this.appendStatementInput("DO0").appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setMutator(new Blockly.Mutator(["controls_if_elseif", "controls_if_else"])); var a = this; this.setTooltip(function () {
            if (a.elseifCount_ || a.elseCount_) {
                if (!a.elseifCount_ &&
                    a.elseCount_) return Blockly.Msg.CONTROLS_IF_TOOLTIP_2; if (a.elseifCount_ && !a.elseCount_) return Blockly.Msg.CONTROLS_IF_TOOLTIP_3; if (a.elseifCount_ && a.elseCount_) return Blockly.Msg.CONTROLS_IF_TOOLTIP_4
            } else return Blockly.Msg.CONTROLS_IF_TOOLTIP_1; return ""
        }); this.elseCount_ = this.elseifCount_ = 0; this.tag = Blockly.Msg.TAG_LOGIC_IF
    }, mutationToDom: function () {
        if (!this.elseifCount_ && !this.elseCount_) return null; var a = document.createElement("mutation"); this.elseifCount_ && a.setAttribute("elseif", this.elseifCount_);
        this.elseCount_ && a.setAttribute("else", 1); return a
    }, domToMutation: function (a) {
        this.elseifCount_ = parseInt(a.getAttribute("elseif"), 10); this.elseCount_ = parseInt(a.getAttribute("else"), 10); for (a = 1; a <= this.elseifCount_; a++)this.appendValueInput("IF" + a).setCheck("Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_FLOAT VAR_DOUBLE Aster Boolean".split(" ")).appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF), this.appendStatementInput("DO" + a).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN); this.elseCount_ &&
            this.appendStatementInput("ELSE").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE)
    }, decompose: function (a) { var b = Blockly.Block.obtain(a, "controls_if_if"); b.initSvg(); for (var c = b.getInput("STACK").connection, e = 1; e <= this.elseifCount_; e++) { var d = Blockly.Block.obtain(a, "controls_if_elseif"); d.initSvg(); c.connect(d.previousConnection); c = d.nextConnection } this.elseCount_ && (a = Blockly.Block.obtain(a, "controls_if_else"), a.initSvg(), c.connect(a.previousConnection)); return b }, compose: function (a) {
        this.elseCount_ &&
        this.removeInput("ELSE"); this.elseCount_ = 0; for (var b = this.elseifCount_; 0 < b; b--)this.removeInput("IF" + b), this.removeInput("DO" + b); this.elseifCount_ = 0; for (a = a.getInputTargetBlock("STACK"); a;) {
            switch (a.type) {
                case "controls_if_elseif": this.elseifCount_++; var b = this.appendValueInput("IF" + this.elseifCount_).setCheck("Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_FLOAT VAR_DOUBLE Aster Boolean".split(" ")).appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF), c = this.appendStatementInput("DO" + this.elseifCount_);
                    c.appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN); a.valueConnection_ && b.connection.connect(a.valueConnection_); a.statementConnection_ && c.connection.connect(a.statementConnection_); break; case "controls_if_else": this.elseCount_++; b = this.appendStatementInput("ELSE"); b.appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE); a.statementConnection_ && b.connection.connect(a.statementConnection_); break; default: throw "Unknown block type.";
            }a = a.nextConnection && a.nextConnection.targetBlock()
        }
    }, saveConnections: function (a) {
        a =
        a.getInputTargetBlock("STACK"); for (var b = 1; a;) { switch (a.type) { case "controls_if_elseif": var c = this.getInput("IF" + b), e = this.getInput("DO" + b); a.valueConnection_ = c && c.connection.targetConnection; a.statementConnection_ = e && e.connection.targetConnection; b++; break; case "controls_if_else": e = this.getInput("ELSE"); a.statementConnection_ = e && e.connection.targetConnection; break; default: throw "Unknown block type."; }a = a.nextConnection && a.nextConnection.targetBlock() }
    }, onchange: Blockly.Blocks.requireInFunction
};
Blockly.Blocks.controls_if_if = { init: function () { this.setColour(200); this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_IF_IF_TITLE_IF); this.appendStatementInput("STACK"); this.setTooltip(Blockly.Msg.CONTROLS_IF_IF_TOOLTIP); this.contextMenu = !1 } };
Blockly.Blocks.controls_if_elseif = { init: function () { this.setColour(200); this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP); this.contextMenu = !1 } };
Blockly.Blocks.controls_if_else = { init: function () { this.setColour(200); this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE); this.setPreviousStatement(!0); this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP); this.contextMenu = !1 } };
Blockly.Blocks.logic_compare = {
    init: function () {
        var a = Blockly.RTL ? [["=", "EQ"], ["\u2260", "NEQ"], [">", "LT"], ["\u2265", "LTE"], ["<", "GT"], ["\u2264", "GTE"]] : [["=", "EQ"], ["\u2260", "NEQ"], ["<", "LT"], ["\u2264", "LTE"], [">", "GT"], ["\u2265", "GTE"]]; this.setColour(200); this.setOutput(!0, "Boolean"); this.appendValueInput("A"); this.appendValueInput("B").appendField(new Blockly.FieldDropdown(a), "OP"); this.setInputsInline(!0); var b = this; this.setTooltip(function () {
            var a = b.getFieldValue("OP"); return {
                EQ: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ,
                NEQ: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ, LT: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT, LTE: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE, GT: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT, GTE: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE
            }[a]
        }); this.tag = Blockly.Msg.TAG_LOGIC_COMPARE
    }, onchange: Blockly.Blocks.requireInFunction
};
Blockly.Blocks.logic_operation = {
    init: function () { var a = [[Blockly.Msg.LOGIC_OPERATION_AND, "AND"], [Blockly.Msg.LOGIC_OPERATION_OR, "OR"]]; this.setColour(200); this.setOutput(!0, "Boolean"); this.appendValueInput("A"); this.appendValueInput("B").appendField(new Blockly.FieldDropdown(a), "OP"); this.setInputsInline(!0); var b = this; this.setTooltip(function () { var a = b.getFieldValue("OP"); return { AND: Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND, OR: Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR }[a] }); this.tag = Blockly.Msg.TAG_LOGIC_OPERATION },
    onchange: Blockly.Blocks.requireInFunction
};

Blockly.Blocks.logic_negate = { init: function () { this.setColour(200); this.setOutput(!0, "Boolean"); this.interpolateMsg(Blockly.Msg.LOGIC_NEGATE_TITLE, ["BOOL", ["Boolean", "Variable", "VAR_INT", "VAR_UNINT", "Number", "NEGATIVE", "INT"], Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setTooltip(Blockly.Msg.LOGIC_NEGATE_TOOLTIP); this.tag = Blockly.Msg.TAG_LOGIC_NEGATE }, onchange: Blockly.Blocks.requireInFunction };

Blockly.Blocks.logic_boolean = { init: function () { var a = [[Blockly.Msg.LOGIC_BOOLEAN_TRUE, "TRUE"], [Blockly.Msg.LOGIC_BOOLEAN_FALSE, "FALSE"]]; this.setColour(200); this.setOutput(!0, "Boolean"); this.appendDummyInput().appendField(new Blockly.FieldDropdown(a), "BOOL"); this.setTooltip(Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP); this.tag = Blockly.Msg.TAG_LOGIC_BOOLEAN }, onchange: Blockly.Blocks.requireInFunction };
Blockly.Blocks.logic_null = { init: function () { this.setColour(200); this.setOutput(!0); this.appendDummyInput().appendField(Blockly.Msg.LOGIC_NULL); this.setTooltip(Blockly.Msg.LOGIC_NULL_TOOLTIP); this.tag = Blockly.Msg.TAG_LOGIC_NULL }, onchange: Blockly.Blocks.requireInFunction };
Blockly.Blocks.logic_ternary = { init: function () { this.setColour(200); this.appendValueInput("IF").appendField(Blockly.Msg.LOGIC_TERNARY_CONDITION); this.appendValueInput("THEN").appendField(Blockly.Msg.LOGIC_TERNARY_IF_TRUE); this.appendValueInput("ELSE").appendField(Blockly.Msg.LOGIC_TERNARY_IF_FALSE); this.setOutput(!0); this.setTooltip(Blockly.Msg.LOGIC_TERNARY_TOOLTIP); this.tag = Blockly.Msg.TAG_LOGIC_TERNARY }, onchange: Blockly.Blocks.requireInFunction };

Blockly.Blocks.controls_switch = {
    init: function () {
        this.setColour(200); this.appendValueInput("SWITCH").appendField(Blockly.Msg.CONTROLS_SWITCH); this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_SWITCH_DEFAULT); this.appendStatementInput("DEFAULT").appendField(Blockly.Msg.CONTROLS_SWITCH_DO); this.appendValueInput("CASE0").setCheck(["Number", "INT", "UNINT", "NEGATIVE", "CHAR"]).appendField(Blockly.Msg.CONTROLS_SWITCH_CASE); this.appendStatementInput("DO0").appendField(Blockly.Msg.CONTROLS_SWITCH_DO);
        this.setPreviousStatement(!0); this.setNextStatement(!0); this.setMutator(new Blockly.Mutator(["controls_switch_case"])); var a = this; this.tag = Blockly.Msg.TAG_LOGIC_SWITCH; this.setTooltip(function () { if (a.caseCount_) if (a.caseCount_) { if (a.caseCount_) return Blockly.Msg.CONTROLS_SWITCH_TOOLTIP3; if (a.caseCount_) return Blockly.Msg.CONTROLS_SWITCH_TOOLTIP4 } else return Blockly.Msg.CONTROLS_SWITCH_TOOLTIP2; else return Blockly.Msg.CONTROLS_SWITCH_TOOLTIP1; return "" }); this.caseCount_ = 0
    }, mutationToDom: function () {
        if (!this.caseCount_) return null;
        var a = document.createElement("mutation"); this.caseCount_ && a.setAttribute("case", this.caseCount_); return a
    }, domToMutation: function (a) { this.caseCount_ = parseInt(a.getAttribute("case"), 10); for (a = 1; a <= this.caseCount_; a++)this.appendValueInput("CASE" + a).appendField(Blockly.Msg.CONTROLS_SWITCH_CASE), this.appendStatementInput("DO" + a).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN) }, decompose: function (a) {
        var b = Blockly.Block.obtain(a, "controls_switch_switch"); b.initSvg(); for (var c = b.getInput("STACK").connection,
            d = 1; d <= this.caseCount_; d++) { var e = Blockly.Block.obtain(a, "controls_switch_case"); e.initSvg(); c.connect(e.previousConnection); c = e.nextConnection } return b
    }, compose: function (a) {
        for (var b = this.caseCount_; 0 < b; b--)this.removeInput("CASE" + b), this.removeInput("DO" + b); this.caseCount_ = 0; for (a = a.getInputTargetBlock("STACK"); a;) {
            switch (a.type) {
                case "controls_switch_case": this.caseCount_++; b = this.appendValueInput("CASE" + this.caseCount_).setCheck(["Number", "INT", "UNINT", "NEGATIVE", "CHAR"]).appendField(Blockly.Msg.CONTROLS_SWITCH_CASE);
                    var c = this.appendStatementInput("DO" + this.caseCount_); c.appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN); a.valueConnection_ && b.connection.connect(a.valueConnection_); a.statementConnection_ && c.connection.connect(a.statementConnection_); break; default: throw "Unknown block type.";
            }a = a.nextConnection && a.nextConnection.targetBlock()
        }
    }, saveConnections: function (a) {
        a = a.getInputTargetBlock("STACK"); for (var b = 1; a;) {
            switch (a.type) {
                case "controls_switch_case": var c = this.getInput("CASE" + b), d = this.getInput("DO" + b);
                    a.valueConnection_ = c && c.connection.targetConnection; a.statementConnection_ = d && d.connection.targetConnection; b++; break; default: throw "Unknown block type.";
            }a = a.nextConnection && a.nextConnection.targetBlock()
        }
    }, onchange: Blockly.Blocks.requireInFunction
};
Blockly.Blocks.controls_switch_switch = { init: function () { this.setColour(200); this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_SWITCH_CASE); this.appendStatementInput("STACK"); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.CONTROLS_SWITCH_CASE_TOOLTIP); this.contextMenu = !1 } };
Blockly.Blocks.controls_switch_case = { init: function () { this.setColour(200); this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_SWITCH_CASE); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.CONTROLS_SWITCH_CASE_TOOLTIP); this.contextMenu = !1 } };

Blockly.Blocks.controls_switch_break = { init: function () { this.setColour(200); this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_SWITCH_BREAK); this.setPreviousStatement(!0); this.tag = Blockly.Msg.TAG_LOOP_FLOW; this.setTooltip(Blockly.Msg.CONTROLS_SWITCH_BREAK_TOOLTIP) }, onchange: function () { if (this.workspace) { var a = !1, b = this; do { if ("controls_switch" == b.type) { a = !0; break } b = b.getSurroundParent() } while (b); a ? this.setWarningText(null) : this.setWarningText(Blockly.Msg.CONTROLS_SWITCH_BREAK_WARNING) } } };
Blockly.Blocks.loops = {};
Blockly.Blocks.controls_whileUntil = {
    init: function () {
        var a = [[Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE, "WHILE"], [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL, "UNTIL"]]; this.setColour(220); this.appendValueInput("BOOL").setCheck(["Boolean", "Number", "INT", "VAR_INT"]).appendField(new Blockly.FieldDropdown(a), "MODE"); this.appendStatementInput("DO").appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO); this.setPreviousStatement(!0); this.setNextStatement(!0); var b = this; this.tag = Blockly.Msg.TAG_LOOP_WHILE;
        this.setTooltip(function () { var a = b.getFieldValue("MODE"); return { WHILE: Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE, UNTIL: Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL }[a] })
    }, onchange: Blockly.Blocks.requireInFunction
};
Blockly.Blocks.controls_doWhile = {
    init: function () {
        var a = [[Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE, "WHILE"], [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL, "UNTIL"]]; this.setColour(220); this.appendStatementInput("DO").appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO); this.appendValueInput("BOOL").setCheck(["Boolean", "Number", "INT", "VAR_INT"]).appendField(new Blockly.FieldDropdown(a), "MODE"); this.setPreviousStatement(!0); this.setNextStatement(!0); var b = this; this.tag = Blockly.Msg.TAG_LOOP_WHILE;
        this.setTooltip(function () { var a = b.getFieldValue("MODE"); return { WHILE: Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE, UNTIL: Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL }[a] })
    }, onchange: Blockly.Blocks.requireInFunction
};
Blockly.Blocks.controls_for = {
    init: function () {
        this.setColour(220); this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_FOR_INPUT_WITH).appendField(new Blockly.FieldVariable(Blockly.Msg.SELECT_MENU, null, this), "VAR"); this.interpolateMsg(Blockly.Msg.CONTROLS_FOR_INPUT_FROM_TO_BY, ["FROM", "Number Variable INT NEGATIVE VAR_INT VAR_UNINT".split(" "), Blockly.ALIGN_RIGHT], ["TO", "Number Variable INT NEGATIVE VAR_INT VAR_UNINT".split(" "), Blockly.ALIGN_RIGHT], ["BY", "Number Variable INT NEGATIVE VAR_INT VAR_UNINT".split(" "),
            Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.appendStatementInput("DO").appendField(Blockly.Msg.CONTROLS_FOR_INPUT_DO); this.appendDummyInput().appendField(new Blockly.FieldCheckbox("TRUE"), "ORDER").appendField(Blockly.Msg.CONTROLS_FOR_INPUT_ORDER).setAlign(Blockly.ALIGN_RIGHT); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setInputsInline(!0); var b = this; this.tag = Blockly.Msg.TAG_LOOP_FOR; this.setTooltip(function () { return Blockly.Msg.CONTROLS_FOR_TOOLTIP.replace("%1", b.getFieldValue("VAR")) })
    },
    getVars: function () { return [this.getFieldValue("VAR")] }, renameVar: function (b, c) { Blockly.Names.equals(b, this.getFieldValue("VAR")) && this.setFieldValue(c, "VAR") }, customContextMenu: function (b) {
        if (!this.isCollapsed()) {
            var c = { enabled: !0 }, a = this.getFieldValue("VAR"); c.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", a); a = goog.dom.createDom("field", null, a); a.setAttribute("name", "VAR"); a = goog.dom.createDom("block", null, a); a.setAttribute("type", "variables_get"); c.callback = Blockly.ContextMenu.callbackFactory(this,
                a); b.push(c)
        }
    }, onchange: Blockly.Blocks.requireInFunction
};
Blockly.Blocks.controls_flow_statements = {
    init: function () { var b = [[Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK, "BREAK"], [Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE, "CONTINUE"]]; this.setColour(220); this.appendDummyInput().appendField(new Blockly.FieldDropdown(b), "FLOW"); this.setPreviousStatement(!0); var a = this; this.tag = Blockly.Msg.TAG_LOOP_FLOW; this.setTooltip(function () { var b = a.getFieldValue("FLOW"); return { BREAK: Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK, CONTINUE: Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE }[b] }) },
    onchange: function () { if (this.workspace) { var b = !1, a = this; do { if ("controls_for" == a.type || "controls_whileUntil" == a.type || "controls_doWhile" == a.type) { b = !0; break } a = a.getSurroundParent() } while (a); b ? this.setWarningText(null) : this.setWarningText(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING) } }
};
Blockly.Blocks.math = {};

Blockly.Blocks.math_number = {
    init: function () { this.setColour(240); this.appendDummyInput().appendField(new Blockly.FieldTextInput("0", Blockly.FieldTextInput.numberValidator), "NUM"); this.setOutput(!0, "Number"); this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP); this.tag = Blockly.Msg.TAG_MATH_NUMBER }, onchange: function () {
        Blockly.Blocks.requireInFunction(); var a = this.getFieldValue("NUM"); 0 == a ? this.changeOutput("Number") : 0 === a % 1 ? 0 < a ? null != a && a.endsWith(".0") ? this.changeOutput("DOUBLE") : this.changeOutput("INT") :
            null != a && a.endsWith(".0") ? this.changeOutput("DOUBLE") : this.changeOutput("NEGATIVE") : this.changeOutput("DOUBLE")
    }
};

Blockly.Blocks.math_arithmetic = {
    init: function () {
        var a = [[Blockly.Msg.MATH_ADDITION_SYMBOL, "ADD"], [Blockly.Msg.MATH_SUBTRACTION_SYMBOL, "MINUS"], [Blockly.Msg.MATH_MULTIPLICATION_SYMBOL, "MULTIPLY"], [Blockly.Msg.MATH_DIVISION_SYMBOL, "DIVIDE"]]; this.setColour(240); this.setOutput(!0, "Number Pointer PTR_INT PTR_UNINT PTR_FLOAT PTR_DOUBLE PTR_CHAR".split(" ")); this.appendValueInput("A").setCheck("Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_FLOAT VAR_DOUBLE Aster Pointer PTR_INT PTR_UNINT PTR_FLOAT PTR_DOUBLE PTR_CHAR Macro VAR_CHAR CHAR Array".split(" "));
        this.appendValueInput("B").setCheck("Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_FLOAT VAR_DOUBLE Aster Pointer PTR_INT PTR_UNINT PTR_FLOAT PTR_DOUBLE PTR_CHAR Macro VAR_CHAR CHAR Array".split(" ")).appendField(new Blockly.FieldDropdown(a), "OP"); this.setInputsInline(!0); var b = this; this.tag = Blockly.Msg.TAG_MATH_ARITHMETIC; this.setTooltip(function () {
            var a = b.getFieldValue("OP"); return {
                ADD: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD, MINUS: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS, MULTIPLY: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
                DIVIDE: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE
            }[a]
        })
    }, onchange: Blockly.Blocks.requireInFunction
};



Blockly.Blocks.ledinit = {
    init: function() {
      this.appendDummyInput()
          .appendField("LED初始化");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
Blockly.Blocks.ledonoff = {
    init: function() {      this.appendDummyInput()
          .appendField("led")
          .appendField(new Blockly.FieldDropdown([["LED0","LED0"], ["LED1","LED1"],]), "ledx")
          .appendField(new Blockly.FieldDropdown([["亮","0"], ["灭","1"],["翻转","~"]]), "onoff");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks.timedelayinit = {
    init: function() {
      this.appendDummyInput()
          .appendField("延迟初始化");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks.timedelay = {
    init: function() {
      this.appendDummyInput()
          .appendField("延迟")
          .appendField(new Blockly.FieldTextInput(""), "delay")
          .appendField(new Blockly.FieldDropdown([["ms","ms"], ["us","us"]]), "time");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks.ledtimedelay = {
    init: function() {
      this.appendDummyInput()
          .appendField("LED")
          .appendField(new Blockly.FieldDropdown([["LED0","LED0"], ["LED1","LED1"]]), "led")
          .appendField("等待")
          .appendField(new Blockly.FieldTextInput(""), "time")
          .appendField(new Blockly.FieldDropdown([["ms","ms"], ["us","us"]]), "delay")
          .appendField(new Blockly.FieldDropdown([["亮","0"], ["灭","1"], ["翻转","~"]]), "status");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks.beepinit = {
    init: function() {
      this.appendDummyInput()
          .appendField("蜂鸣器初始化");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks.beeponoff= {
    init: function() {
      this.appendDummyInput()
          .appendField("蜂鸣器")
          .appendField(new Blockly.FieldDropdown([["响","1"], ["停","0"], ["翻转","~"]]), "status");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks.lcdinit = {
    init: function() {
      this.appendDummyInput()
          .appendField("LCD初始化");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }};
    Blockly.Blocks.lcd_font_color = {
        init: function() {
          this.appendDummyInput()
              .appendField("字体颜色")
              .appendField(new Blockly.FieldDropdown([["红","RED"], ["黄","YELLOW"], ["绿","GREEN"], ["蓝","BLUE"]]), "font_color");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(230);
       this.setTooltip("");
       this.setHelpUrl("");
        }
      };

      Blockly.Blocks.lcd_show = {
        init: function() {
          this.appendDummyInput()
              .appendField("字体坐标")
              .appendField(new Blockly.FieldTextInput(""), "font_x")
              .appendField(new Blockly.FieldTextInput(""), "font_y")
              .appendField("字体宽高")
              .appendField(new Blockly.FieldTextInput(""), "font_w")
              .appendField(new Blockly.FieldTextInput(""), "font_h")
              .appendField("字体大小")
              .appendField(new Blockly.FieldTextInput(""), "font_size")
              .appendField("显示内容")
              .appendField(new Blockly.FieldTextInput(""), "font_text");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(230);
       this.setTooltip("");
       this.setHelpUrl("");
        }
      };


Blockly.Blocks.math_convert_type = {
    init: function () {
        var a = [[Blockly.Msg.VARIABLES_SET_TYPE_INT, "int"], [Blockly.Msg.VARIABLES_SET_TYPE_UNSIGNED_INT, "unsigned int"], [Blockly.Msg.VARIABLES_SET_TYPE_FLOAT, "float"], [Blockly.Msg.VARIABLES_SET_TYPE_DOUBLE, "double"], [Blockly.Msg.VARIABLES_SET_TYPE_CHAR, "char"]]; this.setColour(240); this.setOutput(!0, "Number Variable VAR_INT VAR_UNINT DOUBLE VAR_FLOAT VAR_DOUBLE VAR_CHAR CHAR".split(" ")); this.appendValueInput("VAR").setCheck("Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_FLOAT VAR_DOUBLE Aster Macro VAR_CHAR CHAR Array".split(" ")).appendField(new Blockly.FieldDropdown(a),
            "NEWTYPE"); this.setInputsInline(!0); this.tag = Blockly.Msg.TAG_MATH_CONVERT_TYPE; this.setTooltip(Blockly.Msg.MATH_CONVERT_TYPE_TOOLTIP)
    }, onchange: Blockly.Blocks.requireInFunction
};
Blockly.Blocks.math_auto_convert_type = {
    init: function () { this.setColour(240); this.setOutput(!0, "Number Pointer Variable VAR_INT VAR_UNINT DOUBLE VAR_FLOAT VAR_DOUBLE VAR_CHAR CHAR".split(" ")); this.appendValueInput("VAR").setCheck("Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_FLOAT VAR_DOUBLE Aster Pointer PTR_INT PTR_UNINT PTR_FLOAT PTR_DOUBLE PTR_CHAR Macro VAR_CHAR CHAR Array".split(" ")); this.setInputsInline(!0); this.tag = Blockly.Msg.TAG_MATH_AUTO_CONVERT_TYPE; this.setTooltip(Blockly.Msg.MATH_AUTO_CONVERT_TYPE_TOOLTIP) },
    onchange: Blockly.Blocks.requireInFunction
};

Blockly.Blocks.math_modulo = {
    init: function () {
        this.setColour(240); this.setOutput(!0, "Number"); this.interpolateMsg(Blockly.Msg.MATH_MODULO_TITLE, ["DIVIDEND", "Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_DOUBLE VAR_FLOAT Aster VAR_CHAR CHAR Array".split(" "), Blockly.ALIGN_RIGHT], ["DIVISOR", "Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_DOUBLE VAR_FLOAT Aster VAR_CHAR CHAR Array".split(" "), Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setInputsInline(!0); this.setTooltip(Blockly.Msg.MATH_MODULO_TOOLTIP);
        this.tag = Blockly.Msg.TAG_MATH_MODULO
    }, onchange: Blockly.Blocks.requireInFunction
};
Blockly.Blocks.math_increment_expression = {
    init: function () {
        this.setColour(240); this.interpolateMsg(Blockly.Msg.MATH_INCREMENT_EXPRESSION_TITLE, ["VAR", "Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_DOUBLE VAR_FLOAT Aster Pointer PTR_INT PTR_UNINT PTR_FLOAT PTR_DOUBLE PTR_CHAR VAR_CHAR CHAR Array".split(" "), Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setInputsInline(!0); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.MATH_INCREMENT_EXPRESSION_TOOLTIP);
        this.tag = Blockly.Msg.TAG_MATH_INCREMENT_EXPRESSION
    }, onchange: Blockly.Blocks.requireInFunction
};
Blockly.Blocks.math_decrement_expression = {
    init: function () {
        this.setColour(240); this.interpolateMsg(Blockly.Msg.MATH_DECREMENT_EXPRESSION_TITLE, ["VAR", "Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_DOUBLE VAR_FLOAT Aster Pointer PTR_INT PTR_UNINT PTR_FLOAT PTR_DOUBLE PTR_CHAR VAR_CHAR CHAR Array".split(" "), Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setInputsInline(!0); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.MATH_DECREMENT_EXPRESSION_TOOLTIP);
        this.tag = Blockly.Msg.TAG_MATH_DECREMENT_EXPRESSION
    }, onchange: Blockly.Blocks.requireInFunction
};
Blockly.Blocks.math_prev_inc_decrement = {
    init: function () {
        var a = [[Blockly.Msg.MATH_INCREMENT_OP, "++"], [Blockly.Msg.MATH_DECREMENT_OP, "--"]]; this.setColour(240); this.setOutput(!0, ["Number", "Pointer"]); this.appendValueInput("VAR").setCheck("Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_FLOAT VAR_DOUBLE Aster Pointer PTR_INT PTR_UNINT PTR_FLOAT PTR_DOUBLE PTR_CHAR VAR_CHAR CHAR Array".split(" ")).appendField(new Blockly.FieldDropdown(a), "NEWOP"); this.setInputsInline(!0); this.tag = Blockly.Msg.TAG_MATH_PREV_INC_DECREMENT;
        this.setTooltip(Blockly.Msg.MATH_PREV_INC_DECREMENT_TOOLTIP)
    }, onchange: Blockly.Blocks.requireInFunction
};
Blockly.Blocks.math_post_inc_decrement = {
    init: function () {
        var a = [[Blockly.Msg.MATH_INCREMENT_OP, "++"], [Blockly.Msg.MATH_DECREMENT_OP, "--"]]; this.setColour(240); this.setOutput(!0, ["Number", "Pointer"]); this.appendValueInput("VAR").setCheck("Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_FLOAT VAR_DOUBLE Aster Pointer PTR_INT PTR_UNINT PTR_FLOAT PTR_DOUBLE PTR_CHAR VAR_CHAR CHAR Array".split(" ")); this.appendDummyInput().appendField(new Blockly.FieldDropdown(a), "NEWOP"); this.setInputsInline(!0);
        this.tag = Blockly.Msg.TAG_MATH_POST_INC_DECREMENT; this.setTooltip(Blockly.Msg.MATH_POST_INC_DECREMENT_TOOLTIP)
    }, onchange: Blockly.Blocks.requireInFunction
};

Blockly.Blocks.library_math_abs = { init: function () { this.setColour(320); this.setOutput(!0, "Number"); this.interpolateMsg(Blockly.Msg.MATH_ABS_TITLE, ["VAR", "Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_DOUBLE VAR_FLOAT Aster".split(" "), Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setInputsInline(!0); this.setTooltip(Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS); this.tag = Blockly.Msg.TAG_MATH_ABS }, onchange: Blockly.Blocks.requireInFunction };
Blockly.Blocks.library_math_trig = {
    init: function () {
        var a = [[Blockly.Msg.MATH_TRIG_SIN, "SIN"], [Blockly.Msg.MATH_TRIG_COS, "COS"], [Blockly.Msg.MATH_TRIG_TAN, "TAN"]]; this.setColour(320); this.setOutput(!0, "Number"); this.appendValueInput("NUM").setCheck("Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_DOUBLE VAR_FLOAT Aster".split(" ")).appendField(new Blockly.FieldDropdown(a), "OP"); var b = this; this.setTooltip(function () {
            var a = b.getFieldValue("OP"); return {
                SIN: Blockly.Msg.MATH_TRIG_TOOLTIP_SIN, COS: Blockly.Msg.MATH_TRIG_TOOLTIP_COS,
                TAN: Blockly.Msg.MATH_TRIG_TOOLTIP_TAN
            }[a]
        }); this.tag = Blockly.Msg.TAG_MATH_TRIG
    }, onchange: Blockly.Blocks.requireInFunction
};
Blockly.Blocks.library_math_logs = {
    init: function () {
        var a = [[Blockly.Msg.MATH_TRIG_LOG, "LOG"], [Blockly.Msg.MATH_TRIG_LOG10, "LOG10"], [Blockly.Msg.MATH_TRIG_LOG2, "LOG2"]]; this.setColour(320); this.setOutput(!0, "Number"); this.appendValueInput("NUM").setCheck("Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_DOUBLE VAR_FLOAT Aster".split(" ")).appendField(new Blockly.FieldDropdown(a), "OP"); var b = this; this.setTooltip(function () {
            var a = b.getFieldValue("OP"); return {
                LOG: Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG,
                LOG10: Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10, LOG2: Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG2
            }[a]
        }); this.tag = Blockly.Msg.TAG_MATH_LOGS
    }, onchange: Blockly.Blocks.requireInFunction
};
Blockly.Blocks.library_math_pow = {
    init: function () { this.setColour(320); this.setOutput(!0, "Number"); this.interpolateMsg(Blockly.Msg.MATH_POW_TITLE, ["BASE", "Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_DOUBLE VAR_FLOAT Aster".split(" "), Blockly.ALIGN_RIGHT], ["EXPO", "Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_DOUBLE VAR_FLOAT Aster".split(" "), Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setInputsInline(!0); this.setTooltip(Blockly.Msg.MATH_SINGLE_TOOLTIP_POW); this.tag = Blockly.Msg.TAG_MATH_POW },
    onchange: Blockly.Blocks.requireInFunction
}; Blockly.Blocks.library_math_exp = { init: function () { this.setColour(320); this.setOutput(!0, "Number"); this.interpolateMsg(Blockly.Msg.MATH_EXP_TITLE, ["EXPO", "Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_DOUBLE VAR_FLOAT Aster".split(" "), Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setInputsInline(!0); this.setTooltip(Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP); this.tag = Blockly.Msg.TAG_MATH_EXP }, onchange: Blockly.Blocks.requireInFunction };
Blockly.Blocks.library_math_sqrt = { init: function () { this.setColour(320); this.setOutput(!0, "Number"); this.interpolateMsg(Blockly.Msg.MATH_SQRT_TITLE, ["VAR", "Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_DOUBLE VAR_FLOAT Aster".split(" "), Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setInputsInline(!0); this.setTooltip(Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT); this.tag = Blockly.Msg.TAG_MATH_SQRT }, onchange: Blockly.Blocks.requireInFunction };
Blockly.Blocks.library_math_round = {
    init: function () {
        var a = [[Blockly.Msg.MATH_ROUND_OPERATOR_ROUND, "ROUND"], [Blockly.Msg.MATH_ROUND_OPERATOR_CEIL, "CEIL"], [Blockly.Msg.MATH_ROUND_OPERATOR_FLOOR, "FLOOR"], [Blockly.Msg.MATH_ROUND_OPERATOR_TRUNC, "TRUNC"]]; this.setColour(320); this.setOutput(!0, "Number"); this.appendValueInput("NUM").setCheck("Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_DOUBLE VAR_FLOAT Aster".split(" ")).appendField(new Blockly.FieldDropdown(a), "OP"); this.setTooltip(Blockly.Msg.MATH_ROUND_TOOLTIP);
        this.tag = Blockly.Msg.TAG_MATH_ROUND
    }, onchange: Blockly.Blocks.requireInFunction
};
Blockly.Blocks.library_math_numcheck = {
    init: function () {
        var a = [[Blockly.Msg.MATH_NUMCHECK_ISFINITE, "ISFINITE"], [Blockly.Msg.MATH_NUMCHECK_ISINF, "ISINF"], [Blockly.Msg.MATH_NUMCHECK_SIGNBIT, "SIGNBIT"], [Blockly.Msg.MATH_NUMCHECK_ISNAN, "ISNAN"]]; this.setColour(320); this.setOutput(!0, "Boolean"); this.interpolateMsg(Blockly.Msg.MATH_NUMCHECK_TITLE, ["VAR", "Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_DOUBLE VAR_FLOAT Aster".split(" "), Blockly.ALIGN_RIGHT], ["CONDITIONS", new Blockly.FieldDropdown(a)],
            Blockly.ALIGN_RIGHT); this.setInputsInline(!0); this.setTooltip(Blockly.Msg.MATH_NUMCHECK_TOOLTIP); this.tag = Blockly.Msg.TAG_MATH_NUMCHECK
    }, onchange: Blockly.Blocks.requireInFunction
};
Blockly.Blocks.library_math_numcompare = {
    init: function () {
        var a = [[Blockly.Msg.MATH_NUMCOMPARE_ISGREATER, "ISGREATER"], [Blockly.Msg.MATH_NUMCOMPARE_ISLESS, "ISLESS"], [Blockly.Msg.MATH_NUMCOMPARE_ISGREQ, "ISGREQ"], [Blockly.Msg.MATH_NUMCOMPARE_ISLEEQ, "ISLEEQ"], [Blockly.Msg.MATH_NUMCOMPARE_ISLEGR, "ISLEGR"], [Blockly.Msg.MATH_NUMCOMPARE_ISUNORDER, "ISUNORDER"]]; this.setColour(320); this.setOutput(!0, "Boolean"); this.interpolateMsg(Blockly.Msg.MATH_NUMCOMPARE_TITLE, ["VAR1", "Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_DOUBLE VAR_FLOAT Aster".split(" "),
            Blockly.ALIGN_RIGHT], ["VAR2", "Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_DOUBLE VAR_FLOAT Aster".split(" "), Blockly.ALIGN_RIGHT], ["CONDITIONS", new Blockly.FieldDropdown(a)], Blockly.ALIGN_RIGHT); this.setInputsInline(!0); this.setTooltip(Blockly.Msg.MATH_NUMCOMPARE_TOOLTIP); this.tag = Blockly.Msg.TAG_MATH_NUMCOMPARE
    }, onchange: Blockly.Blocks.requireInFunction
};

Blockly.Blocks.procedures = {};
Blockly.Blocks.main_block = {
    init: function () {
        this.setColour(300); Blockly.Procedures.findLegalName(Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE, this); this.appendDummyInput().appendField(Blockly.Msg.MAIN_BLOCK); this.appendStatementInput("STACK").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_DO); this.appendValueInput("RETURN").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.MAIN_BLOCK_RETURN); this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP); this.arguments_ = []; this.types_ = []; Blockly.Blocks.setCheckVariable(this,
            "int", "RETURN")
    }, getName: function () { return ["Main"] }, getParamInfo: function () { return [] }
};

Blockly.Blocks.procedures_return = {
    init: function () { this.setColour(300); this.appendValueInput("VALUE").appendField(Blockly.Msg.PROCEDURES_RETURN_TITLE); this.setTooltip(Blockly.Msg.PROCEDURES_RETURN_TOOLTIP); this.setPreviousStatement(!0); this.setNextStatement(!0) }, getType: function () { for (var a = this, b = !1; a.getSurroundParent();)if (a = a.getSurroundParent(), "main_block" == a.type || "procedures_defreturn" == a.type) { b = !0; break } if (b && "main_block" == a.type) return "int"; if (b && "procedures_defreturn" == a.type) return a.getType() },
    onchange: function () {
        Blockly.Blocks.requireInFunction(); if (this.workspace) {
            for (var a = this, b = !1; a.getSurroundParent();)if (a = a.getSurroundParent(), "main_block" == a.type || "procedures_defreturn" == a.type || "procedures_defnoreturn" == a.type) { b = !0; break } b && "main_block" == a.type ? Blockly.Blocks.setCheckVariable(this, "int", "VALUE") : b && "procedures_defreturn" == a.type ? (b = a.getFieldValue("DISTS"), a = a.getFieldValue("TYPES"), "array" == b || "variable" == b ? Blockly.Blocks.setCheckVariable(this, a, "VALUE") : Blockly.Blocks.setCheckPointer(this,
                a, "VALUE")) : b && "procedures_defnoreturn" == a.type && this.getInput("VALUE").setCheck("DUMMY_RETURN_VALUE")
        }
    }
};

Blockly.Blocks.procedures_defnoreturn = {
    init: function () {
        this.setColour(300); var c = Blockly.Procedures.findLegalName(Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE, this); this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE).appendField(new Blockly.FieldTextInput(c, Blockly.Procedures.rename), "NAME").appendField("", "PARAMS"); this.appendStatementInput("STACK").appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_DO); this.setMutator(new Blockly.Mutator(["procedures_mutatorarg", "procedures_mutatorarg_pointer",
            "procedures_mutatorarg_array"])); this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP); this.arguments_ = []; this.types_ = []; this.dist_ = []; this.spec_ = []; this.tag = Blockly.Msg.TAG_PROCEDURE_DEFNORETURN; Blockly.Procedures.setProcedureName(this.getName())
    }, initName: function () { this.setFieldValue("", "NAME") }, getName: function () { return [this.getFieldValue("NAME")] }, onchange: function () { Blockly.Blocks.requireOutFunction() }, updateParams_: function () {
        for (var c = !1, b = {}, a = 0; a < this.arguments_.length; a++) {
            if (b["arg_" +
                this.arguments_[a].toLowerCase()]) { c = !0; break } b["arg_" + this.arguments_[a].toLowerCase()] = !0
        } c ? this.setWarningText(Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING) : this.setWarningText(null); c = ""; if (this.arguments_.length) for (c = Blockly.Msg.PROCEDURES_BEFORE_PARAMS, a = 0; a < this.arguments_.length; a++)0 == a ? "v" == this.dist_[a] ? c = c + " " + this.types_[a] + " " + this.arguments_[a] : "a" == this.dist_[a] ? 1 == this.spec_[a][0] ? c = c + " " + this.types_[a] + " " + this.arguments_[a] + "[]" : 2 == this.spec_[a][0] && (c = c + " " + this.types_[a] + " " +
            this.arguments_[a] + "[][" + this.spec_[a][2] + "]") : "p" == this.dist_[a] && (c = c + " " + this.types_[a] + " " + this.spec_[a] + this.arguments_[a]) : "v" == this.dist_[a] ? c = c + ", " + this.types_[a] + " " + this.arguments_[a] : "a" == this.dist_[a] ? 1 == this.spec_[a][0] ? c = c + " " + this.types_[a] + " " + this.arguments_[a] + "[]" : 2 == this.spec_[a][0] && (c = c + " " + this.types_[a] + " " + this.arguments_[a] + "[][" + this.spec_[a][2] + "]") : "p" == this.dist_[a] && (c = c + ", " + this.types_[a] + " " + this.spec_[a] + this.arguments_[a]); this.setFieldValue(c, "PARAMS")
    }, mutationToDom: function () {
        for (var c =
            document.createElement("mutation"), b = 0; b < this.arguments_.length; b++) { var a = document.createElement("arg"); a.setAttribute("name", this.arguments_[b]); a.setAttribute("types", this.types_[b]); a.setAttribute("dist", this.dist_[b]); "a" == this.dist_[b] ? 1 == this.spec_[b][0] ? a.setAttribute("length_1", this.spec_[b][1]) : 2 == this.spec_[b][0] && (a.setAttribute("length_1", this.spec_[b][1]), a.setAttribute("length_2", this.spec_[b][2])) : "p" == this.dist_[b] && a.setAttribute("iteration", this.spec_[b]); c.appendChild(a) } this.getInput("STACK").isVisible() ||
                c.setAttribute("statements", "false"); return c
    }, domToMutation: function (c) {
        this.arguments_ = []; for (var b = 0, a; a = c.childNodes[b]; b++)if ("arg" == a.nodeName.toLowerCase()) if (this.arguments_.push(a.getAttribute("name")), this.types_.push(a.getAttribute("types")), this.dist_.push(a.getAttribute("dist")), "v" == a.getAttribute("dist")) this.spec_.push(null); else if ("a" == a.getAttribute("dist")) {
            var d = a.getAttribute("length_1"), e = a.getAttribute("length_2"); d *= 1; e *= 1; 0 != d && 0 == e ? this.spec_.push([1, a.getAttribute("length_1")]) :
                0 != d && 0 != e && this.spec_.push([2, a.getAttribute("length_1"), a.getAttribute("length_2")])
        } else "p" == a.getAttribute("dist") && this.spec_.push(a.getAttribute("iteration")); this.updateParams_(); c = "false" !== c.getAttribute("statements"); this.getInput("STACK").setVisible(c)
    }, decompose: function (c) {
        var b = Blockly.Block.obtain(c, "procedures_mutatorcontainer"); b.initSvg(); if (this.getInput("RETURN")) { var a = this.getInput("STACK").isVisible(); b.setFieldValue(a ? "TRUE" : "FALSE", "STATEMENTS") } else b.getInput("STATEMENT_INPUT").setVisible(!1);
        Blockly.Procedures.setProcedureName(this.getName()); a = b.getInput("STACK").connection; for (var d = 0; d < this.arguments_.length; d++) {
            if ("v" == this.dist_[d]) { var e = Blockly.Block.obtain(c, "procedures_mutatorarg"); e.initSvg(); e.setFieldValue(this.arguments_[d], "NAME"); e.setFieldValue(this.types_[d], "TYPES") } else "a" == this.dist_[d] ? (e = Blockly.Block.obtain(c, "procedures_mutatorarg_array"), e.initSvg(), e.setFieldValue(this.arguments_[d], "NAME"), e.setFieldValue(this.types_[d], "TYPES"), 1 == this.spec_[d][0] ? e.setFieldValue(this.spec_[d][1],
                "LENGTH_1") : 2 == this.spec_[d][0] && (e.setFieldValue(this.spec_[d][1], "LENGTH_1"), e.setFieldValue(this.spec_[d][2], "LENGTH_2"))) : "p" == this.dist_[d] && (e = Blockly.Block.obtain(c, "procedures_mutatorarg_pointer"), e.initSvg(), e.setFieldValue(this.arguments_[d], "NAME"), e.setFieldValue(this.types_[d], "TYPES"), e.setFieldValue(this.spec_[d], "ITERATION")); e.oldLocation = d; a.connect(e.previousConnection); a = e.nextConnection
        } Blockly.Procedures.mutateCallers(this.getFieldValue("NAME"), this.getFieldValue("TYPES"), this.workspace,
            this.arguments_, this.types_, this.dist_, this.spec_, null); return b
    }, compose: function (c) {
        this.arguments_ = []; this.types_ = []; this.dist_ = []; this.spec_ = []; this.paramIds_ = []; for (var b = c.getInputTargetBlock("STACK"); b;) {
            this.arguments_.push(b.getFieldValue("NAME")); this.types_.push(b.getFieldValue("TYPES")); this.dist_.push(b.getDist()); if ("v" == b.getDist()) this.spec_.push(null); else if ("a" == b.getDist()) {
                var a = b.getFieldValue("LENGTH_1"), d = b.getFieldValue("LENGTH_2"), e = 1 * a, f = 1 * d; 0 != e && 0 == f ? this.spec_.push([1,
                    a]) : 0 != e && 0 != f && this.spec_.push([2, a, d])
            } else "p" == b.getDist() && this.spec_.push(b.getFieldValue("ITERATION")); this.paramIds_.push(b.id); b = b.nextConnection && b.nextConnection.targetBlock()
        } this.updateParams_(); Blockly.Procedures.mutateCallers(this.getFieldValue("NAME"), this.getFieldValue("TYPES"), this.workspace, this.arguments_, this.types_, this.dist_, this.spec_, this.paramIds_); c = c.getFieldValue("STATEMENTS"); if (null !== c && (c = "TRUE" == c, b = this.getInput("STACK"), b.isVisible() != c)) {
            if (c) b.connection.targetConnection ||
                !this.statementConnection_ || this.statementConnection_.targetConnection || this.statementConnection_.sourceBlock_.workspace != this.workspace ? this.statementConnection_ = null : b.connection.connect(this.statementConnection_); else if (this.statementConnection_ = b.connection.targetConnection) a = b.connection.targetBlock(), a.setParent(null), a.bumpNeighbours_(); b.setVisible(c)
        }
    }, dispose: function () {
        var c = this.getFieldValue("NAME"); this.getFieldValue("TYPES"); Blockly.Procedures.disposeCallers(c, this.workspace); Blockly.Block.prototype.dispose.apply(this,
            arguments)
    }, getProcedureDef: function () { return [!1, this.getFieldValue("NAME"), this.getFieldValue("TYPES"), this.arguments_, this.types_, this.dist_, this.spec_] }, getVars: function () { return this.arguments_ }, renameVar: function (c, b) { for (var a = !1, d = 0; d < this.arguments_.length; d++)Blockly.Names.equals(c, this.arguments_[d]) && (this.arguments_[d] = b, a = !0); a && this.updateParams_() }, customContextMenu: function (c) {
        var b = { enabled: !0 }, a = this.getFieldValue("NAME"); b.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace("%1", a); var d =
            goog.dom.createDom("mutation"); d.setAttribute("name", a); for (var e = 0; e < this.arguments_.length; e++)a = goog.dom.createDom("arg"), a.setAttribute("name", this.arguments_[e]), d.appendChild(a); d = goog.dom.createDom("block", null, d); d.setAttribute("type", this.callType_); b.callback = Blockly.ContextMenu.callbackFactory(this, d); c.push(b); if (!this.isCollapsed()) for (e = 0; e < this.arguments_.length; e++)b = { enabled: !0 }, a = this.arguments_[e], b.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", a), d = goog.dom.createDom("field",
                null, a), d.setAttribute("name", "VAR"), d = goog.dom.createDom("block", null, d), d.setAttribute("type", "variables_declare"), b.callback = Blockly.ContextMenu.callbackFactory(this, d), c.push(b)
    }, callType_: "procedures_callnoreturn", getParamInfo: function () { for (var c = [], b = 0; b < this.arguments_.length; b++)c.push([this.types_[b], this.dist_[b], this.arguments_[b], this.getFieldValue("NAME"), this.getRelativeToSurfaceXY().y, this.spec_[b]]); return c }
};

Blockly.Blocks.procedures_defreturn = {
    init: function () {
        var c = [[Blockly.Msg.VARIABLES_SET_TYPE_INT, "int"], [Blockly.Msg.VARIABLES_SET_TYPE_UNSIGNED_INT, "unsigned int"], [Blockly.Msg.VARIABLES_SET_TYPE_FLOAT, "float"], [Blockly.Msg.VARIABLES_SET_TYPE_DOUBLE, "double"], [Blockly.Msg.VARIABLES_SET_TYPE_CHAR, "char"]], b = [[Blockly.Msg.VARIABLES_SET_DIST_VARIABLE, "variable"], [Blockly.Msg.VARIABLES_SET_DIST_POINTER, "pointer"], [Blockly.Msg.VARIABLES_SET_DIST_ARRAY, "array"]]; this.setColour(300); var a = Blockly.Procedures.findLegalName(Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE,
            this); this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE).appendField(new Blockly.FieldTextInput(a, Blockly.Procedures.rename), "NAME").appendField("", "PARAMS"); this.appendStatementInput("STACK").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_DO); this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN).appendField(new Blockly.FieldDropdown(c), "TYPES").appendField(new Blockly.FieldDropdown(b), "DISTS").setAlign(Blockly.ALIGN_RIGHT); this.setMutator(new Blockly.Mutator(["procedures_mutatorarg",
                "procedures_mutatorarg_pointer", "procedures_mutatorarg_array"])); this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP); this.arguments_ = []; this.types_ = []; this.dist_ = []; this.spec_ = []; this.tag = Blockly.Msg.TAG_PROCEDURE_DEFRETURN; Blockly.Procedures.setProcedureName(this.getName())
    }, initName: Blockly.Blocks.procedures_defnoreturn.initName, getName: function () { return [this.getFieldValue("NAME")] }, updateShape: function () {
        var c = [[Blockly.Msg.VARIABLES_SET_POINTER_SPEC_ONE, "*"], [Blockly.Msg.VARIABLES_SET_POINTER_SPEC_TWO,
            "**"]], b = [[Blockly.Msg.VARIABLES_SET_ARRAY_SPEC_ONE, "[]"], [Blockly.Msg.VARIABLES_SET_ARRAY_SPEC_TWO, "[][]"]]; null != this.getFieldValue("DISTS") && ("variable" == this.getFieldValue("DISTS") ? this.getField_("PSPECS") ? this.inputList[2].removeField("PSPECS") : this.getField_("ASPECS") && this.inputList[2].removeField("ASPECS") : "pointer" == this.getFieldValue("DISTS") ? (this.getField_("PSPECS") || this.inputList[2].appendField(new Blockly.FieldDropdown(c), "PSPECS"), this.getField_("ASPECS") && this.inputList[2].removeField("ASPECS")) :
                "array" == this.getFieldValue("DISTS") && (this.getField_("ASPECS") || this.inputList[2].appendField(new Blockly.FieldDropdown(b), "ASPECS"), this.getField_("PSPECS") && this.inputList[2].removeField("PSPECS")))
    }, updateParams_: Blockly.Blocks.procedures_defnoreturn.updateParams_, mutationToDom: Blockly.Blocks.procedures_defnoreturn.mutationToDom, domToMutation: Blockly.Blocks.procedures_defnoreturn.domToMutation, decompose: Blockly.Blocks.procedures_defnoreturn.decompose, compose: Blockly.Blocks.procedures_defnoreturn.compose,
    dispose: Blockly.Blocks.procedures_defnoreturn.dispose, getProcedureDef: function () {
        if ("variable" == this.getFieldValue("DISTS")) return [!0, this.getFieldValue("NAME"), this.getFieldValue("TYPES"), this.arguments_, this.types_, this.dist_, this.spec_, this.getFieldValue("DISTS")]; if ("pointer" == this.getFieldValue("DISTS")) return [!0, this.getFieldValue("NAME"), this.getFieldValue("TYPES"), this.arguments_, this.types_, this.dist_, this.spec_, this.getFieldValue("DISTS"), this.getFieldValue("PSPECS")]; if ("array" == this.getFieldValue("DISTS")) return [!0,
        this.getFieldValue("NAME"), this.getFieldValue("TYPES"), this.arguments_, this.types_, this.dist_, this.spec_, this.getFieldValue("DISTS"), this.getFieldValue("ASPECS")]
    }, getType: function () { return [this.getFieldValue("TYPES")] }, getVars: Blockly.Blocks.procedures_defnoreturn.getVars, renameVar: Blockly.Blocks.procedures_defnoreturn.renameVar, customContextMenu: Blockly.Blocks.procedures_defnoreturn.customContextMenu, callType_: "procedures_callreturn", onchange: function () { Blockly.Blocks.requireOutFunction(); this.updateShape() },
    getParamInfo: function () { var c = []; if (this.arguments_.length) for (var b = 0; b < this.arguments_.length; b++)c.push([this.types_[b], this.dist_[b], this.arguments_[b], this.getFieldValue("NAME"), this.getRelativeToSurfaceXY().y, this.spec_[b]]); return c }
};

Blockly.Blocks.procedures_mutatorcontainer = { init: function () { this.setColour(300); this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE); this.appendStatementInput("STACK"); this.appendDummyInput("STATEMENT_INPUT").appendField(Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS).appendField(new Blockly.FieldCheckbox("TRUE"), "STATEMENTS"); this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP); this.contextMenu = !1 } };

Blockly.Blocks.procedures_mutatorarg = {
    init: function () {
        var a = [[Blockly.Msg.VARIABLES_SET_TYPE_INT, "int"], [Blockly.Msg.VARIABLES_SET_TYPE_UNSIGNED_INT, "unsigned int"], [Blockly.Msg.VARIABLES_SET_TYPE_FLOAT, "float"], [Blockly.Msg.VARIABLES_SET_TYPE_DOUBLE, "double"], [Blockly.Msg.VARIABLES_SET_TYPE_CHAR, "char"]]; this.setColour(300); this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_MUTATORARG_PRETITLE).appendField(new Blockly.FieldDropdown(a), "TYPES").appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TITLE).appendField(new Blockly.FieldTextInput("x",
            Blockly.Procedures.rename), "NAME"); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP); this.contextMenu = !1
    }, validator_: function (a) { return (a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "")) || null }, getTypes: function () { return [this.getFieldValue("TYPES")] }, getDist: function () { return "v" }, getSpec: function () { return null }, renameProcedure: function (a, b) {
        if (Blockly.Names.equals(a, this.getFieldValue("NAME"))) {
            var c = Blockly.Procedures.getProcedureName();
            Blockly.Variables.renameVariablebyScope(a, b, c[0])
        }
    }
};
Blockly.Blocks.procedures_mutatorarg_array = {
    init: function () {
        var a = [[Blockly.Msg.VARIABLES_SET_TYPE_INT, "int"], [Blockly.Msg.VARIABLES_SET_TYPE_UNSIGNED_INT, "unsigned int"], [Blockly.Msg.VARIABLES_SET_TYPE_FLOAT, "float"], [Blockly.Msg.VARIABLES_SET_TYPE_DOUBLE, "double"], [Blockly.Msg.VARIABLES_SET_TYPE_CHAR, "char"]]; this.setColour(300); this.interpolateMsg(Blockly.Msg.PROCEDURES_MUTATORARG_ARRAY_PRETITLE + " %1 " + Blockly.Msg.VARIABLES_ARRAY_DECLARE_LENGTH + " %2  %3 " + Blockly.Msg.VARIABLES_DECLARE_NAME + " %4 ",
            ["TYPES", new Blockly.FieldDropdown(a)], ["LENGTH_1", new Blockly.FieldTextInput("1")], ["LENGTH_2", new Blockly.FieldTextInput(" ")], ["NAME", new Blockly.FieldTextInput("y", Blockly.Procedures.rename)], Blockly.ALIGN_RIGHT); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP); this.contextMenu = !1
    }, validator_: function (a) { return (a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "")) || null }, getTypes: function () { return [this.getFieldValue("TYPES")] }, getDist: function () { return "a" },
    getSpec: function () { var a = this.getFieldValue("LENGTH_1"), b = this.getFieldValue("LENGTH_2"); a *= 1; b *= 1; if (0 != a && 0 == b) return [1, a]; if (0 != a && 0 != b) return [2, a, b] }, renameProcedure: function (a, b) { if (Blockly.Names.equals(a, this.getFieldValue("NAME"))) { var c = Blockly.Procedures.getProcedureName(); Blockly.Variables.renameVariablebyScope(a, b, c[0]) } }
};
Blockly.Blocks.procedures_mutatorarg_pointer = {
    init: function () {
        var a = [[Blockly.Msg.VARIABLES_SET_TYPE_INT, "int"], [Blockly.Msg.VARIABLES_SET_TYPE_UNSIGNED_INT, "unsigned int"], [Blockly.Msg.VARIABLES_SET_TYPE_FLOAT, "float"], [Blockly.Msg.VARIABLES_SET_TYPE_DOUBLE, "double"], [Blockly.Msg.VARIABLES_SET_TYPE_CHAR, "char"]], b = [[Blockly.Msg.VARIABLES_SET_ITERATION_NORMAL, "*"], [Blockly.Msg.VARIABLES_SET_ITERATION_DOUBLE, "**"], [Blockly.Msg.VARIABLES_SET_ITERATION_TRIPLE, "***"]]; this.setColour(300); this.interpolateMsg(Blockly.Msg.PROCEDURES_MUTATORARG_POINTER_PRETITLE +
            " %1 " + Blockly.Msg.VARIABLES_POINTER_DECLARE_ITERATION + " %2 " + Blockly.Msg.VARIABLES_DECLARE_NAME + " %3 ", ["TYPES", new Blockly.FieldDropdown(a)], ["ITERATION", new Blockly.FieldDropdown(b)], ["NAME", new Blockly.FieldTextInput("z", Blockly.Procedures.rename)], Blockly.ALIGN_RIGHT); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP); this.contextMenu = !1
    }, validator_: function (a) { return (a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "")) || null }, getTypes: function () { return [this.getFieldValue("TYPES")] },
    getDist: function () { return "p" }, getSpec: function () { return [this.getFieldValue("ITERATION")] }, renameProcedure: function (a, b) { if (Blockly.Names.equals(a, this.getFieldValue("NAME"))) { var c = Blockly.Procedures.getProcedureName(); Blockly.Variables.renameVariablebyScope(a, b, c[0]) } }
};

Blockly.Blocks.procedures_callnoreturn = {
    init: function () { this.setColour(300); this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_CALLNORETURN_CALL).appendField("", "NAME").appendField(Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"); this.setPreviousStatement(!0); this.setNextStatement(!0); this.arguments_ = []; this.types_ = []; this.dist_ = []; this.spec_ = []; this.quarkArguments_ = this.quarkConnections_ = null }, getProcedureCall: function () { return this.getFieldValue("NAME") }, renameProcedure: function (b, a) {
        Blockly.Names.equals(b,
            this.getProcedureCall()) && (this.setFieldValue(a, "NAME"), this.setTooltip((this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", a)))
    }, setProcedureParameters: function (b, a, c, e, d) {
        if (d) {
            if (d.length != b.length) throw "Error: paramNames and paramIds must be the same length."; this.quarkArguments_ || (this.quarkConnections_ = {}, b.join("\n") == this.arguments_.join("\n") ? this.quarkArguments_ = d : this.quarkArguments_ = []); var k = this.rendered; this.rendered =
                !1; for (var f = this.arguments_.length - 1; 0 <= f; f--) { var g = this.getInput("ARG" + f); if (g) { var h = g.connection.targetConnection; this.quarkConnections_[this.quarkArguments_[f]] = h; this.removeInput("ARG" + f) } } this.arguments_ = [].concat(b); this.types_ = [].concat(a); this.dist_ = [].concat(c); this.spec_ = [].concat(e); this.quarkArguments_ = d; for (f = 0; f < this.arguments_.length; f++)"v" == this.dist_[f] ? g = this.appendValueInput("ARG" + f).setAlign(Blockly.ALIGN_RIGHT).appendField(this.types_[f]).appendField(this.arguments_[f]) : "a" ==
                    this.dist_[f] ? 1 == this.spec_[f][0] ? g = this.appendValueInput("ARG" + f).setAlign(Blockly.ALIGN_RIGHT).appendField(this.types_[f]).appendField(this.arguments_[f] + "[]") : 2 == this.spec_[f][0] && (g = this.appendValueInput("ARG" + f).setAlign(Blockly.ALIGN_RIGHT).appendField(this.types_[f]).appendField(this.arguments_[f] + "[][" + this.spec_[f][2] + "]")) : "p" == this.dist_[f] && (g = this.appendValueInput("ARG" + f).setAlign(Blockly.ALIGN_RIGHT).appendField(this.types_[f] + " " + this.spec_[f] + this.arguments_[f])), this.quarkArguments_ &&
                    (b = this.quarkArguments_[f], b in this.quarkConnections_ && (h = this.quarkConnections_[b], !h || h.targetConnection || h.sourceBlock_.workspace != this.workspace ? delete this.quarkConnections_[b] : g.connection.connect(h))); this.getField_("WITH").setVisible(!!this.arguments_.length); (this.rendered = k) && this.render()
        } else this.quarkConnections_ = {}, this.quarkArguments_ = null
    }, mutationToDom: function () {
        var b = document.createElement("mutation"); b.setAttribute("name", this.getProcedureCall()); for (var a = 0; a < this.arguments_.length; a++) {
            var c =
                document.createElement("arg"); c.setAttribute("name", this.arguments_[a]); c.setAttribute("types", this.types_[a]); c.setAttribute("dist", this.dist_[a]); "a" == this.dist_[a] ? 1 == this.spec_[a][0] ? c.setAttribute("length_1", this.spec_[a][1]) : 2 == this.spec_[a][0] && (c.setAttribute("length_1", this.spec_[a][1]), c.setAttribute("length_2", this.spec_[a][2])) : "p" == this.dist_[a] && c.setAttribute("iteration", this.spec_[a]); b.appendChild(c)
        } return b
    }, domToMutation: function (b) {
        var a = b.getAttribute("name"); this.setFieldValue(a,
            "NAME"); this.setTooltip((this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", a)); if ((a = Blockly.Procedures.getDefinition(a, this.workspace)) && a.mutator.isVisible()) this.setProcedureParameters(a.arguments_, a.types_, a.dist_, a.spec_, a.paramIds_); else {
                this.arguments_ = []; this.types_ = []; this.dist_ = []; this.spec_ = []; a = 0; for (var c; c = b.childNodes[a]; a++)if ("arg" == c.nodeName.toLowerCase()) if (this.arguments_.push(c.getAttribute("name")), this.types_.push(c.getAttribute("types")),
                    this.dist_.push(c.getAttribute("dist")), "v" == c.getAttribute("dist")) this.spec_.push(null); else if ("a" == c.getAttribute("dist")) { var e = c.getAttribute("length_1"); c = c.getAttribute("length_2"); e *= 1; c *= 1; 0 != e && 0 == c ? this.spec_.push([1, e]) : 0 != e && 0 != c && this.spec_.push([2, e, c]) } else "p" == c.getAttribute("dist") && this.spec_.push(c.getAttribute("iteration")); this.setProcedureParameters(this.arguments_, this.types_, this.dist_, this.spec_, this.arguments_)
            }
    }, renameVar: function (b, a) {
        for (var c = 0; c < this.arguments_.length; c++)Blockly.Names.equals(b,
            this.arguments_[c]) && (this.arguments_[c] = a, this.getInput("ARG" + c).fieldRow[0].setText(a))
    }, customContextMenu: function (b) { var a = { enabled: !0 }; a.text = Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF; var c = this.getProcedureCall(), e = this.workspace; a.callback = function () { var a = Blockly.Procedures.getDefinition(c, e); a && a.select() }; b.push(a) }
};



Blockly.Blocks.procedures_callreturn = {
    init: function () { this.setColour(300); this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_CALLRETURN_CALL).appendField("", "NAME").appendField(Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"); this.setOutput(!0); this.arguments_ = []; this.types_ = []; this.dist_ = []; this.spec_ = []; this.quarkArguments_ = this.quarkConnections_ = null }, getProcedureCall: Blockly.Blocks.procedures_callnoreturn.getProcedureCall, renameProcedure: Blockly.Blocks.procedures_callnoreturn.renameProcedure,
    setProcedureParameters: Blockly.Blocks.procedures_callnoreturn.setProcedureParameters, mutationToDom: Blockly.Blocks.procedures_callnoreturn.mutationToDom, domToMutation: Blockly.Blocks.procedures_callnoreturn.domToMutation, renameVar: Blockly.Blocks.procedures_callnoreturn.renameVar, customContextMenu: Blockly.Blocks.procedures_callnoreturn.customContextMenu, getCallFuncName: function () { return this.getFieldValue("NAME") }, onchange: function () {
        for (var c = Blockly.Procedures.allProcedures()[1], b, e = this.getFieldValue("NAME"),
            d = 0; d < c.length; d++)if (e == c[d][1]) { b = c[d]; break } if (b) { var a; "int" == b[2] ? a = "INT" : "unsigned int" == b[2] ? a = "UNINT" : "float" == b[2] ? a = "FLOAT" : "double" == b[2] ? a = "DOUBLE" : "char" == b[2] && (a = "CHAR"); "variable" == b[7] ? a = "VAR_" + a : "pointer" == b[7] ? "*" == b[8] ? a = "PTR_" + a : "**" == b[8] && (a = "DBPTR_" + a) : "array" == b[7] && (c = a, a = ["VAR_" + c, "PTR_" + c, "DBPTR_" + c]); this.changeOutput(a) }
    }
};

Blockly.Blocks.stdio = {};
Blockly.Blocks.library_stdio_printf = {
    init: function () { this.setColour(280); this.appendValueInput("VAR0").setCheck(null).appendField(Blockly.Msg.STDIO_PRINTF_TITLE); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setMutator(new Blockly.Mutator(["library_stdio_printf_add"])); this.setTooltip(Blockly.Msg.TEXT_PRINT_TOOLTIP); this.tag = Blockly.Msg.TAG_STDIO_PRINTF; this.printAddCount_ = 0 }, mutationToDom: function () {
        if (!this.printAddCount_) return null; var a = document.createElement("mutation"); this.printAddCount_ &&
            a.setAttribute("printadd", this.printAddCount_); return a
    }, domToMutation: function (a) { this.printAddCount_ = parseInt(a.getAttribute("printadd"), 10); for (a = 1; a <= this.printAddCount_; a++)this.appendValueInput("VAR" + a).setCheck(null).appendField("") }, decompose: function (a) {
        var b = Blockly.Block.obtain(a, "library_stdio_printf_printf"); b.initSvg(); for (var c = b.getInput("STACK").connection, e = 1; e <= this.printAddCount_; e++) {
            var d = Blockly.Block.obtain(a, "library_stdio_printf_add"); d.initSvg(); c.connect(d.previousConnection);
            c = d.nextConnection
        } return b
    }, compose: function (a) { for (var b = this.printAddCount_; 0 < b; b--)this.removeInput("VAR" + b); this.printAddCount_ = 0; for (a = a.getInputTargetBlock("STACK"); a;) { switch (a.type) { case "library_stdio_printf_add": this.printAddCount_++; b = this.appendValueInput("VAR" + this.printAddCount_).setCheck(null).appendField(""); a.valueConnection_ && b.connection.connect(a.valueConnection_); break; default: throw "Unknown block type."; }a = a.nextConnection && a.nextConnection.targetBlock() } }, saveConnections: function (a) {
        a =
        a.getInputTargetBlock("STACK"); for (var b = 1; a;) { switch (a.type) { case "library_stdio_printf_add": var c = this.getInput("VAR" + b); a.valueConnection_ = c && c.connection.targetConnection; a.statementConnection_ = b++; break; default: throw "Unknown block type."; }a = a.nextConnection && a.nextConnection.targetBlock() }
    }, onchange: Blockly.Blocks.requireInFunction
};
Blockly.Blocks.library_stdio_printf_printf = { init: function () { this.setColour(280); this.appendDummyInput().appendField(Blockly.Msg.STDIO_PRINTF_TITLE); this.appendStatementInput("STACK"); this.setTooltip(Blockly.Msg.TEXT_PRINT_TOOLTIP); this.contextMenu = !1 } };
Blockly.Blocks.library_stdio_printf_add = { init: function () { this.setColour(280); this.appendDummyInput().appendField(Blockly.Msg.STDIP_PRINTF_MUTATOR_PRINTFADD_TITLE); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.TEXT_PRINT_TOOLTIP); this.contextMenu = !1 } };

Blockly.Blocks.library_stdio_text = {
    init: function () { this.setColour(90); this.appendDummyInput().appendField(this.newQuote_(!0)).appendField(new Blockly.FieldTextInput(""), "TEXT").appendField(this.newQuote_(!1)); this.setOutput(!0, "String"); this.setTooltip(Blockly.Msg.TEXT_TEXT_TOOLTIP); this.tag = Blockly.Msg.TAG_STDIO_TEXT }, newQuote_: function (a) {
        return new Blockly.FieldImage(a == this.RTL ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==" :
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC", 12, 12, '"')
    }, onchange: function () { Blockly.Blocks.requireInFunction(); this.getFieldValue("TEXT") && (1 == this.getFieldValue("TEXT").length ? this.changeOutput("CHAR") : this.changeOutput("STR")) }
};

Blockly.Blocks.library_stdio_text_char = {
    init: function () { this.setHelpUrl(Blockly.Msg.TEXT_CHAR); this.setColour(90); this.appendDummyInput().appendField(this.newQuote_(!0)).appendField(new Blockly.FieldTextInput(""), "CHAR").appendField(this.newQuote_(!1)); this.setOutput(!0, ["VAR_CHAR", "CHAR"]); this.setTooltip(Blockly.Msg.TEXT_CHAR_TOOLTIP) }, newQuote_: function (a) {
        return new Blockly.FieldImage(a == this.RTL ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAkCAYAAACNBsqdAAAACXBIWXMAAAsTAAALEwEAmpwYAAABt0lEQVRIibXUsWsUQRiG8eeLMYlnpRIVlIgQESySIoUonCBqpaJFCgURwULwT7CwsEglWNhbCVZaWAUObCystBCUgIgWQa4ydhIVHovsyeXYWTNzlxeWhfmG3367szOwTYlUQT0AHAMmgN/VtQp0I+JP9pPUGfWp6XTV++pMDnqmAazL4lbQuUy0l8tN6JT6shD+os6m4HYh2suTQXOsup/c2ioks6AeroPXh4TngIU6eBS5qY5vB9wCdg7CP0YAHwX2DsJvRwCv03dEjAFExEdgaUh4EnATXOUh0BkCXmPjoNoMR8QacAm4VQi3gB3/vLoZagtoA+eAI9Xwr+p+IwG/By5GxGpRW+rdxLZeUQ/15mX9x9UGaCfKn4DvRTCwGziYqHUi4memtxH1RMMJN98/N7fjq4nxZeBzabez6rdEt+dL0Qn1WQJ9rk6WwtcSaFc9XopeaFiwO6Xo2Qa07BOoiw3oa3VfLthSlxrQN2pqkyTR0+qHkaHqtPqoAVTtqHty0Ov/AVUfmLlQ48B8Q/0rcDsiXuWgvY73q+9qunyc9eoJ/EofuKKeGgrsg6fUF+o9ddcozL8mXx4vauBlKQAAAABJRU5ErkJggg==" :
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAkCAYAAABixKGjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABrElEQVRIia3WMWsUQRyG8WcOYmw8kQjRBIIgCBoQLYJgEZA02qopRbCxEMRvYBWEpBHyCdKIjZA+GCwCMRYBG40gaHVqwIAoaPdY3AbP3M5udmZfWFjY2d/MDvPfGciMekJdVpfUTq43CF9Xv/ovV9pAJ9RnDmdNPZYD3y5BB3MvBe2qKzVwT73WFJ5UN2vgx+rxpvBZ9W0FuqVON0IL+Jy6UwE/UI+kwFM1I55tjBZw1/6yKktPvZgEF/iTCvhyDny1YirmcuCuuh6BF5LhAr8bgbfVUznwmPFCaV7SB/AbEfijOpVidgq4A9yKtHkH7CbjwDhwKdJmI4TwJwcHGIm0eZ8CAwQAdQZ4E2nzBXhZ3O//R3aAdWCr9qvU2YrCqUpPvWlk78zdUE8DL4Dn6tG28f3MA3di+B7wLbODR+pkGf69BfwCcKYM7wCjmThA6ch/AJ9awMeH8BDCL2C1BfznEF7kFfnz/t/7g/hn4HUm3os+UWcSK1X7p7HqulHvJ8CH/+erDxvCzU5c6nl1sQZ+qp6MGeEQnYwCE/TX8Ehx/QY+hBD2Go24zfwFdQY82azgsTIAAAAASUVORK5CYII=",
            6, 12, '"')
    }, onchange: function (a) { a = this.getFieldValue("CHAR"); null != a && 1 < a.length ? a.startsWith("\\") ? this.setWarningText(null) : this.setWarningText(Blockly.Msg.TEXT_CHAR_WARNING) : this.setWarningText(null) }
};
Blockly.Blocks.library_stdio_newLine = { init: function () { this.setColour(90); this.interpolateMsg(Blockly.Msg.STDIO_NEWLINE_TITLE, Blockly.ALIGN_RIGHT); this.setOutput(!0, "String"); this.setTooltip(Blockly.Msg.STDIO_NEWLINE_TOOLTIP); this.tag = Blockly.Msg.TAG_STDIO_NEWLINE }, onchange: Blockly.Blocks.requireInFunction };
Blockly.Blocks.library_stdio_scanf = {
    init: function () {
        this.setColour(280); this.appendValueInput("VAR0").setCheck("Variable VAR_INT VAR_UNINT VAR_FLOAT VAR_DOUBLE VAR_CHAR Array Pointer PTR_INT PTR_UNINT PTR_FLOAT PTR_DOUBLE PTR_CHAR Aster".split(" ")).appendField(Blockly.Msg.STDIO_SCANF_TITLE); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setMutator(new Blockly.Mutator(["library_stdio_scanf_add"])); this.setTooltip(Blockly.Msg.STDIO_SCANF_TOOLTIP); this.tag = Blockly.Msg.TAG_STDIO_SCANF;
        this.scanAddCount_ = 0
    }, mutationToDom: function () { if (!this.scanAddCount_) return null; var a = document.createElement("mutation"); this.scanAddCount_ && a.setAttribute("scanadd", this.scanAddCount_); return a }, domToMutation: function (a) { this.scanAddCount_ = parseInt(a.getAttribute("scanadd"), 10); for (a = 1; a <= this.scanAddCount_; a++)this.appendValueInput("VAR" + a).setCheck("Variable VAR_INT VAR_UNINT VAR_FLOAT VAR_DOUBLE VAR_CHAR Array Pointer PTR_INT PTR_UNINT PTR_FLOAT PTR_DOUBLE PTR_CHAR Aster".split(" ")).appendField("") },
    decompose: function (a) { var b = Blockly.Block.obtain(a, "library_stdio_scanf_scanf"); b.initSvg(); for (var c = b.getInput("STACK").connection, e = 1; e <= this.scanAddCount_; e++) { var d = Blockly.Block.obtain(a, "library_stdio_scanf_add"); d.initSvg(); c.connect(d.previousConnection); c = d.nextConnection } return b }, compose: function (a) {
        for (var b = this.scanAddCount_; 0 < b; b--)this.removeInput("VAR" + b); this.scanAddCount_ = 0; for (a = a.getInputTargetBlock("STACK"); a;) {
            switch (a.type) {
                case "library_stdio_scanf_add": this.scanAddCount_++;
                    b = this.appendValueInput("VAR" + this.scanAddCount_).setCheck("Variable VAR_INT VAR_UNINT VAR_FLOAT VAR_DOUBLE VAR_CHAR Array Pointer PTR_INT PTR_UNINT PTR_FLOAT PTR_DOUBLE PTR_CHAR Aster".split(" ")).appendField(""); a.valueConnection_ && b.connection.connect(a.valueConnection_); break; default: throw "Unknown block type.";
            }a = a.nextConnection && a.nextConnection.targetBlock()
        }
    }, saveConnections: function (a) {
        a = a.getInputTargetBlock("STACK"); for (var b = 1; a;) {
            switch (a.type) {
                case "library_stdio_scanf_add": var c = this.getInput("VAR" +
                    b); a.valueConnection_ = c && c.connection.targetConnection; a.statementConnection_ = b++; break; default: throw "Unknown block type.";
            }a = a.nextConnection && a.nextConnection.targetBlock()
        }
    }, onchange: Blockly.Blocks.requireInFunction
}; Blockly.Blocks.library_stdio_scanf_scanf = { init: function () { this.setColour(280); this.appendDummyInput().appendField(Blockly.Msg.STDIO_SCANF_TITLE); this.appendStatementInput("STACK"); this.setTooltip(Blockly.Msg.STDIO_SCANF_TOOLTIP); this.contextMenu = !1 } };
Blockly.Blocks.library_stdio_scanf_add = { init: function () { this.setColour(280); this.appendDummyInput().appendField(Blockly.Msg.STDIP_SCANF_MUTATOR_SCANFADD_TITLE); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.STDIO_SCANF_TOOLTIP); this.contextMenu = !1 } };
Blockly.Blocks.comment = {
    init: function () { this.setColour(75); this.appendValueInput("VAR0").setCheck(null).appendField(Blockly.Msg.COMMENT_TITLE); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setMutator(new Blockly.Mutator(["comment_add"])); this.setTooltip(Blockly.Msg.COMMENT_TOOLTIP); this.tag = Blockly.Msg.TAG_COMMENT; this.commentAddCount_ = 0 }, mutationToDom: function () {
        if (!this.commentAddCount_) return null; var a = document.createElement("mutation"); this.commentAddCount_ && a.setAttribute("commentadd",
            this.commentAddCount_); return a
    }, domToMutation: function (a) { this.commentAddCount_ = parseInt(a.getAttribute("commentadd"), 10); for (a = 1; a <= this.commentAddCount_; a++)this.appendValueInput("VAR" + a).setCheck(null).appendField("") }, decompose: function (a) { var b = Blockly.Block.obtain(a, "comment_comment"); b.initSvg(); for (var c = b.getInput("STACK").connection, e = 1; e <= this.commentAddCount_; e++) { var d = Blockly.Block.obtain(a, "comment_add"); d.initSvg(); c.connect(d.previousConnection); c = d.nextConnection } return b }, compose: function (a) {
        for (var b =
            this.commentAddCount_; 0 < b; b--)this.removeInput("VAR" + b); this.commentAddCount_ = 0; for (a = a.getInputTargetBlock("STACK"); a;) { switch (a.type) { case "comment_add": this.commentAddCount_++; b = this.appendValueInput("VAR" + this.commentAddCount_).setCheck(null).appendField(""); a.valueConnection_ && b.connection.connect(a.valueConnection_); break; default: throw "Unknown block type."; }a = a.nextConnection && a.nextConnection.targetBlock() }
    }, saveConnections: function (a) {
        a = a.getInputTargetBlock("STACK"); for (var b = 1; a;) {
            switch (a.type) {
                case "comment_add": var c =
                    this.getInput("VAR" + b); a.valueConnection_ = c && c.connection.targetConnection; a.statementConnection_ = b++; break; default: throw "Unknown block type.";
            }a = a.nextConnection && a.nextConnection.targetBlock()
        }
    }
}; Blockly.Blocks.comment_comment = { init: function () { this.setColour(75); this.appendDummyInput().appendField(Blockly.Msg.COMMENT_TITLE); this.appendStatementInput("STACK"); this.setTooltip(Blockly.Msg.COMMENT_TOOLTIP); this.contextMenu = !1 } };
Blockly.Blocks.comment_add = { init: function () { this.setColour(75); this.appendDummyInput().appendField(Blockly.Msg.COMMENT_MUTATOR_COMMENTADD_TITLE); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.COMMENT_TOOLTIP); this.contextMenu = !1 } };
Blockly.Blocks.stdlib = {};
Blockly.Blocks.library_stdlib_abs = { init: function () { this.setColour(280); this.setOutput(!0, "Number"); this.interpolateMsg(Blockly.Msg.MATH_ABS_TITLE, ["VAR", "Number INT NEGATIVE Variable VAR_INT VAR_UNINT Aster".split(" "), Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setInputsInline(!0); this.setTooltip(Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS); this.tag = Blockly.Msg.TAG_MATH_ABS }, onchange: Blockly.Blocks.requireInFunction };
Blockly.Blocks.library_stdlib_convert = { init: function () { var a = [[Blockly.Msg.STDLIB_CONVERT_INT, "INT"], [Blockly.Msg.STDLIB_CONVERT_DOUBLE, "DOUBLE"]]; this.setColour(280); this.setOutput(!0, "Number"); this.interpolateMsg(Blockly.Msg.STDLIB_CONVERT_TITLE, ["VAR", ["Variable", "Pointer", "VAR_CHAR", "String", "CHAR"], Blockly.ALIGN_RIGHT], ["OPERATORS", new Blockly.FieldDropdown(a)], Blockly.ALIGN_RIGHT); this.setTooltip(Blockly.Msg.STDLIB_CONVERT_HELPURL); this.tag = Blockly.Msg.TAG_STDLIB_CONVERT }, onchange: Blockly.Blocks.requireInFunction };

Blockly.Blocks.library_stdlib_rand = {
    init: function () { this.setColour(280); this.setOutput(!0); this.interpolateMsg(Blockly.Msg.STDLIB_RAND_TITLE, ["VAR", "SCOPE", Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setTooltip(Blockly.Msg.STDLIB_RAND_TOOLTIP); this.tag = Blockly.Msg.TAG_STDLIB_RAND }, getScope: function () {
        var a = this; if (a.getSurroundParent()) {
            for (; "main_block" != a.type && "procedures_defnoreturn" != a.type && "procedures_defreturn" != a.type;)if (a.getSurroundParent()) a = a.getSurroundParent(); else break; return "main_block" ==
                a.type ? a.type : "procedures_defnoreturn" == a.type || "procedures_defreturn" == a.type ? a.getName() : null
        } return null
    }, onchange: Blockly.Blocks.requireInFunction
};

Blockly.Blocks.library_stdlib_rand_scope = { init: function () { this.setColour(280); this.setOutput(!0, "SCOPE"); this.interpolateMsg(Blockly.Msg.STDLIB_RANDSCOPE_TITLE, ["A", ["Number", "INT", "Variable", "VAR_INT", "VAR_UNINT"], Blockly.ALIGN_RIGHT], ["B", ["Number", "INT", "Variable", "VAR_INT", "VAR_UNINT"], Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setTooltip(Blockly.Msg.STDLIB_RAND_TOOLTIP) }, onchange: Blockly.Blocks.requireInFunction };
Blockly.Blocks.library_stdlib_number_forRandScope1 = { init: function () { this.setColour(240); this.appendDummyInput().appendField(new Blockly.FieldTextInput("1", Blockly.FieldTextInput.numberValidator), "NUM"); this.setOutput(!0, "Number"); this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP) }, onchange: Blockly.Blocks.requireInFunction };
Blockly.Blocks.library_stdlib_number_forRandScope100 = { init: function () { this.setColour(240); this.appendDummyInput().appendField(new Blockly.FieldTextInput("100", Blockly.FieldTextInput.numberValidator), "NUM"); this.setOutput(!0, "Number"); this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP) }, onchange: Blockly.Blocks.requireInFunction };
Blockly.Blocks.library_stdlib_malloc = { init: function () { this.setColour(280); this.setOutput(!0, "Pointer"); this.interpolateMsg(Blockly.Msg.STDLIB_MALLOC_TITLE, ["VAR", null, Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setInputsInline(!0); this.setTooltip(Blockly.Msg.STDLIB_MALLOC_TOOLTIP); this.tag = Blockly.Msg.TAG_STDLIB_MALLOC }, onchange: Blockly.Blocks.requireInFunction };
Blockly.Blocks.library_stdlib_sizeof_forMalloc = { init: function () { this.setColour(200); this.setOutput(!0, "Number"); this.interpolateMsg(Blockly.Msg.STDLIB_SIZEOFFORMALLOC_TITLE, ["VAR", null, Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setInputsInline(!0); this.setTooltip(Blockly.Msg.STDLIB_SIZEOFFORMALLOC_TOOLTIP) }, onchange: Blockly.Blocks.requireInFunction };
Blockly.Blocks.library_stdlib_arithmetic_forMalloc = { init: function () { this.setColour(240); this.setOutput(!0, "Number"); this.interpolateMsg(Blockly.Msg.STDLIB_ARITHFORMALLOC_TITLE, ["A", null, Blockly.ALIGN_RIGHT], ["B", "Number", Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setInputsInline(!0); this.setTooltip(Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY); this.tag = Blockly.Msg.TAG_STDLIB_SIZEOF }, onchange: Blockly.Blocks.requireInFunction };
Blockly.Blocks.library_stdlib_number_forMalloc = { init: function () { this.setColour(240); this.appendDummyInput().appendField(new Blockly.FieldTextInput("1", Blockly.FieldTextInput.numberValidator), "NUM"); this.setOutput(!0, "Number"); this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP) }, onchange: Blockly.Blocks.requireInFunction };
Blockly.Blocks.library_stdlib_free = { init: function () { this.setColour(280); this.interpolateMsg(Blockly.Msg.STDLIB_FREE_TITLE, ["VAR", "Pointer PTR_INT PTR_UNINT PTR_FLOAT PTR_DOUBLE PTR_CHAR DBPTR_INT DBPTR_UNINT DBPTR_FLOAT DBPTR_DOUBLE DBPTR_CHAR".split(" "), Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setInputsInline(!0); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.STDLIB_FREE_TOOLTIP); this.tag = Blockly.Msg.TAG_STDLIB_FREE }, onchange: Blockly.Blocks.requireInFunction };
Blockly.Blocks.library_stdlib_exit = { init: function () { var a = [[Blockly.Msg.STDLIB_EXIT_SUCCESS, "SUCCESS"], [Blockly.Msg.STDLIB_EXIT_FAILURE, "FAILURE"]]; this.setColour(280); this.interpolateMsg(Blockly.Msg.STDLIB_EXIT_TITLE, ["OPERATORS", new Blockly.FieldDropdown(a)], Blockly.ALIGN_RIGHT); this.setPreviousStatement(!0); this.setTooltip(Blockly.Msg.STDLIB_EXIT_HELPURL); this.tag = Blockly.Msg.TAG_STDLIB_EXIT }, onchange: Blockly.Blocks.requireInFunction };

Blockly.Blocks.string = {};
Blockly.Blocks.library_string_strlen = { init: function () { this.setColour(320); this.setOutput(!0, "Number"); this.interpolateMsg(Blockly.Msg.STRING_STRLEN_TITLE, ["VAR", ["String", "STR", "PTR_CHAR", "Pointer", "DBPTR_CHAR"], Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setInputsInline(!0); this.setTooltip(Blockly.Msg.STRING_STRLEN_TOOLTIP); this.tag = Blockly.Msg.TAG_STRING_STRLEN }, onchange: Blockly.Blocks.requireInFunction };
Blockly.Blocks.library_string_strcat = { init: function () { this.setColour(320); this.interpolateMsg(Blockly.Msg.STRING_STRCAT_TITLE, ["STR1", ["String", "STR", "PTR_CHAR", "Pointer", "DBPTR_CHAR"], Blockly.ALIGN_RIGHT], ["STR2", ["String", "STR", "PTR_CHAR", "Pointer", "DBPTR_CHAR"], Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setInputsInline(!0); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.STRING_STRCAT_TOOLTIP); this.tag = Blockly.Msg.TAG_STRING_STRCAT }, onchange: Blockly.Blocks.requireInFunction };
Blockly.Blocks.library_string_strcpy = { init: function () { this.setColour(320); this.interpolateMsg(Blockly.Msg.STRING_STRCPY_TITLE, ["STR1", ["String", "STR", "PTR_CHAR", "Pointer", "DBPTR_CHAR"], Blockly.ALIGN_RIGHT], ["STR2", ["String", "STR", "PTR_CHAR", "Pointer", "DBPTR_CHAR"], Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setInputsInline(!0); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.STRING_STRCPY_TOOLTIP); this.tag = Blockly.Msg.TAG_STRING_STRCPY }, onchange: Blockly.Blocks.requireInFunction };
Blockly.Blocks.library_string_strcmp = { init: function () { this.setColour(320); this.setOutput(!0, "Number"); this.interpolateMsg(Blockly.Msg.STRING_STRCMP_TITLE, ["STR1", ["String", "STR", "PTR_CHAR", "Pointer", "DBPTR_CHAR"], Blockly.ALIGN_RIGHT], ["STR2", ["String", "STR", "PTR_CHAR", "Pointer", "DBPTR_CHAR"], Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setInputsInline(!0); this.setTooltip(Blockly.Msg.STRING_STRCMP_TOOLTIP); this.tag = Blockly.Msg.TAG_STRING_STRCMP }, onchange: Blockly.Blocks.requireInFunction };

Blockly.Blocks.structure = {};

Blockly.Blocks.structure_define = {
    init: function () {
        this.setColour(370); var a = Blockly.Procedures.findLegalName(Blockly.Msg.STRUCTURE_DEFINE_NAME, this); this.appendDummyInput().appendField(Blockly.Msg.STRUCTURE_DEFINE_TITLE).appendField(new Blockly.FieldTextInput(a, Blockly.Procedures.rename), "NAME").appendField("", "PARAMS"); this.setMutator(new Blockly.Mutator(["structure_mutatormem", "structure_mutatormem_pointer", "structure_mutatormem_array"])); this.setTooltip(Blockly.Msg.STRUCTURE_DEFINE_TOOPTIP); this.members_ =
            []; this.types_ = []; this.dist_ = []; this.spec_ = []; this.statementConnection_ = null; this.setPreviousStatement(!0); this.setNextStatement(!0); this.tag = Blockly.Msg.TAG_STRUCTURE_DEFINE
    }, initName: function () { this.setFieldValue("", "NAME") }, updateParams_: function () {
        for (var a = !1, c = {}, b = 0; b < this.members_.length; b++) { if (c["arg_" + this.members_[b].toLowerCase()]) { a = !0; break } c["arg_" + this.members_[b].toLowerCase()] = !0 } a ? this.setWarningText(Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING) : this.setWarningText(null); a = "";
        if (this.members_.length) for (a = Blockly.Msg.PROCEDURES_BEFORE_PARAMS, b = 0; b < this.members_.length; b++)0 == b ? "v" == this.dist_[b] ? a = a + " " + this.types_[b] + " " + this.members_[b] : "a" == this.dist_[b] ? a = a + " " + this.types_[b] + " " + this.members_[b] + "[" + this.spec_[b] + "]" : "p" == this.dist_[b] && (a = a + " " + this.types_[b] + this.spec_[b] + " " + this.members_[b]) : "v" == this.dist_[b] ? a = a + ", " + this.types_[b] + " " + this.members_[b] : "a" == this.dist_[b] ? a = a + ", " + this.types_[b] + " " + this.members_[b] + "[" + this.spec_[b] + "]" : "p" == this.dist_[b] &&
            (a = a + ", " + this.types_[b] + this.spec_[b] + " " + this.members_[b]); this.setFieldValue(a, "PARAMS")
    }, mutationToDom: function () { for (var a = document.createElement("mutation"), c = 0; c < this.members_.length; c++) { var b = document.createElement("arg"); b.setAttribute("name", this.members_[c]); b.setAttribute("types", this.types_[c]); b.setAttribute("dist", this.dist_[c]); "a" == this.dist_[c] ? b.setAttribute("length", this.spec_[c]) : "p" == this.dist_[c] && b.setAttribute("iteration", this.spec_[c]); a.appendChild(b) } return a }, domToMutation: function (a) {
        this.members_ =
        []; for (var c = 0, b; b = a.childNodes[c]; c++)"arg" == b.nodeName.toLowerCase() && (this.members_.push(b.getAttribute("name")), this.types_.push(b.getAttribute("types")), this.dist_.push(b.getAttribute("dist")), "v" == b.getAttribute("dist") ? this.spec_.push(null) : "a" == b.getAttribute("dist") ? this.spec_.push(b.getAttribute("length")) : "p" == b.getAttribute("dist") && this.spec_.push(b.getAttribute("iteration"))); this.updateParams_()
    }, decompose: function (a) {
        var c = Blockly.Block.obtain(a, "structure_mutatorcontainer"); c.initSvg();
        for (var b = c.getInput("STACK").connection, d = 0; d < this.members_.length; d++) {
            if ("v" == this.dist_[d]) { var e = Blockly.Block.obtain(a, "structure_mutatormem"); e.initSvg(); e.setFieldValue(this.members_[d], "NAME"); e.setFieldValue(this.types_[d], "TYPES") } else "a" == this.dist_[d] ? (e = Blockly.Block.obtain(a, "structure_mutatormem_array"), e.initSvg(), e.setFieldValue(this.members_[d], "NAME"), e.setFieldValue(this.types_[d], "TYPES"), e.setFieldValue(this.spec_[d], "LENGTH")) : "p" == this.dist_[d] && (e = Blockly.Block.obtain(a,
                "structure_mutatormem_pointer"), e.initSvg(), e.setFieldValue(this.members_[d], "NAME"), e.setFieldValue(this.types_[d], "TYPES"), e.setFieldValue(this.spec_[d], "ITERATION")); e.oldLocation = d; b.connect(e.previousConnection); b = e.nextConnection
        } Blockly.Procedures.mutateCallers(this.getFieldValue("NAME"), this.getFieldValue("TYPES"), this.workspace, this.members_, this.types_, this.dist_, this.spec_, null); return c
    }, compose: function (a) {
        this.members_ = []; this.types_ = []; this.paramIds_ = []; this.dist_ = []; this.spec_ = [];
        for (var c = a.getInputTargetBlock("STACK"); c;)this.members_.push(c.getFieldValue("NAME")), this.types_.push(c.getFieldValue("TYPES")), this.dist_.push(c.getDist()), "v" == c.getDist() ? this.spec_.push(c.getFieldValue()) : "a" == c.getDist() ? this.spec_.push(c.getFieldValue("LENGTH")) : "p" == c.getDist() && this.spec_.push(c.getFieldValue("ITERATION")), this.paramIds_.push(c.id), c = c.nextConnection && c.nextConnection.targetBlock(); this.updateParams_(); Blockly.Procedures.mutateCallers(this.getFieldValue("NAME"), this.getFieldValue("TYPES"),
            this.workspace, this.members_, this.types_, this.dist_, this.spec_, this.paramIds_); a = a.getFieldValue("STATEMENTS"); if (null !== a && (a = "TRUE" == a, c = this.getInput("STACK"), c.isVisible() != a)) {
                if (a) c.connection.targetConnection || !this.statementConnection_ || this.statementConnection_.targetConnection || this.statementConnection_.sourceBlock_.workspace != this.workspace ? this.statementConnection_ = null : c.connection.connect(this.statementConnection_); else if (this.statementConnection_ = c.connection.targetConnection) {
                    var b =
                        c.connection.targetBlock(); b.setParent(null); b.bumpNeighbours_()
                } c.setVisible(a)
            }
    }, dispose: function () { var a = this.getFieldValue("NAME"); this.getFieldValue("TYPES"); Blockly.Procedures.disposeCallers(a, this.workspace); Blockly.Block.prototype.dispose.apply(this, arguments) }, getMems: function () { return this.members_ }, getTypes: function () { return this.types_ }, renameVar: function (a, c) {
        for (var b = !1, d = 0; d < this.members_.length; d++)Blockly.Names.equals(a, this.members_[d]) && (this.members_[d] = c, b = !0); if (b && (this.updateParams_(),
            this.mutator.isVisible_())) { b = this.mutator.workspace_.getAllBlocks(); d = 0; for (var e; e = b[d]; d++)"structure_mutatormem" == e.type && Blockly.Names.equals(a, e.getFieldValue("NAME")) && e.setFieldValue(c, "NAME") }
    }, getDist: function () { return ["sd"] }, getStructDefine: function () { return ["sd", this.getFieldValue("NAME"), this.types_, this.members_, this.dist_, this.spec_] }, getName: function () { return [this.getFieldValue("NAME")] }, callType_: "procedures_callnoreturn"
};
Blockly.Blocks.structure_declare = {
    init: function () {
        this.setColour(370); var a = Blockly.Procedures.findLegalName(Blockly.Msg.STRUCTURE_DECLARE_NAME, this); this.interpolateMsg(Blockly.Msg.STRUCTURE_DECLARE_TITLE + " %1 " + Blockly.Msg.STRUCTURE_DECLARE_TALE + " %2", ["TYPES", new Blockly.FieldStructure(Blockly.Msg.SELECT_TYPE, null)], ["NAME", new Blockly.FieldTextInput(a, Blockly.Procedures.rename), Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.STRUCTURE_DECLARE_TOOPTIP);
        this.tag = Blockly.Msg.TAG_STRUCTURE_DECLARE
    }, initName: Blockly.Blocks.structure_define.initName, getTypes: function () { return [this.getFieldValue("TYPES")] }, renameVar: function (a, c) { Blockly.Names.equals(a, this.getFieldValue("NAME")) && this.setFieldValue(c, "NAME") }, getDist: function () { return ["sn"] }, getStructDeclare: function () { return [this.getFieldValue("NAME")] }, onchange: Blockly.Blocks.variablePlaceCheck
};
Blockly.Blocks.structure_get = {
    init: function () { this.setColour(370); this.appendDummyInput("struct").appendField("", "NAME").appendField(Blockly.Msg.STRUCTURE_GET_MEMBER).appendField(new Blockly.FieldStructureMember(Blockly.Msg.SELECT_MENU, null, this), "Mem"); this.setOutput(!0); this.setTooltip(Blockly.Msg.STRUCTURE_GET_TOOLTIP); this.tag = Blockly.Msg.TAG_STRUCTURE_GET }, getStructureCall: function () { return this.getFieldValue("NAME") }, renameProcedure: function (a, c) {
        Blockly.Names.equals(a, this.getStructureCall()) &&
        (this.setFieldValue(c, "NAME"), this.setTooltip((this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", c)))
    }, mutationToDom: function () { var a = document.createElement("mutation"); a.setAttribute("name", this.getStructureCall()); return a }, domToMutation: function (a) {
        a = a.getAttribute("name"); this.setFieldValue(a, "NAME"); this.setTooltip((this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1",
            a))
    }, onchange: Blockly.Blocks.requireInFunction
};
Blockly.Blocks.structure_set = {
    init: function () { this.setColour(370); this.appendDummyInput("struct").appendField("", "NAME").appendField(Blockly.Msg.STRUCTURE_SET_MEMBER).appendField(new Blockly.FieldStructureMember(Blockly.Msg.SELECT_MENU, null, this), "Mem"); this.appendValueInput("VALUE"); this.setInputsInline(!0); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.STRUCTURE_SET_TOOLTIP); this.tag = Blockly.Msg.TAG_STRUCTURE_SET }, getStructureCall: function () { return this.getFieldValue("NAME") },
    renameProcedure: function (a, c) { Blockly.Names.equals(a, this.getStructureCall()) && (this.setFieldValue(c, "NAME"), this.setTooltip((this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", c))) }, mutationToDom: function () { var a = document.createElement("mutation"); a.setAttribute("name", this.getStructureCall()); return a }, domToMutation: function (a) {
        a = a.getAttribute("name"); this.setFieldValue(a, "NAME"); this.setTooltip((this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP :
            Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", a))
    }, onchange: Blockly.Blocks.requireInFunction
}; Blockly.Blocks.structure_mutatorcontainer = { init: function () { this.setColour(370); this.appendDummyInput().appendField(Blockly.Msg.STRUCTURE_MUTATORCONTAINER_TITLE); this.appendStatementInput("STACK"); this.setTooltip(Blockly.Msg.STRUCTURE_MUTATORCONTAINER_TOOLTIP); this.contextMenu = !1 } };
Blockly.Blocks.structure_mutatormem = {
    init: function () {
        var a = [[Blockly.Msg.VARIABLES_SET_TYPE_INT, "int"], [Blockly.Msg.VARIABLES_SET_TYPE_UNSIGNED_INT, "unsigned int"], [Blockly.Msg.VARIABLES_SET_TYPE_FLOAT, "float"], [Blockly.Msg.VARIABLES_SET_TYPE_DOUBLE, "double"], [Blockly.Msg.VARIABLES_SET_TYPE_CHAR, "char"]]; this.setColour(370); this.appendDummyInput().appendField(Blockly.Msg.STRUCTURE_MUTATORMEM_VAR).appendField(new Blockly.FieldDropdown(a), "TYPES").appendField(Blockly.Msg.STRUCTURE_MUTATORARG_NAME).appendField(new Blockly.FieldTextInput("x",
            this.validator_), "NAME"); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.STRUCTURE_MUTATORARG_TOOLTIP); this.contextMenu = !1
    }, validator_: function (a) { return (a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "")) || null }, getTypes: function () { return [this.getFieldValue("TYPES")] }, getDist: function () { return "v" }, getSpec: function () { return null }
};
Blockly.Blocks.structure_mutatormem_array = {
    init: function () {
        var a = [[Blockly.Msg.VARIABLES_SET_TYPE_CHAR, "char"]]; this.setColour(370); this.interpolateMsg(Blockly.Msg.STRUCTURE_MUTATORMEM_ARRAY + "%1 " + Blockly.Msg.VARIABLES_ARRAY_DECLARE_LENGTH + " %2 " + Blockly.Msg.VARIABLES_DECLARE_NAME + " %3 ", ["TYPES", new Blockly.FieldDropdown(a)], ["LENGTH", new Blockly.FieldTextInput("20")], ["NAME", new Blockly.FieldTextInput("z", Blockly.Blocks.CNameValidator)], Blockly.ALIGN_RIGHT); this.setPreviousStatement(!0); this.setNextStatement(!0);
        this.setTooltip(Blockly.Msg.STRUCTURE_MUTATORARG_TOOLTIP); this.contextMenu = !1
    }, validator_: function (a) { return (a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "")) || null }, getTypes: function () { return [this.getFieldValue("TYPES")] }, getDist: function () { return "a" }, getSpec: function () { return [this.getFieldValue("LENGTH")] }
};
Blockly.Blocks.structure_mutatormem_pointer = {
    init: function () {
        var a = [[Blockly.Msg.VARIABLES_SET_TYPE_INT, "int"], [Blockly.Msg.VARIABLES_SET_TYPE_UNSIGNED_INT, "unsigned int"], [Blockly.Msg.VARIABLES_SET_TYPE_FLOAT, "float"], [Blockly.Msg.VARIABLES_SET_TYPE_DOUBLE, "double"], [Blockly.Msg.VARIABLES_SET_TYPE_CHAR, "char"]], c = [[Blockly.Msg.VARIABLES_SET_ITERATION_NORMAL, "*"], [Blockly.Msg.VARIABLES_SET_ITERATION_DOUBLE, "**"], [Blockly.Msg.VARIABLES_SET_ITERATION_TRIPLE, "***"]]; this.setColour(370); this.interpolateMsg(Blockly.Msg.STRUCTURE_MUTATORMEM_POINTER +
            "%1 " + Blockly.Msg.VARIABLES_POINTER_DECLARE_ITERATION + " %2 " + Blockly.Msg.VARIABLES_DECLARE_NAME + " %3 ", ["TYPES", new Blockly.FieldDropdown(a)], ["ITERATION", new Blockly.FieldDropdown(c)], ["NAME", new Blockly.FieldTextInput("y", Blockly.Blocks.CNameValidator)], Blockly.ALIGN_RIGHT); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.STRUCTURE_MUTATORARG_TOOLTIP); this.contextMenu = !1
    }, validator_: function (a) { return (a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "")) || null },
    getTypes: function () { return [this.getFieldValue("TYPES")] }, getDist: function () { return "p" }, getSpec: function () { return [this.getFieldValue("ITERATION")] }
};

Blockly.Blocks.text = {}; Blockly.Blocks.text = { init: function () { this.setColour(160); this.appendDummyInput().appendField(new Blockly.FieldTextInput(""), "TEXT"); this.setOutput(!0, "String"); this.setTooltip(Blockly.Msg.TEXT_TEXT_TOOLTIP) }, newQuote_: function (a) { return new Blockly.FieldImage(Blockly.pathToBlockly + "cakeblocklyC/media/" + (a == Blockly.RTL ? "quote1.png" : "quote0.png"), 12, 12, '"') } };
Blockly.Blocks.text_join = {
    init: function () { this.setColour(160); this.appendValueInput("ADD0").appendField(Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH); this.appendValueInput("ADD1"); this.setOutput(!0, "String"); this.setMutator(new Blockly.Mutator(["text_create_join_item"])); this.setTooltip(Blockly.Msg.TEXT_JOIN_TOOLTIP); this.itemCount_ = 2 }, mutationToDom: function () { var a = document.createElement("mutation"); a.setAttribute("items", this.itemCount_); return a }, domToMutation: function (a) {
        for (var b = 0; b < this.itemCount_; b++)this.removeInput("ADD" +
            b); this.itemCount_ = parseInt(a.getAttribute("items"), 10); for (b = 0; b < this.itemCount_; b++)a = this.appendValueInput("ADD" + b), 0 == b && a.appendField(Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH); 0 == this.itemCount_ && this.appendDummyInput("EMPTY").appendField(new Blockly.FieldImage(Blockly.pathToBlockly + "media/quote0.png", 12, 12, '"')).appendField(new Blockly.FieldImage(Blockly.pathToBlockly + "media/quote1.png", 12, 12, '"'))
    }, decompose: function (a) {
        var b = Blockly.Block.obtain(a, "text_create_join_container"); b.initSvg(); for (var c =
            b.getInput("STACK").connection, e = 0; e < this.itemCount_; e++) { var d = Blockly.Block.obtain(a, "text_create_join_item"); d.initSvg(); c.connect(d.previousConnection); c = d.nextConnection } return b
    }, compose: function (a) {
        if (0 == this.itemCount_) this.removeInput("EMPTY"); else for (var b = this.itemCount_ - 1; 0 <= b; b--)this.removeInput("ADD" + b); this.itemCount_ = 0; for (a = a.getInputTargetBlock("STACK"); a;)b = this.appendValueInput("ADD" + this.itemCount_), 0 == this.itemCount_ && b.appendField(Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH), a.valueConnection_ &&
            b.connection.connect(a.valueConnection_), this.itemCount_++, a = a.nextConnection && a.nextConnection.targetBlock(); 0 == this.itemCount_ && this.appendDummyInput("EMPTY").appendField(new Blockly.FieldImage(Blockly.pathToBlockly + "media/quote0.png", 12, 12, '"')).appendField(new Blockly.FieldImage(Blockly.pathToBlockly + "media/quote1.png", 12, 12, '"'))
    }, saveConnections: function (a) {
        a = a.getInputTargetBlock("STACK"); for (var b = 0; a;) {
            var c = this.getInput("ADD" + b); a.valueConnection_ = c && c.connection.targetConnection; b++; a =
                a.nextConnection && a.nextConnection.targetBlock()
        }
    }
}; Blockly.Blocks.text_create_join_container = { init: function () { this.setColour(160); this.appendDummyInput().appendField(Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN); this.appendStatementInput("STACK"); this.setTooltip(Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP); this.contextMenu = !1 } };
Blockly.Blocks.text_create_join_item = { init: function () { this.setColour(160); this.appendDummyInput().appendField(Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP); this.contextMenu = !1 } };
Blockly.Blocks.text_append = {
    init: function () { this.setColour(160); this.appendValueInput("TEXT").appendField(Blockly.Msg.TEXT_APPEND_TO).appendField(new Blockly.FieldVariable(Blockly.Msg.TEXT_APPEND_VARIABLE), "VAR").appendField(Blockly.Msg.TEXT_APPEND_APPENDTEXT); this.setPreviousStatement(!0); this.setNextStatement(!0); var a = this; this.setTooltip(function () { return Blockly.Msg.TEXT_APPEND_TOOLTIP.replace("%1", a.getFieldValue("VAR")) }) }, getVars: function () { return [this.getFieldValue("VAR")] }, renameVar: function (a,
        b) { Blockly.Names.equals(a, this.getFieldValue("VAR")) && this.setFieldValue(b, "VAR") }
}; Blockly.Blocks.text_length = { init: function () { this.setColour(160); this.interpolateMsg(Blockly.Msg.TEXT_LENGTH_TITLE, ["VALUE", ["String", "Array"], Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setOutput(!0, "Number"); this.setTooltip(Blockly.Msg.TEXT_LENGTH_TOOLTIP) } };
Blockly.Blocks.text_isEmpty = { init: function () { this.setColour(160); this.interpolateMsg(Blockly.Msg.TEXT_ISEMPTY_TITLE, ["VALUE", ["String", "Array"], Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setOutput(!0, "Boolean"); this.setTooltip(Blockly.Msg.TEXT_ISEMPTY_TOOLTIP) } };
Blockly.Blocks.text_indexOf = {
    init: function () {
        var a = [[Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST, "FIRST"], [Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST, "LAST"]]; this.setColour(160); this.setOutput(!0, "Number"); this.appendValueInput("VALUE").setCheck("String").appendField(Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT); this.appendValueInput("FIND").setCheck("String").appendField(new Blockly.FieldDropdown(a), "END"); Blockly.Msg.TEXT_INDEXOF_TAIL && this.appendDummyInput().appendField(Blockly.Msg.TEXT_INDEXOF_TAIL); this.setInputsInline(!0);
        this.setTooltip(Blockly.Msg.TEXT_INDEXOF_TOOLTIP)
    }
};
Blockly.Blocks.text_charAt = {
    init: function () {
        this.WHERE_OPTIONS = [[Blockly.Msg.TEXT_CHARAT_FROM_START, "FROM_START"], [Blockly.Msg.TEXT_CHARAT_FROM_END, "FROM_END"], [Blockly.Msg.TEXT_CHARAT_FIRST, "FIRST"], [Blockly.Msg.TEXT_CHARAT_LAST, "LAST"], [Blockly.Msg.TEXT_CHARAT_RANDOM, "RANDOM"]]; this.setColour(160); this.setOutput(!0, "String"); this.appendValueInput("VALUE").setCheck("String").appendField(Blockly.Msg.TEXT_CHARAT_INPUT_INTEXT); this.appendDummyInput("AT"); this.setInputsInline(!0); this.updateAt_(!0);
        this.setTooltip(Blockly.Msg.TEXT_CHARAT_TOOLTIP)
    }, mutationToDom: function () { var a = document.createElement("mutation"), b = this.getInput("AT").type == Blockly.INPUT_VALUE; a.setAttribute("at", b); return a }, domToMutation: function (a) { a = "false" != a.getAttribute("at"); this.updateAt_(a) }, updateAt_: function (a) {
        this.removeInput("AT"); this.removeInput("ORDINAL", !0); a ? (this.appendValueInput("AT").setCheck("Number"), Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL").appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) :
            this.appendDummyInput("AT"); Blockly.Msg.TEXT_CHARAT_TAIL && (this.removeInput("TAIL", !0), this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_CHARAT_TAIL)); var b = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function (b) { var e = "FROM_START" == b || "FROM_END" == b; if (e != a) { var d = this.sourceBlock_; d.updateAt_(e); d.setFieldValue(b, "WHERE"); return null } }); this.getInput("AT").appendField(b, "WHERE")
    }
};
Blockly.Blocks.text_getSubstring = {
    init: function () {
        this.WHERE_OPTIONS_1 = [[Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START, "FROM_START"], [Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END, "FROM_END"], [Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST, "FIRST"]]; this.WHERE_OPTIONS_2 = [[Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START, "FROM_START"], [Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END, "FROM_END"], [Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST, "LAST"]]; this.setColour(160); this.appendValueInput("STRING").setCheck("String").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT);
        this.appendDummyInput("AT1"); this.appendDummyInput("AT2"); Blockly.Msg.TEXT_GET_SUBSTRING_TAIL && this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_TAIL); this.setInputsInline(!0); this.setOutput(!0, "String"); this.updateAt_(1, !0); this.updateAt_(2, !0); this.setTooltip(Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP)
    }, mutationToDom: function () {
        var a = document.createElement("mutation"), b = this.getInput("AT1").type == Blockly.INPUT_VALUE; a.setAttribute("at1", b); b = this.getInput("AT2").type == Blockly.INPUT_VALUE;
        a.setAttribute("at2", b); return a
    }, domToMutation: function (a) { var b = "true" == a.getAttribute("at1"); a = "true" == a.getAttribute("at2"); this.updateAt_(1, b); this.updateAt_(2, a) }, updateAt_: function (a, b) {
        this.removeInput("AT" + a); this.removeInput("ORDINAL" + a, !0); b ? (this.appendValueInput("AT" + a).setCheck("Number"), Blockly.Msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL" + a).appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX)) : this.appendDummyInput("AT" + a); 2 == a && Blockly.Msg.TEXT_GET_SUBSTRING_TAIL && (this.removeInput("TAIL",
            !0), this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_GET_SUBSTRING_TAIL)); var c = new Blockly.FieldDropdown(this["WHERE_OPTIONS_" + a], function (c) { var d = "FROM_START" == c || "FROM_END" == c; if (d != b) { var g = this.sourceBlock_; g.updateAt_(a, d); g.setFieldValue(c, "WHERE" + a); return null } }); this.getInput("AT" + a).appendField(c, "WHERE" + a); 1 == a && this.moveInputBefore("AT1", "AT2")
    }
};
Blockly.Blocks.text_changeCase = { init: function () { var a = [[Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE, "UPPERCASE"], [Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE, "LOWERCASE"], [Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE, "TITLECASE"]]; this.setColour(160); this.appendValueInput("TEXT").setCheck("String").appendField(new Blockly.FieldDropdown(a), "CASE"); this.setOutput(!0, "String"); this.setTooltip(Blockly.Msg.TEXT_CHANGECASE_TOOLTIP) } };
Blockly.Blocks.text_trim = { init: function () { var a = [[Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH, "BOTH"], [Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT, "LEFT"], [Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT, "RIGHT"]]; this.setColour(160); this.appendValueInput("TEXT").setCheck("String").appendField(new Blockly.FieldDropdown(a), "MODE"); this.setOutput(!0, "String"); this.setTooltip(Blockly.Msg.TEXT_TRIM_TOOLTIP) } };
Blockly.Blocks.text_print = { init: function () { this.setColour(160); this.interpolateMsg(Blockly.Msg.TEXT_PRINT_TITLE, ["TEXT", null, Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.TEXT_PRINT_TOOLTIP) } };
Blockly.Blocks.text_prompt = {
    init: function () {
        var a = [[Blockly.Msg.TEXT_PROMPT_TYPE_TEXT, "TEXT"], [Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"]], b = this; this.setColour(160); a = new Blockly.FieldDropdown(a, function (a) { "NUMBER" == a ? b.changeOutput("Number") : b.changeOutput("String") }); this.appendDummyInput().appendField(a, "TYPE").appendField(this.newQuote_(!0)).appendField(new Blockly.FieldTextInput(""), "TEXT").appendField(this.newQuote_(!1)); this.setOutput(!0, "String"); b = this; this.setTooltip(function () {
            return "TEXT" ==
                b.getFieldValue("TYPE") ? Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT : Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER
        })
    }, newQuote_: Blockly.Blocks.text.newQuote_
};
Blockly.Blocks.text_prompt_ext = { init: function () { var a = [[Blockly.Msg.TEXT_PROMPT_TYPE_TEXT, "TEXT"], [Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"]], b = this; this.setColour(160); a = new Blockly.FieldDropdown(a, function (a) { "NUMBER" == a ? b.changeOutput("Number") : b.changeOutput("String") }); this.appendValueInput("TEXT").appendField(a, "TYPE"); this.setOutput(!0, "String"); b = this; this.setTooltip(function () { return "TEXT" == b.getFieldValue("TYPE") ? Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT : Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER }) } }; Blockly.Blocks.time = {};
Blockly.Blocks.library_time_current = {
    init: function () { this.setColour(280); this.interpolateMsg(Blockly.Msg.TIME_TIME_CURRENT_TITLE, Blockly.ALIGN_RIGHT); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.TIME_CURRENT_TOOLTIP); this.tag = Blockly.Msg.TAG_TIME_CURRENT }, getScope: function () {
        var a = this; if (a.getSurroundParent()) {
            for (; "main_block" != a.type && "procedures_defnoreturn" != a.type && "procedures_defreturn" != a.type;)a.getSurroundParent() && (a = a.getSurroundParent()); if ("main_block" ==
                a.type) return a.type; if ("procedures_defnoreturn" == a.type || "procedures_defreturn" == a.type) return a.getName()
        } else return null
    }, onchange: Blockly.Blocks.requireInFunction
};
Blockly.Blocks.library_time_requiredTime = {
    init: function () { this.setColour(280); this.interpolateMsg(Blockly.Msg.TIME_REQUIREDTIME_TITLE, Blockly.ALIGN_RIGHT); this.appendStatementInput("DO"); this.interpolateMsg(Blockly.Msg.TIME_REQRUIEDTIME_TALE, ["SAVE", ["VAR_DOUBLE", "Variable"], Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setInputsInline(!0); this.setTooltip(Blockly.Msg.TIME_REQUIREDTIME_TOOLTIP); this.tag = Blockly.Msg.TAG_TIME_REQUIREDTIME }, getScope: function () {
        var a =
            this; if (a.getSurroundParent()) { for (; "main_block" != a.type && "procedures_defnoreturn" != a.type && "procedures_defreturn" != a.type;)a.getSurroundParent() && (a = a.getSurroundParent()); if ("main_block" == a.type) return a.type; if ("procedures_defnoreturn" == a.type || "procedures_defreturn" == a.type) return a.getName() } else return null
    }, onchange: Blockly.Blocks.requireInFunction
};

Blockly.Blocks.variables = {};
Blockly.Blocks.define_get = {
    init: function () { this.setColour(160); this.appendDummyInput().appendField(Blockly.Msg.DEFINE_GET_TITLE).appendField(new Blockly.FieldVariableDefine(Blockly.Msg.SELECT_MENU, null, this), "VAR").appendField(Blockly.Msg.VARIABLES_GET_TAIL); this.setOutput(!0, "Macro"); this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP); this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET; this.contextMenuType_ = "variables_set"; this.tag = Blockly.Msg.TAG_DEFINE_GET }, getTags: function () { return this.tag }, getVars: function () { return [this.getFieldValue("VAR")] },
    renameVar: function (a, b) { Blockly.Names.equals(a, this.getFieldValue("VAR")) && this.setFieldValue(b, "VAR") }, customContextMenu: function (a) { var b = { enabled: !0 }, c = this.getFieldValue("VAR"); b.text = this.contextMenuMsg_.replace("%1", c); c = goog.dom.createDom("field", null, c); c.setAttribute("name", "VAR"); c = goog.dom.createDom("block", null, c); c.setAttribute("type", this.contextMenuType_); b.callback = Blockly.ContextMenu.callbackFactory(this, c); a.push(b) }, onchange: Blockly.Blocks.requireInFunction
};
Blockly.Blocks.define_declare = {
    init: function () {
        this.setColour(160); var a = Blockly.Procedures.findLegalName(Blockly.Msg.DEFINE_DECLARE_DEFAULT_NAME, this); this.interpolateMsg(Blockly.Msg.DEFINE_DECLARE_TITLE + " " + Blockly.Msg.VARIABLES_DECLARE_NAME + " %1 " + Blockly.Msg.DEFINE_DECLARE_INIT + " %2", ["VAR", new Blockly.FieldTextInput(a, Blockly.Procedures.rename)], ["VALUE", null, Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setPreviousStatement(!0, ["define_declare"]); this.setNextStatement(!0, ["define_declare",
            "main_block"]); this.setTooltip(Blockly.Msg.VARIABLES_DECLARE_TOOLTIP); this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET; this.contextMenuType_ = "define_get"; this.tag = Blockly.Msg.TAG_DEFINE_DECLARE; this.macroType_ = "Macro"
    }, initVar: function () { this.setFieldValue("", "VAR") }, getTypes: function () { return [this.macroType_] }, getDist: function () { return "d" }, getScope: function () { return ["Global"] }, getSpec: function () { return null }, getPos: function () { return this.getRelativeToSurfaceXY().y }, getDeclare: function () { return [this.getFieldValue("VAR")] },
    getVars: function () { return [this.getFieldValue("VAR")] }, renameVar: function (a, b) { Blockly.Names.equals(a, this.getFieldValue("VAR")) && this.setFieldValue(b, "VAR") }, customContextMenu: Blockly.Blocks.define_get.customContextMenu, onchange: function () { Blockly.Blocks.requireOutFunction(); if (this.getInputTargetBlock("VALUE")) { var a = this.getInputTargetBlock("VALUE"); a.type.match("math") ? this.macroType_ = "int" : a.type.match("text") && (1 == a.getFieldValue("TEXT").length ? this.macroType_ = "char" : this.macroType_ = "dbchar") } }
};

Blockly.Blocks.variables_get = {
    init: function () { this.setColour(350); this.appendDummyInput().appendField(Blockly.Msg.VARIABLES_GET_TITLE).appendField(new Blockly.FieldVariable(Blockly.Msg.SELECT_MENU, null, this), "VAR").appendField(Blockly.Msg.VARIABLES_GET_TAIL); this.setOutput(!0, "Variable"); this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP); this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET; this.contextMenuType_ = "variables_set"; this.tag = Blockly.Msg.TAG_VARIABLE_GET }, getVars: function () { return [this.getFieldValue("VAR")] },
    getPos: function () { return this.getRelativeToSurfaceXY().y }, renameVar: function (a, b) { Blockly.Names.equals(a, this.getFieldValue("VAR")) && this.setFieldValue(b, "VAR") }, customContextMenu: function (a) { var b = { enabled: !0 }, c = this.getFieldValue("VAR"); b.text = this.contextMenuMsg_.replace("%1", c); c = goog.dom.createDom("field", null, c); c.setAttribute("name", "VAR"); c = goog.dom.createDom("block", null, c); c.setAttribute("type", this.contextMenuType_); b.callback = Blockly.ContextMenu.callbackFactory(this, c); a.push(b) }, onchange: function () {
        Blockly.Blocks.requireInFunction(this);
        var a = this.getFieldValue("VAR"); a = Blockly.FieldDropdown.prototype.getTypefromVars(a, 0); this.setOutputType("VAR", a)
    }, setOutputType: function (a, b) { switch (b) { case "int": this.changeOutput(a + "_INT"); break; case "unsigned int": this.changeOutput(a + "_UNINT"); break; case "float": this.changeOutput(a + "_FLOAT"); break; case "double": this.changeOutput(a + "_DOUBLE"); break; case "char": this.changeOutput(a + "_CHAR") } }
};
Blockly.Blocks.variables_set = {
    init: function () { this.setColour(350); this.interpolateMsg(Blockly.Msg.VARIABLES_SET_TITLE + " %1 " + Blockly.Msg.VARIABLES_SET_TAIL + " %2", ["VAR", new Blockly.FieldVariable(Blockly.Msg.SELECT_MENU, null, this)], ["VALUE", null, Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP); this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET; this.contextMenuType_ = "variables_get"; this.tag = Blockly.Msg.TAG_VARIABLE_SET },
    getVars: function () { return [this.getFieldValue("VAR")] }, getPos: function () { return this.getRelativeToSurfaceXY().y }, renameVar: function (a, b) { Blockly.Names.equals(a, this.getFieldValue("VAR")) && this.setFieldValue(b, "VAR") }, customContextMenu: Blockly.Blocks.variables_get.customContextMenu, onchange: function () { Blockly.Blocks.requireInFunction(this); var a = this.getFieldValue("VAR"); a = Blockly.FieldDropdown.prototype.getTypefromVars(a, 0); 0 == a && (a = "int"); Blockly.Blocks.setCheckVariable(this, a, "VALUE") }
};

Blockly.Blocks.variables_declare = {
    init: function () {
        var a = [[Blockly.Msg.VARIABLES_SET_TYPE_INT, "int"], [Blockly.Msg.VARIABLES_SET_TYPE_UNSIGNED_INT, "unsigned int"], [Blockly.Msg.VARIABLES_SET_TYPE_FLOAT, "float"], [Blockly.Msg.VARIABLES_SET_TYPE_DOUBLE, "double"], [Blockly.Msg.VARIABLES_SET_TYPE_CHAR, "char"]]; this.setColour(350); var b = Blockly.Procedures.findLegalName(Blockly.Msg.VARIABLES_DECLARE_DEFAULT_NAME, this); this.interpolateMsg("%1 " + Blockly.Msg.VARIABLES_DECLARE_TITLE + Blockly.Msg.VARIABLES_DECLARE_NAME +
            " %2 " + Blockly.Msg.VARIABLES_DECLARE_INIT + " %3 ", ["TYPES", new Blockly.FieldDropdown(a, null, this)], ["VAR", new Blockly.FieldTextInput(b, Blockly.Procedures.rename)], ["VALUE", null, Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.VARIABLES_DECLARE_TOOLTIP); this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET; this.contextMenuType_ = "variables_get"; this.tag = Blockly.Msg.TAG_VARIABLE_DECLARE; this.oldName = b
    }, initVar: Blockly.Blocks.define_declare.initVar,
    getDist: function () { return "v" }, getScope: function () { if (this.getSurroundParent()) return this.getSurroundParent().getName() }, getSpec: function () { return null }, getPos: function () { return this.getRelativeToSurfaceXY().y }, getTypes: function () { return [this.getFieldValue("TYPES")] }, getVars: function () { return [this.getFieldValue("VAR")] }, getDeclare: function () { return [this.getFieldValue("VAR")] }, renameVar: function (a, b) { Blockly.Names.equals(a, this.getFieldValue("VAR")) && this.setFieldValue(b, "VAR") }, customContextMenu: Blockly.Blocks.variables_get.customContextMenu,
    onchange: function () { Blockly.Blocks.variablePlaceCheck(this); var a = this.getFieldValue("TYPES"); 0 == a && (a = "int"); Blockly.Blocks.setCheckVariable(this, a, "VALUE"); a = this.getFieldValue("VAR"); if (this.oldName != a) { var b = this.getScope(); b && Blockly.Variables.renameVariablebyScope(this.oldName, a, b[0]); this.oldName = a } }
};

Blockly.Blocks.variables_pointer_get = {
    init: function () { this.setColour(25); this.appendDummyInput().appendField(Blockly.Msg.POINTER_GET_TITLE).appendField(new Blockly.FieldVariablePointer(Blockly.Msg.SELECT_MENU, null, this), "VAR").appendField(Blockly.Msg.VARIABLES_GET_TAIL); this.setOutput(!0, "Pointer"); this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP); this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET; this.contextMenuType_ = "variables_pointer_set"; this.tag = Blockly.Msg.TAG_VARIABLE_POINTER_GET },
    getVars: function () { return [this.getFieldValue("VAR")] }, getPos: function () { return this.getRelativeToSurfaceXY().y }, renameVar: function (a, b) { Blockly.Names.equals(a, this.getFieldValue("VAR")) && this.setFieldValue(b, "VAR") }, customContextMenu: function (a) {
        var b = { enabled: !0 }, c = this.getFieldValue("VAR"); b.text = this.contextMenuMsg_.replace("%1", c); c = goog.dom.createDom("field", null, c); c.setAttribute("name", "VAR"); c = goog.dom.createDom("block", null, c); c.setAttribute("type", this.contextMenuType_); b.callback = Blockly.ContextMenu.callbackFactory(this,
            c); a.push(b)
    }, onchange: function () { Blockly.Blocks.requireInFunction(this); var a = this.getFieldValue("VAR"), b = Blockly.FieldDropdown.prototype.getTypefromVars(a, 0), a = Blockly.FieldDropdown.prototype.getTypefromVars(a, 5); "*" == a ? this.setOutputType("PTR", b) : "**" == a && this.setOutputType("DBPTR", b) }, setOutputType: Blockly.Blocks.variables_get.setOutputType
};

Blockly.Blocks.variables_pointer_set = {
    init: function () {
        this.setColour(25); this.interpolateMsg(Blockly.Msg.VARIABLES_SET_TITLE + " %1 " + Blockly.Msg.VARIABLES_SET_TAIL + " %2", ["VAR", null, Blockly.ALIGN_RIGHT], ["VALUE", null, Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setInputsInline(!0); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP); this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET; this.contextMenuType_ = "variables_pointer_get"; this.tag =
            Blockly.Msg.TAG_VARIABLE_POINTER_SET
    }, getVars: function () { return [this.getInputTargetBlock("VAR")] }, getPos: function () { return this.getRelativeToSurfaceXY().y }, renameVar: function (a, b) { Blockly.Names.equals(a, this.getInputTargetBlock("VAR").getFieldValue("VAR")) && this.getInputTargetBlock("VAR").setFieldValue(b, "VAR") }, customContextMenu: Blockly.Blocks.variables_pointer_get.customContextMenu, onchange: function () {
        Blockly.Blocks.requireInFunction(this); if (this.getInput("VAR") && this.getInputTargetBlock("VAR")) if ("variables_pointer_*" !=
            this.getInputTargetBlock("VAR").type) { var a = this.getInputTargetBlock("VAR").getFieldValue("VAR"); a = Blockly.FieldDropdown.prototype.getTypefromVars(a, 0); Blockly.Blocks.setCheckPointer(this, a, "VALUE") } else this.getInputTargetBlock("VAR").childBlocks_[0].getVars && (a = this.getInputTargetBlock("VAR").childBlocks_[0].getVars()[0], a = Blockly.FieldDropdown.prototype.getTypefromVars(a, 0), Blockly.Blocks.setCheckVariable(this, a, "VALUE"))
    }
};

Blockly.Blocks.variables_pointer_declare = {
    init: function () {
        var a = [[Blockly.Msg.VARIABLES_SET_TYPE_INT, "int"], [Blockly.Msg.VARIABLES_SET_TYPE_UNSIGNED_INT, "unsigned int"], [Blockly.Msg.VARIABLES_SET_TYPE_FLOAT, "float"], [Blockly.Msg.VARIABLES_SET_TYPE_DOUBLE, "double"], [Blockly.Msg.VARIABLES_SET_TYPE_CHAR, "char"]]; this.setColour(25); var b = Blockly.Procedures.findLegalName(Blockly.Msg.VARIABLES_POINTER_DECLARE_DEFAULT_NAME, this); this.interpolateMsg("%1 " + Blockly.Msg.VARIABLES_POINTER_DECLARE_TITLE + Blockly.Msg.VARIABLES_POINTER_DECLARE_ITERATION +
            " %2 " + Blockly.Msg.VARIABLES_DECLARE_NAME + " %3 " + Blockly.Msg.VARIABLES_DECLARE_INIT + " %4 ", ["TYPES", new Blockly.FieldDropdown(a, null, this)], ["ITERATION", new Blockly.FieldTextInput("*")], ["VAR", new Blockly.FieldTextInput(b, Blockly.Procedures.rename)], ["VALUE", null, Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.VARIABLES_DECLARE_TOOLTIP); this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET; this.contextMenuType_ = "variables_pointer_get";
        this.tag = Blockly.Msg.TAG_VARIABLE_POINTER_DECLARE; this.oldName = b
    }, initVar: Blockly.Blocks.define_declare.initVar, getDist: function () { return "p" }, getSpec: function () { return this.getFieldValue("ITERATION") }, getType: function () { return this.getFieldValue("TYPES") }, getTypes: function () { return "**" == this.getFieldValue("ITERATION") ? ["db" + this.getFieldValue("TYPES")] : [this.getFieldValue("TYPES")] }, getScope: Blockly.Blocks.variables_declare.getScope, getPos: function () { return this.getRelativeToSurfaceXY().y }, getVars: function () { return [this.getFieldValue("VAR")] },
    getDeclare: function () { return [this.getFieldValue("VAR")] }, renameVar: function (a, b) { Blockly.Names.equals(a, this.getFieldValue("VAR")) && this.setFieldValue(b, "VAR") }, customContextMenu: Blockly.Blocks.variables_pointer_get.customContextMenu, onchange: function () {
        Blockly.Blocks.variablePlaceCheck(this); var a = this.getFieldValue("TYPES"); 0 == a && (a = "int"); "*" == this.getFieldValue("ITERATION") ? Blockly.Blocks.setCheckPointer(this, a, "VALUE") : "**" == this.getFieldValue("ITERATION") && Blockly.Blocks.setCheckPointer(this,
            "db" + a, "VALUE"); a = this.getFieldValue("VAR"); if (this.oldName != a) { var b = this.getScope(); b && Blockly.Variables.renameVariablebyScope(this.oldName, a, b[0]); this.oldName = a }
    }
};

Blockly.Blocks.variables_array_get = {
    init: function () {
        this.setColour(48); this.appendDummyInput().appendField(Blockly.Msg.ARRAY_GET_TITLE).appendField(new Blockly.FieldVariableArray(Blockly.Msg.SELECT_MENU, null, this), "VAR"); this.appendValueInput("LENGTH_1").setCheck("Number INT Variable VAR_INT VAR_UNINT Aster Macro".split(" ")); this.appendValueInput("LENGTH_2").setCheck("Number INT Variable VAR_INT VAR_UNINT Aster Macro".split(" ")).appendField(Blockly.Msg.VARIABLES_GET_TAIL); this.setOutput(!0, "Array");
        this.setInputsInline(!0); this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP); this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET; this.contextMenuType_ = "variables_array_get"; this.tag = Blockly.Msg.TAG_VARIABLE_ARRAY_GET
    }, getIndices: function () {
        var a = 0, b = 0, c = 0, d = this.childBlocks_.length; this.getNextBlock() && d--; this.getInput("VALUE") && this.getInput("VALUE").connection.targetBlock() && d--; switch (d) {
            case 3: "math_number" == this.getInput("LENGTH_3").connection.targetBlock().type ? c = this.getInput("LENGTH_3").connection.targetBlock().getFieldValue("NUM") :
                "variables_get" == this.getInput("LENGTH_3").connection.targetBlock().type ? c = this.getInput("LENGTH_3").connection.targetBlock().getVars() : "math_arithmetic" == this.getInput("LENGTH_3").connection.targetBlock().type && (d = Blockly.cake.math_arithmetic(this.getInput("LENGTH_3").connection.targetBlock()), c = d[0]); case 2: "math_number" == this.getInput("LENGTH_2").connection.targetBlock().type ? b = this.getInput("LENGTH_2").connection.targetBlock().getFieldValue("NUM") : "variables_get" == this.getInput("LENGTH_2").connection.targetBlock().type ?
                    b = this.getInput("LENGTH_2").connection.targetBlock().getVars() : "math_arithmetic" == this.getInput("LENGTH_2").connection.targetBlock().type && (d = Blockly.cake.math_arithmetic(this.getInput("LENGTH_2").connection.targetBlock()), b = d[0]); case 1: "math_number" == this.getInput("LENGTH_1").connection.targetBlock().type ? a = this.getInput("LENGTH_1").connection.targetBlock().getFieldValue("NUM") : "variables_get" == this.getInput("LENGTH_1").connection.targetBlock().type ? a = this.getInput("LENGTH_1").connection.targetBlock().getVars() :
                        "math_arithmetic" == this.getInput("LENGTH_1").connection.targetBlock().type && (d = Blockly.cake.math_arithmetic(this.getInput("LENGTH_1").connection.targetBlock()), a = d[0])
        }return [a, b, c]
    }, getVars: function () { return [this.getFieldValue("VAR")] }, getPos: function () { return this.getRelativeToSurfaceXY().y }, renameVar: function (a, b) { Blockly.Names.equals(a, this.getFieldValue("VAR")) && this.setFieldValue(b, "VAR") }, customContextMenu: function (a) {
        var b = { enabled: !0 }, c = this.getFieldValue("VAR"); b.text = this.contextMenuMsg_.replace("%1",
            c); c = goog.dom.createDom("field", null, c); c.setAttribute("name", "VAR"); c = goog.dom.createDom("block", null, c); c.setAttribute("type", this.contextMenuType_); b.callback = Blockly.ContextMenu.callbackFactory(this, c); a.push(b)
    }, initIdx: function (a, b, c) { 0 == a ? this.childBlocks_[0].setFieldValue("0", "NUM") : 0 == b ? this.childBlocks_[1].setFieldValue("0", "NUM") : this.childBlocks_[2].setFieldValue("0", "NUM") }, getInputIdxLength: function () { return this.getNextBlock() ? this.childBlocks_.length - 1 : this.childBlocks_.length }, onchange: function () {
        Blockly.Blocks.requireInFunction(this);
        var a = this.getFieldValue("VAR"), b = Blockly.FieldVariableArray.getBlockIdxLength(a); a = Blockly.FieldDropdown.prototype.getTypefromVars(a, 0); var c = this.getInputIdxLength(); b == c ? this.setOutputType("VAR", a) : b > c ? this.setOutputType("PTR", a) : this.changeOutput("Array")
    }, setOutputType: Blockly.Blocks.variables_get.setOutputType
};

Blockly.Blocks.variables_array_set = {
    init: function () {
        this.setColour(48); this.appendDummyInput().appendField(Blockly.Msg.VARIABLES_SET_TITLE).appendField(new Blockly.FieldVariableArray(Blockly.Msg.SELECT_MENU, null, this), "VAR"); this.appendValueInput("LENGTH_1").setCheck("Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_FLOAT VAR_DOUBLE Aster".split(" ")); this.appendValueInput("LENGTH_2").setCheck("Number INT NEGATIVE Variable VAR_INT VAR_UNINT DOUBLE VAR_FLOAT VAR_DOUBLE Aster".split(" "));
        this.appendValueInput("VALUE").setCheck(null).appendField(Blockly.Msg.VARIABLES_SET_TAIL); this.setInputsInline(!0); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP); this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET; this.contextMenuType_ = "variables_array_set"; this.tag = Blockly.Msg.TAG_VARIABLE_ARRAY_SET
    }, getVars: function () { return [this.getFieldValue("VAR")] }, getPos: function () { return this.getRelativeToSurfaceXY().y }, renameVar: function (a,
        b) { Blockly.Names.equals(a, this.getFieldValue("VAR")) && this.setFieldValue(b, "VAR") }, getIndices: Blockly.Blocks.variables_array_get.getIndices, initIdx: Blockly.Blocks.variables_array_get.initIdx, customContextMenu: Blockly.Blocks.variables_array_get.customContextMenu, getInputIdxLength: Blockly.Blocks.variables_array_get.getInputIdxLength, onchange: function () {
            Blockly.Blocks.requireInFunction(this); if (this.getFieldValue("VAR")) {
                var a = this.getFieldValue("VAR"), b = Blockly.FieldDropdown.prototype.getTypefromVars(a,
                    0); a = Blockly.FieldVariableArray.getBlockIdxLength(a); var c = this.getInputIdxLength(); this.getInput("VALUE") && this.getInput("VALUE").connection.targetBlock() && c--; a == c ? Blockly.Blocks.setCheckVariable(this, b, "VALUE") : Blockly.Blocks.setCheckPointer(this, b, "VALUE")
            }
        }
};

Blockly.Blocks.variables_array_declare = {
    init: function () {
        var a = [[Blockly.Msg.VARIABLES_SET_TYPE_INT, "int"], [Blockly.Msg.VARIABLES_SET_TYPE_UNSIGNED_INT, "unsigned int"], [Blockly.Msg.VARIABLES_SET_TYPE_FLOAT, "float"], [Blockly.Msg.VARIABLES_SET_TYPE_DOUBLE, "double"], [Blockly.Msg.VARIABLES_SET_TYPE_CHAR, "char"]]; this.setColour(48); var b = Blockly.Procedures.findLegalName(Blockly.Msg.VARIABLES_ARRAY_DECLARE_DEFAULT_NAME, this); this.varInputField = new Blockly.FieldTextInput(b, Blockly.Procedures.rename); this.interpolateMsg(Blockly.Msg.VARIABLES_ARRAY_DECLARE_TITLE +
            " %1  " + Blockly.Msg.VARIABLES_DECLARE_NAME + " %2 " + Blockly.Msg.VARIABLES_ARRAY_DECLARE_LENGTH + " %3 %4 " + Blockly.Msg.VARIABLES_ARRAY_DECLARE_VALUE + " %5 ", ["TYPES", new Blockly.FieldDropdown(a)], ["VAR", this.varInputField], ["LENGTH_1", "Number INT Variable VAR_INT VAR_UNINT Aster Macro".split(" "), Blockly.ALIGN_RIGHT], ["LENGTH_2", "Number INT Variable VAR_INT VAR_UNINT Aster Macro".split(" "), Blockly.ALIGN_RIGHT], ["VALUE", ["Array_Initial"], Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setInputsInline(!0);
        this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.VARIABLES_DECLARE_TOOLTIP); this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET; this.contextMenuType_ = "variables_array_get"; this.tag = Blockly.Msg.TAG_VARIABLE_ARRAY_DECLARE; this.oldName = b
    }, initVar: Blockly.Blocks.define_declare.initVar, getDist: function () { return "a" }, getScope: Blockly.Blocks.variables_declare.getScope, getPos: function () { return this.getRelativeToSurfaceXY().y }, getSpec: function () {
        var a = this.getIndices()[0],
        b = this.getIndices()[1], c = this.getIndices()[2]; a *= 1; b *= 1; c *= 1; if (0 != a && 0 == b && 0 == c) return [1, a]; if (0 != a && 0 != b && 0 == c) return [2, a, b]; if (0 != a && 0 != b && 0 != c) return [3, a, b, c]
    }, onchange: function () { Blockly.Blocks.variablePlaceCheck(this); var a = this.getFieldValue("VAR"); if (this.oldName != a) { var b = this.getScope(); b && Blockly.Variables.renameVariablebyScope(this.oldName, a, b[0]); this.oldName = a } }, getTypes: function () { return [this.getFieldValue("TYPES")] }, getLength: function () { return [this.childBlocks_[0].getFieldValue("NUM")] },
    getVars: function () { return [this.getFieldValue("VAR")] }, getDeclare: function () { return [this.getFieldValue("VAR")] }, renameVar: function (a, b) { Blockly.Names.equals(a, this.getFieldValue("VAR")) && this.setFieldValue(b, "VAR") }, getIndices: Blockly.Blocks.variables_array_get.getIndices, customContextMenu: Blockly.Blocks.variables_array_get.customContextMenu
};

Blockly.Blocks["variables_pointer_&"] = {
    init: function () { this.setColour(25); this.interpolateMsg("& %1 ", ["VALUE", "Variable VAR_INT VAR_UNINT VAR_FLOAT VAR_DOUBLE VAR_CHAR Array Pointer PTR_INT PTR_UNINT PTR_FLOAT PTR_DOUBLE PTR_CHAR".split(" "), Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setOutput(!0, "Address"); this.tag = Blockly.Msg.TAG_VARIABLE_POINTER_ADDR }, onchange: function () {
        if (this.getInputTargetBlock("VALUE")) {
            var a = this.getInputTargetBlock("VALUE"), b = a.getVars(), c = Blockly.FieldDropdown.prototype.getTypefromVars(b,
                0); 0 == a.type.search("variables") && (0 < a.type.search("pointer") ? this.setOutputType("DBPTR", c) : 0 < a.type.search("array") ? (b = Blockly.FieldVariableArray.getBlockIdxLength(b), a = a.getInputIdxLength(), b == a ? this.setOutputType("PTR", c) : this.setOutputType("DBPTR", c)) : this.setOutputType("PTR", c))
        }
    }, setOutputType: Blockly.Blocks.variables_get.setOutputType
};
Blockly.Blocks["variables_pointer_*"] = {
    init: function () { this.setColour(25); this.interpolateMsg("* %1 ", ["VALUE", "Pointer PTR_INT PTR_UNINT PTR_FLOAT PTR_DOUBLE PTR_CHAR DBPTR_INT DBPTR_UNINT DBPTR_FLOAT DBPTR_DOUBLE DBPTR_CHAR Array Aster".split(" "), Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setOutput(!0, "Aster"); this.tag = Blockly.Msg.TAG_VARIABLE_POINTER_ASTR }, onchange: function () {
        if (this.getInputTargetBlock("VALUE")) {
            var a = this.getInputTargetBlock("VALUE"); if (0 == a.type.search("variables_pointer_*")) {
                if (a.getInputTargetBlock("VALUE") &&
                    (a = a.getInputTargetBlock("VALUE"), 0 == a.type.search("variables") && 0 < a.type.search("pointer"))) { var b = a.getVars(), c = Blockly.FieldDropdown.prototype.getTypefromVars(b, 0), a = Blockly.FieldDropdown.prototype.getTypefromVars(b, 5); "**" == a && this.setOutputType("VAR", c) }
            } else 0 == a.type.search("variables") && (b = a.getVars(), c = Blockly.FieldDropdown.prototype.getTypefromVars(b, 0), 0 < a.type.search("pointer") ? (a = Blockly.FieldDropdown.prototype.getTypefromVars(b, 5), "*" == a ? this.setOutputType("VAR", c) : "**" == a && this.setOutputType("PTR",
                c)) : 0 < a.type.search("array") && (b = Blockly.FieldVariableArray.getBlockIdxLength(b), a = a.getInputIdxLength(), b > a && this.setOutputType("VAR", c)))
        }
    }, setOutputType: Blockly.Blocks.variables_get.setOutputType
};

Blockly.Blocks.variables_array_pointer = {
    init: function () { this.setColour(48); this.appendDummyInput().appendField(Blockly.Msg.ARRAY_GET_TITLE).appendField(new Blockly.FieldVariableArray(Blockly.Msg.SELECT_MENU, null, this), "VAR"); this.setOutput(!0, ["Address", "Pointer"]); this.setInputsInline(!0); this.setTooltip(Blockly.Msg.VARIABLES_ARRAY_POINTER_TOOLTIP) }, renameVar: function (a, b) { Blockly.Names.equals(a, this.getFieldValue("VAR")) && this.setFieldValue(b, "VAR") }, getVars: function () { return [this.getFieldValue("VAR")] },
    setOutputType: Blockly.Blocks.variables_get.setOutputType
};

Blockly.Blocks.variables_string_null = { init: function () { this.setColour(48); this.setOutput(!0); this.appendDummyInput().appendField(Blockly.Msg.VARIABLES_STRING_NULL); this.setTooltip(Blockly.Msg.VARIABLES_STRING_NULL_TOOLTIP); this.tag = Blockly.Msg.TAG_VARIABLES_STRING_NULL }, onchange: Blockly.Blocks.requireInFunction };
Blockly.Blocks.variables_string_declare = {
    init: function () {
        var a = [[Blockly.Msg.VARIABLES_SET_TYPE_CHAR, "char"]]; this.setColour(48); var b = Blockly.Procedures.findLegalName(Blockly.Msg.VARIABLES_STRING_DECLARE_DEFAULT_NAME, this); this.interpolateMsg(Blockly.Msg.VARIABLES_STRING_DECLARE_TITLE + " %1  " + Blockly.Msg.VARIABLES_DECLARE_NAME + " %2 " + Blockly.Msg.VARIABLES_STRING_DECLARE_LENGTH + " %3 " + Blockly.Msg.VARIABLES_STRING_DECLARE_VALUE + " %4", ["TYPES", new Blockly.FieldDropdown(a)], ["VAR", new Blockly.FieldTextInput(b,
            Blockly.Procedures.rename)], ["LENGTH_1", "Number INT Variable VAR_INT VAR_UNINT Aster Macro".split(" "), Blockly.ALIGN_RIGHT], ["VALUE", null, Blockly.ALIGN_RIGHT], Blockly.ALIGN_RIGHT); this.setInputsInline(!0); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.VARIABLES_DECLARE_TOOLTIP); this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET; this.contextMenuType_ = "variables_array_get"; this.tag = Blockly.Msg.TAG_VARIABLE_ARRAY_DECLARE; this.oldName = b
    }, initVar: Blockly.Blocks.define_declare.initVar,
    getDist: function () { return "a" }, getScope: Blockly.Blocks.variables_declare.getScope, getPos: function () { return this.getRelativeToSurfaceXY().y }, getSpec: function () { var a = this.getIndices()[0], b = this.getIndices()[1], c = this.getIndices()[2]; a *= 1; b *= 1; c *= 1; if (0 != a && 0 == b && 0 == c) return [1, a]; if (0 != a && 0 != b && 0 == c) return [2, a, b]; if (0 != a && 0 != b && 0 != c) return [3, a, b, c] }, onchange: function () {
        Blockly.Blocks.variablePlaceCheck(this); var a = this.getFieldValue("VAR"); this.oldName != a && (Blockly.Variables.renameVariable(this.oldName,
            a), this.oldName = a)
    }, getTypes: function () { return [this.getFieldValue("TYPES")] }, getLength: function () { return [this.childBlocks_[0].getFieldValue("NUM")] }, getVars: function () { return [this.getFieldValue("VAR")] }, getDeclare: function () { return [this.getFieldValue("VAR")] }, renameVar: function (a, b) { Blockly.Names.equals(a, this.getFieldValue("VAR")) && this.setFieldValue(b, "VAR") }, getIndices: Blockly.Blocks.variables_array_get.getIndices, customContextMenu: Blockly.Blocks.variables_array_get.customContextMenu
};

Blockly.Blocks.library_stdio_tab = { init: function () { this.setColour(90); this.interpolateMsg(Blockly.Msg.STDIO_TAB_TITLE, Blockly.ALIGN_RIGHT); this.setOutput(!0, "String"); this.setTooltip(Blockly.Msg.STDIO_TAB_TOOLTIP); this.tag = Blockly.Msg.TAG_STDIO_TAB }, onchange: Blockly.Blocks.requireInFunction };

Blockly.Blocks.variables_array_initial = {
    init: function () { this.setColour(48); this.appendValueInput("ADD0").appendField(Blockly.Msg.VARIABLES_ARRAY_INITIAL); this.appendValueInput("ADD1"); this.appendValueInput("ADD2"); this.setOutput(!0, "Array_Initial"); this.setMutator(new Blockly.Mutator(["array_create_with_item"])); this.setTooltip(Blockly.Msg.VARIABLES_ARRAY_INITIAL_TOOLTIP); this.itemCount_ = 3 }, mutationToDom: function () { var a = document.createElement("mutation"); a.setAttribute("items", this.itemCount_); return a },
    domToMutation: function (a) { for (var b = 0; b < this.itemCount_; b++)this.removeInput("ADD" + b); this.itemCount_ = parseInt(a.getAttribute("items"), 10); for (b = 0; b < this.itemCount_; b++)a = this.appendValueInput("ADD" + b), 0 == b && a.appendField(Blockly.Msg.VARIABLES_ARRAY_INITIAL); 0 == this.itemCount_ && this.appendDummyInput("EMPTY").appendField(Blockly.Msg.VARIABLES_ARRAY_INITIAL) }, decompose: function (a) {
        var b = Blockly.Block.obtain(a, "array_create_with_container"); b.initSvg(); for (var c = b.getInput("STACK").connection, e = 0; e <
            this.itemCount_; e++) { var d = Blockly.Block.obtain(a, "array_create_with_item"); d.initSvg(); c.connect(d.previousConnection); c = d.nextConnection } return b
    }, compose: function (a) {
        if (0 == this.itemCount_) this.removeInput("EMPTY"); else for (var b = this.itemCount_ - 1; 0 <= b; b--)this.removeInput("ADD" + b); this.itemCount_ = 0; for (a = a.getInputTargetBlock("STACK"); a;)b = this.appendValueInput("ADD" + this.itemCount_), 0 == this.itemCount_ && b.appendField(Blockly.Msg.VARIABLES_ARRAY_INITIAL), a.valueConnection_ && b.connection.connect(a.valueConnection_),
            this.itemCount_++, a = a.nextConnection && a.nextConnection.targetBlock(); 0 == this.itemCount_ && this.appendDummyInput("EMPTY").appendField(Blockly.Msg.VARIABLES_ARRAY_INITIAL)
    }, saveConnections: function (a) { a = a.getInputTargetBlock("STACK"); for (var b = 0; a;) { var c = this.getInput("ADD" + b); a.valueConnection_ = c && c.connection.targetConnection; b++; a = a.nextConnection && a.nextConnection.targetBlock() } }, onchange: function () {
        block = this.getParent(); null != block && "variables_array_declare" == block.type && (this.itemCount_ > block.getIndices()[0] ?
            this.setWarningText(Blockly.Msg.VARIABLES_ARRAY_INITIAL_WARNING) : this.setWarningText(null))
    }
};
Blockly.Blocks.array_create_with_container = { init: function () { this.setColour(48); this.appendDummyInput().appendField(Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TITLE_ADD); this.appendStatementInput("STACK"); this.setTooltip(Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TOOLTIP); this.contextMenu = !1 } };
Blockly.Blocks.array_create_with_item = { init: function () { this.setColour(48); this.appendDummyInput().appendField(Blockly.Msg.ARRAY_CREATE_WITH_ITEM_TITLE); this.setPreviousStatement(!0); this.setNextStatement(!0); this.setTooltip(Blockly.Msg.ARRAY_CREATE_WITH_ITEM_TOOLTIP); this.contextMenu = !1 } };
