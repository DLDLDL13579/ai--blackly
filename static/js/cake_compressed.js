
"use strict";
Blockly.cake = new Blockly.Generator("cake"); 
Blockly.cake.C_VARIABLE_TYPES = [["float", "float"], ["int", "int"], ["unsigned int", "unsigned int"], ["short", "short"], ["unsigned short", "unsigned short"], ["bool", "bool"]]; 
Blockly.cake.C_GLOBAL_VARS = []; Blockly.cake.addReservedWords(",alignas,alignof,and,and_eq,asm,auto,bitand,bitor,bool,break,case,catch,char,char16_t,char32_t,class,compl,const,constexpr,const_cast,continue,decltype,default,delete,do,double,dynamic_cast,else,enum,explicit,export,extern,false,float,for,friend,goto,if,inline,int,long,long double,long long,mutable,namespace,new,noexcept,not,not_eq,nullptr,operator,or,or_eq,private,protected,public,register,reinterpret_cast,return,short,signed,sizeof,static,static_assert,static_cast,struct,switch,template,this,thread_local,throw,true,try,typedef,typeid,typename,union,unsigned,using,virtual,void,volatile,wchar_t,while,xor,xor_eq,posix,game,api,PI,PI2,PI3,PI4,DEG2RAD,RAD2DEG,ZRMS,ZR2D,ZR3D,ALLIANCE");
Blockly.cake.ORDER_ATOMIC = 0; Blockly.cake.ORDER_MEMBER = 2; Blockly.cake.ORDER_FUNCTION_CALL = 2; Blockly.cake.ORDER_INCREMENT = 3; Blockly.cake.ORDER_DECREMENT = 3; Blockly.cake.ORDER_LOGICAL_NOT = 3; Blockly.cake.ORDER_BITWISE_NOT = 3; Blockly.cake.ORDER_UNARY_PLUS = 3; Blockly.cake.ORDER_UNARY_NEGATION = 3; Blockly.cake.ORDER_MULTIPLICATION = 5; Blockly.cake.ORDER_DIVISION = 5; Blockly.cake.ORDER_MODULUS = 5; Blockly.cake.ORDER_ADDITION = 6; Blockly.cake.ORDER_SUBTRACTION = 6; Blockly.cake.ORDER_BITWISE_SHIFT = 7;
Blockly.cake.ORDER_RELATIONAL = 8; Blockly.cake.ORDER_EQUALITY = 9; Blockly.cake.ORDER_BITWISE_AND = 10; Blockly.cake.ORDER_BITWISE_XOR = 11; Blockly.cake.ORDER_BITWISE_OR = 12; Blockly.cake.ORDER_LOGICAL_AND = 13; Blockly.cake.ORDER_LOGICAL_OR = 14; Blockly.cake.ORDER_CONDITIONAL = 15; Blockly.cake.ORDER_ASSIGNMENT = 15; Blockly.cake.ORDER_COMMA = 17; Blockly.cake.ORDER_NONE = 99; Blockly.cake.INFINITE_LOOP_TRAP = null;
Blockly.cake.init = function () {
    Blockly.cake.definitions_ = Object.create(null); Blockly.cake.times_ = Object.create(null); Blockly.cake.functionNames_ = Object.create(null); if (Blockly.Variables) {
        Blockly.cake.variableDB_ ? Blockly.cake.variableDB_.reset() : Blockly.cake.variableDB_ = new Blockly.Names(Blockly.cake.RESERVED_WORDS_); var a = [], b = Blockly.Variables.allVariables(); Blockly.Structure.allStructure(); for (var c = 0; c < b.length; c++)"global" == b[c][3] && (a[c] = b[c][0] + b[c][1] + " " + Blockly.cake.variableDB_.getName(b[c][2],
            Blockly.Variables.NAME_TYPE) + ";"); Blockly.cake.definitions_.variables = a.join("\n")
    }
};
Blockly.cake.finish = function (a) { a && (a = this.prefixLines(a, Blockly.cake.INDENT)); a = "\n" + a; var b = [], c = [], d = [], e = [], g; for (g in Blockly.cake.definitions_) { var h = Blockly.cake.definitions_[g]; g.match("include") ? b.push(h) : g.match("Func_declare") ? c.push(h) : g.match("define") ? d.push(h) : e.push(h) } b = b.join("\n") + "\n\n" + c.join("\n") + "\n\n" + d.join("\n"); e = e.join("\n"); return b.replace(/\n\n+/g, "\n\n").replace(/\n*$/, "\n") + a + e.replace(/\n\n+/g, "\n\n") };
Blockly.cake.finishFull = function (a) { var b = [], c; for (c in Blockly.cake.definitions_) b.push(Blockly.cake.definitions_[c]); a = b.join("\n\n") + "\n\nvoid setPos(float x, float y, float z) {\n\tfloat pos[3];\n\tpos[0] = x; pos[1] = y; pos[2] = z;\n\tapi.setPositionTarget(pos);\n}\n\n" + a; -1 === a.indexOf("//Begin page init\nvoid init() {\n") && (a = "void init() {}\n" + a); return a }; Blockly.cake.scrubNakedValue = function (a) { return a + ";\n" };
Blockly.cake.quote_ = function (a) { a = a.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/"/g, '\\"').replace(/\?/g, "\\?"); return a = a.replace(/\\\\n/g, "\\n") };
Blockly.cake.scrub_ = function (a, b) { if (null === b) return ""; var c = ""; if (!a.outputConnection || !a.outputConnection.targetConnection) { var d = a.getCommentText(); d && (c += this.prefixLines(d, "// ") + "\n"); for (var e = 0; e < a.inputList.length; e++)a.inputList[e].type == Blockly.INPUT_VALUE && (d = a.inputList[e].connection.targetBlock()) && (d = this.allNestedComments(d)) && (c += this.prefixLines(d, "// ")) } e = a.nextConnection && a.nextConnection.targetBlock(); e = this.blockToCode(e); return c + b + e };

Blockly.cake.colour = {}; Blockly.cake.colour_picker = function (a) { return ["'" + a.getFieldValue("COLOUR") + "'", Blockly.cake.ORDER_ATOMIC] }; Blockly.cake.colour_random = function (a) { return [Blockly.cake.provideFunction_("colour_random", ["function " + Blockly.cake.FUNCTION_NAME_PLACEHOLDER_ + "() {", "  var num = Math.floor(Math.random() * Math.pow(2, 24));", "  return '#' + ('00000' + num.toString(16)).substr(-6);", "}"]) + "()", Blockly.cake.ORDER_FUNCTION_CALL] };
Blockly.cake.colour_rgb = function (a) {
    var b = Blockly.cake.valueToCode(a, "RED", Blockly.cake.ORDER_COMMA) || 0, c = Blockly.cake.valueToCode(a, "GREEN", Blockly.cake.ORDER_COMMA) || 0; a = Blockly.cake.valueToCode(a, "BLUE", Blockly.cake.ORDER_COMMA) || 0; return [Blockly.cake.provideFunction_("colour_rgb", ["function " + Blockly.cake.FUNCTION_NAME_PLACEHOLDER_ + "(r, g, b) {", "  r = Math.max(Math.min(Number(r), 100), 0) * 2.55;", "  g = Math.max(Math.min(Number(g), 100), 0) * 2.55;", "  b = Math.max(Math.min(Number(b), 100), 0) * 2.55;",
        "  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);", "  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);", "  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);", "  return '#' + r + g + b;", "}"]) + "(" + b + ", " + c + ", " + a + ")", Blockly.cake.ORDER_FUNCTION_CALL]
};
Blockly.cake.colour_blend = function (a) {
    var b = Blockly.cake.valueToCode(a, "COLOUR1", Blockly.cake.ORDER_COMMA) || "'#000000'", c = Blockly.cake.valueToCode(a, "COLOUR2", Blockly.cake.ORDER_COMMA) || "'#000000'"; a = Blockly.cake.valueToCode(a, "RATIO", Blockly.cake.ORDER_COMMA) || .5; return [Blockly.cake.provideFunction_("colour_blend", ["function " + Blockly.cake.FUNCTION_NAME_PLACEHOLDER_ + "(c1, c2, ratio) {", "  ratio = Math.max(Math.min(Number(ratio), 1), 0);", "  var r1 = parseInt(c1.substring(1, 3), 16);", "  var g1 = parseInt(c1.substring(3, 5), 16);",
        "  var b1 = parseInt(c1.substring(5, 7), 16);", "  var r2 = parseInt(c2.substring(1, 3), 16);", "  var g2 = parseInt(c2.substring(3, 5), 16);", "  var b2 = parseInt(c2.substring(5, 7), 16);", "  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);", "  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);", "  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);", "  r = ('0' + (r || 0).toString(16)).slice(-2);", "  g = ('0' + (g || 0).toString(16)).slice(-2);", "  b = ('0' + (b || 0).toString(16)).slice(-2);", "  return '#' + r + g + b;",
        "}"]) + "(" + b + ", " + c + ", " + a + ")", Blockly.cake.ORDER_FUNCTION_CALL]
};

Blockly.cake.lists = {}; Blockly.cake.lists_create_empty = function (a) { return ["[]", Blockly.cake.ORDER_ATOMIC] }; Blockly.cake.lists_create_with = function (a) { for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++)b[c] = Blockly.cake.valueToCode(a, "ADD" + c, Blockly.cake.ORDER_COMMA) || "null"; b = "[" + b.join(", ") + "]"; return [b, Blockly.cake.ORDER_ATOMIC] };
Blockly.cake.lists_repeat = function (a) { var b = Blockly.cake.provideFunction_("lists_repeat", ["function " + Blockly.cake.FUNCTION_NAME_PLACEHOLDER_ + "(value, n) {", "  var array = [];", "  for (var i = 0; i < n; i++) {", "    array[i] = value;", "  }", "  return array;", "}"]), c = Blockly.cake.valueToCode(a, "ITEM", Blockly.cake.ORDER_COMMA) || "null"; a = Blockly.cake.valueToCode(a, "NUM", Blockly.cake.ORDER_COMMA) || "0"; return [b + "(" + c + ", " + a + ")", Blockly.cake.ORDER_FUNCTION_CALL] };
Blockly.cake.lists_length = function (a) { return [(Blockly.cake.valueToCode(a, "VALUE", Blockly.cake.ORDER_FUNCTION_CALL) || "[]") + ".length", Blockly.cake.ORDER_MEMBER] }; Blockly.cake.lists_isEmpty = function (a) { return ["!" + (Blockly.cake.valueToCode(a, "VALUE", Blockly.cake.ORDER_MEMBER) || "[]") + ".length", Blockly.cake.ORDER_LOGICAL_NOT] };
Blockly.cake.lists_indexOf = function (a) { var b = "FIRST" == a.getFieldValue("END") ? "indexOf" : "lastIndexOf", c = Blockly.cake.valueToCode(a, "FIND", Blockly.cake.ORDER_NONE) || "''"; return [(Blockly.cake.valueToCode(a, "VALUE", Blockly.cake.ORDER_MEMBER) || "[]") + "." + b + "(" + c + ") + 1", Blockly.cake.ORDER_MEMBER] };
Blockly.cake.lists_getIndex = function (a) {
    var b = a.getFieldValue("MODE") || "GET", c = a.getFieldValue("WHERE") || "FROM_START", d = Blockly.cake.valueToCode(a, "AT", Blockly.cake.ORDER_UNARY_NEGATION) || "1"; a = Blockly.cake.valueToCode(a, "VALUE", Blockly.cake.ORDER_MEMBER) || "[]"; if ("FIRST" == c) { if ("GET" == b) return [a + "[0]", Blockly.cake.ORDER_MEMBER]; if ("GET_REMOVE" == b) return [a + ".shift()", Blockly.cake.ORDER_MEMBER]; if ("REMOVE" == b) return a + ".shift();\n" } else if ("LAST" == c) {
        if ("GET" == b) return [a + ".slice(-1)[0]", Blockly.cake.ORDER_MEMBER];
        if ("GET_REMOVE" == b) return [a + ".pop()", Blockly.cake.ORDER_MEMBER]; if ("REMOVE" == b) return a + ".pop();\n"
    } else if ("FROM_START" == c) { d = Blockly.isNumber(d) ? parseFloat(d) - 1 : d + " - 1"; if ("GET" == b) return [a + "[" + d + "]", Blockly.cake.ORDER_MEMBER]; if ("GET_REMOVE" == b) return [a + ".splice(" + d + ", 1)[0]", Blockly.cake.ORDER_FUNCTION_CALL]; if ("REMOVE" == b) return a + ".splice(" + d + ", 1);\n" } else if ("FROM_END" == c) {
        if ("GET" == b) return [a + ".slice(-" + d + ")[0]", Blockly.cake.ORDER_FUNCTION_CALL]; if ("GET_REMOVE" == b || "REMOVE" == b) {
            c = Blockly.cake.provideFunction_("lists_remove_from_end",
                ["function " + Blockly.cake.FUNCTION_NAME_PLACEHOLDER_ + "(list, x) {", "  x = list.length - x;", "  return list.splice(x, 1)[0];", "}"]); d = c + "(" + a + ", " + d + ")"; if ("GET_REMOVE" == b) return [d, Blockly.cake.ORDER_FUNCTION_CALL]; if ("REMOVE" == b) return d + ";\n"
        }
    } else if ("RANDOM" == c) {
        c = Blockly.cake.provideFunction_("lists_get_random_item", ["function " + Blockly.cake.FUNCTION_NAME_PLACEHOLDER_ + "(list, remove) {", "  var x = Math.floor(Math.random() * list.length);", "  if (remove) {", "    return list.splice(x, 1)[0];", "  } else {",
            "    return list[x];", "  }", "}"]); d = c + "(" + a + ", " + ("GET" != b) + ")"; if ("GET" == b || "GET_REMOVE" == b) return [d, Blockly.cake.ORDER_FUNCTION_CALL]; if ("REMOVE" == b) return d + ";\n"
    } throw "Unhandled combination (lists_getIndex).";
};
Blockly.cake.lists_setIndex = function (a) {
    function b() { if (c.match(/^\w+$/)) return ""; var a = Blockly.cake.variableDB_.getDistinctName("tmp_list", Blockly.Variables.NAME_TYPE), b = "var " + a + " = " + c + ";\n"; c = a; return b } var c = Blockly.cake.valueToCode(a, "LIST", Blockly.cake.ORDER_MEMBER) || "[]", d = a.getFieldValue("MODE") || "GET", e = a.getFieldValue("WHERE") || "FROM_START", g = Blockly.cake.valueToCode(a, "AT", Blockly.cake.ORDER_NONE) || "1"; a = Blockly.cake.valueToCode(a, "TO", Blockly.cake.ORDER_ASSIGNMENT) || "null"; if ("FIRST" ==
        e) { if ("SET" == d) return c + "[0] = " + a + ";\n"; if ("INSERT" == d) return c + ".unshift(" + a + ");\n" } else if ("LAST" == e) { if ("SET" == d) return e = b(), e + (c + "[" + c + ".length - 1] = " + a + ";\n"); if ("INSERT" == d) return c + ".push(" + a + ");\n" } else if ("FROM_START" == e) { g = Blockly.isNumber(g) ? parseFloat(g) - 1 : g + " - 1"; if ("SET" == d) return c + "[" + g + "] = " + a + ";\n"; if ("INSERT" == d) return c + ".splice(" + g + ", 0, " + a + ");\n" } else if ("FROM_END" == e) {
            e = b(); if ("SET" == d) return e += c + "[" + c + ".length - " + g + "] = " + a + ";\n"; if ("INSERT" == d) return e += c + ".splice(" +
                c + ".length - " + g + ", 0, " + a + ");\n"
        } else if ("RANDOM" == e) { e = b(); g = Blockly.cake.variableDB_.getDistinctName("tmp_x", Blockly.Variables.NAME_TYPE); e += "var " + g + " = Math.floor(Math.random() * " + c + ".length);\n"; if ("SET" == d) return e += c + "[" + g + "] = " + a + ";\n"; if ("INSERT" == d) return e += c + ".splice(" + g + ", 0, " + a + ");\n" } throw "Unhandled combination (lists_setIndex).";
};
Blockly.cake.lists_getSublist = function (a) {
    var b = Blockly.cake.valueToCode(a, "LIST", Blockly.cake.ORDER_MEMBER) || "[]", c = a.getFieldValue("WHERE1"), d = a.getFieldValue("WHERE2"), e = Blockly.cake.valueToCode(a, "AT1", Blockly.cake.ORDER_NONE) || "1"; a = Blockly.cake.valueToCode(a, "AT2", Blockly.cake.ORDER_NONE) || "1"; return ["FIRST" == c && "LAST" == d ? b + ".concat()" : Blockly.cake.provideFunction_("lists_get_sublist", ["function " + Blockly.cake.FUNCTION_NAME_PLACEHOLDER_ + "(list, where1, at1, where2, at2) {", "  function getAt(where, at) {",
        "    if (where == 'FROM_START') {", "      at--;", "    } else if (where == 'FROM_END') {", "      at = list.length - at;", "    } else if (where == 'FIRST') {", "      at = 0;", "    } else if (where == 'LAST') {", "      at = list.length - 1;", "    } else {", "      throw 'Unhandled option (lists_getSublist).';", "    }", "    return at;", "  }", "  at1 = getAt(where1, at1);", "  at2 = getAt(where2, at2) + 1;", "  return list.slice(at1, at2);", "}"]) + "(" + b + ", '" + c + "', " + e + ", '" + d + "', " + a + ")", Blockly.cake.ORDER_FUNCTION_CALL]
};

Blockly.cake.logic = {}; Blockly.cake.controls_if = function (a) { for (var b = 0, c = Blockly.cake.valueToCode(a, "IF" + b, Blockly.cake.ORDER_NONE) || "0", d = Blockly.cake.statementToCode(a, "DO" + b), e = "if (" + c + ") {\n" + d + "}", b = 1; b <= a.elseifCount_; b++)c = Blockly.cake.valueToCode(a, "IF" + b, Blockly.cake.ORDER_NONE) || "0", d = Blockly.cake.statementToCode(a, "DO" + b), e += " else if (" + c + ") {\n" + d + "}"; a.elseCount_ && (d = Blockly.cake.statementToCode(a, "ELSE"), e += " else {\n" + d + "}"); return e + "\n" };
Blockly.cake.logic_compare = function (a) { var b = { EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">=" }[a.getFieldValue("OP")], c = "==" == b || "!=" == b ? Blockly.cake.ORDER_EQUALITY : Blockly.cake.ORDER_RELATIONAL, d = Blockly.cake.valueToCode(a, "A", c) || "0"; a = Blockly.cake.valueToCode(a, "B", c) || "0"; return [d + " " + b + " " + a, c] };
Blockly.cake.logic_operation = function (a) { var b = "AND" == a.getFieldValue("OP") ? "&&" : "||", c = "&&" == b ? Blockly.cake.ORDER_LOGICAL_AND : Blockly.cake.ORDER_LOGICAL_OR, d = Blockly.cake.valueToCode(a, "A", c); a = Blockly.cake.valueToCode(a, "B", c); if (d || a) { var e = "&&" == b ? "1" : "0"; d || (d = e); a || (a = e) } else a = d = "0"; return [d + " " + b + " " + a, c] }; Blockly.cake.logic_negate = function (a) { var b = Blockly.cake.ORDER_LOGICAL_NOT; return ["!" + (Blockly.cake.valueToCode(a, "BOOL", b) || "1"), b] };
Blockly.cake.logic_boolean = function (a) { return ["TRUE" == a.getFieldValue("BOOL") ? "1" : "0", Blockly.cake.ORDER_ATOMIC] }; Blockly.cake.logic_null = function (a) { return ["NULL", Blockly.cake.ORDER_ATOMIC] }; Blockly.cake.logic_ternary = function (a) { var b = Blockly.cake.valueToCode(a, "IF", Blockly.cake.ORDER_CONDITIONAL) || "0", c = Blockly.cake.valueToCode(a, "THEN", Blockly.cake.ORDER_CONDITIONAL) || "null"; a = Blockly.cake.valueToCode(a, "ELSE", Blockly.cake.ORDER_CONDITIONAL) || "null"; return [b + " ? " + c + " : " + a, Blockly.cake.ORDER_CONDITIONAL] };
Blockly.cake.controls_switch = function (a) { for (var b = 0, c = Blockly.cake.valueToCode(a, "SWITCH", Blockly.cake.ORDER_NONE) || "0", d = Blockly.cake.valueToCode(a, "CASE" + b, Blockly.cake.ORDER_NONE) || b, e = Blockly.cake.statementToCode(a, "DO" + b), b = Blockly.cake.statementToCode(a, "DEFAULT"), c = "switch (" + c + ") {\ndefault :\n" + b + "\ncase " + d + " : \n" + e, b = 1; b <= a.caseCount_; b++)d = Blockly.cake.valueToCode(a, "CASE" + b, Blockly.cake.ORDER_NONE) || b, e = Blockly.cake.statementToCode(a, "DO" + b), c += "\ncase " + d + " : \n" + e; return c + "}\n" };
Blockly.cake.controls_switch_break = function (a) { return "break;\n" };

Blockly.cake.loops = {}; Blockly.cake.controls_whileUntil = function (a) { var b = "UNTIL" == a.getFieldValue("MODE"), c = Blockly.cake.valueToCode(a, "BOOL", b ? Blockly.cake.ORDER_LOGICAL_NOT : Blockly.cake.ORDER_NONE) || "0", d = Blockly.cake.statementToCode(a, "DO"), d = Blockly.cake.addLoopTrap(d, a.id); b && (c = "!" + c); return "while (" + c + ") {\n" + d + "}\n" };
Blockly.cake.controls_doWhile = function (a) { var b = "UNTIL" == a.getFieldValue("MODE"), c = Blockly.cake.valueToCode(a, "BOOL", b ? Blockly.cake.ORDER_LOGICAL_NOT : Blockly.cake.ORDER_NONE) || "0", d = Blockly.cake.statementToCode(a, "DO"), d = Blockly.cake.addLoopTrap(d, a.id); b && (c = "!" + c); return "do {\n" + d + "} while (" + c + ");\n" };

Blockly.cake.controls_for = function (b) {
    var a = Blockly.cake.variableDB_.getName(b.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE); if ("___EC_84_A0_ED_83_9D__" == a || "--Select--" == a || "-Item-" == a) a = "unselected"; var e = Blockly.cake.valueToCode(b, "FROM", Blockly.cake.ORDER_ASSIGNMENT) || "0", f = Blockly.cake.valueToCode(b, "TO", Blockly.cake.ORDER_ASSIGNMENT) || "0", c = Blockly.cake.valueToCode(b, "BY", Blockly.cake.ORDER_ASSIGNMENT) || "1", d = Blockly.cake.statementToCode(b, "DO"); d = Blockly.cake.addLoopTrap(d, b.id); a = (b = "TRUE" ==
        b.getFieldValue("ORDER")) ? "for (" + a + "=" + e + "; " + a + "<=" + f + "; " + a : "for (" + a + "=" + e + "; " + a + ">=" + f + "; " + a; Blockly.isNumber(c) ? (c = Math.abs(parseFloat(c)), a = 1 == c ? a + (b ? "++" : "--") : a + ((b ? "+=" : "-=") + c)) : a += (b ? "+=" : "-=") + c; return a + (") {\n" + d + "}\n")
};
Blockly.cake.controls_flow_statements = function (a) { switch (a.getFieldValue("FLOW")) { case "BREAK": return "break;\n"; case "CONTINUE": return "continue;\n" }throw "Unknown flow statement."; };

Blockly.cake.math = {};
Blockly.cake.math_number = function (a) { var b = parseFloat(a.getFieldValue("NUM")); return a.getFieldValue("NUM").endsWith(".0") ? [b + ".0", Blockly.cake.ORDER_ATOMIC] : [b, Blockly.cake.ORDER_ATOMIC] };
Blockly.cake.math_arithmetic = function (a) { var b = { ADD: [" + ", Blockly.cake.ORDER_ADDITION], MINUS: [" - ", Blockly.cake.ORDER_SUBTRACTION], MULTIPLY: [" * ", Blockly.cake.ORDER_MULTIPLICATION], DIVIDE: [" / ", Blockly.cake.ORDER_DIVISION] }[a.getFieldValue("OP")], c = b[0], b = b[1], d = Blockly.cake.valueToCode(a, "A", b) || "0"; a = Blockly.cake.valueToCode(a, "B", b) || "0"; return ["(" + d + c + a + ")", b] };



Blockly.cake.ledinit = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'LED_Init();\n';
    Blockly.cake.definitions_.STM32_SYS= "#include \"sys.h\"\n";
    Blockly.cake.definitions_.STM32_LED= "#include \"led.h\"\n";
    return code;
  };
Blockly.cake.ledonoff = function(block) {
    var ledx = block.getFieldValue('ledx');
    var onoff = block.getFieldValue('onoff');
    if (onoff=="~")
    {
    var code = ledx+'='+onoff+ledx+';'+'\n';
    Blockly.cake.definitions_.STM32_SYS= "#include \"sys.h\"\n";
    Blockly.cake.definitions_.STM32_LED= "#include \"led.h\"\n";
    return code;
    }
    var code = ledx+'='+onoff+';'+'\n';
    Blockly.cake.definitions_.STM32_SYS= "#include \"sys.h\"\n";
    Blockly.cake.definitions_.STM32_LED= "#include \"led.h\"\n";
    return code;
  };
  Blockly.cake.timedelayinit= function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'delay_init();\n';
    Blockly.cake.definitions_.STM32_SYS= "#include \"sys.h\"\n";
    Blockly.cake.definitions_.STM32_timedelay= "#include \"delay.h\"\n";
    return code;
  };
  Blockly.cake.timedelay = function(block) {
    var text_delay = block.getFieldValue('delay');
    var dropdown_time = block.getFieldValue('time');
    // TODO: Assemble JavaScript into code variable.
    var code = 'delay_'+dropdown_time+'('+text_delay+')'+';'+'\n';
    Blockly.cake.definitions_.STM32_SYS= "#include \"sys.h\"\n";
    Blockly.cake.definitions_.STM32_timedelay= "#include \"delay.h\"\n";
    return code;
  };
  Blockly.cake.ledtimedelay= function(block) {
    var dropdown_led = block.getFieldValue('led');
    var text_time = block.getFieldValue('time');
    var dropdown_delay = block.getFieldValue('delay');
    var dropdown_status = block.getFieldValue('status');
    // TODO: Assemble JavaScript into code variable.
    var code1 = 'delay_'+dropdown_delay+'('+text_time+')'+';'+'\n';
    if (dropdown_status=="~")
    {
        var code2=dropdown_led+'='+dropdown_status+dropdown_led+';'+'\n';
    }
    else
    {
    var code2=dropdown_led+'='+dropdown_status+';'+'\n';
    }
    Blockly.cake.definitions_.STM32_SYS= "#include \"sys.h\"\n";
    Blockly.cake.definitions_.STM32_LED= "#include \"led.h\"\n";
    Blockly.cake.definitions_.STM32_timedelay= "#include \"delay.h\"\n";
    return code1+code2;
  };
  Blockly.cake.beepinit = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'BEEP_Init();\n';
    Blockly.cake.definitions_.STM32_SYS= "#include \"sys.h\"\n";
    Blockly.cake.definitions_.STM32_beep= "#include \"beep.h\"\n";
    return code;
  };
  Blockly.cake.beeponoff = function(block) {
    var dropdown_status = block.getFieldValue('status');
    // TODO: Assemble JavaScript into code variable.
    if (dropdown_status=="~")
    {
    var code='BEEP='+dropdown_status+'BEEP'+';'+'\n';
    }
    else
    {
    var code='BEEP='+dropdown_status+';'+'\n';
    }
    Blockly.cake.definitions_.STM32_SYS= "#include \"sys.h\"\n";
    Blockly.cake.definitions_.STM32_beep= "#include \"beep.h\"\n";
    return code;
  };
  Blockly.cake.lcdinit= function(block) {
    // TODO: Assemble JavaScript into code variable.
    Blockly.cake.definitions_.STM32_SYS= "#include \"sys.h\"";
    Blockly.cake.definitions_.STM32_LCD= "#include \"lcd.h\"";
    Blockly.cake.definitions_.STM32_USART= "#include \"usart.h\"\n";
    var code = 'uart_init(115200);\nLCD_Init();\n';
    return code;
  };
  Blockly.cake.lcd_font_color= function(block) {
    Blockly.cake.definitions_.STM32_SYS= "#include \"sys.h\"";
    Blockly.cake.definitions_.STM32_LCD= "#include \"lcd.h\"";
    Blockly.cake.definitions_.STM32_USART= "#include \"usart.h\"\n";
    var dropdown_font_color = block.getFieldValue('font_color');
    // TODO: Assemble JavaScript into code variable.
    var code ='POINT_COLOR='+dropdown_font_color+';\n';
    return code;
  };
  Blockly.cake.lcd_show = function(block) {
    Blockly.cake.definitions_.STM32_SYS= "#include \"sys.h\"";
    Blockly.cake.definitions_.STM32_LCD= "#include \"lcd.h\"";
    Blockly.cake.definitions_.STM32_USART= "#include \"usart.h\"";
    var text_font_x = block.getFieldValue('font_x');
    var text_font_y = block.getFieldValue('font_y');
    var text_font_w = block.getFieldValue('font_w');
    var text_font_h = block.getFieldValue('font_h');
    var text_font_size = block.getFieldValue('font_size');
    var text_font_text = block.getFieldValue('font_text');
    // TODO: Assemble JavaScript into code variable.
    var code = 'LCD_ShowString('+text_font_x+','+text_font_y+','+text_font_w+','+text_font_h+','+text_font_size+','+'\"'+text_font_text+'\"'+');\n';
    return code;
  };


Blockly.cake.math_modulo = function (a) { var b = Blockly.cake.valueToCode(a, "DIVIDEND", Blockly.cake.ORDER_MODULUS) || "0"; a = Blockly.cake.valueToCode(a, "DIVISOR", Blockly.cake.ORDER_MODULUS) || "0"; return [b + " % " + a, Blockly.cake.ORDER_MODULUS] };
Blockly.cake.library_math_abs = function (a) { a = Blockly.cake.valueToCode(a, "VAR", Blockly.cake.ORDER_NONE) || "''"; Blockly.cake.definitions_.include_cake_math = "#include <math.h>"; return ["fabs(" + a + ")", Blockly.cake.ORDER_NONE] };
Blockly.cake.library_math_trig = function (a) { var b = a.getFieldValue("OP"); a = Blockly.cake.valueToCode(a, "NUM", Blockly.cake.ORDER_NONE) || "0"; switch (b) { case "SIN": b = "sin(" + a + ")"; break; case "COS": b = "cos(" + a + ")"; break; case "TAN": b = "tan(" + a + ")"; break; default: throw "Unknown math operator: " + b; }Blockly.cake.definitions_.include_cake_math = "#include <math.h>"; return [b, Blockly.cake.ORDER_NONE] };
Blockly.cake.library_math_logs = function (a) { var b = a.getFieldValue("OP"); a = Blockly.cake.valueToCode(a, "NUM", Blockly.cake.ORDER_NONE) || "0"; switch (b) { case "LOG": b = "log(" + a + ")"; break; case "LOG10": b = "log10(" + a + ")"; break; case "LOG2": b = "log2(" + a + ")"; break; default: throw "Unknown math operator: " + b; }Blockly.cake.definitions_.include_cake_math = "#include <math.h>"; return [b, Blockly.cake.ORDER_NONE] };
Blockly.cake.library_math_pow = function (a) { var b = Blockly.cake.valueToCode(a, "BASE", Blockly.cake.ORDER_NONE) || "''"; a = Blockly.cake.valueToCode(a, "EXPO", Blockly.cake.ORDER_NONE) || "''"; Blockly.cake.definitions_.include_cake_math = "#include <math.h>"; return ["pow(" + b + "," + a + ")", Blockly.cake.ORDER_NONE] }; Blockly.cake.library_math_exp = function (a) { a = Blockly.cake.valueToCode(a, "EXPO", Blockly.cake.ORDER_NONE) || "''"; Blockly.cake.definitions_.include_cake_math = "#include <math.h>"; return ["exp(" + a + ")", Blockly.cake.ORDER_NONE] };
Blockly.cake.library_math_sqrt = function (a) { a = Blockly.cake.valueToCode(a, "VAR", Blockly.cake.ORDER_NONE) || "''"; Blockly.cake.definitions_.include_cake_math = "#include <math.h>"; return ["sqrt(" + a + ")", Blockly.cake.ORDER_NONE] };
Blockly.cake.library_math_round = function (a) { var b = a.getFieldValue("OP"); a = Blockly.cake.valueToCode(a, "NUM", Blockly.cake.ORDER_NONE) || "''"; switch (b) { case "ROUND": b = "round(" + a + ")"; break; case "CEIL": b = "ceil(" + a + ")"; break; case "FLOOR": b = "floor(" + a + ")"; break; case "TRUNC": b = "trunc(" + a + ")"; break; default: throw "Unknown math operator: " + b; }Blockly.cake.definitions_.include_cake_math = "#include <math.h>"; return [b, Blockly.cake.ORDER_NONE] };
Blockly.cake.library_math_numcheck = function (a) { var b = a.getFieldValue("CONDITIONS"); a = Blockly.cake.valueToCode(a, "VAR", Blockly.cake.ORDER_NONE) || "''"; switch (b) { case "ISFINITE": b = "isfinite(" + a + ")"; break; case "ISINF": b = "isinf(" + a + ")"; break; case "SIGNBIT": b = "signbit(" + a + ")"; break; case "ISNAN": b = "isnan(" + a + ")"; break; default: throw "Unknown math operator: " + b; }Blockly.cake.definitions_.include_cake_math = "#include <math.h>"; return [b, Blockly.cake.ORDER_NONE] };
Blockly.cake.library_math_numcompare = function (a) {
    var b = a.getFieldValue("CONDITIONS"), c = Blockly.cake.valueToCode(a, "VAR1", Blockly.cake.ORDER_NONE) || "''"; a = Blockly.cake.valueToCode(a, "VAR2", Blockly.cake.ORDER_NONE) || "''"; switch (b) {
        case "ISGREATER": b = "isgreater(" + c + "," + a + ")"; break; case "ISLESS": b = "isless(" + c + "," + a + ")"; break; case "ISGREQ": b = "isgreaterequal(" + c + "," + a + ")"; break; case "ISLEEQ": b = "islessequal(" + c + "," + a + ")"; break; case "ISLEGR": b = "islessgreater(" + c + "," + a + ")"; break; case "ISUNORDER": b = "isunordered(" +
            c + "," + a + ")"; break; default: throw "Unknown math operator: " + b;
    }Blockly.cake.definitions_.include_cake_math = "#include <math.h>"; return [b, Blockly.cake.ORDER_NONE]
};

Blockly.cake.procedures = {};
Blockly.cake.main_block = function (c) {
    var b = Blockly.cake.statementToCode(c, "STACK"); Blockly.cake.STATEMENT_PREFIX && (b = Blockly.cake.prefixLines(Blockly.cake.STATEMENT_PREFIX.replace(/%1/g, "'" + c.id + "'"), Blockly.cake.INDENT) + b); Blockly.cake.INFINITE_LOOP_TRAP && (b = Blockly.cake.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + c.id + "'") + b); var g = Blockly.cake.valueToCode(c, "RETURN", Blockly.cake.ORDER_NONE) || ""; g = g ? "  return " + g + ";\n" : "  return 0;\n"; for (var d = [], e = [], h = [], a = 0; a < c.arguments_.length; a++)d[a] = Blockly.cake.variableDB_.getName(c.arguments_[a],
        Blockly.Variables.NAME_TYPE), e[a] = c.types_[a], h[a] = e[a] + " " + d[a]; d = []; e = []; for (var f in Blockly.cake.times_) a = Blockly.cake.times_[f], f.match("srand") ? "main_block" == a[0] && (a = Blockly.cake.prefixLines(a[1], Blockly.cake.INDENT), d.push(a)) : f.match("time") && "main_block" == a[0] && (a = Blockly.cake.prefixLines(a[1], Blockly.cake.INDENT), e.push(a)); f = d.length ? d.join("\n") + "\n" + e.join("\n") : e.join("\n"); b = "int main(" + h.join(", ") + ") {" + f.replace(/\n\n+/g, "\n\n").replace(/\n*$/, "\n") + b + g + "}"; b = Blockly.cake.scrub_(c,
            b); Blockly.cake.definitions_.main = b; return null
};
Blockly.cake.procedures_return = function (a) { a = Blockly.cake.valueToCode(a, "VALUE", Blockly.cake.ORDER_NONE) || "NaN"; return "NaN" != a ? "return " + a + ";\n" : "return;\n" };
Blockly.cake.procedures_defreturn = function (b) {
    var c = Blockly.cake.variableDB_.getName(b.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE), a = Blockly.cake.statementToCode(b, "STACK"); Blockly.cake.STATEMENT_PREFIX && (a = Blockly.cake.prefixLines(Blockly.cake.STATEMENT_PREFIX.replace(/%1/g, "'" + b.id + "'"), Blockly.cake.INDENT) + a); Blockly.cake.INFINITE_LOOP_TRAP && (a = Blockly.cake.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + b.id + "'") + a); var h = Blockly.Procedures.getTypePlusArgs(b), f = [], e = []; for (g in Blockly.cake.times_) {
        var d =
            Blockly.cake.times_[g]; g.match("srand") ? d[0] == c && (d = Blockly.cake.prefixLines(d[1], Blockly.cake.INDENT), f.push(d)) : g.match("time") && d[0] == c && (d = Blockly.cake.prefixLines(d[1], Blockly.cake.INDENT), e.push(d))
    } e = f.length ? f.join("\n") + "\n" + e.join("\n") : e.join("\n"); f = b.getFieldValue("TYPES"); var g = b.getFieldValue("DISTS"); "pointer" == g ? (g = b.getFieldValue("PSPECS"), null == g && (g = "*"), a = f + g + " " + c + "(" + h.join(", ") + ") {" + e.replace(/\n\n+/g, "\n\n").replace(/\n*$/, "\n") + a + "}") : "array" == g ? (g = b.getFieldValue("ASPECS"),
        null == g && (g = "[]"), a = f + g + " " + c + "(" + h.join(", ") + ") {" + e.replace(/\n\n+/g, "\n\n").replace(/\n*$/, "\n") + a + "}") : a = f + " " + c + "(" + h.join(", ") + ") {" + e.replace(/\n\n+/g, "\n\n").replace(/\n*$/, "\n") + a + "}"; a = Blockly.cake.scrub_(b, a); Blockly.cake.definitions_[c] = a; Blockly.cake.definitions_["Func_declare" + c] = f + " " + c + "(" + h.join(", ") + ");"; -1 == Blockly.Blocks.checkLegalName(Blockly.Msg.PROCEDURES_ILLEGALNAME, c) && this.initName(); return null
};
Blockly.cake.procedures_defnoreturn = function (b) {
    var c = Blockly.cake.variableDB_.getName(b.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE), a = Blockly.cake.statementToCode(b, "STACK"), h = [], f = [], e; for (e in Blockly.cake.times_) { var d = Blockly.cake.times_[e]; e.match("srand") ? d[0] == c && (d = Blockly.cake.prefixLines(d[1], Blockly.cake.INDENT), h.push(d)) : e.match("time") && d[0] == c && (d = Blockly.cake.prefixLines(d[1], Blockly.cake.INDENT), f.push(d)) } f = h.length ? h.join("\n") + "\n" + f.join("\n") : f.join("\n"); Blockly.cake.STATEMENT_PREFIX &&
        (a = Blockly.cake.prefixLines(Blockly.cake.STATEMENT_PREFIX.replace(/%1/g, "'" + b.id + "'"), Blockly.cake.INDENT) + a); Blockly.cake.INFINITE_LOOP_TRAP && (a = Blockly.cake.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + b.id + "'") + a); (e = Blockly.cake.valueToCode(b, "RETURN", Blockly.cake.ORDER_NONE) || "") && (e = "  return " + e + ";\n"); h = Blockly.Procedures.getTypePlusArgs(b); a = "void " + c + "(" + h.join(", ") + ") {" + f.replace(/\n\n+/g, "\n\n").replace(/\n*$/, "\n") + a + e + "}"; a = Blockly.cake.scrub_(b, a); Blockly.cake.definitions_[c] = a; Blockly.cake.definitions_["Func_declare" +
            c] = "void " + c + "(" + h.join(", ") + ");"; -1 == Blockly.Blocks.checkLegalName(Blockly.Msg.PROCEDURES_ILLEGALNAME, c) && this.initName(); return null
};
Blockly.cake.procedures_callreturn = function (b) { for (var d = Blockly.cake.variableDB_.getName(b.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE), c = [], a = 0; a < b.arguments_.length; a++)c[a] = Blockly.cake.valueToCode(b, "ARG" + a, Blockly.cake.ORDER_COMMA) || "null"; return [d + "(" + c.join(", ") + ")", Blockly.cake.ORDER_FUNCTION_CALL] };
Blockly.cake.procedures_callnoreturn = function (a) { for (var b = Blockly.cake.variableDB_.getName(a.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE), c = [], d = 0; d < a.arguments_.length; d++)c[d] = Blockly.cake.valueToCode(a, "ARG" + d, Blockly.cake.ORDER_COMMA) || "null"; return b + "(" + c.join(", ") + ");\n" };
Blockly.cake.stdio = {};

Blockly.cake.library_stdio_printf = function (p) {
    for (var b, f, d = "", h = "", l = 0; l <= p.printAddCount_; l++) {
        b = Blockly.cake.valueToCode(p, "VAR" + l, Blockly.cake.ORDER_NONE) || ""; var c = p.inputList[l].connection, e = c.targetBlock(); if (e) {
            var a = e.type; if ("math_prev_inc_decrement" == a || "math_post_inc_decrement" == a || "math_modulo" == a || "library_stdlib_abs" == a || "library_string_strlen" == a || "library_stdlib_rand" == a || "library_stdlib_number_forRandScope1" == a || "library_stdlib_number_forRandScope100" == a || "library_stdlib_sizeof_forMalloc" ==
                a || "library_stdlib_arithmetic_forMalloc" == a || "library_stdlib_number_forMalloc" == a) d += "%d", h += ", " + b; else if ("math_arithmetic" == a) {
                    a = "%d"; e = c.targetBlock(); for (var g, m = null; ;) {
                        g = e.childBlocks_; for (c = 0; c < g.length; c++) {
                            if ("variables_get" == g[c].type && (f = Blockly.cake.varTypeCheckInPrintScan(g[c].getVars()[0]), "%f" == f)) { a = f; break } if ("variables_pointer_get" == g[c].type) { a = "%p"; break } if ("variables_pointer_*" == g[c].type) {
                                if ("variables_pointer_get" == g[c].childBlocks_[0].type && (f = Blockly.cake.pointerTypeCheckInPrint(g[c].childBlocks_[0].getVars()[0],
                                    !1), "%f" == f)) { a = f; break } if ("variables_pointer_*" == g[c].childBlocks_[0].type && "variables_pointer_get" == g[c].childBlocks_[0].childBlocks_[0].type && (f = Blockly.cake.pointerTypeCheckInPrint(g[c].childBlocks_[0].childBlocks_[0].getVars()[0], !1), "%f" == f)) { a = f; break }
                            } if ("math_number" == g[c].type && -1 != b.indexOf(".")) { a = "%f"; break } "math_arithmetic" == g[c].type && (g == e.childBlocks_ ? e = g[c] : m = g[c])
                        } if ("%p" == a || "%f" == a) break; else if (g == e.childBlocks_) if (null != m) e = m, m = null; else break
                    } d += a; h += ", " + b
                } else if ("math_number" ==
                    a) d = -1 != b.indexOf(".") ? d + "%f" : d + "%d", h += ", " + b; else if ("procedures_callreturn" == a) { e = c.targetBlock(); a = "%d"; f = Blockly.Procedures.allProcedures()[1]; e = e.getCallFuncName(); for (c = 0; c < f.length; c++)if (e == f[c][1]) { var k = f[c]; break } if (k) if ("variable" == k[7]) "int" == k[2] ? a = "%d" : "unsigned int" == k[2] ? a = "%u" : "float" == k[2] ? a = "%f" : "double" == k[2] ? a = "%f" : "char" == k[2] && (a = "%c"); else if ("pointer" == k[7] || "array" == k[7]) a = "%p"; d += a; h += ", " + b } else if ("library_math_abs" == a || "library_math_trig" == a || "library_math_logs" == a ||
                        "library_math_pow" == a || "library_math_exp" == a || "library_math_sqrt" == a || "library_math_round" == a) d += "%f", h += ", " + b; else if ("structure_get" == a) {
                            a = b.split("."); f = Blockly.Structure.allStructure(); e = null; for (c = 0; c < f.length; c++)if ("sn" == f[c][0][0] && a[0] == f[c][0][2]) { e = f[c]; break } if (e) { c = f = null; for (g = 0; g < e[0][4].length; g++)if (a[1] == e[0][4][g]) { c = e[0][3][g]; f = e[0][5][g]; break } d = "v" == f ? "unsigned int" == c ? d + "%u" : "float" == c ? d + "%f" : "double" == c ? d + "%f" : "char" == c ? d + "%c" : d + "%d" : "a" == f ? d + "%s" : "p" == f ? d + "%p" : d + "error!" } else d +=
                                "error!"; h += ", " + b
                        } else if ("math_convert_type" == a) d = -1 != b.indexOf("unsigned int") ? d + "%u" : -1 != b.indexOf("float") ? d + "%f" : -1 != b.indexOf("double") ? d + "%f" : -1 != b.indexOf("char") ? d + "%c" : d + "%d", h += ", " + b; else if ("library_string_strcat" == a || "library_string_strcpy" == a || "library_string_strcmp" == a) d += "%s", h += ", " + b; else if ("library_stdlib_convert" == a) -1 != b.indexOf("atoi(") ? d += "%d" : -1 != b.indexOf("atof(") && (d += "%f"), h += ", " + b; else if ("library_stdio_text_char" == a) d += "%c", h += ", " + b; else if ("variables_array_get" ==
                            a) a = b.split("["), f = Blockly.cake.varTypeCheckInPrintScan(a[0]), "%c" == f ? (e = c.targetBlock(), 0 == e.getInputIdxLength() ? (d += "%s", h += ", " + a[0]) : (d += f, h += ", " + b)) : (d += f, h += ", " + b); else if ("variables_pointer_get" == a || "variables_array_pointer" == a) "variables_array_pointer" == a ? d += "%p" : (f = Blockly.cake.pointerTypeCheckInPrint(b, !1), d = "%c" == f ? d + "%s" : d + "%p"), h += ", " + b; else if ("variables_pointer_&" == a) e.inputList[0].connection.targetBlock() && (b = Blockly.cake.valueToCode(e, "VALUE", Blockly.cake.ORDER_NONE) || "", d += "%p",
                                h += ", &" + b); else if ("variables_pointer_*" == a) {
                                    if (e.inputList[0].connection.targetBlock()) if (b = Blockly.cake.valueToCode(e, "VALUE", Blockly.cake.ORDER_NONE) || "", "structure_get" == e.inputList[0].connection.targetBlock().type) {
                                        a = b.split("."); f = Blockly.Structure.allStructure(); e = null; for (c = 0; c < f.length; c++)if ("sn" == f[c][0][0] && a[0] == f[c][0][2]) { e = f[c]; break } if (e) {
                                            c = f = null; for (g = 0; g < e[0][4].length; g++)if (a[1] == e[0][4][g]) { c = e[0][3][g]; f = e[0][5][g]; break } d = "p" == f ? "unsigned int" == c ? d + "%u" : "float" == c ? d + "%f" :
                                                "double" == c ? d + "%f" : "char" == c ? d + "%c" : d + "%d" : d + "error!"
                                        } else d += "error!"; h += ", *" + b
                                    } else if (0 <= b.indexOf("*") && e.inputList[0].connection.targetBlock().inputList[0].connection.targetBlock()) b = Blockly.cake.valueToCode(e.inputList[0].connection.targetBlock(), "VALUE", Blockly.cake.ORDER_NONE) || "", f = Blockly.cake.pointerTypeCheckInPrint(b, !0), "" == f ? d += b : (d += f, h += ", **" + b); else if (0 <= b.indexOf("-") || 0 <= b.indexOf("+")) {
                                        e = b.indexOf("--"); if (-1 != e) var n = 0 == e ? b.substring(2) : b.substring(0, e); else e = b.indexOf("++"),
                                            -1 != e ? n = 0 == e ? b.substring(2) : b.substring(0, e) : (e = b.indexOf("+"), -1 != e ? n = b.substring(1, e - 1) : (e = b.indexOf("-"), -1 != e && (n = b.substring(1, e - 1)))); f = Blockly.cake.pointerTypeCheckInPrint(n, !1); d += f; h += ", *" + b
                                    } else f = Blockly.cake.pointerTypeCheckInPrint(b, !1), "" == f ? d += b : (d += f, h += ", *" + b)
                                } else "library_math_numcheck" == a || "library_math_numcompare" == a || "procedures_callreturn" == a || "logic_compare" == a || "logic_operation" == a || "logic_negate" == a || "logic_boolean" == a || "logic_null" == a || "logic_ternary" == a || "controls_switch" ==
                                    a || "library_stdlib_rand_scope" == a || "library_stdlib_malloc" == a ? (c.isSuperior() ? c.targetBlock().setParent(null) : c.sourceBlock_.setParent(null), c.sourceBlock_.bumpNeighbours_()) : (f = Blockly.cake.varTypeCheckInPrintScan(b), "" == f ? d += b : (d += f, h += ", " + b))
        }
    } Blockly.cake.definitions_.include_cake_stdio = "#include <stdio.h>"; return ("" == h ? 'printf("' + d + '");' : 'printf("' + d + '"' + h + ");") + "\n"
};

Blockly.cake.library_stdio_text = function (f) { var b = Blockly.cake.quote_(f.getFieldValue("TEXT")); if (!f.getParent() || "library_stdio_printf" != f.getParent().type && "define_declare" != f.getParent().type && "comment" != f.getParent().type) b = 1 == b.length ? "'" + b + "'" : '"' + b + '"'; return [b, Blockly.cake.ORDER_ATOMIC] };
Blockly.cake.library_stdio_newLine = function (a) { return !a.getParent() || "library_stdio_printf" != a.getParent().type && "define_declare" != a.getParent().type && "comment" != a.getParent().type ? ["'\\n'", Blockly.cake.ORDER_ATOMIC] : ["\\n", Blockly.cake.ORDER_NONE] };
Blockly.cake.library_stdio_tab = function (a) { return !a.getParent() || "library_stdio_printf" != a.getParent().type && "define_declare" != a.getParent().type && "comment" != a.getParent().type ? ["'\\t'", Blockly.cake.ORDER_ATOMIC] : ["\\t", Blockly.cake.ORDER_NONE] };
Blockly.cake.library_stdio_text_char = function () { return ["'" + this.getFieldValue("CHAR") + "'", Blockly.cake.ORDER_ATOMIC] };
Blockly.cake.library_stdio_scanf = function (g) {
    for (var b, a, c = "", d = "", h = 0; h <= g.scanAddCount_; h++) {
        b = Blockly.cake.valueToCode(g, "VAR" + h, Blockly.cake.ORDER_NONE) || ""; var e = g.inputList[h].connection, f = e.targetBlock(); if (f) if (a = f.type, "variables_array_get" == a) { var k = b.split("["); a = Blockly.cake.varTypeCheckInPrintScan2(k[0]); "%c" == a ? (f = e.targetBlock(), 0 == f.getInputIdxLength() ? (c += ",%s", d += ", " + k[0]) : (c += "," + a, d += ", &" + b)) : (c += "," + a, d += ", &" + b) } else "variables_pointer_get" == a ? (a = Blockly.cake.varTypeCheckInPrintScan2(b),
            "%c" == a && (a = "%s"), c += "," + a, d += ", " + b) : "variables_pointer_&" == a ? (e.isSuperior() ? e.targetBlock().setParent(null) : e.sourceBlock_.setParent(null), e.sourceBlock_.bumpNeighbours_()) : "variables_pointer_*" == a ? f.inputList[0].connection.targetBlock() && (b = Blockly.cake.valueToCode(f, "VALUE", Blockly.cake.ORDER_NONE) || "", a = Blockly.cake.varTypeCheckInPrintScan2(b), "" == a ? c += b : (c += "," + a, d += ", &*" + b)) : (a = Blockly.cake.varTypeCheckInPrintScan2(b), c += "," + a, d += ", &" + b)
    } g = "" == d ? 'scanf("' + c.substring(1) + '");' : 'scanf("' +
        c.substring(1) + '"' + d + ");"; Blockly.cake.definitions_.include_cake_stdio = "#include <stdio.h>"; return g + "\n"
};
Blockly.cake.varTypeCheckInPrintScan = function (f) { for (var b = "", a = Blockly.Variables.allVariables(), c = 0; c < a.length; c++)if (f == a[c][2]) { f = a[c][0]; "int" == f ? b = "%d" : "unsigned int" == f ? b = "%u" : "float" == f ? b = "%f" : "double" == f ? b = "%f" : "char" == f ? b = "%c" : "dbchar" == f && (b = "%s"); break } return b };
Blockly.cake.pointerTypeCheckInPrint = function (f, b) { var a = "", c = Blockly.Variables.allVariables(); if (1 == b) { for (var d = 0; d < c.length; d++)if (f == c[d][2]) { var e = c[d][0]; "dbint" == e ? a = "%d" : "dbunsigned int" == e ? a = "%u" : "dbfloat" == e ? a = "%f" : "dbdouble" == e ? a = "%f" : "dbchar" == e && (a = "%c"); break } return a } for (d = 0; d < c.length; d++)if (f == c[d][2]) return e = c[d][0], "*" == c[d][5] ? "int" == e ? a = "%d" : "unsigned int" == e ? a = "%u" : "float" == e ? a = "%f" : "double" == e ? a = "%f" : "char" == e && (a = "%c") : a = "dbchar" == e ? "%s" : "%p", a };
Blockly.cake.arrTypeCheckInScan = function (f, b) { for (var a = "", c = b.targetBlock(), d = Blockly.Blocks.getWantedBlockArray("a"), e = 0; e < d.length; e++) { var g = Blockly.FieldDropdown.prototype.getTypefromVars(d[e][2], 0), h = d[e][5][0], k = c.getInputIdxLength(); if (h == k) { "int" == g ? a = "%d" : "unsigned int" == g ? a = "%u" : "float" == g ? a = "%f" : "double" == g ? a = "%f" : "char" == g ? a = "%c" : "dbchar" == g && (a = "%s"); break } else if (h > k && "char" == d[e][0]) { a = "%s"; break } else b.isSuperior() ? b.targetBlock().setParent(null) : b.sourceBlock_.setParent(null), b.sourceBlock_.bumpNeighbours_() } return a };
Blockly.cake.comment = function (f) { for (var b = "", a = "", c = 0, d = 0; d <= f.commentAddCount_; d++) { b = Blockly.cake.valueToCode(f, "VAR" + d, Blockly.cake.ORDER_NONE) || ""; var e = f.inputList[d].connection, g = e.targetBlock(); g && "library_stdio_text" != g.type && (e.isSuperior() ? e.targetBlock().setParent(null) : e.sourceBlock_.setParent(null), e.sourceBlock_.bumpNeighbours_()); "" != b && (a += b + "\n"); c += 1 } return 1 == c ? "" != b ? "//" + a : "//\n" : "/*\n" + a + "*/\n" };
Blockly.cake.varTypeCheckInPrintScan2 = function (f) { for (var b = "", a = Blockly.Variables.allVariables(), c = 0; c < a.length; c++)if (f == a[c][2]) { f = a[c][0]; "int" == f ? b = "%d" : "unsigned int" == f ? b = "%u" : "float" == f ? b = "%f" : "double" == f ? b = "%lf" : "char" == f ? b = "%c" : "dbchar" == f && (b = "%s"); break } return b };
Blockly.cake.pointerTypeCheckInPrint2 = function (f, b) { var a = "", c = Blockly.Variables.allVariables(); if (1 == b) { for (var d = 0; d < c.length; d++)if (f == c[d][2]) { var e = c[d][0]; "dbint" == e ? a = "%d" : "dbunsigned int" == e ? a = "%u" : "dbfloat" == e ? a = "%f" : "dbdouble" == e ? a = "%lf" : "dbchar" == e && (a = "%c"); break } return a } for (d = 0; d < c.length; d++)if (f == c[d][2]) return e = c[d][0], "*" == c[d][5] ? "int" == e ? a = "%d" : "unsigned int" == e ? a = "%u" : "float" == e ? a = "%f" : "double" == e ? a = "%lf" : "char" == e && (a = "%c") : a = "dbchar" == e ? "%s" : "%p", a };
Blockly.cake.arrTypeCheckInScan2 = function (f, b) {
    for (var a = "", c = b.targetBlock(), d = Blockly.Blocks.getWantedBlockArray("a"), e = 0; e < d.length; e++) {
        var g = Blockly.FieldDropdown.prototype.getTypefromVars(d[e][2], 0), h = d[e][5][0], k = c.getInputIdxLength(); if (h == k) { "int" == g ? a = "%d" : "unsigned int" == g ? a = "%u" : "float" == g ? a = "%f" : "double" == g ? a = "%lf" : "char" == g ? a = "%c" : "dbchar" == g && (a = "%s"); break } else if (h > k && "char" == d[e][0]) { a = "%s"; break } else b.isSuperior() ? b.targetBlock().setParent(null) : b.sourceBlock_.setParent(null),
            b.sourceBlock_.bumpNeighbours_()
    } return a
};
Blockly.cake.comment = function (a) { for (var b = "", c = "", d = 0, e = 0; e <= a.commentAddCount_; e++) { var b = Blockly.cake.valueToCode(a, "VAR" + e, Blockly.cake.ORDER_NONE) || "", g = a.inputList[e].connection, h = g.targetBlock(); h && "library_stdio_text" != h.type && (g.isSuperior() ? g.targetBlock().setParent(null) : g.sourceBlock_.setParent(null), g.sourceBlock_.bumpNeighbours_()); "" != b && (c += b + "\n"); d += 1 } return 1 == d ? "" != b ? "//" + c : "//\n" : "/*\n" + c + "*/\n" };
Blockly.cake.stdlib = {};
Blockly.cake.library_stdlib_abs = function (a) { a = Blockly.cake.valueToCode(a, "VAR", Blockly.cake.ORDER_NONE) || "''"; Blockly.cake.definitions_.include_cake_stdlib = "#include <stdlib.h>"; return ["abs(" + a + ")", Blockly.cake.ORDER_NONE] };
Blockly.cake.library_stdlib_convert = function (a) { var b = a.getFieldValue("OPERATORS"); a = Blockly.cake.valueToCode(a, "VAR", Blockly.cake.ORDER_NONE) || '""'; switch (b) { case "INT": b = "atoi(" + a + ")"; break; case "DOUBLE": b = "atof(" + a + ")"; break; default: throw "Unknown math operator: " + b; }Blockly.cake.definitions_.include_cake_stdlib = "#include <stdlib.h>"; return [b, Blockly.cake.ORDER_NONE] };
Blockly.cake.library_stdlib_rand = function (b) { var a = Blockly.cake.valueToCode(b, "VAR", Blockly.cake.ORDER_NONE) || "0"; Blockly.cake.definitions_.include_cake_stdlib = "#include <stdlib.h>"; Blockly.cake.definitions_.include_cake_time = "#include <time.h>"; a = "0" == a ? "rand()" : "rand()" + a; Blockly.cake.getUpperLine(b); return [a, Blockly.cake.ORDER_NONE] };
Blockly.cake.getUpperLine = function (a) { a = a.getScope(); Blockly.cake.times_.cake_time_srand = [a, "\nsrand(time(NULL));"] };
Blockly.cake.library_stdlib_rand_scope = function (a) { var b = Blockly.cake.valueToCode(a, "A", Blockly.cake.ORDER_NONE) || "0"; a = Blockly.cake.valueToCode(a, "B", Blockly.cake.ORDER_NONE) || "0"; return [1 == b ? " % " + a + " + " + b : " % (" + a + "-" + b + "+1) + " + b, Blockly.cake.ORDER_NONE] }; Blockly.cake.library_stdlib_number_forRandScope1 = function (a) { return [parseFloat(a.getFieldValue("NUM")), Blockly.cake.ORDER_ATOMIC] }; Blockly.cake.library_stdlib_number_forRandScope100 = function (a) { return [parseFloat(a.getFieldValue("NUM")), Blockly.cake.ORDER_ATOMIC] };
Blockly.cake.library_stdlib_malloc = function (a) { var b = Blockly.FieldDropdown.prototype.getParentType(a, "variables_pointer"); a = Blockly.cake.valueToCode(a, "VAR", Blockly.cake.ORDER_NONE) || "0"; Blockly.cake.definitions_.include_cake_stdlib = "#include <stdlib.h>"; return ["(" + b + " *)malloc(" + a + ")", Blockly.cake.ORDER_NONE] }; Blockly.cake.library_stdlib_sizeof_forMalloc = function (a) { return ["sizeof(" + (Blockly.cake.valueToCode(a, "VAR", Blockly.cake.ORDER_NONE) || "0") + ")", Blockly.cake.ORDER_NONE] };
Blockly.cake.library_stdlib_arithmetic_forMalloc = function (a) { var b = Blockly.cake.valueToCode(a, "A", Blockly.cake.ORDER_NONE) || "0"; a = Blockly.cake.valueToCode(a, "B", Blockly.cake.ORDER_NONE) || "0"; return [b + " * " + a, Blockly.cake.ORDER_NONE] }; Blockly.cake.library_stdlib_number_forMalloc = function (a) { return [parseFloat(a.getFieldValue("NUM")), Blockly.cake.ORDER_ATOMIC] };
Blockly.cake.library_stdlib_free = function (a) { a = Blockly.cake.valueToCode(a, "VAR", Blockly.cake.ORDER_NONE) || "0"; Blockly.cake.definitions_.include_cake_stdlib = "#include <stdlib.h>"; return "free(" + a + ");\n" }; Blockly.cake.library_stdlib_exit = function (a) { a = a.getFieldValue("OPERATORS"); switch (a) { case "SUCCESS": a = "exit(0);\n"; break; case "FAILURE": a = "exit(1);\n"; break; default: throw "Unknown math operator: " + a; }Blockly.cake.definitions_.include_cake_stdlib = "#include <stdlib.h>"; return a };
Blockly.cake.string = {};
Blockly.cake.library_string_strlen = function (a) { a = Blockly.cake.valueToCode(a, "VAR", Blockly.cake.ORDER_NONE) || '""'; Blockly.cake.definitions_.include_cake_string = "#include <string.h>"; return ["strlen(" + a + ")", Blockly.cake.ORDER_NONE] };
Blockly.cake.library_string_strcat = function (a) { var b = Blockly.cake.valueToCode(a, "STR1", Blockly.cake.ORDER_NONE) || '""'; a = Blockly.cake.valueToCode(a, "STR2", Blockly.cake.ORDER_NONE) || '""'; Blockly.cake.definitions_.include_cake_string = "#include <string.h>"; return "strcat(" + b + ", " + a + ");\n" };
Blockly.cake.library_string_strcpy = function (a) { var b = Blockly.cake.valueToCode(a, "STR1", Blockly.cake.ORDER_NONE) || '""'; a = Blockly.cake.valueToCode(a, "STR2", Blockly.cake.ORDER_NONE) || '""'; Blockly.cake.definitions_.include_cake_string = "#include <string.h>"; return "strcpy(" + a + ", " + b + ");\n" };
Blockly.cake.library_string_strcmp = function (a) { var b = Blockly.cake.valueToCode(a, "STR1", Blockly.cake.ORDER_NONE) || '""'; a = Blockly.cake.valueToCode(a, "STR2", Blockly.cake.ORDER_NONE) || '""'; Blockly.cake.definitions_.include_cake_string = "#include <string.h>"; return ["strcmp(" + b + ", " + a + ")", Blockly.cake.ORDER_NONE] };
Blockly.cake.structure = {};
Blockly.cake.structure_define = function (a) {
    for (var c = Blockly.cake.variableDB_.getName(a.getFieldValue("NAME"), null), d = [], e = [], f = [], h = [], g = [], b = 0; b < a.members_.length; b++)d[b] = Blockly.cake.variableDB_.getName(a.members_[b], Blockly.Variables.NAME_TYPE), e[b] = a.types_[b], f[b] = a.dist_[b], h[b] = a.spec_[b], "v" == f[b] ? g[b] = "   " + e[b] + " " + d[b] + ";\n" : "a" == f[b] ? g[b] = "   " + e[b] + " " + d[b] + "[" + h[b] + "];\n" : "p" == f[b] && (g[b] = "   " + e[b] + " " + h[b] + d[b] + ";\n"); a = "typedef struct\n{\n" + g.join("") + "} " + c + ";\n"; -1 == Blockly.Blocks.checkLegalName(Blockly.Msg.STRUCTURE_ILLEGALNAME,
        c) && this.initName(); return a
}; Blockly.cake.structure_declare = function (a) { var c = Blockly.cake.variableDB_.getName(a.getFieldValue("TYPES"), null); c = Blockly.Blocks.checkUnselect(c); a = Blockly.cake.variableDB_.getName(a.getFieldValue("NAME"), Blockly.Variables.NAME_TYPE); -1 == Blockly.Blocks.checkLegalName(Blockly.Msg.STRUCTURE_ILLEGALNAME, a) && this.initName(); return c + " " + a + ";\n" };
Blockly.cake.structure_get = function (a) { var c = a.getFieldValue("NAME"); a = Blockly.cake.variableDB_.getName(a.getFieldValue("Mem"), Blockly.Variables.NAME_TYPE); a = Blockly.Blocks.checkUnselect(a); return ["Itself" == a ? c : c + "." + a, Blockly.cake.ORDER_ATOMIC] };
Blockly.cake.structure_set = function (a) { var c = a.getFieldValue("NAME"), d = Blockly.cake.variableDB_.getName(a.getFieldValue("Mem"), Blockly.Variables.NAME_TYPE); d = Blockly.Blocks.checkUnselect(d); a = Blockly.cake.valueToCode(a, "VALUE", Blockly.cake.ORDER_ASSIGNMENT) || "0"; return ("Itself" == d ? c : c + "." + d) + " = " + a + ";\n" };

Blockly.cake.text = {}; Blockly.cake.text = function (a) { return [Blockly.cake.quote_(a.getFieldValue("TEXT")), Blockly.cake.ORDER_ATOMIC] };
Blockly.cake.text_join = function (a) {
    var b; if (0 == a.itemCount_) return ["''", Blockly.cake.ORDER_ATOMIC]; if (1 == a.itemCount_) return b = Blockly.cake.valueToCode(a, "ADD0", Blockly.cake.ORDER_NONE) || "''", ["String(" + b + ")", Blockly.cake.ORDER_FUNCTION_CALL]; if (2 == a.itemCount_) return b = Blockly.cake.valueToCode(a, "ADD0", Blockly.cake.ORDER_NONE) || "''", a = Blockly.cake.valueToCode(a, "ADD1", Blockly.cake.ORDER_NONE) || "''", ["String(" + b + ") + String(" + a + ")", Blockly.cake.ORDER_ADDITION]; b = Array(a.itemCount_); for (var c = 0; c <
        a.itemCount_; c++)b[c] = Blockly.cake.valueToCode(a, "ADD" + c, Blockly.cake.ORDER_COMMA) || "''"; b = "[" + b.join(",") + "].join('')"; return [b, Blockly.cake.ORDER_FUNCTION_CALL]
}; Blockly.cake.text_append = function (a) { var b = Blockly.cake.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE); a = Blockly.cake.valueToCode(a, "TEXT", Blockly.cake.ORDER_NONE) || "''"; return b + " = String(" + b + ") + String(" + a + ");\n" };
Blockly.cake.text_length = function (a) { return [(Blockly.cake.valueToCode(a, "VALUE", Blockly.cake.ORDER_FUNCTION_CALL) || "''") + ".length", Blockly.cake.ORDER_MEMBER] }; Blockly.cake.text_isEmpty = function (a) { return ["!" + (Blockly.cake.valueToCode(a, "VALUE", Blockly.cake.ORDER_MEMBER) || "''"), Blockly.cake.ORDER_LOGICAL_NOT] };
Blockly.cake.text_indexOf = function (a) { var b = "FIRST" == a.getFieldValue("END") ? "indexOf" : "lastIndexOf", c = Blockly.cake.valueToCode(a, "FIND", Blockly.cake.ORDER_NONE) || "''"; return [(Blockly.cake.valueToCode(a, "VALUE", Blockly.cake.ORDER_MEMBER) || "''") + "." + b + "(" + c + ") + 1", Blockly.cake.ORDER_MEMBER] };
Blockly.cake.text_charAt = function (a) {
    var b = a.getFieldValue("WHERE") || "FROM_START", c = Blockly.cake.valueToCode(a, "AT", Blockly.cake.ORDER_UNARY_NEGATION) || "1"; a = Blockly.cake.valueToCode(a, "VALUE", Blockly.cake.ORDER_MEMBER) || "''"; switch (b) {
        case "FIRST": return [a + ".charAt(0)", Blockly.cake.ORDER_FUNCTION_CALL]; case "LAST": return [a + ".slice(-1)", Blockly.cake.ORDER_FUNCTION_CALL]; case "FROM_START": return c = Blockly.isNumber(c) ? parseFloat(c) - 1 : c + " - 1", [a + ".charAt(" + c + ")", Blockly.cake.ORDER_FUNCTION_CALL]; case "FROM_END": return [a +
            ".slice(-" + c + ").charAt(0)", Blockly.cake.ORDER_FUNCTION_CALL]; case "RANDOM": return b = Blockly.cake.provideFunction_("text_random_letter", ["function " + Blockly.cake.FUNCTION_NAME_PLACEHOLDER_ + "(text) {", "  var x = Math.floor(Math.random() * text.length);", "  return text[x];", "}"]) + "(" + a + ")", [b, Blockly.cake.ORDER_FUNCTION_CALL]
    }throw "Unhandled option (text_charAt).";
};
Blockly.cake.text_getSubstring = function (a) {
    var b = Blockly.cake.valueToCode(a, "STRING", Blockly.cake.ORDER_MEMBER) || "''", c = a.getFieldValue("WHERE1"), d = a.getFieldValue("WHERE2"), e = Blockly.cake.valueToCode(a, "AT1", Blockly.cake.ORDER_NONE) || "1"; a = Blockly.cake.valueToCode(a, "AT2", Blockly.cake.ORDER_NONE) || "1"; return ["FIRST" == c && "LAST" == d ? b : Blockly.cake.provideFunction_("text_get_substring", ["function " + Blockly.cake.FUNCTION_NAME_PLACEHOLDER_ + "(text, where1, at1, where2, at2) {", "  function getAt(where, at) {",
        "    if (where == 'FROM_START') {", "      at--;", "    } else if (where == 'FROM_END') {", "      at = text.length - at;", "    } else if (where == 'FIRST') {", "      at = 0;", "    } else if (where == 'LAST') {", "      at = text.length - 1;", "    } else {", "      throw 'Unhandled option (text_getSubstring).';", "    }", "    return at;", "  }", "  at1 = getAt(where1, at1);", "  at2 = getAt(where2, at2) + 1;", "  return text.slice(at1, at2);", "}"]) + "(" + b + ", '" + c + "', " + e + ", '" + d + "', " + a + ")", Blockly.cake.ORDER_FUNCTION_CALL]
};
Blockly.cake.text_changeCase = function (a) {
    var b = { UPPERCASE: ".toUpperCase()", LOWERCASE: ".toLowerCase()", TITLECASE: null }[a.getFieldValue("CASE")]; b ? (a = Blockly.cake.valueToCode(a, "TEXT", Blockly.cake.ORDER_MEMBER) || "''", a += b) : (b = Blockly.cake.provideFunction_("text_toTitleCase", ["function " + Blockly.cake.FUNCTION_NAME_PLACEHOLDER_ + "(str) {", "  return str.replace(/\\S+/g,", "      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});", "}"]), a = Blockly.cake.valueToCode(a, "TEXT", Blockly.cake.ORDER_NONE) ||
        "''", a = b + "(" + a + ")"); return [a, Blockly.cake.ORDER_FUNCTION_CALL]
}; Blockly.cake.text_trim = function (a) { var b = { LEFT: ".trimLeft()", RIGHT: ".trimRight()", BOTH: ".trim()" }[a.getFieldValue("MODE")]; return [(Blockly.cake.valueToCode(a, "TEXT", Blockly.cake.ORDER_MEMBER) || "''") + b, Blockly.cake.ORDER_FUNCTION_CALL] }; Blockly.cake.text_print = function (a) { return "window.alert(" + (Blockly.cake.valueToCode(a, "TEXT", Blockly.cake.ORDER_NONE) || "''") + ");\n" };
Blockly.cake.text_prompt = function (a) { var b = "window.prompt(" + Blockly.cake.quote_(a.getFieldValue("TEXT")) + ")"; "NUMBER" == a.getFieldValue("TYPE") && (b = "parseFloat(" + b + ")"); return [b, Blockly.cake.ORDER_FUNCTION_CALL] }; Blockly.cake.text_prompt_ext = function (a) { var b = "window.prompt(" + (Blockly.cake.valueToCode(a, "TEXT", Blockly.cake.ORDER_NONE) || "''") + ")"; "NUMBER" == a.getFieldValue("TYPE") && (b = "parseFloat(" + b + ")"); return [b, Blockly.cake.ORDER_FUNCTION_CALL] }; Blockly.cake.time = {}; Blockly.cake.library_time_current = function (a) { a = a.getScope(); Blockly.cake.times_.time_currentTime = [a, "struct tm *t;\ntime_t timer;"]; Blockly.cake.definitions_.include_cake_time = "#include <time.h>"; return 'timer = time(NULL);\nt = localtime(&timer);\nprintf("%04d-%02d-%02d %02d:%02d:%02d\\n",t->tm_year + 1900, t->tm_mon + 1, t->tm_mday, t->tm_hour, t->tm_min, t->tm_sec);\n' };
Blockly.cake.library_time_requiredTime = function (a) { var b = Blockly.cake.valueToCode(a, "SAVE", Blockly.cake.ORDER_NONE) || "", c = Blockly.cake.statementToCode(a, "DO"); a = a.getScope(); Blockly.cake.times_.time_requiredTime = [a, "time_t start, end;"]; Blockly.cake.definitions_.include_cake_time = "#include <time.h>"; return "start = time(NULL);\n" + c + "end = time(NULL);\n" + b + " = difftime(end, start);\n" };

Blockly.cake.variables = {};
Blockly.cake.define_get = function (a) { a = Blockly.cake.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE); a = Blockly.Blocks.checkUnselect(a); return [a, Blockly.cake.ORDER_ATOMIC] };
Blockly.cake.define_declare = function (a) { var b = Blockly.cake.valueToCode(a, "VALUE", Blockly.cake.ORDER_ASSIGNMENT) || "0", c = Blockly.cake.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE); -1 == Blockly.Blocks.checkLegalName(Blockly.Msg.VARIABLES_ILLEGALNAME, c) && this.initVar(); a = Blockly.cake.scrub_(a, "#define " + c + " " + b); Blockly.cake.definitions_["define_" + c] = a; return null };
Blockly.cake.variables_get = function (a) { a = Blockly.cake.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE); a = Blockly.Blocks.checkUnselect(a); return [a, Blockly.cake.ORDER_ATOMIC] }; Blockly.cake.variables_set = function (a) { var b = Blockly.cake.valueToCode(a, "VALUE", Blockly.cake.ORDER_ASSIGNMENT) || "0"; a = Blockly.cake.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE); a = Blockly.Blocks.checkUnselect(a); return a + " = " + b + ";\n" };
Blockly.cake.variables_declare = function (a) { var b = Blockly.cake.valueToCode(a, "VALUE", Blockly.cake.ORDER_ASSIGNMENT) || "0", c = Blockly.cake.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE); a = a.getFieldValue("TYPES"); -1 == Blockly.Blocks.checkLegalName(Blockly.Msg.VARIABLES_ILLEGALNAME, c) && this.initVar(); "float" == a ? "0" == b ? b = "0.0f" : -1 != b.indexOf(".") && (b += "f") : "double" == a && "0" == b && (b = "0.0"); return a + " " + c + " = " + b + ";\n" };
Blockly.cake.variables_pointer_get = function (a) { a = Blockly.cake.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE); a = Blockly.Blocks.checkUnselect(a); return [a, Blockly.cake.ORDER_ATOMIC] };
Blockly.cake.variables_pointer_set = function (a) { var b = Blockly.cake.valueToCode(a, "VALUE", Blockly.cake.ORDER_ASSIGNMENT) || "NULL"; a = Blockly.cake.valueToCode(a, "VAR", Blockly.cake.ORDER_ASSIGNMENT); a = Blockly.Blocks.checkUnselect(a); return a + " = " + b + ";\n" };
Blockly.cake.variables_pointer_declare = function (a) { var b = Blockly.cake.valueToCode(a, "VALUE", Blockly.cake.ORDER_ASSIGNMENT) || "NULL", c = Blockly.cake.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE), d = a.getFieldValue("TYPES"); if ("*" == a.getFieldValue("ITERATION") || "**" == a.getFieldValue("ITERATION") || "***" == a.getFieldValue("ITERATION")) a = a.getFieldValue("ITERATION"); else return window.alert("please confirm asterisk. that must be among *, **, and  ***."), 0; -1 == Blockly.Blocks.checkLegalName(Blockly.Msg.VARIABLES_ILLEGALNAME, c) && this.initVar(); return d + " " + a + c + " = " + b + ";\n" };
Blockly.cake["variables_pointer_&"] = function (a) { return ["&" + Blockly.cake.valueToCode(a, "VALUE", Blockly.cake.ORDER_ASSIGNMENT), Blockly.cake.ORDER_ATOMIC] };
Blockly.cake["variables_pointer_*"] = function (a) { return ["*" + Blockly.cake.valueToCode(a, "VALUE", Blockly.cake.ORDER_ASSIGNMENT), Blockly.cake.ORDER_ATOMIC] };

Blockly.cake.variables_array_get = function (a) {
    var e = Blockly.cake.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE); e = Blockly.Blocks.checkUnselect(e); var f = Blockly.cake.valueToCode(a, "LENGTH_1", Blockly.cake.ORDER_NONE) || "-1", h = Blockly.cake.valueToCode(a, "LENGTH_2", Blockly.cake.ORDER_NONE) || "-1", k = Blockly.cake.valueToCode(a, "LENGTH_3", Blockly.cake.ORDER_NONE) || "-1", g = Blockly.Blocks.getWantedBlockArray("a"), b = Blockly.Blocks.getIndexArray(g, e); g = ""; var c = Blockly.Blocks.checkArrayIndex(f,
        b[0]); var d = Blockly.Blocks.checkArrayIndex(h, b[1]); b = Blockly.Blocks.checkArrayIndex(k, b[2]); 0 == c && -1 != f || 0 == d && -1 != h || 0 == b && -1 != k ? (window.alert("Error: Array index out of bounds..."), a.initIdx(c, d, b)) : 1 == c && 0 == d && 0 == b ? g = e + "[" + f + "]" : 1 == c && 1 == d && 0 == b ? g = e + "[" + f + "][" + h + "]" : 1 == c && 1 == d && 1 == b ? g = e + "[" + f + "][" + h + "][" + k + "]" : 0 == c && 0 == d && 0 == b ? (a = this.getFieldValue("VAR"), a = Blockly.FieldVariableArray.getBlockIdxLength(a), g = 1 == a ? e + "[]" : 2 == a ? e + "[][]" : e + "[][][]") : a.initIdx(c, d, b); return [g, Blockly.cake.ORDER_ATOMIC]
};
Blockly.cake.variables_array_set = function (a) {
    var e = Blockly.cake.valueToCode(a, "VALUE", Blockly.cake.ORDER_ASSIGNMENT) || "0", f = Blockly.cake.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE); f = Blockly.Blocks.checkUnselect(f); var h = Blockly.cake.valueToCode(a, "LENGTH_1", Blockly.cake.ORDER_NONE) || "-1", k = Blockly.cake.valueToCode(a, "LENGTH_2", Blockly.cake.ORDER_NONE) || "-1", g = Blockly.cake.valueToCode(a, "LENGTH_3", Blockly.cake.ORDER_NONE) || "-1", b = Blockly.Blocks.getWantedBlockArray("a"),
        c = Blockly.Blocks.getIndexArray(b, f); b = ""; var d = Blockly.Blocks.checkArrayIndex(h, c[0]); var l = Blockly.Blocks.checkArrayIndex(k, c[1]); c = Blockly.Blocks.checkArrayIndex(g, c[2]); 0 == d && -1 != h || 0 == l && -1 != k || 0 == c && -1 != g ? (window.alert("Error: Array index out of bounds..."), a.initIdx(d, l, c)) : 1 == d && 0 == l ? b = f + "[" + h + "] = " + e + ";\n" : 1 == d && 1 == l && 0 == c ? b = f + "[" + h + "][" + k + "] = " + e + ";\n" : 1 == d && 1 == l && 1 == c ? b = f + "[" + h + "][" + k + "][" + g + "] = " + e + ";\n" : a.initIdx(d, l, c); return b
};
Blockly.cake.variables_array_declare = function (a) {
    var g = Blockly.cake.valueToCode(a, "VALUE", Blockly.cake.ORDER_ASSIGNMENT) || "0", d = Blockly.cake.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE), f = a.getFieldValue("TYPES"), b = Blockly.cake.valueToCode(a, "LENGTH_1", Blockly.cake.ORDER_NONE) || "0", c = Blockly.cake.valueToCode(a, "LENGTH_2", Blockly.cake.ORDER_NONE) || "0"; a = Blockly.cake.valueToCode(a, "LENGTH_3", Blockly.cake.ORDER_NONE) || "0"; var e; 0 == g ? 0 != b && 0 == c && 0 == a ? e = f + " " + d + "[" + b + "];\n" :
        0 != b && 0 != c && 0 == a ? e = f + " " + d + "[" + b + "][" + c + "];\n" : 0 != b && 0 != c && 0 != a && (e = f + " " + d + "[" + b + "][" + c + "][" + a + "];\n") : 0 != b && 0 == c && 0 == a ? e = f + " " + d + "[" + b + "]=" + g + ";\n" : 0 != b && 0 != c && 0 == a ? e = f + " " + d + "[" + b + "][" + c + "]=" + g + ";\n" : 0 != b && 0 != c && 0 != a && (e = f + " " + d + "[" + b + "][" + c + "][" + a + "]=" + g + ";\n"); -1 == Blockly.Blocks.checkLegalName(Blockly.Msg.VARIABLES_ILLEGALNAME, d) && this.initVar(); return e
};
Blockly.cake.math_convert_type = function (a) { var b = a.getFieldValue("NEWTYPE"); a = Blockly.cake.valueToCode(a, "VAR", Blockly.cake.ORDER_NONE) || "0"; return ["(" + b + ")" + a, Blockly.cake.ORDER_ATOMIC] };
Blockly.cake.variables_array_pointer = function (a) { return [Blockly.cake.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE), Blockly.cake.ORDER_ATOMIC] };
Blockly.cake.variables_string_null = function (a) { return ["'\\0'", Blockly.cake.ORDER_ATOMIC] };
Blockly.cake.variables_string_declare = function (a) { var b = Blockly.cake.valueToCode(a, "VALUE", Blockly.cake.ORDER_ASSIGNMENT) || '""', c = Blockly.cake.variableDB_.getName(a.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE), d = a.getFieldValue("TYPES"); a = Blockly.cake.valueToCode(a, "LENGTH_1", Blockly.cake.ORDER_NONE) || "0"; b = d + " " + c + "[" + a + "] = " + b + ";\n"; -1 == Blockly.Blocks.checkLegalName(Blockly.Msg.VARIABLES_ILLEGALNAME, c) && this.initVar(); return b };
Blockly.cake.math_prev_inc_decrement = function (a) { var b = a.getFieldValue("NEWOP"); a = Blockly.cake.valueToCode(a, "VAR", Blockly.cake.ORDER_NONE) || "0"; return [b + a, Blockly.cake.ORDER_INCREMENT] };
Blockly.cake.math_post_inc_decrement = function (a) { var b = a.getFieldValue("NEWOP"); return [(Blockly.cake.valueToCode(a, "VAR", Blockly.cake.ORDER_NONE) || "0") + b, Blockly.cake.ORDER_INCREMENT] };
Blockly.cake.math_increment_expression = function (a) { return (Blockly.cake.valueToCode(a, "VAR", Blockly.cake.ORDER_NONE) || "0") + "++;\n" };
Blockly.cake.math_decrement_expression = function (a) { return (Blockly.cake.valueToCode(a, "VAR", Blockly.cake.ORDER_NONE) || "0") + "--;\n" };
Blockly.cake.math_auto_convert_type = function (a) { return [Blockly.cake.valueToCode(a, "VAR", Blockly.cake.ORDER_NONE) || "0", Blockly.cake.ORDER_ATOMIC] };
Blockly.cake.variables_array_initial = function (c) { for (var a = Array(c.itemCount_), b = 0; b < c.itemCount_; b++)a[b] = Blockly.cake.valueToCode(c, "ADD" + b, Blockly.cake.ORDER_NONE) || "0"; a = "{" + a.join(", ") + "}"; return [a, Blockly.cake.ORDER_ATOMIC] };