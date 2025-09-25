import styles from './Facts.module.css'
import FactsItems from './FactsItems'
import { motion } from 'framer-motion'
const Facts = () => {
	return (
		<>
			<section id='facts' className={styles['section__facts']}>
				<motion.div className={styles['facts__container']}>
					<motion.div
						initial={{
							x: 250,
							y: 0,
							opacity: 0,
						}}
						animate={{
							x: 250,
							y: 0,
							opacity: 1,
						}}
						transition={{
							duration: 0.3,
						}}
					>
						<FactsItems title={0} subtitle={0} />
					</motion.div>
					<motion.div
						initial={{
							x: -10,
							y: 100,
							opacity: 0,
							scale: 0,
						}}
						whileInView={{ opacity: 1, x: -10, y: 100, scale: 1 }}
						viewport={{ once: true, margin: '-150px' }}
						transition={{ duration: 0.4, ease: 'easeOut' }}
					>
						<FactsItems title={1} subtitle={1} />
					</motion.div>
					<motion.div
						initial={{
							x: 50,
							y: 80,
							opacity: 0,
							scale: 0,
						}}
						whileInView={{ opacity: 1, x: 50, y: -80, scale: 1 }}
						viewport={{ once: true, margin: '0px' }}
						transition={{ duration: 0.4, ease: 'easeOut' }}
					>
						<FactsItems title={2} subtitle={2} />
					</motion.div>
					<motion.div
						initial={{
							x: -200,
							y: -60,
							opacity: 0,
							scale: 0,
						}}
						whileInView={{ opacity: 1, x: -200, y: -60, scale: 1 }}
						viewport={{ once: true, margin: '0px' }}
						transition={{ duration: 0.4, ease: 'easeOut' }}
					>
						<FactsItems title={3} subtitle={3} />
					</motion.div>
					<motion.div
						initial={{
							x: 150,
							y: 150,
							opacity: 0,
							scale: 0,
						}}
						whileInView={{ opacity: 1, x: 150, y: -150, scale: 1 }}
						viewport={{ once: true, margin: '0px' }}
						transition={{ duration: 0.4, ease: 'easeOut' }}
					>
						<FactsItems title={4} subtitle={4} />
					</motion.div>
					<motion.div
						initial={{
							x: -100,
							y: -140,
							opacity: 0,
							scale: 0,
						}}
						whileInView={{ opacity: 1, x: -100, y: -140, scale: 1 }}
						viewport={{ once: true, margin: '0px' }}
						transition={{ duration: 0.4, ease: 'easeOut' }}
					>
						<FactsItems title={5} subtitle={5} />
					</motion.div>
					<motion.div
						initial={{
							x: 50,
							y: -260,
							opacity: 0,
							scale: 0,
						}}
						whileInView={{ opacity: 1, x: 50, y: -260, scale: 1 }}
						viewport={{ once: true, margin: '0px' }}
						transition={{ duration: 0.4, ease: 'easeOut' }}
					>
						<FactsItems title={6} subtitle={6} />
					</motion.div>
					<motion.div
						initial={{
							x: -180,
							y: -200,
							opacity: 0,
							scale: 0,
						}}
						whileInView={{ opacity: 1, x: -180, y: -200, scale: 1 }}
						viewport={{ once: true, margin: '0px' }}
						transition={{ duration: 0.4, ease: 'easeOut' }}
					>
						<FactsItems title={7} subtitle={7} />
					</motion.div>
				</motion.div>
			</section>
		</>
	)
}
export default Facts
