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
controller:readonly,
discovery: readonly,
turnOffOnShutdown:readonly,
LightingMode:readonly,
forcedColor:readonly,
translucent1:readonly,
translucent2:readonly,
display_mode:readonly,
fontSize:readonly,
custom_text:readonly,
time_format:readonly,
pixel_art:readonly,
multipixel_art:readonly // <-- 关键：确保这个变量被正确声明
*/
export function ControllableParameters() {
	return [
		{ "property": "LightingMode", "group": "settings", "label": "灯光模式", "type": "combobox", description: "决定设备的 RGB 来源。画布模式会从当前效果获取，而强制模式会覆盖为指定颜色", "values": ["Canvas", "Forced"], "default": "Canvas" },
		{ "property": "forcedColor", "group": "settings", "label": "强制颜色", description: "The color used when 'Forced' Lighting Mode is enabled", "min": "0", "max": "360", "type": "color", "default": "#009bde" },
		{ "property": "turnOffOnShutdown", "group": "settings", "label": "关机时关闭WLED设备", "type": "boolean", description: "当 SignalRGB 退出或电脑关机时，软关闭 WLED", "default": "false" },
		
		// --- 显示模式设置 (Display Mode Settings) ---
		{ "property": "display_mode", "label": "显示模式", "type": "combobox", description: "选择你希望此设备执行的操作", "values": ["Components", "Time", "Custom Text", "Pixel Art", "Multipixel Art"], "default": "Components" }, // 包含 "Multipixel Art"
		
		{ "property": "multipixel_art", "label": "显示模式：多色像素图案", "type": "textfield", description: "This used when 'Display Mode' is set to 'Multipixel Art'. Expects a JSON array of color codes (e.g., [[\"#FF0000\", \"#000000\"], [\"#000000\", \"#00FF00\"]])", "default": "[ [\"#FFFFFF\", \"#000000\"], [\"#000000\", \"#FFFFFF\"] ]" }, // 多色像素图案参数
		
		{ "property": "pixel_art", "label": "显示模式：像素图案", "type": "textfield", description: "This used when 'Display Mode' is set to 'Pixel Art'", "default": "[ [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0], [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] ]" },
		
		{ "property": "fontSize", "label": "字体大小", "type": "combobox", description: "The mode used when 'Display Mode' is set to 'Time' or 'Custom Text'", "values": ["Small", "Medium"], "default": "Medium" },
		{ "property": "custom_text", "label": "显示模式：自定义文本", "type": "textfield", description: "This used when 'Display Mode' is set to 'Custom Text'", "default": "WLED" },
		{ "property": "time_format", "label": "显示模式：时间", "type": "textfield", description: "This used when 'Display Mode' is set to 'Time'", "default": "hh:mm tt" },
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

// --- 完整的字体数据 (SMALL_LETTERS) ---
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
		[0, 1, 1],
		[1, 1, 1],
		[1, 0, 0],
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
		[0, 1, 0],
		[1, 0, 1],
		[1, 0, 0],
		[1, 0, 0],
		[1, 0, 0],
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
		[0, 1, 1],
		[1, 0, 1],
		[0, 1, 1],
		[0, 0, 1],
		[0, 1, 0]
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
		[0, 1, 0],
		[0, 0, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 0, 0]
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
		[0, 0, 1],
		[0, 0, 0],
		[0, 0, 1],
		[0, 0, 1],
		[0, 0, 1],
		[0, 1, 0]
	],
    'K': [
		[1, 0, 1],
		[1, 1, 0],
		[1, 0, 0],
		[1, 1, 0],
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
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 0, 0]
	],
    'M': [
		[1, 1, 1, 1, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1],
		[0, 0, 0, 0, 0]
	],
    'm': [
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[1, 1, 1, 1, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[0, 0, 0, 0, 0]
	],
    'N': [
		[1, 0, 1],
		[1, 1, 1],
		[1, 1, 1],
		[1, 0, 1],
		[1, 0, 1],
		[0, 0, 0]
	],
    'n': [
		[0, 0, 0],
		[0, 0, 0],
		[1, 1, 1],
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
		[1, 1, 0],
		[1, 0, 1],
		[1, 1, 0],
		[1, 0, 0],
		[1, 0, 0]
	],
    'Q': [
		[0, 1, 0],
		[1, 0, 1],
		[1, 0, 1],
		[1, 1, 1],
		[0, 1, 0],
		[0, 0, 1]
	],
    'q': [
		[0, 0, 0],
		[0, 1, 1],
		[1, 0, 1],
		[0, 1, 1],
		[0, 0, 1],
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
		[0, 0, 0],
		[0, 0, 0],
		[1, 1, 0],
		[1, 0, 1],
		[1, 0, 0],
		[0, 0, 0]
	],
    'S': [
		[0, 1, 1],
		[1, 0, 0],
		[0, 1, 0],
		[0, 0, 1],
		[1, 1, 0],
		[0, 0, 0]
	],
    's': [
		[0, 0, 0],
		[0, 0, 0],
		[0, 1, 1],
		[1, 1, 0],
		[0, 0, 1],
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
		[1, 0, 0],
		[1, 1, 1],
		[1, 0, 0],
		[1, 0, 0],
		[0, 1, 0],
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
		[1, 0, 0, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 1, 1, 1, 1],
		[0, 0, 0, 0, 0]
	],
    'w': [
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[0, 1, 0, 1, 0],
		[0, 0, 0, 0, 0]
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
		[1, 0, 1],
		[1, 0, 1],
		[0, 1, 0],
		[0, 1, 0],
		[0, 0, 0]
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
		[1, 1, 1],
		[0, 1, 0],
		[1, 1, 1],
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
		[1, 1, 1],
		[0, 0, 1],
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
		[0, 1, 1],
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
		[0, 1, 1],
		[0, 0, 1],
		[0, 1, 0],
		[0, 0, 0]
	],
	':': [
		[0, 0],
		[1, 1],
		[0, 0],
		[1, 1],
		[0, 0],
		[0, 0]
	],
	' ': [
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0]
	],
	'|': [
		[1],
		[1],
		[1],
		[1],
		[1],
		[0]
	],
	'\"': [
		[1, 0, 1],
		[1, 0, 1],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	],
	'\'': [
		[1],
		[1],
		[0],
		[0],
		[0],
		[0]
	],
	';': [
		[0, 0],
		[1, 1],
		[0, 0],
		[1, 0],
		[0, 1],
		[1, 0]
	],
	'[': [
		[1, 1],
		[1, 0],
		[1, 0],
		[1, 0],
		[1, 1],
		[0, 0]
	],
	'{': [
		[0, 1, 1],
		[0, 1, 0],
		[1, 1, 0],
		[0, 1, 0],
		[0, 1, 1],
		[0, 0, 0]
	],
	']': [
		[1, 1],
		[0, 1],
		[0, 1],
		[0, 1],
		[1, 1],
		[0, 0]
	],
	'}': [
		[1, 1, 0],
		[0, 1, 0],
		[0, 1, 1],
		[0, 1, 0],
		[1, 1, 0],
		[0, 0, 0]
	],
	',': [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 1],
		[0, 1, 0],
		[1, 0, 0]
	],
	'.': [
		[0],
		[0],
		[0],
		[0],
		[1],
		[0]
	],
	'?': [
		[0, 1, 0],
		[1, 0, 1],
		[0, 0, 1],
		[0, 1, 0],
		[0, 0, 0],
		[0, 1, 0]
	],
	'>': [
		[0, 0, 0],
		[0, 0, 0],
		[1, 0, 0],
		[0, 1, 0],
		[0, 0, 1],
		[0, 0, 0]
	],
	'<': [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 1],
		[0, 1, 0],
		[1, 0, 0],
		[0, 0, 0]
	],
	'!': [
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 0, 0],
		[0, 1, 0],
		[0, 0, 0]
	],
	'@': [
		[0, 1, 0],
		[1, 0, 1],
		[1, 1, 1],
		[1, 0, 1],
		[0, 1, 0],
		[0, 0, 0]
	],
	'#': [
		[0, 1, 0],
		[1, 1, 1],
		[0, 1, 0],
		[1, 1, 1],
		[0, 1, 0],
		[0, 0, 0]
	],
	'$': [
		[0, 1, 1],
		[1, 1, 0],
		[0, 1, 0],
		[0, 1, 1],
		[1, 1, 0],
		[0, 0, 0]
	],
	'%': [
		[1, 0, 1],
		[1, 0, 1],
		[0, 1, 0],
		[1, 0, 1],
		[1, 0, 1],
		[0, 0, 0]
	],
	'^': [
		[1, 0, 1],
		[0, 1, 0],
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
		[1, 0, 1],
		[0, 1, 0],
		[1, 0, 1],
		[0, 0, 0],
		[0, 0, 0],
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
		[0, 1, 0],
		[0, 1, 0],
		[1, 1, 1],
		[0, 1, 0],
		[0, 1, 0],
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
	'~': [
		[0, 0, 0],
		[1, 0, 1],
		[0, 1, 0],
		[1, 0, 1],
		[0, 0, 0],
		[0, 0, 0]
	],
	'`': [
		[1, 0, 0],
		[0, 1, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	],
	'\\': [
		[1, 0, 0],
		[1, 0, 0],
		[0, 1, 0],
		[0, 0, 1],
		[0, 0, 1],
		[0, 0, 0]
	],
	'/': [
		[0, 0, 1],
		[0, 0, 1],
		[0, 1, 0],
		[1, 0, 0],
		[1, 0, 0],
		[0, 0, 0]
	]
}


// --- 完整的字体数据 (MEDIUM_LETTERS) ---
const MEDIUM_LETTERS = {
	'A': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 1, 1, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	],
	'a': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 1, 1, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'B': [
		[1, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
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
		[1, 0, 0, 1],
		[1, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'C': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'c': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'D': [
		[1, 1, 1, 0],
		[1, 0, 0, 1],
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
		[1, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0]
	],
	'e': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 1, 1, 1],
		[1, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'F': [
		[1, 1, 1, 1],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 1, 1, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[0, 0, 0, 0]
	],
	'f': [
		[0, 0, 1, 0],
		[0, 1, 0, 1],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[1, 0, 0, 0],
		[0, 0, 0, 0]
	],
	'G': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 0],
		[1, 0, 1, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'g': [
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0]
	],
	'H': [
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 1, 1, 1],
		[1, 0, 0, 1],
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
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'I': [
		[1, 1, 1],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	'i': [
		[0, 1, 0],
		[0, 0, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 0, 0]
	],
	'J': [
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'j': [
		[0, 0, 1, 0],
		[0, 0, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[1, 1, 0, 0],
		[0, 0, 0, 0]
	],
	'K': [
		[1, 0, 0, 1],
		[1, 0, 1, 0],
		[1, 1, 0, 0],
		[1, 0, 0, 0],
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
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'L': [
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0]
	],
	'l': [
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 0, 0]
	],
	'M': [
		[1, 0, 0, 0, 1],
		[1, 1, 0, 1, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1],
		[0, 0, 0, 0, 0]
	],
	'm': [
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[1, 1, 1, 1, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 0, 0, 1],
		[0, 0, 0, 0, 0]
	],
	'N': [
		[1, 0, 0, 1],
		[1, 1, 0, 1],
		[1, 1, 1, 1],
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
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'O': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
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
		[1, 0, 0, 0],
		[0, 0, 0, 0]
	],
	'p': [
		[0, 0, 0, 0],
		[1, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 1, 1, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[0, 0, 0, 0]
	],
	'Q': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 1, 1],
		[1, 0, 1, 0],
		[0, 1, 1, 1],
		[0, 0, 0, 0]
	],
	'q': [
		[0, 0, 0, 0],
		[0, 1, 1, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 1],
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'R': [
		[1, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 1, 1, 0],
		[1, 0, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'r': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[0, 0, 0, 0]
	],
	'S': [
		[0, 1, 1, 1],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[0, 1, 1, 0],
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
		[0, 0, 1, 0],
		[0, 0, 0, 0]
	],
	't': [
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[1, 1, 1, 1],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 1, 0, 0]
	],
	'U': [
		[1, 0, 0, 1],
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
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'V': [
		[1, 0, 0, 1],
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
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'W': [
		[1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[0, 1, 0, 1, 0],
		[0, 0, 0, 0, 0]
	],
	'w': [
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[1, 0, 0, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 1, 0, 1],
		[0, 1, 0, 1, 0],
		[0, 0, 0, 0, 0]
	],
	'X': [
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
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
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'Y': [
		[1, 0, 0, 1],
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
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 0]
	],
	'Z': [
		[1, 1, 1, 1],
		[0, 0, 0, 1],
		[0, 0, 1, 0],
		[0, 1, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0]
	],
	'z': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 1, 0],
		[0, 1, 0, 0],
		[1, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0]
	],
	'0': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
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
		[1, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0]
	],
	'3': [
		[1, 1, 1, 1],
		[0, 0, 0, 1],
		[0, 0, 1, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'4': [
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 1, 1, 1],
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'5': [
		[1, 1, 1, 1],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 1, 1, 0],
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[1, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'6': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
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
		[0, 1, 0, 0],
		[0, 0, 0, 0]
	],
	'8': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
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
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	':': [
		[0, 0, 0],
		[1, 1, 1],
		[0, 0, 0],
		[0, 0, 0],
		[1, 1, 1],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	],
	' ': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	],
	'|': [
		[0, 1],
		[0, 1],
		[0, 1],
		[0, 1],
		[0, 1],
		[0, 1],
		[0, 1],
		[0, 0]
	],
	'\"': [
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	],
	'\'': [
		[1],
		[1],
		[0],
		[0],
		[0],
		[0],
		[0],
		[0]
	],
	';': [
		[0, 0, 0],
		[1, 1, 1],
		[0, 0, 0],
		[0, 0, 0],
		[1, 1, 1],
		[0, 1, 0],
		[1, 0, 0],
		[0, 0, 0]
	],
	'[': [
		[1, 1],
		[1, 0],
		[1, 0],
		[1, 0],
		[1, 0],
		[1, 0],
		[1, 1],
		[0, 0]
	],
	'{': [
		[0, 1, 1, 0],
		[0, 1, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	']': [
		[1, 1],
		[0, 1],
		[0, 1],
		[0, 1],
		[0, 1],
		[0, 1],
		[1, 1],
		[0, 0]
	],
	'}': [
		[0, 1, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	',': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 1, 0],
		[0, 1, 0, 0],
		[1, 0, 0, 0],
		[0, 0, 0, 0]
	],
	'.': [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	'?': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[0, 0, 0, 1],
		[0, 0, 1, 0],
		[0, 1, 0, 0],
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'>': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 0, 0],
		[0, 1, 1, 0],
		[0, 0, 1, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	],
	'<': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 1, 1],
		[0, 1, 1, 0],
		[1, 1, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	],
	'!': [
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 0]
	],
	'@': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 1, 1, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'#': [
		[0, 1, 0, 0],
		[1, 1, 1, 1],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[1, 1, 1, 1],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 0, 0]
	],
	'$': [
		[0, 1, 1, 0],
		[1, 1, 0, 0],
		[0, 1, 1, 0],
		[0, 0, 1, 0],
		[0, 1, 1, 0],
		[1, 1, 0, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 0]
	],
	'%': [
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 1, 1, 0],
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 0, 0, 0]
	],
	'^': [
		[1, 0, 1],
		[0, 1, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	],
	'&': [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
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
		[0, 0, 0],
		[0, 0, 0]
	],
	'(': [
		[0, 1, 0],
		[1, 0, 0],
		[1, 0, 0],
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
		[0, 0, 1],
		[0, 0, 1],
		[0, 1, 0],
		[0, 0, 0]
	],
	'-': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	],
	'+': [
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[1, 1, 1, 1],
		[0, 0, 1, 0],
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
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	],
	'~': [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 0, 1, 0],
		[0, 1, 0, 1],
		[1, 0, 1, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	],
	'`': [
		[1, 0, 0],
		[0, 1, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	],
	'\\': [
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[0, 0, 0, 1],
		[0, 0, 0, 1],
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
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	]
}


const FONT_INFO = {
	'Small': {
		'width': 3,
		'height': 6,
		'data': SMALL_LETTERS
	},
	'Medium': {
		'width': 4,
		'height': 8,
		'data': MEDIUM_LETTERS
	}
};

function hexToRgb(hex) {
	// Remove # if present
	hex = hex.replace(/^#/, '');

	// Parse r, g, b values
	let bigint = parseInt(hex, 16);
	let r = (bigint >> 16) & 255;
	let g = (bigint >> 8) & 255;
	let b = bigint & 255;

	return { r, g, b };
}

// === 核心渲染函数 (Render Function) - 包含 Multipixel Art 逻辑修复 ===
export function Render(index, width, height) {
	if (width != displaySize.width || height != displaySize.height) {
		displaySize = { width, height };
		display = new Array(width * height);
	}
	let currentMode = display_mode;

	let color1 = controller.shouldPulseColors() ? controller.getPrimaryColor(index, width, height) : controller.getForcedColor(index, width, height);
	let color2 = controller.shouldPulseColors() ? controller.getSecondaryColor(index, width, height) : controller.getForcedColor(index, width, height);

	let alpha1 = translucent1 / 100;
	let alpha2 = translucent2 / 100;

	for (let i = 0; i < width * height; i++) {
		display[i] = { r: 0, g: 0, b: 0 };
	}

	if (LightingMode == "Forced") {
		const rgb = hexToRgb(forcedColor);
		for (let i = 0; i < width * height; i++) {
			display[i] = { r: rgb.r, g: rgb.g, b: rgb.b };
		}
	} else if (currentMode == "Multipixel Art") { // <-- 关键：确保模式名称字符串完全匹配
		try {
			// **渲染逻辑：多色像素图案 (Multipixel Art)**
			const arr = JSON.parse(multipixel_art); 
			const pixelArtWidth = arr[0].length;
			const pixelArtHeight = arr.length;

			let scaleFactorX = width / pixelArtWidth;
			let scaleFactorY = height / pixelArtHeight;

			for (let y = 0; y < height; y++) {
				for (let x = 0; x < width; x++) {
					let px = Math.floor(x / scaleFactorX);
					let py = Math.floor(y / scaleFactorY);

					let color = { r: 0, g: 0, b: 0 };
					if (py >= 0 && py < pixelArtHeight && px >= 0 && px < pixelArtWidth) {
						let hexColor = arr[py][px];
						
						if (hexColor && hexColor !== colorBlack) {
							color = hexToRgb(hexColor);
						} else {
							// 黑色或无效颜色透出 SignalRGB 背景
							let baseColor = controller.getCanvasColor(x, y);
							display[y * width + x] = {
								r: baseColor.r,
								g: baseColor.g,
								b: baseColor.b,
							};
							continue;
						}
					}
					display[y * width + x] = color;
				}
			}

		} catch (e) {
			// JSON 解析错误时显示错误信息
			display = createText("MP ERR", width, height, color1, color2, alpha1, alpha2);
		}
	} else if (currentMode == "Pixel Art") {
		// **渲染逻辑：像素图案 (Pixel Art)**
		try {
			const arr = JSON.parse(pixel_art);
			const pixelArtWidth = arr[0].length;
			const pixelArtHeight = arr.length;
			const scaledPixelArt = new Array(height);

			let scaleFactorX = width / pixelArtWidth;
			let scaleFactorY = height / pixelArtHeight;

			for (let y = 0; y < height; y++) {
				scaledPixelArt[y] = new Array(width);
				for (let x = 0; x < width; x++) {
					let px = Math.floor(x / scaleFactorX);
					let py = Math.floor(y / scaleFactorY);

					if (py >= 0 && py < pixelArtHeight && px >= 0 && px < pixelArtWidth) {
						let pixelValue = arr[py][px];
						let color;

						if (pixelValue === 0) {
							color = { r: 0, g: 0, b: 0 };
						} else if (pixelValue === 1) {
							color = color1;
						} else {
							color = color2;
						}

						display[y * width + x] = color;
					} else {
						display[y * width + x] = { r: 0, g: 0, b: 0 };
					}
				}
			}

			// Apply transparency for 1 and 2 if needed (0 is always black/transparent)
			for (let y = 0; y < height; y++) {
				for (let x = 0; x < width; x++) {
					let px = Math.floor(x / scaleFactorX);
					let py = Math.floor(y / scaleFactorY);
					if (py >= 0 && py < pixelArtHeight && px >= 0 && px < pixelArtWidth) {
						let pixelValue = arr[py][px];
						let alpha = 1;
						let baseColor = controller.getCanvasColor(x, y);

						if (pixelValue === 1) {
							alpha = alpha1;
						} else if (pixelValue === 2) {
							alpha = alpha2;
						} else if (pixelValue === 0) {
							continue;
						}

						let color = display[y * width + x];
						display[y * width + x] = {
							r: Math.round(color.r * alpha + baseColor.r * (1 - alpha)),
							g: Math.round(color.g * alpha + baseColor.g * (1 - alpha)),
							b: Math.round(color.b * alpha + baseColor.b * (1 - alpha)),
						};
					}
				}
			}

		} catch (e) {
			display = createText("PX ERR", width, height, color1, color2, alpha1, alpha2);
		}
	} else if (currentMode == "Time") {
		// **渲染逻辑：时间 (Time)**
		const today = new Date();
		const hours = today.getHours();
		const minutes = today.getMinutes();
		const seconds = today.getSeconds();

		let text;
		if (time_format.includes("tt")) {
			let ampm = hours >= 12 ? 'pm' : 'am';
			let displayHours = hours % 12;
			displayHours = displayHours ? displayHours : 12; // the hour '0' should be '12'
			text = time_format.replace("hh", displayHours.toString().padStart(2, '0')).replace("mm", minutes.toString().padStart(2, '0')).replace("ss", seconds.toString().padStart(2, '0')).replace("tt", ampm);
		} else {
			text = time_format.replace("HH", hours.toString().padStart(2, '0')).replace("mm", minutes.toString().padStart(2, '0')).replace("ss", seconds.toString().padStart(2, '0'));
		}

		display = createText(text, width, height, color1, color2, alpha1, alpha2);

	} else if (currentMode == "Custom Text") {
		// **渲染逻辑：自定义文本 (Custom Text)**
		display = createText(custom_text, width, height, color1, color2, alpha1, alpha2);
	} else if (currentMode == "Components") {
		// **渲染逻辑：组件 (Components) - 默认模式，不做任何绘制，只显示 SignalRGB 效果**
	}


	const colors = new Array(width * height);
	for (let i = 0; i < colors.length; i++) {
		colors[i] = display[i];
	}

	// 处理 Overlay
	if (overlayEnabled) {
		const overlayRgb = hexToRgb(overlayColor);
		const overlayColors = new Array(width * height).fill(overlayRgb);

		if (currentMode == "Pixel Art" || currentMode == "Multipixel Art") {
			// 在像素图模式下，Overlay 仅应用于被绘制的像素
			for (let i = 0; i < colors.length; i++) {
				if (colors[i].r !== 0 || colors[i].g !== 0 || colors[i].b !== 0) {
					colors[i] = overlayColors[i];
				}
			}
		} else {
			// 在其他模式（文本、时间、组件）下，使用标准 Overlay 合并
			return applyOverlay(colors, overlayColors);
		}
	}


	return colors;
}

// --- 辅助函数 (Utility Functions) ---

function createText(text, width, height, color1, color2, alpha1, alpha2) {
	const font = FONT_INFO[fontSize];
	const fontData = font.data;
	const charHeight = font.height;
	const charWidth = font.width;
	const numChars = text.length;

	let totalTextWidth = 0;
	for (let i = 0; i < numChars; i++) {
		const char = text[i];
		if (fontData[char]) {
			totalTextWidth += fontData[char][0].length;
		} else {
			totalTextWidth += charWidth; // Default width for unknown chars
		}
	}

	let output = new Array(width * height);
	for (let i = 0; i < width * height; i++) {
		output[i] = { r: 0, g: 0, b: 0 };
	}

	const startX = Math.floor((width - totalTextWidth) / 2) + colOffset;
	const startY = Math.floor((height - charHeight) / 2) + rowOffset;

	let currentX = startX;

	for (let i = 0; i < numChars; i++) {
		const char = text[i];
		const charMatrix = fontData[char] || FONT_INFO['Small'].data['?']; // Fallback to '?' if not found

		const charW = charMatrix[0].length;

		for (let y = 0; y < charMatrix.length; y++) {
			for (let x = 0; x < charW; x++) {
				const matrixValue = charMatrix[y][x];

				let pixelX = currentX + x;
				let pixelY = startY + y;

				if (pixelX >= 0 && pixelX < width && pixelY >= 0 && pixelY < height) {
					let index = pixelY * width + pixelX;
					let color;

					if (matrixValue === 0) {
						color = { r: 0, g: 0, b: 0 };
					} else if (matrixValue === 1) {
						color = color1;
					} else {
						color = color2;
					}

					let baseColor = controller.getCanvasColor(pixelX, pixelY);
					let alpha = 1;

					if (matrixValue === 1) {
						alpha = alpha1;
					} else if (matrixValue === 2) {
						alpha = alpha2;
					}

					output[index] = {
						r: Math.round(color.r * alpha + baseColor.r * (1 - alpha)),
						g: Math.round(color.g * alpha + baseColor.g * (1 - alpha)),
						b: Math.round(color.b * alpha + baseColor.b * (1 - alpha)),
					};
				}
			}
		}

		currentX += charW;
	}

	return output;
}

// 有像素显示Overlay，没有像素透出SignalRGB
function applyOverlay(signalRgbColors, overlayColors) {
    let out = new Array(signalRgbColors.length);
    for (let i = 0; i < signalRgbColors.length; i++) {
        let o = overlayColors[i];
        if (!o || (o.r === 0 && o.g === 0 && o.b === 0)) {
            out[i] = signalRgbColors[i];
        } else {
            out[i] = overlayColors[i];
        }
    }
    return out;
}

// === WLED State API ===
export function DeviceTime(index, width, height) {
	if (display_mode != "Components" || LightingMode == "Forced") {
		DeviceState.Change(controller.getIP(index, width, height), false, 0, true);
	} else {
		DeviceState.Change(controller.getIP(index, width, height), controller.getOn(index, width, height), controller.getBrightness(index, width, height), false, controller.getIsForcedOn(index, width, height), controller.getFullBright(index, width, height), true);
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
