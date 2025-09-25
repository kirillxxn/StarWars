import Items from './Items'
import styles from './Series.module.css'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import series1 from '../../assets/Series/SeriesList/series1.jpg'
import series2 from '../../assets/Series/SeriesList/series2.jpg'
import series3 from '../../assets/Series/SeriesList/series3.jpg'
import series4 from '../../assets/Series/SeriesList/series4.jpg'
import series5 from '../../assets/Series/SeriesList/series5.jpg'
import series6 from '../../assets/Series/SeriesList/series6.jpg'
import series7 from '../../assets/Series/SeriesList/series7.jpg'
import series8 from '../../assets/Series/SeriesList/series8.jpg'
import series9 from '../../assets/Series/SeriesList/series9.jpg'
import series10 from '../../assets/Series/SeriesList/series10.jpg'
import series11 from '../../assets/Series/SeriesList/series11.jpg'
import {
	animationDelayWords,
	animationDurationWords,
	wordAreVariant,
	wordAVariant,
	wordBecomeVariant,
	wordJediVariant,
	wordQueryVariant,
	wordReadyVariant,
	wordToVariant,
	wordYouVariant,
} from './animation.constant'

const Series = () => {
	const sectionRef = useRef(null)

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start'],
	})

	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 80,
		damping: 50,
		restDelta: 0.001,
	})

	const rotateRight = useTransform(smoothProgress, [0, 1], [0, 2])
	const rotateLeft = useTransform(smoothProgress, [0, 1], [0, -2])

	const yUp = useTransform(smoothProgress, [0, 1], ['20%', '-60%']) // Вверх
	const yDown = useTransform(smoothProgress, [0, 1], ['-20%', '60%']) // Вниз

	return (
		<section id='series' ref={sectionRef} className={styles['section__series']}>
			{/* Эпизод IV: Новая надежда (1977) - ЛЕВЫЙ РЯД */}

			<motion.div
				style={{ y: yUp, rotate: rotateLeft }}
				initial={{ opacity: 0, x: -200 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: '-100px' }}
				transition={{ duration: 0.7, ease: 'easeOut' }}
				className={styles['series-image-container']}
			>
				<Items image={series1} description='Poster: A New Hope' altIndex={0} />
			</motion.div>

			{/* Слово Are */}
			<motion.span
				style={{ zIndex: -100 }}
				initial={'hidden'}
				whileInView={'visible'}
				transition={{
					duration: animationDurationWords.wordSectionSeries,
					ease: 'easeOut',
				}}
				viewport={{ once: true, margin: '0' }}
				className={styles['text']}
				variants={wordAreVariant}
			>
				Are
			</motion.span>

			{/* Эпизод V: Империя наносит ответный удар (1980) - ПРАВЫЙ РЯД */}

			<motion.div
				style={{ y: yDown, rotate: rotateRight }}
				initial={{ opacity: 0, x: 200 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: '-150px' }}
				transition={{ duration: 0.7, ease: 'easeOut' }}
				className={styles['series-image-container']}
			>
				<Items
					image={series2}
					description='Poster: The Empire Strikes Back'
					altIndex={1}
				/>
			</motion.div>

			{/* Слово You */}

			<motion.span
				initial={'hidden'}
				whileInView={'visible'}
				transition={{
					duration: animationDurationWords.wordSectionSeries,
					ease: 'easeOut',
				}}
				viewport={{ once: true, margin: '0' }}
				className={styles['text']}
				variants={wordYouVariant}
			>
				You
			</motion.span>

			{/* Эпизод VI: Возвращение джедая (1983) - ЛЕВЫЙ РЯД */}

			<motion.div
				style={{ y: yUp, rotate: rotateLeft }}
				initial={{ opacity: 0, x: 200 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: '-150px' }}
				transition={{ duration: 0.7, ease: 'easeOut' }}
				className={styles['series-image-container']}
			>
				<Items
					image={series3}
					description='Poster: Return of the Jedi'
					altIndex={2}
				/>
			</motion.div>

			{/* Слово Ready */}

			<motion.span
				initial={'hidden'}
				whileInView={'visible'}
				transition={{
					delay: animationDelayWords.wordSectionSeries,
					duration: animationDurationWords.wordSectionSeries,
					ease: 'easeOut',
				}}
				viewport={{ once: true, margin: '0' }}
				className={styles['text']}
				variants={wordReadyVariant}
			>
				Ready
			</motion.span>

			{/* Эпизод I: Скрытая угроза (1999) - ПРАВЫЙ РЯД */}

			<motion.div
				style={{ y: yDown, rotate: rotateRight }}
				initial={{ opacity: 0, x: -200 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: '-150px' }}
				transition={{ duration: 0.2, ease: 'easeOut' }}
				className={styles['series-image-container']}
			>
				<Items
					image={series4}
					description='Poster: The Phantom Menace'
					altIndex={3}
				/>
			</motion.div>

			{/* Слово To */}

			<motion.span
				initial={'hidden'}
				whileInView={'visible'}
				transition={{
					delay: animationDelayWords.wordSectionSeries,
					duration: animationDurationWords.wordSectionSeries,
					ease: 'easeOut',
				}}
				viewport={{ once: true, margin: '0' }}
				className={styles['text']}
				variants={wordToVariant}
			>
				To
			</motion.span>

			{/* Эпизод II: Атака клонов (2002) - ЛЕВЫЙ РЯД */}

			<motion.div
				style={{ y: yUp, rotate: rotateLeft }}
				initial={{ opacity: 0, x: 200 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: '-150px' }}
				transition={{ duration: 0.7, ease: 'easeOut' }}
				className={styles['series-image-container']}
			>
				<Items
					image={series5}
					description='Poster: Attack of the Clones'
					altIndex={4}
				/>
			</motion.div>

			{/* Слово Become */}

			<motion.span
				initial={'hidden'}
				whileInView={'visible'}
				transition={{
					delay: animationDelayWords.wordSectionSeries,
					duration: animationDurationWords.wordSectionSeries,
					ease: 'easeOut',
				}}
				viewport={{ once: true, margin: '0' }}
				className={styles['text']}
				variants={wordBecomeVariant}
			>
				Become
			</motion.span>

			{/* Эпизод III: Месть ситхов (2005) - ПРАВЫЙ РЯД */}

			<motion.div
				style={{ y: yDown, rotate: rotateRight }}
				initial={{ opacity: 0, x: -200 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: '-150px' }}
				transition={{ duration: 0.7, ease: 'easeOut' }}
				className={styles['series-image-container']}
			>
				<Items
					image={series6}
					description='Poster: Revenge of the Sith'
					altIndex={5}
				/>
			</motion.div>

			{/* Слово A */}

			<motion.span
				initial={'hidden'}
				whileInView={'visible'}
				transition={{
					delay: animationDelayWords.wordSectionSeries,
					duration: animationDurationWords.wordSectionSeries,
					ease: 'easeOut',
				}}
				viewport={{ once: true, margin: '0' }}
				className={styles['text']}
				variants={wordAVariant}
			>
				A
			</motion.span>

			{/* Эпизод VII: Пробуждение силы (2015) - ЛЕВЫЙ РЯД */}

			<motion.div
				style={{ y: yUp, rotate: rotateLeft }}
				initial={{ opacity: 0, x: 200 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: '-150px' }}
				transition={{ duration: 0.7, ease: 'easeOut' }}
				className={styles['series-image-container']}
			>
				<Items
					image={series7}
					description='Poster: The Force Awakens'
					altIndex={6}
				/>
			</motion.div>

			{/* Слово Jedi */}

			<motion.span
				initial={'hidden'}
				whileInView={'visible'}
				transition={{
					delay: animationDelayWords.wordSectionSeries,
					duration: animationDurationWords.wordSectionSeries,
					ease: 'easeOut',
				}}
				viewport={{ once: true, margin: '0' }}
				className={styles['text']}
				variants={wordJediVariant}
			>
				Jedi
			</motion.span>
			{/* Изгой-один (2016) - ПРАВЫЙ РЯД */}
			<motion.div
				style={{ y: yDown, rotate: rotateRight }}
				initial={{ opacity: 0, x: -200 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: '-150px' }}
				transition={{ duration: 0.7, ease: 'easeOut' }}
				className={styles['series-image-container']}
			>
				<Items image={series8} description='Poster: Rogue One' altIndex={7} />
			</motion.div>

			{/* Вопросительный знак */}

			<motion.span
				initial={'hidden'}
				whileInView={'visible'}
				transition={{
					delay: animationDelayWords.wordSectionSeries,
					duration: animationDurationWords.wordSectionSeries,
					ease: 'easeOut',
				}}
				viewport={{ once: true, margin: '0' }}
				className={styles['text']}
				variants={wordQueryVariant}
			>
				?
			</motion.span>

			{/* Эпизод VIII: Последние джедаи (2017) - ЛЕВЫЙ РЯД */}

			<motion.div
				style={{ y: yUp, rotate: rotateLeft }}
				initial={{ opacity: 0, x: 200 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: '-150px' }}
				transition={{ duration: 0.7, ease: 'easeOut' }}
				className={styles['series-image-container']}
			>
				<Items
					image={series9}
					description='Poster: The Last Jedi'
					altIndex={8}
				/>
			</motion.div>

			{/* Хан Соло (2018) - ПРАВЫЙ РЯД */}

			<motion.div
				style={{ y: yDown, rotate: rotateRight }}
				initial={{ opacity: 0, x: -200 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: '-150px' }}
				transition={{ duration: 0.7, ease: 'easeOut' }}
				className={styles['series-image-container']}
			>
				<Items image={series10} description='Poster: Solo' altIndex={9} />
			</motion.div>

			{/* Эпизод IX: Скайуокер. Восход (2019) - ЛЕВЫЙ РЯД */}

			<motion.div
				style={{ y: yUp, rotate: rotateLeft }}
				initial={{ opacity: 0, x: 200 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: '-150px' }}
				transition={{ duration: 0.7, ease: 'easeOut' }}
				className={styles['series-image-container']}
			>
				<Items
					image={series11}
					description='Poster: The Rise of Skywalker'
					altIndex={10}
				/>
			</motion.div>
		</section>
	)
}
export default Series
