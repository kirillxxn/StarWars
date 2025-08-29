import styles from './Hero.module.css'
import Header from '../Header/Header'
import yodaGreenImg from '..//..//assets/yodagreen.png'
import { motion } from 'motion/react'
import Lottie from 'lottie-react'
import animationSaber from '..//..//assets/saber.json'
const Hero = () => {
	return (
		<>
			<Header />
			<section className={styles['hero__section']}>
				<div className={styles['section__container-text']}>
					<motion.h1
						initial={{
							y: -200,
						}}
						animate={{
							x: 0,
							y: 0,
						}}
						transition={{
							type: 'spring',
						}}
						className={styles['container__text-title']}
					>
						Welcome
					</motion.h1>
					<motion.span
						initial={{
							opacity: 0,
							y: 300,
						}}
						animate={{
							opacity: 1,
							x: 0,
							y: 0,
						}}
						transition={{
							duration: 1,
						}}
						className={styles['container__text-pretext']}
					>
						To
					</motion.span>

					<div className={styles['container__starwars-text']}>
						<motion.span
							initial={{
								opacity: 0,
								x: -300,
							}}
							animate={{
								opacity: 1,
								x: 0,
								y: 0,
							}}
							transition={{
								duration: 1,
								type: 'spring',
							}}
							className={styles['container__text-starwars']}
						>
							Star
						</motion.span>
						<motion.span
							initial={{
								opacity: 0,
								x: 300,
							}}
							animate={{
								opacity: 1,
								x: 0,
								y: 0,
							}}
							transition={{
								duration: 1,
								type: 'spring',
							}}
							className={styles['container__text-starwars']}
						>
							Wars
						</motion.span>
					</div>
					<motion.span
						initial={{
							y: 200,
						}}
						animate={{
							x: 0,
							y: 0,
						}}
						transition={{
							delay: 2.7,
							type: 'spring',
						}}
						className={styles['container-text-universe']}
					>
						Universe
					</motion.span>
				</div>
				<motion.img
					initial={{ opacity: 0 }}
					animate={{
						opacity: [0, 0, 1],
					}}
					transition={{
						delay: 2.6,
						duration: 0.2,
					}}
					className={styles['hero__section-yoda-green']}
					src={yodaGreenImg}
					alt=''
				/>
				<motion.div
					initial={{
						x: -100,
						y: -100,
					}}
					animate={{
						x: 0,
						y: -220,
						rotateZ: '50deg',
					}}
					transition={{
						delay: 0,
						duration: 0,
					}}
					className={styles['hero__container-saber']}
				>
					<Lottie loop={false} autoplay={true} animationData={animationSaber} />
				</motion.div>
			</section>
		</>
	)
}

export default Hero
