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
		[0, 0, 0],
		[0, 1, 0],
		[1, 1, 1],
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
		[0, 1, 1],
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
		[1, 1, 0]
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
		[1, 1, 0],
		[0, 0, 1],
		[0, 1, 0],
		[1, 0, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	'3': [
		[1, 1, 0],
		[0, 0, 1],
		[0, 1, 0],
		[0, 0, 1],
		[1, 1, 0],
		[0, 0, 0]
	],
	'4': [
		[0, 1, 0],
		[1, 0, 0],
		[1, 0, 1],
		[1, 1, 1],
		[0, 0, 1],
		[0, 0, 0]
	],
	'5': [
		[1, 1, 1],
		[1, 0, 0],
		[1, 1, 0],
		[0, 0, 1],
		[1, 1, 0],
		[0, 0, 0]
	],
	'6': [
		[0, 1, 1],
		[1, 0, 0],
		[1, 1, 1],
		[1, 0, 1],
		[0, 1, 0],
		[0, 0, 0]
	],
	'7': [
		[1, 1, 1],
		[0, 0, 1],
		[0, 1, 0],
		[1, 0, 0],
		[1, 0, 0],
		[0, 0, 0]
	],
	'8': [
		[0, 1, 0],
		[1, 0, 1],
		[0, 1, 0],
		[1, 0, 1],
		[0, 1, 0],
		[0, 0, 0]
	],
	'9': [
		[0, 1, 0],
		[1, 0, 1],
		[1, 1, 1],
		[0, 0, 1],
		[1, 1, 0],
		[0, 0, 0]
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
		[0],
		[1],
		[1]
	],
	':': [
		[0],
		[1],
		[0],
		[1],
		[0],
		[0]
	],
	';': [
		[0],
		[1],
		[0],
		[1],
		[1],
		[0]
	],
	'!': [
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 0, 0],
		[0, 1, 0],
		[0, 0, 0]
	],
	'?': [
		[0, 1, 0],
		[1, 0, 1],
		[0, 0, 1],
		[0, 1, 0],
		[0, 1, 0],
		[0, 0, 0]
	],
	'(': [
		[0, 1, 0],
		[1, 0, 0],
		[1, 0, 0],
		[1, 0, 0],
		[0, 1, 0],
		[0, 0, 0]
	],
	')': [
		[0, 1, 0],
		[0, 0, 1],
		[0, 0, 1],
		[0, 0, 1],
		[0, 1, 0],
		[0, 0, 0]
	],
	'-': [
		[0, 0, 0],
		[0, 0, 0],
		[1, 1, 1],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	],
	'+': [
		[0, 0, 0],
		[0, 1, 0],
		[1, 1, 1],
		[0, 1, 0],
		[0, 0, 0],
		[0, 0, 0]
	],
	'=': [
		[0, 0, 0],
		[1, 1, 1],
		[0, 0, 0],
		[1, 1, 1],
		[0, 0, 0],
		[0, 0, 0]
	],
	'/': [
		[0, 0, 1],
		[0, 0, 1],
		[0, 1, 0],
		[1, 0, 0],
		[1, 0, 0],
		[0, 0, 0]
	],
	'#': [
		[0, 1, 0, 1, 0],
		[1, 1, 1, 1, 1],
		[0, 1, 0, 1, 0],
		[1, 1, 1, 1, 1],
		[0, 1, 0, 1, 0],
		[0, 0, 0, 0, 0]
	],
	'$': [
		[0, 1, 0],
		[1, 1, 0],
		[0, 1, 0],
		[0, 1, 1],
		[0, 1, 0],
		[0, 0, 0]
	],
	'%': [
		[1, 0, 1],
		[0, 0, 1],
		[0, 1, 0],
		[1, 0, 0],
		[1, 0, 1],
		[0, 0, 0]
	],
	'^': [
		[0, 1, 0],
		[1, 0, 1],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	],
	'&': [
		[0, 1, 0],
		[1, 0, 1],
		[0, 1, 0],
		[1, 0, 1],
		[0, 1, 0],
		[0, 0, 0]
	],
	'*': [
		[0, 0, 0],
		[1, 0, 1],
		[0, 1, 0],
		[1, 0, 1],
		[0, 0, 0],
		[0, 0, 0]
	],
	'@': [
		[0, 1, 0],
		[1, 0, 1],
		[1, 1, 1],
		[1, 0, 0],
		[0, 1, 1],
		[0, 0, 0]
	],
	' ': [
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0]
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
		[0, 1, 1, 0],
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
		[0, 1, 0, 0],
		[1, 1, 1, 0],
		[0, 1, 0, 0],
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
		[0, 1, 1, 1],
		[0, 0, 0, 1],
		[1, 1, 1, 0]
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
		[0, 1, 0],
		[0, 0, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[1, 1, 0]
	],
	'K': [
		[1, 0, 0, 1],
		[1, 0, 1, 0],
		[1, 1, 0, 0],
		[1, 1, 0, 0],
		[1, 0, 1, 0],
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'k': [
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 1],
		[1, 0, 1, 0],
		[1, 1, 0, 0],
		[1, 0, 1, 0],
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
		[1, 0, 0, 1],
		[1, 1, 1, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'm': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[1, 0, 1, 0],
		[1, 0, 1, 0],
		[1, 0, 1, 0],
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
		[1, 1, 1, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0]
	],
	'Q': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 1, 1],
		[0, 1, 1, 1],
		[0, 0, 0, 0]
	],
	'q': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 1],
		[0, 0, 0, 1],
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
		[1, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[0, 0, 0, 0]
	],
	'S': [
		[0, 1, 1, 1],
		[1, 0, 0, 0],
		[1, 1, 1, 0],
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[1, 1, 1, 0],
		[0, 0, 0, 0]
	],
	's': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 1],
		[1, 1, 1, 0],
		[0, 0, 0, 1],
		[1, 1, 1, 0],
		[0, 0, 0, 0]
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
		[0, 0, 1, 0],
		[1, 1, 1, 1],
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
		[0, 1, 1, 1],
		[0, 0, 0, 0]
	],
	'V': [
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
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
		[1, 0, 0, 1],
		[1, 0, 0, 1],
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
		[0, 0, 0, 0],
		[1, 1, 1, 0]
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
		[1, 1, 1, 1],
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
		[0, 1, 0],
		[1, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	'2': [
		[1, 1, 1, 0],
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[0, 1, 1, 0],
		[1, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0]
	],
	'3': [
		[1, 1, 1, 0],
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 1],
		[1, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'4': [
		[0, 0, 1, 0],
		[0, 1, 0, 0],
		[1, 0, 1, 0],
		[1, 1, 1, 1],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 0]
	],
	'5': [
		[1, 1, 1, 1],
		[1, 0, 0, 0],
		[1, 1, 1, 0],
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[1, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'6': [
		[0, 1, 1, 0],
		[1, 0, 0, 0],
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
		[0, 1, 1, 0],
		[0, 0, 0, 0]
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
	':': [
		[0],
		[1],
		[0],
		[0],
		[1],
		[0],
		[0]
	],
	';': [
		[0],
		[1],
		[0],
		[0],
		[1],
		[1],
		[0]
	],
	'!': [
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 0, 0],
		[0, 1, 0],
		[0, 0, 0]
	],
	'?': [
		[0, 1, 0],
		[1, 0, 1],
		[0, 0, 1],
		[0, 1, 0],
		[0, 1, 0],
		[0, 0, 0],
		[0, 1, 0]
	],
	'(': [
		[0, 0, 1],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 0, 1]
	],
	')': [
		[1, 0, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[1, 0, 0]
	],
	'-': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	],
	'+': [
		[0, 0, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[1, 1, 1, 1],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 0]
	],
	'=': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	],
	'/': [
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[0, 0, 1, 0],
		[0, 1, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[0, 0, 0, 0]
	],
	'#': [
		[0, 0, 1, 0, 0],
		[0, 1, 1, 1, 0],
		[1, 1, 1, 1, 1],
		[0, 1, 1, 1, 0],
		[1, 1, 1, 1, 1],
		[0, 1, 1, 1, 0],
		[0, 0, 1, 0, 0]
	],
	'$': [
		[0, 1, 1, 0],
		[1, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'%': [
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 0, 1, 0],
		[0, 1, 0, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'^': [
		[0, 1, 0],
		[1, 0, 1],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	],
	'&': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[0, 1, 0, 0],
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'*': [
		[1, 0, 1],
		[0, 1, 0],
		[1, 0, 1],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	],
	'@': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 1, 1, 1],
		[1, 0, 0, 0],
		[0, 1, 1, 1],
		[0, 0, 0, 0]
	],
	' ': [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	]
};

const PIXEL_DATA = { "Small": SMALL_LETTERS, "Medium": MEDIUM_LETTERS }

// === Utils ===
function HexToRgb(hex) {
	if (typeof hex !== 'string') {
		return { r: 0, g: 0, b: 0 };
	}
	const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
	return match ? {
		r: parseInt(match[1], 16),
		g: parseInt(match[2], 16),
		b: parseInt(match[3], 16)
	} : { r: 0, g: 0, b: 0 };
}

function RgbToHex(r, g, b) {
	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

function hexToWledRgb(hex) {
	const rgb = HexToRgb(hex);
	return [rgb.r, rgb.g, rgb.b];
}

// === Network Requests ===
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
        let s = signalRgbColors[i];

        if (settings.overlayEnabled === false) {
            out[i] = s;
        } else if (!o || (o.r === 0 && o.g === 0 && o.b === 0)) {
            out[i] = s; // 空像素 → 背景
        } else {
            out[i] = o; // 有像素 → 前景
        }
    }
    return out;
}


// === WLED API ===
export function Initialize(dev) {
	WLED = dev;
	WLED.Display = [];
	discovery.DeviceNames = [];
	discovery.DeviceAddresses = [];
	for (let i = 0; i < discovery.DeviceCount; i++) {
		discovery.DeviceNames.push(discovery.DeviceName[i]);
		discovery.DeviceAddresses.push(discovery.DeviceAddress[i]);
	}
	discovery.DeviceNames.sort();
	discovery.DeviceAddresses.sort();
}

export function Render() {
	if (WLED.IP === undefined || WLED.IP === "") {
		device.SetError("请在设备设置中输入 WLED 设备的 IP 地址");
		return;
	}

	if (LightingMode === "Forced") {
		const now = Date.now();
		if (now - lastForcedUpdate > 1000) {
			lastForcedUpdate = now;
			const r = WLED.forcedColor[0];
			const g = WLED.forcedColor[1];
			const b = WLED.forcedColor[2];
			const JSONurl = "http://" + WLED.IP + ":80/json/state/";
			const data = {
				seg: [
					{
						col: [
							[r, g, b]
						],
						fx: 0,
					},
				],
				live: true,
			};
			XmlHttp.Post(JSONurl, (xhr) => {
				if (xhr.readyState === 4 && xhr.status === 200) {
					// request successful, do some shit later on here!
				} else if (xhr.readyState === 4) {
					device.SetError("无法连接到 WLED 设备。请检查 IP 地址和设备是否在线");
				}
			}, data);
		}
	}
}

export function Shutdown(shutdown) {
	if (turnOffOnShutdown === true) {
		if (shutdown === true) {
			DeviceState.Change(WLED.IP, WLED.DefaultStateOn, WLED.DefaultStateBrightness, true, false, false, false);
		} else {
			DeviceState.Change(WLED.IP, WLED.DefaultStateOn, WLED.DefaultStateBrightness, false, true, false, false);
		}
	}
}

export function OnDeviceFound(address, name) {
	if (WLED.IP === undefined || WLED.IP === "") {
		WLED.IP = address;
	}
}

export function Update() {
	if (WLED.IP === undefined || WLED.IP === "") {
		return;
	}

	XmlHttp.Get("http://" + WLED.IP + ":80/json/", (xhr) => {
		if (xhr.readyState === 4 && xhr.status === 200) {
			const json = JSON.parse(xhr.responseText);

			if (json.info.leds.count !== WLED.Display.length) {
				WLED.Display = [];
				for (let i = 0; i < json.info.leds.count; i++) {
					WLED.Display.push(new DeviceColor(0, 0, 0));
				}
			}

			if (WLED.LedCount !== json.info.leds.count || WLED.MatrixWidth !== json.info.leds.matrix.w || WLED.MatrixHeight !== json.info.leds.matrix.h) {
				WLED.LedCount = json.info.leds.count;
				WLED.MatrixWidth = json.info.leds.matrix.w;
				WLED.MatrixHeight = json.info.leds.matrix.h;

				device.Resize((WLED.MatrixWidth !== 0 ? WLED.MatrixWidth : 1), (WLED.MatrixHeight !== 0 ? WLED.MatrixHeight : WLED.LedCount));
				WLED.DefaultStateOn = json.state.on;
				WLED.DefaultStateBrightness = json.state.bri;
				WLED.MinFps = json.info.leds.maxpower.toFixed(0);
				device.SetIP(WLED.IP);
			}

		} else if (xhr.readyState === 4) {
			device.SetError("无法连接到 WLED 设备。请检查 IP 地址和设备是否在线");
		}
	});

	if (WLED.LedCount === undefined || WLED.LedCount === 0 || WLED.IP === undefined || WLED.IP === "") {
		return;
	}

	if (LightingMode === "Canvas") {
		const url = "http://" + WLED.IP + ":80/json/state";
		let buffer = [];
		let leds = WLED.Display;

		// Limit to WLED's max packet size of 1455 bytes (485 RGB LEDs) to prevent breaking WLED.
		for (let i = 0; i < leds.length; i += MaxLedsInPacket) {
			const subLeds = leds.slice(i, i + MaxLedsInPacket);
			const subBuffer = [];
			for (const led of subLeds) {
				if (led === undefined) continue;
				subBuffer.push(led.r);
				subBuffer.push(led.g);
				subBuffer.push(led.b);
			}

			const data = {
				live: true,
				seg: [
					{
						start: i,
						len: subLeds.length,
						rgb: subBuffer,
					},
				],
			};

			buffer.push(data);
		}

		// Throttle API calls. WLED can't handle too many requests.
		const now = Date.now();
		if (now - lastForcedUpdate > 50) {
			lastForcedUpdate = now;
			for (const data of buffer) {
				XmlHttp.Post(url, (xhr) => {
					if (xhr.readyState === 4 && xhr.status === 200) {
						// request successful, do some shit later on here!
					} else if (xhr.readyState === 4) {
						device.SetError("无法连接到 WLED 设备。请检查 IP 地址和设备是否在线");
					}
				}, data, true);
			}
		}
	}
}

export function RenderDisplay() {
	if (WLED.MatrixWidth === 0 || WLED.MatrixHeight === 0 || WLED.MatrixWidth === undefined || WLED.MatrixHeight === undefined) {
		return;
	}
	let leds = WLED.Display;
	display = WLED.Display;
	displaySize = { width: WLED.MatrixWidth, height: WLED.MatrixHeight };

	let overlayLayer = [];
	let signalrgbLayer = leds.slice();

	if (display_mode === "Components") {
		return WLED.Display;
	} else if (display_mode === "Time") {
		overlayLayer = renderTime();
	} else if (display_mode === "Custom Text") {
		overlayLayer = renderCustomText();
	} else if (display_mode === "Pixel Art") {
		overlayLayer = renderPixelArt();
	} else if (display_mode === "MultiPixelArt") {
		overlayLayer = renderMultiPixelArt();
	} else {
		return WLED.Display;
	}
    
	return applyOverlay(signalrgbLayer, overlayLayer);
}

function renderTime() {
	const now = new Date();
	const formattedTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: time_format.includes('tt') });
	return renderText(formattedTime);
}

function renderCustomText() {
	return renderText(custom_text);
}

function renderText(text) {
	const textData = PIXEL_DATA[fontSize];
	let overlayColors = new Array(WLED.LedCount).fill(null);
	let currentX = paddingX;
	const letterHeight = PIXEL_DATA[fontSize]['A'][0].length === 1 ? PIXEL_DATA[fontSize]['A'].length : PIXEL_DATA[fontSize]['A'].length - 1; // HACK
	const maxRow = WLED.MatrixHeight - paddingY;

	if (currentX > WLED.MatrixWidth) {
		currentX = WLED.MatrixWidth;
	}

	for (let i = 0; i < text.length; i++) {
		const char = text[i];
		const charData = textData[char];

		if (!charData) continue; // Skip if character data is not available

		const charWidth = charData[0].length;
		if (currentX + charWidth > WLED.MatrixWidth) {
			// Move to the next line or stop
			break;
		}

		for (let row = 0; row < letterHeight; row++) {
			for (let col = 0; col < charWidth; col++) {
				const isLit = charData[row][col];
				if (isLit === 1) {
					const x = currentX + col;
					const y = paddingY + row;
					setPixel(x, y, forcedColor, overlayColors);
				}
			}
		}
		currentX += charWidth + 1; // Add space between letters
	}

	return overlayColors;
}


function renderPixelArt() {
	let pixelArtData;
	try {
		pixelArtData = JSON.parse(pixel_art);
	} catch (e) {
		device.SetError("Pixel Art 格式错误: " + e.message);
		return;
	}

	if (!Array.isArray(pixelArtData) || pixelArtData.length === 0 || !Array.isArray(pixelArtData[0])) {
		return;
	}

	const artHeight = pixelArtData.length;
	const artWidth = pixelArtData[0].length;
	let overlayColors = new Array(WLED.LedCount).fill(null);

	// 强制颜色转为 RGB 对象
	const forcedRgb = HexToRgb(forcedColor);

	// 计算起始坐标以居中显示
	const startX = Math.floor((WLED.MatrixWidth - artWidth) / 2);
	const startY = Math.floor((WLED.MatrixHeight - artHeight) / 2);

	for (let y = 0; y < artHeight; y++) {
		for (let x = 0; x < artWidth; x++) {
			const pixelValue = pixelArtData[y][x];
			if (pixelValue !== 0) {
				const mapX = startX + x;
				const mapY = startY + y;

				if (mapX >= 0 && mapX < WLED.MatrixWidth && mapY >= 0 && mapY < WLED.MatrixHeight) {
					// 默认的 Pixel Art 模式使用一个亮度或透明度值
					let color;
					if (pixelValue === 1) {
						color = forcedRgb;
					} else if (pixelValue > 1) {
						const intensity = Math.min(100, Math.max(1, pixelValue));
						color = {
							r: Math.floor(forcedRgb.r * intensity / 100),
							g: Math.floor(forcedRgb.g * intensity / 100),
							b: Math.floor(forcedRgb.b * intensity / 100)
						};
					} else if (pixelValue === 0.3) {
						const intensity = translucent1;
						color = {
							r: Math.floor(forcedRgb.r * intensity / 100),
							g: Math.floor(forcedRgb.g * intensity / 100),
							b: Math.floor(forcedRgb.b * intensity / 100)
						};
					} else if (pixelValue === 0.8) {
						const intensity = translucent2;
						color = {
							r: Math.floor(forcedRgb.r * intensity / 100),
							g: Math.floor(forcedRgb.g * intensity / 100),
							b: Math.floor(forcedRgb.b * intensity / 100)
						};
					} else {
						// 默认值或 1 视为全亮强制色
						color = forcedRgb;
					}
					setPixel(mapX, mapY, color, overlayColors);
				}
			}
		}
	}

	return overlayColors;
}


// MultiPixelArt Extension
// The logic for MultiPixelArt is kept separate to be callable directly if needed (e.g., from an updateDisplay hook)
// and to clearly distinguish it from the standard PixelArt rendering.
function renderMultiPixelArt() {
	let pixelArtData;
	try {
		pixelArtData = JSON.parse(multi_pixel_art);
	} catch (e) {
		device.SetError("MultiPixelArt 格式错误: " + e.message);
		return;
	}

	if (!Array.isArray(pixelArtData) || pixelArtData.length === 0 || !Array.isArray(pixelArtData[0])) {
		return;
	}

	const artHeight = pixelArtData.length;
	const artWidth = pixelArtData[0].length;
	let overlayColors = new Array(WLED.LedCount).fill(null);

	// 计算起始坐标以居中显示
	const startX = Math.floor((WLED.MatrixWidth - artWidth) / 2);
	const startY = Math.floor((WLED.MatrixHeight - artHeight) / 2);

	for (let y = 0; y < artHeight; y++) {
		for (let x = 0; x < artWidth; x++) {
			const pixelValue = pixelArtData[y][x];

			// 检查像素值是否为有效的颜色字符串
			if (typeof pixelValue === 'string' && pixelValue.match(/^#[0-9a-f]{6}$/i)) {
				const colorRgb = HexToRgb(pixelValue);
				const mapX = startX + x;
				const mapY = startY + y;

				if (mapX >= 0 && mapX < WLED.MatrixWidth && mapY >= 0 && mapY < WLED.MatrixHeight) {
					// MultiPixelArt 使用数组中的颜色作为像素颜色
					setPixel(mapX, mapY, colorRgb, overlayColors);
				}
			}
		}
	}

	return overlayColors;
}

// Helper function to set a pixel color in the overlay array
function setPixel(x, y, color, overlayColors) {
	// WLED's JSON API requires 1D index
	let index = y * WLED.MatrixWidth + x;
	if (index >= 0 && index < overlayColors.length) {
		// Use the color directly (which is already an RGB object from HexToRgb)
		overlayColors[index] = color;
	}
}


// === Display Mapping ===
// WLED uses a 1D array. We need to map the 2D coordinates to the 1D index.
// This is typically handled by the device.Resize and the getPixel function.

function getPixel(x, y) {
	if (x >= 0 && x < WLED.MatrixWidth && y >= 0 && y < WLED.MatrixHeight) {
		const index = y * WLED.MatrixWidth + x;
		return WLED.Display[index];
	}
	return new DeviceColor(0, 0, 0);
}

// WLED Driver interface implementation details

/**
 * Maps an index to a 2D coordinate based on WLED's matrix setup.
 * This function should ideally be dynamic based on the actual WLED segment mapping,
 * but for a basic 1D -> 2D mapping (snake or row-major), this is a typical implementation.
 * Since WLED mapping can be complex, and we primarily use SignalRGB's 2D canvas,
 * we will rely on WLED.MatrixWidth and WLED.MatrixHeight being accurate.
 * The `setPixel` function handles the 2D to 1D mapping for the overlay, assuming a simple row-major order.
 * The `getPixel` function does the same for reading from SignalRGB's canvas.
 * * Note: SignalRGB's canvas is already an abstraction, and the WLED driver should mostly focus on
 * transforming that canvas data into WLED API calls. The `setPixel` and `getPixel` are mostly for the
 * internal Display Mode logic in this script.
 */

// Placeholder class for DeviceColor if not globally available
class DeviceColor {
	constructor(r, g, b) {
		this.r = r;
		this.g = g;
		this.b = b;
	}
}

// === WLED Icon and Data Export ===
export function Image() {
	return WLEDicon;
}

export function LedCount() {
	return WLED.LedCount;
}

export function MatrixWidth() {
	return WLED.MatrixWidth;
}

export function MatrixHeight() {
	return WLED.MatrixHeight;
}

export function PreviewImage() {
	return "iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAVElEQVR4nO3OMQEAIAzD0F0i/k1c/k/jBggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI+uFf3gC40A3y9E9KAAAAAElFTkSuQmCC";
}

export function DisplayMode() {
	return display_mode;
}

export function MaxPower() {
	return WLED.MinFps;
}

// MultiPixelArt fallback render hook: if there is an updateDisplay function, this will try to render after it.
(function() {
    try {
        if (typeof updateDisplay === 'function') {
            var __orig_updateDisplay = updateDisplay;
            updateDisplay = function() {
                __orig_updateDisplay.apply(this, arguments);
                try {
                    // This block ensures that if the main RenderDisplay is somehow missed,
                    // the MultiPixelArt logic is still attempted right after a successful updateDisplay.
                    // This is more for compatibility/fallback in different SignalRGB versions or setups.
                    if (typeof settings !== 'undefined' && settings.display_mode === "MultiPixelArt") {
                        if (typeof renderMultiPixelArt === 'function') {
                            // Re-implement the mapping logic here for a generic setPixel/drawPixel/setLED function call,
                            // allowing the MultiPixelArt to render onto the existing display buffer.
                            
                            let pixelArtData;
                            try {
                                pixelArtData = JSON.parse(settings.multi_pixel_art);
                            } catch (e) {
                                if (console && console.error) console.error("MultiPixelArt Fallback: Invalid JSON for multi_pixel_art:", e);
                                return;
                            }

                            if (!Array.isArray(pixelArtData) || pixelArtData.length === 0 || !Array.isArray(pixelArtData[0])) {
                                return;
                            }
                            
                            const artHeight = pixelArtData.length;
                            const artWidth = pixelArtData[0].length;
                            const matrixWidth = settings.matrixWidth || 16;
                            const matrixHeight = settings.matrixHeight || 16;

                            // Calculate starting position for centering
                            const startX = Math.floor((matrixWidth - artWidth) / 2);
                            const startY = Math.floor((matrixHeight - artHeight) / 2);

                            for (let y = 0; y < artHeight; y++) {
                                for (let x = 0; x < artWidth; x++) {
                                    const pixelValue = pixelArtData[y][x];
                                    
                                    if (typeof pixelValue === 'string' && pixelValue.match(/^#[0-9a-f]{6}$/i)) {
                                        const colorRgb = HexToRgb(pixelValue);
                                        const mapX = startX + x;
                                        const mapY = startY + y;
                                        
                                        if (mapX >= 0 && mapX < matrixWidth && mapY >= 0 && mapY < matrixHeight) {
                                            // Fallback logic must rely on globally exposed pixel setting functions
                                            let color = [colorRgb.r, colorRgb.g, colorRgb.b];
                                            if (typeof setPixel === 'function') setPixel(mapX, mapY, color);
                                            else if (typeof drawPixel === 'function') drawPixel(mapX, mapY, color);
                                            else if (typeof setLED === 'function') setLED(mapX, mapY, color);
                                        }
                                    }
                                }
                            }
                        }
                    }
                } catch (e) {
                    if (console && console.error) console.error("MultiPixelArt Fallback Hook Error:", e);
                }
            };
        }
    } catch (e) {
        if (console && console.error) console.error("MultiPixelArt Fallback Setup Error:", e);
    }
})();
