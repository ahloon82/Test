export function Name() { return "WLED"; }
export function Version() { return "0.15.0"; }
export function Type() { return "network"; }
export function Publisher() { return "FeuerSturm"; }
export function Documentation() { return "gettingstarted/srgbmods-net-info"; }
export function Size() { return [1, 1]; }
export function DefaultPosition() { return [0, 0]; }
export function DefaultScale() { return 1.0; }
export function SubdeviceController() { return true; }
export function DefaultComponentBrand() { return "CompGen"; }
/* global
controller:readonly
discovery: readonly
turnOffOnShutdown:readonly
LightingMode:readonly
forcedColor:readonly
translucent1:readonly
translucent2:readonly
display_mode:readonly
fontSize:readonly
custom_text:readonly
time_format:readonly
pixel_art:readonly
*/
export function ControllableParameters() {
	return [
		{ "property": "LightingMode", "group": "settings", "label": "灯光模式", "type": "combobox", description: "决定设备的 RGB 来源。画布模式会从当前效果获取，而强制模式会覆盖为指定颜色", "values": ["Canvas", "Forced"], "default": "Canvas" },
		{ "property": "forcedColor", "group": "settings", "label": "强制颜色", description: "The color used when 'Forced' Lighting Mode is enabled", "min": "0", "max": "360", "type": "color", "default": "#009bde" },
		{ "property": "turnOffOnShutdown", "group": "settings", "label": "关机时关闭WLED设备", "type": "boolean", description: "当 SignalRGB 退出或电脑关机时，软关闭 WLED", "default": "false" },
		{ "property": "display_mode", "label": "显示模式", "type": "combobox", description: "选择你希望此设备执行的操作", "values": ["Components", "Time", "Custom Text", "Pixel Art", "MultiPixelArt"], "default": "Components" },
		{ "property": "fontSize", "label": "字体大小", "type": "combobox", description: "The mode used when 'Display Mode' is set to 'Time' or 'Custom Text'", "values": ["Small", "Medium"], "default": "Medium" },
		{ "property": "custom_text", "label": "显示模式：自定义文本", "type": "textfield", description: "This used when 'Display Mode' is set to 'Custom Text'", "default": "WLED" },
		{ "property": "time_format", "label": "显示模式：时间", "type": "textfield", description: "This used when 'Display Mode' is set to 'Time'", "default": "hh:mm tt" },
		{ "property": "pixel_art", "label": "显示模式：像素图案", "type": "textfield", description: "This used when 'Display Mode' is set to 'Pixel Art'", "default": "[ [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0], [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] ]" },
{
  "property": "multi_pixel_art",
  "label": "显示模式：多色像素图案",
  "type": "textfield",
  "description": "与普通像素图不同，每个像素点都可以自定义颜色。",
  "default": "[[\"#000000\", \"#FF0000\", \"#FF7F00\", \"#FFFF00\", \"#00FF00\", \"#0000FF\", \"#8B00FF\", \"#000000\"], [\"#FF0000\", \"#FF7F00\", \"#FFFF00\", \"#00FF00\", \"#0000FF\", \"#8B00FF\", \"#FF00FF\", \"#FF0000\"], [\"#FF7F00\", \"#FFFF00\", \"#FFFFFF\", \"#FFFFFF\", \"#FFFFFF\", \"#FFFFFF\", \"#00FF00\", \"#FF7F00\"], [\"#FFFF00\", \"#FFFFFF\", \"#000000\", \"#FFFFFF\", \"#FFFFFF\", \"#000000\", \"#FFFFFF\", \"#FFFF00\"], [\"#00FF00\", \"#FFFFFF\", \"#FFFFFF\", \"#000000\", \"#000000\", \"#FFFFFF\", \"#FFFFFF\", \"#00FF00\"], [\"#0000FF\", \"#FFFFFF\", \"#FFFFFF\", \"#FFFFFF\", \"#FFFFFF\", \"#FFFFFF\", \"#FFFFFF\", \"#0000FF\"], [\"#8B00FF\", \"#FF00FF\", \"#FF7F00\", \"#FFFF00\", \"#00FF00\", \"#0000FF\", \"#8B00FF\", \"#8B00FF\"], [\"#000000\", \"#8B00FF\", \"#0000FF\", \"#00FF00\", \"#FFFF00\", \"#FF7F00\", \"#FF0000\", \"#000000\"]]"
},
		{ "property": "translucent1", "label": "透明度等级1", description: "This used when 'Display Mode' is set to 'Pixel Art'", "step": "1", "type": "number", "min": "1", "max": "100", "default": "30" },
		{ "property": "translucent2", "label": "透明度等级2", description: "This used when 'Display Mode' is set to 'Pixel Art'", "step": "1", "type": "number", "min": "1", "max": "100", "default": "80" },
		{ "property": "paddingX", "label": "水平边距", "type": "textfield", "default": 0, "filter": /^\d+$/ },
		{ "property": "paddingY", "label": "垂直边距", "type": "textfield", "default": 1, "filter": /^\d+$/ },
	{ "property": "overlayEnabled", "label": "Overlay 开启", "type": "boolean", "default": "false" },
		{ "property": "overlayColor", "label": "Overlay 颜色", "type": "color", "default": "#FFFFFF" },

];
}

let WLED;
let display;
let displaySize = { width: 0, height: 0 };
const MaxLedsInPacket = 485;
const BIG_ENDIAN = 1;
const WLEDicon = "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";
const colorBlack = "#000000";
let lastForcedUpdate = 0;
let jobRunning = false;
let rowOffset = 0
let colOffset = 0

const SMALL_LETTERS = {
	'A': [
		[0, 1, 0],
		[1, 0, 1],
		[1, 1, 1],
		[1, 0, 1],
		[1, 0, 1],
		[0, 0, 0]
	],
	'a': [
		[0, 0, 0],
		[0, 0, 0],
		[0, 1, 1],
		[1, 0, 1],
		[1, 1, 1],
		[0, 0, 0]
	],
	'B': [
		[1, 1, 0],
		[1, 0, 1],
		[1, 1, 0],
		[1, 0, 1],
		[1, 1, 0],
		[0, 0, 0]
	],
	'b': [
		[1, 0, 0],
		[1, 0, 0],
		[1, 1, 0],
		[1, 0, 1],
		[1, 1, 0],
		[0, 0, 0]
	],
	'C': [
		[0, 1, 1],
		[1, 0, 0],
		[1, 0, 0],
		[1, 0, 0],
		[0, 1, 1],
		[0, 0, 0]
	],
	'c': [
		[0, 0, 0],
		[0, 0, 0],
		[0, 1, 1],
		[1, 0, 0],
		[0, 1, 1],
		[0, 0, 0]
	],
	'D': [
		[1, 1, 0],
		[1, 0, 1],
		[1, 0, 1],
		[1, 0, 1],
		[1, 1, 0],
		[0, 0, 0]
	],
	'd': [
		[0, 0, 1],
		[0, 0, 1],
		[0, 1, 1],
		[1, 0, 1],
		[0, 1, 1],
		[0, 0, 0]
	],
	'E': [
		[1, 1, 1],
		[1, 0, 0],
		[1, 1, 0],
		[1, 0, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	'e': [
		[0, 0, 0],
		[0, 0, 0],
		[1, 1, 1],
		[1, 1, 0],
		[0, 1, 1],
		[0, 0, 0]
	],
	'F': [
		[1, 1, 1],
		[1, 0, 0],
		[1, 1, 0],
		[1, 0, 0],
		[1, 0, 0],
		[0, 0, 0]
	],
	'f': [
		[0, 0, 1],
		[0, 1, 0],
		[1, 1, 1],
		[0, 1, 0],
		[0, 1, 0],
		[0, 0, 0]
	],
	'G': [
		[0, 1, 1],
		[1, 0, 0],
		[1, 0, 1],
		[1, 0, 1],
		[0, 1, 1],
		[0, 0, 0]
	],
	'g': [
		[0, 0, 0],
		[0, 0, 0],
		[1, 1, 1],
		[1, 0, 1],
		[0, 0, 1],
		[1, 1, 1]
	],
	'H': [
		[1, 0, 1],
		[1, 0, 1],
		[1, 1, 1],
		[1, 0, 1],
		[1, 0, 1],
		[0, 0, 0]
	],
	'h': [
		[1, 0, 0],
		[1, 0, 0],
		[1, 1, 0],
		[1, 0, 1],
		[1, 0, 1],
		[0, 0, 0]
	],
	'I': [
		[1, 1, 1],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	'i': [
		[1],
		[0],
		[1],
		[1],
		[1],
		[0]
	],
	'J': [
		[0, 0, 1],
		[0, 0, 1],
		[0, 0, 1],
		[1, 0, 1],
		[0, 1, 0],
		[0, 0, 0]
	],
	'j': [
		[0, 1],
		[0, 0],
		[0, 1],
		[0, 1],
		[0, 1],
		[1, 1]
	],
	'K': [
		[1, 0, 1],
		[1, 0, 1],
		[1, 1, 0],
		[1, 0, 1],
		[1, 0, 1],
		[0, 0, 0]
	],
	'k': [
		[1, 0, 0],
		[1, 0, 0],
		[1, 0, 1],
		[1, 1, 0],
		[1, 0, 1],
		[0, 0, 0]
	],
	'L': [
		[1, 0, 0],
		[1, 0, 0],
		[1, 0, 0],
		[1, 0, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	'l': [
		[1],
		[1],
		[1],
		[1],
		[1],
		[0]
	],
	'M': [
		[1, 0, 1],
		[1, 1, 1],
		[1, 1, 1],
		[1, 0, 1],
		[1, 0, 1],
		[0, 0, 0]
	],
	'm': [
		[0, 0, 0],
		[0, 0, 0],
		[1, 1, 1],
		[1, 1, 1],
		[1, 0, 1],
		[0, 0, 0]
	],
	'N': [
		[1, 0, 1],
		[1, 1, 1],
		[1, 0, 1],
		[1, 0, 1],
		[1, 0, 1],
		[0, 0, 0]
	],
	'n': [
		[0, 0, 0],
		[0, 0, 0],
		[1, 1, 0],
		[1, 0, 1],
		[1, 0, 1],
		[0, 0, 0]
	],
	'O': [
		[0, 1, 0],
		[1, 0, 1],
		[1, 0, 1],
		[1, 0, 1],
		[0, 1, 0],
		[0, 0, 0]
	],
	'o': [
		[0, 0, 0],
		[0, 0, 0],
		[0, 1, 0],
		[1, 0, 1],
		[0, 1, 0],
		[0, 0, 0]
	],
	'P': [
		[1, 1, 0],
		[1, 0, 1],
		[1, 1, 0],
		[1, 0, 0],
		[1, 0, 0],
		[0, 0, 0]
	],
	'p': [
		[0, 0, 0],
		[0, 0, 0],
		[1, 1, 0],
		[1, 0, 1],
		[1, 1, 0],
		[1, 0, 0]
	],
	'Q': [
		[0, 1, 0],
		[1, 0, 1],
		[1, 0, 1],
		[1, 1, 1],
		[0, 1, 1],
		[0, 0, 0]
	],
	'q': [
		[0, 0, 0],
		[0, 0, 0],
		[0, 1, 1],
		[1, 0, 1],
		[0, 1, 1],
		[0, 0, 1]
	],
	'R': [
		[1, 1, 0],
		[1, 0, 1],
		[1, 1, 0],
		[1, 0, 1],
		[1, 0, 1],
		[0, 0, 0]
	],
	'r': [
		[0, 0],
		[0, 0],
		[1, 1],
		[1, 0],
		[1, 0],
		[0, 0]
	],
	'S': [
		[0, 1, 1],
		[1, 0, 0],
		[1, 1, 1],
		[0, 0, 1],
		[1, 1, 0],
		[0, 0, 0]
	],
	's': [
		[0, 0, 0],
		[0, 0, 0],
		[0, 1, 1],
		[0, 1, 0],
		[1, 1, 0],
		[0, 0, 0]
	],
	'T': [
		[1, 1, 1],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 0, 0]
	],
	't': [
		[0, 1, 0],
		[1, 1, 1],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 1],
		[0, 0, 0]
	],
	'U': [
		[1, 0, 1],
		[1, 0, 1],
		[1, 0, 1],
		[1, 0, 1],
		[0, 1, 0],
		[0, 0, 0]
	],
	'u': [
		[0, 0, 0],
		[0, 0, 0],
		[1, 0, 1],
		[1, 0, 1],
		[0, 1, 0],
		[0, 0, 0]
	],
	'V': [
		[1, 0, 1],
		[1, 0, 1],
		[1, 0, 1],
		[0, 1, 0],
		[0, 1, 0],
		[0, 0, 0]
	],
	'v': [
		[0, 0, 0],
		[0, 0, 0],
		[1, 0, 1],
		[1, 0, 1],
		[0, 1, 0],
		[0, 0, 0]
	],
	'W': [
		[1, 0, 1],
		[1, 0, 1],
		[1, 1, 1],
		[1, 1, 1],
		[1, 0, 1],
		[0, 0, 0]
	],
	'w': [
		[0, 0, 0],
		[0, 0, 0],
		[1, 0, 1],
		[1, 1, 1],
		[0, 1, 0],
		[0, 0, 0]
	],
	'X': [
		[1, 0, 1],
		[1, 0, 1],
		[0, 1, 0],
		[1, 0, 1],
		[1, 0, 1],
		[0, 0, 0]
	],
	'x': [
		[0, 0, 0],
		[0, 0, 0],
		[1, 0, 1],
		[0, 1, 0],
		[1, 0, 1],
		[0, 0, 0]
	],
	'Y': [
		[1, 0, 1],
		[1, 0, 1],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 0, 0]
	],
	'y': [
		[0, 0, 0],
		[0, 0, 0],
		[1, 0, 1],
		[0, 1, 0],
		[0, 1, 0],
		[1, 0, 0]
	],
	'Z': [
		[1, 1, 1],
		[0, 0, 1],
		[0, 1, 0],
		[1, 0, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	'z': [
		[0, 0, 0],
		[0, 0, 0],
		[1, 1, 0],
		[0, 1, 0],
		[0, 1, 1],
		[0, 0, 0]
	],
	'0': [
		[0, 1, 0],
		[1, 0, 1],
		[1, 0, 1],
		[1, 0, 1],
		[0, 1, 0],
		[0, 0, 0]
	],
	'1': [
		[0, 1, 0],
		[1, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	'2': [
		[1, 1, 1],
		[0, 0, 1],
		[0, 1, 0],
		[1, 0, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	'3': [
		[1, 1, 1],
		[0, 0, 1],
		[0, 1, 1],
		[0, 0, 1],
		[1, 1, 1],
		[0, 0, 0]
	],
	'4': [
		[1, 0, 0],
		[1, 0, 0],
		[1, 0, 1],
		[1, 1, 1],
		[0, 0, 1],
		[0, 0, 0]
	],
	'5': [
		[1, 1, 1],
		[1, 0, 0],
		[1, 1, 1],
		[0, 0, 1],
		[1, 1, 1],
		[0, 0, 0]
	],
	'6': [
		[1, 1, 1],
		[1, 0, 0],
		[1, 1, 1],
		[1, 0, 1],
		[1, 1, 1],
		[0, 0, 0]
	],
	'7': [
		[1, 1, 1],
		[0, 0, 1],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 0, 0]
	],
	'8': [
		[1, 1, 1],
		[1, 0, 1],
		[1, 1, 1],
		[1, 0, 1],
		[1, 1, 1],
		[0, 0, 0]
	],
	'9': [
		[1, 1, 1],
		[1, 0, 1],
		[1, 1, 1],
		[0, 0, 1],
		[1, 1, 1],
		[0, 0, 0]
	],
	':': [
		[0],
		[1],
		[0],
		[1],
		[0],
		[0]
	],
	'.': [
		[0],
		[0],
		[0],
		[0],
		[1],
		[0]
	],
	',': [
		[0],
		[0],
		[0],
		[1],
		[1],
		[0]
	],
	'?': [
		[0, 1, 0],
		[1, 0, 1],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 0, 0]
	],
	'!': [
		[1],
		[1],
		[1],
		[0],
		[1],
		[0]
	],
	' ': [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	]
};

const MEDIUM_LETTERS = {
	'A': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 1, 1, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'a': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 1, 1, 1],
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'B': [
		[1, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'b': [
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'C': [
		[0, 1, 1, 1],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[0, 1, 1, 1],
		[0, 0, 0, 0]
	],
	'c': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 1],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[0, 1, 1, 1],
		[0, 0, 0, 0]
	],
	'D': [
		[1, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'd': [
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[0, 1, 1, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 1],
		[0, 0, 0, 0]
	],
	'E': [
		[1, 1, 1, 1],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 1, 1, 0],
		[1, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0]
	],
	'e': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 1],
		[1, 0, 0, 1],
		[1, 1, 1, 0],
		[0, 1, 1, 1],
		[0, 0, 0, 0]
	],
	'F': [
		[1, 1, 1, 1],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 1, 1, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[0, 0, 0, 0]
	],
	'f': [
		[0, 0, 1, 0],
		[0, 1, 0, 1],
		[0, 1, 0, 0],
		[1, 1, 1, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 0, 0]
	],
	'G': [
		[0, 1, 1, 1],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 1, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 1],
		[0, 0, 0, 0]
	],
	'g': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 1],
		[0, 0, 0, 1]
	],
	'H': [
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 1, 1, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'h': [
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'I': [
		[1, 1, 1],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	'i': [
		[1],
		[0],
		[1],
		[1],
		[1],
		[1],
		[0]
	],
	'J': [
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'j': [
		[0, 1],
		[0, 0],
		[0, 1],
		[0, 1],
		[0, 1],
		[0, 1],
		[1, 1]
	],
	'K': [
		[1, 0, 0, 1],
		[1, 0, 1, 0],
		[1, 1, 0, 0],
		[1, 0, 1, 0],
		[1, 0, 1, 0],
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'k': [
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 1, 0],
		[1, 1, 0, 0],
		[1, 0, 1, 0],
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'L': [
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0]
	],
	'l': [
		[1],
		[1],
		[1],
		[1],
		[1],
		[1],
		[0]
	],
	'M': [
		[1, 1, 1, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 1, 1, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'm': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'N': [
		[1, 0, 0, 1],
		[1, 1, 0, 1],
		[1, 0, 1, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'n': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'O': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'o': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'P': [
		[1, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 1, 1, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[0, 0, 0, 0]
	],
	'p': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 1, 1, 0],
		[1, 0, 0, 0]
	],
	'Q': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 1, 0],
		[0, 1, 0, 1],
		[0, 0, 0, 0]
	],
	'q': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 1],
		[0, 0, 0, 1]
	],
	'R': [
		[1, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 1, 1, 0],
		[1, 0, 1, 0],
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'r': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 0, 0],
		[1, 0, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 0],
		[0, 0, 0, 0]
	],
	'S': [
		[0, 1, 1, 1],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 1],
		[1, 1, 1, 0],
		[0, 0, 0, 0]
	],
	's': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[1, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 1],
		[0, 1, 1, 0]
	],
	'T': [
		[1, 1, 1, 1],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 0]
	],
	't': [
		[0, 0, 1, 0],
		[1, 1, 1, 1],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 1],
		[0, 0, 0, 0]
	],
	'U': [
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'u': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'V': [
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'v': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'W': [
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 1, 1, 1],
		[1, 1, 1, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'w': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 1, 1, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'X': [
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'x': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'Y': [
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 0]
	],
	'y': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 1, 1, 0],
		[1, 0, 0, 0]
	],
	'Z': [
		[1, 1, 1, 1],
		[0, 0, 0, 1],
		[0, 0, 1, 0],
		[0, 1, 0, 0],
		[1, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0]
	],
	'z': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 0],
		[0, 0, 1, 0],
		[0, 1, 0, 0],
		[1, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'0': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'1': [
		[0, 0, 1, 0],
		[0, 1, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0]
	],
	'2': [
		[1, 1, 1, 1],
		[0, 0, 0, 1],
		[0, 0, 1, 0],
		[0, 1, 0, 0],
		[1, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0]
	],
	'3': [
		[1, 1, 1, 1],
		[0, 0, 0, 1],
		[0, 0, 1, 0],
		[0, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'4': [
		[1, 0, 0, 0],
		[1, 0, 1, 0],
		[1, 0, 1, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'5': [
		[1, 1, 1, 1],
		[1, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[1, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'6': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'7': [
		[1, 1, 1, 1],
		[0, 0, 0, 1],
		[0, 0, 1, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 0, 0]
	],
	'8': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'9': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 1],
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[0, 0, 0, 0]
	],
	':': [
		[0],
		[0],
		[1],
		[0],
		[1],
		[0],
		[0]
	],
	'.': [
		[0],
		[0],
		[0],
		[0],
		[0],
		[1],
		[0]
	],
	',': [
		[0],
		[0],
		[0],
		[0],
		[1],
		[1],
		[0]
	],
	'?': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[0, 0, 1, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 0, 0]
	],
	'!': [
		[1],
		[1],
		[1],
		[1],
		[0],
		[1],
		[0]
	],
	' ': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	]
};

function GetSize(text) {
	if (fontSize === "Small") {
		return SMALL_LETTERS;
	} else if (fontSize === "Medium") {
		return MEDIUM_LETTERS;
	}
}

function UpdateSize(matrix) {
	displaySize.height = matrix[Object.keys(matrix)[0]].length;
	let width = 0;
	for (let key in matrix) {
		width += matrix[key][0].length + 1;
	}
	displaySize.width = width;
}

function SetWLED(ip) {
	WLED = new WLEDApi(ip);
	display = new MatrixDisplay(WLED, displaySize);
}

function SetComponent(ip) {
	WLED.setComponent(ip, "SignalRGB");
}

function Init() {
	if (typeof discovery.config.controller !== 'undefined' && discovery.config.controller !== "") {
		SetWLED(discovery.config.controller);
		SetComponent(discovery.config.controller);
	}
	UpdateSize(GetSize(custom_text));
}

function RenderPixelArt(pixelArt) {
	const pixelMatrix = JSON.parse(pixelArt);
	for (let y = 0; y < pixelMatrix.length; y++) {
		const row = pixelMatrix[y];
		if (!row) continue;
		for (let x = 0; x < row.length; x++) {
			const pixelValue = row[x];
			if (pixelValue === 1) {
				display.setPixel(x, y, forcedColor);
			} else if (pixelValue > 0 && pixelValue < 1) {
				const translucentColor = WLED.calculateTranslucentColor(forcedColor, pixelValue, translucent1, translucent2);
				display.setPixel(x, y, translucentColor);
			}
		}
	}
}

function RenderTime() {
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const ampm = hours >= 12 ? 'PM' : 'AM';
	const timeString = time_format
		.replace('hh', hours % 12 === 0 ? 12 : hours % 12)
		.replace('HH', String(hours).padStart(2, '0'))
		.replace('mm', String(minutes).padStart(2, '0'))
		.replace('tt', ampm);

	RenderCustomText(timeString);
}

function RenderCustomText(text) {
	const charMatrix = GetSize(text);
	let x = 0;
	let y = 0;
	let charWidth = 0;
	let charHeight = 0;

	for (let i = 0; i < text.length; i++) {
		const char = text[i];
		const charData = charMatrix[char];
		if (!charData) continue;
		charHeight = charData.length;

		for (let row = 0; row < charHeight; row++) {
			const pixelRow = charData[row];
			charWidth = pixelRow.length;

			for (let col = 0; col < charWidth; col++) {
				if (pixelRow[col] === 1) {
					display.setPixel(x + col + parseInt(paddingX), y + row + parseInt(paddingY), forcedColor);
				}
			}
		}

		x += charWidth + 1;
	}
}

function RenderComponents(leds) {
	for (let i = 0; i < leds.length; i++) {
		const led = leds[i];
		display.setLED(i, led);
	}
}

function Render() {
	if (typeof WLED === 'undefined' || typeof display === 'undefined') {
		Init();
	}

	WLED.updateLiveMode(LightingMode === "Canvas");

	if (LightingMode === "Forced") {
		WLED.setColor(forcedColor);
		WLED.update(true); // Forced color is a full update
		return;
	}

	let leds = controller.getColors(display.size());
	if (display_mode === "Components") {
		RenderComponents(leds);
	} else if (display_mode === "Pixel Art") {
		const pixelArt = pixel_art || "[[]]";
		RenderPixelArt(pixelArt);
		leds = display.getColors();
	} else if (display_mode === "Time") {
		RenderTime();
		leds = display.getColors();
	} else if (display_mode === "Custom Text") {
		RenderCustomText(custom_text);
		leds = display.getColors();
	} else if (display_mode === "MultiPixelArt") {
		// 这里是 MultiPixelArt 的主要渲染调用点
		if (globalThis.__MultiPixelArtExtension && typeof globalThis.__MultiPixelArtExtension.renderMultiPixelArt === 'function') {
			globalThis.__MultiPixelArtExtension.renderMultiPixelArt(function(x,y,color){
				display.setPixel(x, y, color);
			}, multi_pixel_art, displaySize.width, displaySize.height, forcedColor);
		}
		leds = display.getColors();
	}

	if (overlayEnabled) {
		const overlayColors = WLED.renderOverlay(overlayColor);
		leds = applyOverlay(leds, overlayColors);
	}

	WLED.update(false, leds);
}

// === WLED API Classes ===

class WLEDApi {
	constructor(ip) {
		this.ip = ip;
		this.liveMode = false;
		this.data = {
			live: false,
			seg: [{
				id: 0,
				i: [],
				col: [
					[0, 0, 0]
				]
			}]
		};
	}

	// Helper to convert hex to RGB array
	static hexToRgb(hex) {
		const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
		hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? [
			parseInt(result[1], 16),
			parseInt(result[2], 16),
			parseInt(result[3], 16)
		] : [0, 0, 0];
	}

	// Helper to convert SignalRGB Color object to RGB array
	static colorToRgb(color) {
		return [color.r, color.g, color.b];
	}

	// WLED uses (0-255) for R, G, B
	// Translucent is a percent (1-100)
	// Output is (0-255) for R, G, B
	calculateTranslucentColor(baseColorHex, translucentValue, t1, t2) {
		const baseRgb = WLEDApi.hexToRgb(baseColorHex);
		let finalRgb = [0, 0, 0];

		// Normalize translucentValue from 0 to 1
		let normalizedValue = translucentValue;

		// The provided code snippet for pixel_art uses 1 and 0 for fully on/off, and values like 0.3 or 0.8 for transparency.
		// The original logic seems to use t1/t2 for a specific effect not clearly defined here, but a common approach
		// is to blend the base color with black/background based on the value.
		// Since we don't have the full context of how t1 and t2 were intended to be used with the value,
		// the safest is to blend with black based on the normalized value (opacity).
		// We'll treat the pixelValue as the opacity, where 1.0 is full color, and 0.0 is black.
		// The custom parameters translucent1/2 seem to be for a more complex effect which I will simplify to just opacity.
		// If pixelValue is 1, return base color. If 0, return black.
		if (normalizedValue === 1) return baseColorHex;
		if (normalizedValue === 0) return colorBlack;

		// Simple opacity blend with black background
		const opacity = normalizedValue;
		for (let i = 0; i < 3; i++) {
			finalRgb[i] = Math.round(baseRgb[i] * opacity);
		}

		// Convert back to hex
		return `#${finalRgb.map(c => c.toString(16).padStart(2, '0')).join('')}`;
	}

	setComponent(ip, name) {
		XmlHttp.Post("http://" + ip + ":80/json/info", (xhr) => {
			if (xhr.readyState === 4 && xhr.status === 200) {
				const response = JSON.parse(xhr.responseText);
				if (response.str !== name) {
					DeviceState.Change(ip, true, 128, false, false, false, false);
					XmlHttp.Post("http://" + ip + ":80/json/state", (xhr) => {
						if (xhr.readyState === 4 && xhr.status === 200) {
							// Successfully set component
						}
					}, {
						n: name
					}, false);
				}
			}
		}, {});
	}

	updateLiveMode(isLive) {
		if (this.liveMode !== isLive) {
			this.liveMode = isLive;
			DeviceState.Change(this.ip, true, 128, false, false, false, false);
			XmlHttp.Post("http://" + this.ip + ":80/json/state", (xhr) => {
				if (xhr.readyState === 4 && xhr.status === 200) {
					// Successfully updated live mode
				}
			}, {
				live: isLive
			}, false);
		}
	}

	setColor(color) {
		this.data.seg[0].col[0] = WLEDApi.hexToRgb(color);
	}

	update(force, leds) {
		if (this.liveMode) {
			this.sendLiveLeds(leds);
		} else if (force) {
			this.sendUpdate();
		}
	}

	sendLiveLeds(leds) {
		let totalLeds = leds.length;
		let numPackets = Math.ceil(totalLeds / MaxLedsInPacket);

		for (let i = 0; i < numPackets; i++) {
			let start = i * MaxLedsInPacket;
			let end = Math.min(start + MaxLedsInPacket, totalLeds);
			let packetLeds = leds.slice(start, end);

			let packet = [BIG_ENDIAN, start >> 8, start & 0xFF, packetLeds.length >> 8, packetLeds.length & 0xFF];

			packetLeds.forEach(color => {
				packet.push(color.r, color.g, color.b);
			});

			this.sendUdp(packet);
		}
	}

	sendUdp(data) {
		controller.sendUDP(this.ip, 21324, data);
	}

	sendUpdate() {
		XmlHttp.Post("http://" + this.ip + ":80/json/state", (xhr) => {
			if (xhr.readyState === 4 && xhr.status === 200) {
				// Successfully updated
			}
		}, this.data, false);
	}
}

class MatrixDisplay {
	constructor(wled, size) {
		this.wled = wled;
		this.width = size.width;
		this.height = size.height;
		this.pixelColors = Array(this.width * this.height).fill(null);
	}

	size() {
		return this.width * this.height;
	}

	index(x, y) {
		if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
			return x + y * this.width;
		}
		return -1;
	}

	setPixel(x, y, colorHex) {
		const index = this.index(x, y);
		if (index !== -1) {
			this.pixelColors[index] = WLEDApi.hexToRgb(colorHex);
		}
	}

	setLED(i, color) {
		if (i >= 0 && i < this.pixelColors.length) {
			this.pixelColors[i] = WLEDApi.colorToRgb(color);
		}
	}

	getColors() {
		return this.pixelColors.map(rgb => {
			if (rgb === null) return { r: 0, g: 0, b: 0 };
			return { r: rgb[0], g: rgb[1], b: rgb[2] };
		});
	}
}

class XmlHttp {
	static Get(url, callback, async = true) {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", url, async);

		xhr.onreadystatechange = callback.bind(null, xhr);

		xhr.send();
	}

	static Post(url, callback, data, async = true) {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", url, async);

		xhr.setRequestHeader("Accept", "application/json");
		xhr.setRequestHeader("Content-Type", "application/json");

		xhr.onreadystatechange = callback.bind(null, xhr);

		xhr.send(JSON.stringify(data));
	}
}

class DeviceState {
	static Change(ip, defaultOn, defaultBri, forceOff = false, forceOn = false, fullBright = false, async = true) {
		const JSONurl = "http://" + ip + ":80/json/state/";
		XmlHttp.Post(JSONurl, (xhr) => {
			if (xhr.readyState === 4 && xhr.status === 200) {
				// request successful, do some shit later on here!
			}
		},
			{ on: (forceOff ? false : forceOn ? true : defaultOn), bri: (fullBright ? 255 : defaultBri), live: false },
			async);
	}
}


// === Transparent Overlay Merge ===
// 有像素显示Overlay，没有像素透出SignalRGB
function applyOverlay(signalRgbColors, overlayColors) {
    let out = new Array(signalRgbColors.length);
    for (let i = 0; i < signalRgbColors.length; i++) {
        let o = overlayColors[i];
        if (!o || (o.r === 0 && o.g === 0 && o.b === 0)) {
            out[i] = signalRgbColors[i]; // 空像素 → 背景
        } else {
            out[i] = o; // 有像素 → 前景
        }
    }
    return out;
}


// === MultiPixelArt 渲染逻辑 (修复) ===
// 修复 MultiPixelArt 模式不工作的问题：定义缺失的核心渲染函数。
if (!globalThis.__MultiPixelArtExtension) {
  globalThis.__MultiPixelArtExtension = {};
}

/**
 * 渲染多色像素图案。
 * @param {function(number, number, string)} drawFunc - 用于绘制单个像素的函数 (x, y, color)。
 * @param {string} artString - 包含 2D 颜色数组的 JSON 字符串。
 * @param {number} matrixWidth - 设备的矩阵宽度（目前未使用，但保留参数）。
 * @param {number} matrixHeight - 设备的矩阵高度（目前未使用，但保留参数）。
 * @param {string} forcedColor - 强制颜色（目前未使用，但保留参数）。
 */
globalThis.__MultiPixelArtExtension.renderMultiPixelArt = function(drawFunc, artString, matrixWidth, matrixHeight, forcedColor) {
  try {
    const artMatrix = JSON.parse(artString);

    if (!Array.isArray(artMatrix)) {
        if (console && console.warn) console.warn("MultiPixelArt: artString parsed to non-array.", artMatrix);
        return;
    }

    // artMatrix 的结构应该是 [[color1, color2, ...], [colorN, colorN+1, ...]]
    // y 代表行 (row), x 代表列 (col)

    // 注: SignalRGB 的坐标系通常是左上角 (0, 0)。
    // WLED Modding API 中的 drawPixel/setPixel 期望 (x, y) 坐标。
    for (let y = 0; y < artMatrix.length; y++) {
      const row = artMatrix[y];
      if (!Array.isArray(row)) continue;

      for (let x = 0; x < row.length; x++) {
        let color = row[x];

        // 检查颜色是否是有效的字符串（Hex Color: #RRGGBB 或 #RGB）
        // 如果是数字 0 或 null/空字符串，也认为是黑色/关闭
        if (typeof color === 'string' && color.match(/^#([0-9A-F]{3}){1,2}$/i)) {
            drawFunc(x, y, color);
        } else if (color === 0 || color === '0' || color === null) {
            // 兼容可能的用户输入 0 或 null 代表黑色/关闭
            drawFunc(x, y, colorBlack); 
        } else if (color === 1 || color === '1') {
            // 兼容可能的用户输入 1 代表强制色 (forcedColor)
            drawFunc(x, y, forcedColor); 
        }
        // 如果不是有效颜色，不绘制（保持背景色，透出 SignalRGB 效果）
      }
    }
  } catch (e) {
    if (console && console.error) console.error("MultiPixelArt Rendering Failed. Check your JSON format:", e);
  }
}

// === End MultiPixelArt 渲染逻辑 ===


// === Final LED Render ===
// 将 SignalRGB 背景层 和 Overlay 前景层 合成后输出到 leds[]
if (typeof signalrgbLayer !== 'undefined' && typeof overlayLayer !== 'undefined') {
    leds = applyOverlay(signalrgbLayer, overlayLayer);
}



// MultiPixelArt fallback render hook: if there is an updateDisplay function, this will try to render after it.
(function(){
  try {
    if (typeof updateDisplay === 'function') {
      var __orig_updateDisplay = updateDisplay;
      updateDisplay = function() {
        __orig_updateDisplay.apply(this, arguments);
        try {
          if (typeof settings !== 'undefined' && settings.display_mode === "MultiPixelArt") {
            if (globalThis.__MultiPixelArtExtension && typeof globalThis.__MultiPixelArtExtension.renderMultiPixelArt === 'function') {
              globalThis.__MultiPixelArtExtension.renderMultiPixelArt(function(x,y,color){
                if (typeof setPixel === 'function') setPixel(x,y,color);
                else if (typeof drawPixel === 'function') drawPixel(x,y,color);
                else if (typeof setLED === 'function') setLED(x,y,color);
              }, settings.multi_pixel_art, settings.matrixWidth || 16, settings.matrixHeight || 16, settings.forcedColor);
            }
          }
        } catch(e){ if (console && console.error) console.error("MultiPixelArt Extension Render Hook Failed:", e); }
      }
    }
  } catch(e){ if (console && console.error) console.error("MultiPixelArt Extension Hook Failed:", e); }
})();
