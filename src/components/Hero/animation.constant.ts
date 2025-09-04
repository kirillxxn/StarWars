// Задержки анимаций
export const animationDelay = {
	universe: 2.7,
	yoda: 2.6,
	saber: 0,
}
// Длительности анимаций
export const animationDuration = {
	pretext: 1,
	starWarsWord: 1,
	yoda: 0.2,
	saber: 0,
}
// Анимация заголовка
export const titleVariant = {
	hidden: { y: -200 },
	visible: { x: 0, y: 0 },
}
// Анимация подтекста
export const pretextVariant = {
	hidden: { opacity: 0, y: 300 },
	visible: { opacity: 1, x: 0, y: 0 },
}
// Анимация слова "Star"
export const starVariant = {
	hidden: { opacity: 0, x: -300 },
	visible: { opacity: 1, x: 0, y: 0 },
}
// Анимация слова "Wars"
export const warsVariant = {
	hidden: { opacity: 0, x: 300 },
	visible: { opacity: 1, x: 0, y: 0 },
}
// Анимация слова "Universe"
export const universeVariant = {
	hidden: { opacity: 0, y: 200 },
	visible: { opacity: 1, x: 0, y: 0 },
}
// Анимация Йоды
export const yodaVariant = {
	hidden: { opacity: 0 },
	visible: { opacity: [0, 0, 1] },
}
// Анимация светового меча
export const saberVariant = {
	hidden: { x: -100, y: -100 },
	visible: { x: -130, y: -180, rotateZ: '50deg' },
}
