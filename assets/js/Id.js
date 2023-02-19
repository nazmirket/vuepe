export default function () {
	return `C${Date.now()}${parseInt(Math.min(Math.random() * 100, 99))}`
}
