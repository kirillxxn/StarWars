import styles from './Hero.module.css'
import Header from '../Header/Header'
import yodaGreenImg from '..//..//assets/Hero/yodagreen.png'
import { motion } from 'motion/react'
import Lottie from 'lottie-react'
import animationSaber from '..//..//assets/Animation/saberAnimation.json'
import {
	animationDelay,
	animationDuration,
	pretextVariant,
	saberVariant,
	starVariant,
	titleVariant,
	universeVariant,
	warsVariant,
	yodaVariant,
} from './animation.constant'
const Hero = () => {
	return (
		<>
			<Header />
			<section className={styles['hero__section']}>
				<div className={styles['section__container-text']}>
					<motion.h1
						initial={'hidden'}
						animate={'visible'}
						transition={{
							type: 'spring',
						}}
						variants={titleVariant}
						className={styles['hero__title']}
					>
						Welcome
					</motion.h1>
					<motion.span
						initial={'hidden'}
						animate={'visible'}
						transition={{
							duration: animationDuration.pretext,
						}}
						variants={pretextVariant}
						className={styles['hero__pretext']}
					>
						To
					</motion.span>
					<div className={styles['container__starwars-group']}>
						<motion.span
							initial={'hidden'}
							animate={'visible'}
							transition={{
								duration: animationDuration.starWarsWord,
								type: 'spring',
							}}
							variants={starVariant}
							className={styles['starwars-group-word']}
						>
							Star
						</motion.span>
						<motion.span
							initial={'hidden'}
							animate={'visible'}
							transition={{
								duration: animationDuration.starWarsWord,
								type: 'spring',
							}}
							variants={warsVariant}
							className={styles['starwars-group-word']}
						>
							Wars
						</motion.span>
					</div>
					<motion.span
						initial={'hidden'}
						animate={'visible'}
						transition={{
							delay: animationDelay.universe,
							type: 'spring',
						}}
						variants={universeVariant}
						className={styles['container-text-universe']}
					>
						Universe
					</motion.span>
				</div>
				<motion.img
					initial={'hidden'}
					animate={'visible'}
					transition={{
						delay: animationDelay.yoda,
						duration: animationDuration.yoda,
					}}
					variants={yodaVariant}
					className={styles['hero-yoda']}
					src={yodaGreenImg}
					alt='Изображение мастера йоды,держащего джедайский меч'
				/>
				<motion.div
					initial={'hidden'}
					animate={'visible'}
					transition={{
						delay: animationDelay.saber,
						duration: animationDuration.saber,
					}}
					variants={saberVariant}
					className={styles['hero__container-saber']}
				>
					<Lottie
						className={styles['container-saber']}
						loop={false}
						autoplay={true}
						animationData={animationSaber}
					/>
				</motion.div>
			</section>
		</>
	)
}
export default Hero
