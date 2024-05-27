export function extractTime(dateString) {
	const date = new Date(dateString);
	const hours = padZero(date.getHours());
	const minutes = padZero(date.getMinutes());
	return `${hours}:${minutes}`;
}

// Вспомогательная функция для дополнения однозначных чисел ведущим нулем
function padZero(number) {
	return number.toString().padStart(2, "0");
}