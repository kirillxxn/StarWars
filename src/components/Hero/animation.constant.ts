export const animationDelay = {
	universe: 2.7,
	yoda: 2.6,
	saber: 0,
}
export const animationDuration = {
	pretext: 1,
	starWarsWord: 1,
	yoda: 0.2,
	saber: 0,
}
export const titleVariant = {
	hidden: { y: -200 },
	visible: { x: 0, y: 0 },
}
export const pretextVariant = {
	hidden: { opacity: 0, y: 300 },
	visible: { opacity: 1, x: 0, y: 0 },
}
export const starVariant = {
	hidden: { opacity: 0, x: -300 },
	visible: { opacity: 1, x: 0, y: 0 },
}
export const warsVariant = {
	hidden: { opacity: 0, x: 300 },
	visible: { opacity: 1, x: 0, y: 0 },
}
export const universeVariant = {
	hidden: { y: 200 },
	visible: { x: 0, y: 0 },
}
export const yodaVariant = {
	hidden: { opacity: 0 },
	visible: { opacity: [0, 0, 1] },
}
export const saberVariant = {
	hidden: { x: -100, y: -100 },
	visible: { x: 0, y: -220, rotateZ: '50deg' },
}
