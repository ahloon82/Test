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
multi_pixel_art:readonly // 确保 multi_pixel_art 在这里声明
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

// 字体数据（此处省略，与原版相同）
// ... (SMALL_LETTERS, MEDIUM_LETTERS, PIXEL_DATA 保持不变) ...
const SMALL_LETTERS = {
	'A': [
		[0, 1, 0],
		[1, 0, 1],
		[1, 1, 1],
		[1, 0, 1],
		[1, 0, 1],
		[0, 0, 0]
	],
	// ... (其他字符) ...
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
	// ... (其他字符) ...
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

        if (overlayEnabled === false) { // 使用ControllableParameter名称
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
		// Color is an RGB object {r, g, b}
		if (typeof color === 'string') {
			overlayColors[index] = HexToRgb(color);
		} else {
			overlayColors[index] = color;
		}
	}
}


// === Display Mapping ===
function getPixel(x, y) {
	if (x >= 0 && x < WLED.MatrixWidth && y >= 0 && y < WLED.MatrixHeight) {
		const index = y * WLED.MatrixWidth + x;
		return WLED.Display[index];
	}
	return new DeviceColor(0, 0, 0);
}

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
