import styles from './Facts.module.css'
type TFactsItems = {
	title: number
	subtitle: number
}
const titleArray = [
	'Luke was almost a girl',
	'The Empire was inspired by Ancient Rome',
	'There are only three female characters in the entire Star Wars trilogy',
	'The Force was almost a Fabergé egg-type thing',
	'The voice of Bugs Bunny almost played C-3PO',
	'The Falcon was nicknamed after a pork product',
	' Steven Spielberg won the costliest bet of all time',
	'Brian De Palma called it the “worst movie ever”',
]
const subtitleArray = [
	'The Luke Skywalker we know and love was not always a humble farm boy – he was almost a humble farm girl. In one early draft, George Lucas cut Princess Leia from the script and made Luke a lady. In another draft, Luke was a 60-year-old general – light years away from the naïve young moisture farmer in the final cut. Oh, and he was named Luke Starkiller right up until the last possible minute – some scenes had to be reshot after Lucas reasoned that Starkiller wasnt really much of a hero name.',
	'Did George Lucas have a single original idea, or did he nick it all from the history books? When it came to naming the villains of the Empire, he looked no further than Rome. Grand Moff Tarkin was named after the Tarquins, the kings of Rome in the days before the Roman Republic, while Emperor Palpatine was named in honour of Romes Palatine Hill.',
	'Bring up this little doozy every time some bozo tells you too many characters in the new Star Wars movies are girls – thats because its about damn time. Across the first three movies, only three female characters had major speaking roles: Princess Leia, obviously; Aunt Beru, who lasted about 20 minutes before being flame-grilled; and Mon Mothma, who didnt show up until Return Of The Jedi.',
	'One of George Lucass many, many spurned ideas that (thankfully) got thrown out early doors was that the Force wasnt a vague energy source that only the most finely tuned beings could tap into, but a sort of large crystal, holy grail-type monument. It was called the Kyber Crystal in one draft – Kyber crystals were later added to official canon as the raw material that powers lightsabers, and also the Death Stars firing mechanism.',
	'None other than voiceover legend Mel Blanc auditioned for the role of Threepio – thats right, the man who loaned his larynx to Bugs Bunny, Porky Pig, Daffy Duck and Barney Rubble to name but a few chanced his arm at our favourite protocol droid. Anthony Daniels got the part, however, by playing the role as a “snooty English butler” instead of the used car salesman George Lucas was going for.',
	'The Millennium Falcon went through several design stages before the iconic shape was settled on. Famously, the design of the Falcon was inspired by a half-eaten cheeseburger with an olive on a toothpick on the side, but what a lot of people dont know is that during production the ship was nicknamed Porkburger due to its likeness. Before its design was chosen, the Falcon looked exactly like the designs later used for the Tantive IV, the diplomatic cruiser that is the very first ship seen on screen.',
	'Lucas and Spielberg were best buds back in 77, and both being super polite, encouraged one another with their movies: Lucas egged on Spielberg to complete his sci-fi masterpiece Close Encounters Of The Third Kind, while Spielberg helped Lucas get Star Wars over the line. Lucas was convinced Close Encounters would out-gross Star Wars, but Spielberg disagreed. They placed a wager: each man would give the other 2.5% of the profit from their own film. Close Encounters performed just fine at the box-office, but Star Wars? Lets just say its kept Spielberg in baseball caps and beard oil ever since.',
	'Famously, Lucas showed an early cut of Star Wars to his filmmaker friends before release. It did not go well. Feedback was generally negative: Francis Ford Coppola did not give it his endorsement, while Brian De Palma allegedly called it "the worst movie ever". Only Spielberg predicted the movie would be a hit.',
]
const FactsItems = ({ title, subtitle }: TFactsItems) => {
	const titleArr = titleArray[title]
	const subtitleArr = subtitleArray[subtitle]
	return (
		<>
			<div className={styles['as']}>
				<h2 className={styles['container-title']}>
					{titleArr}
					<p className={styles['container-subtitle']}>{subtitleArr}</p>
				</h2>
			</div>
		</>
	)
}
export default FactsItems
