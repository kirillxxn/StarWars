import styles from './Header.module.css'
import { motion } from 'motion/react'
const Header = () => {
	const headerVariant = {
		hidden: { x: 250, y: 200, rotateZ: '-30deg', scale: 0 },
		visible: { x: 0, y: 0, rotateZ: '0deg', scale: 1 },
	}
	return (
		<>
			<header className={styles['header']}>
				<motion.div
					initial={'hidden'}
					animate={'visible'}
					transition={{
						delay: 2.6,
						duration: 1,
						type: 'spring',
					}}
					variants={headerVariant}
					className={styles['header__container']}
				>
					<nav className={styles['header__container-nav']}>
						<ul className={styles['container__nav-list']}>
							<li className={styles['container__nav-item']}>
								<a className={styles['container__nav-link']} href='#'>
									home
								</a>
							</li>
							<li className={styles['container__nav-item']}>
								<a className={styles['container__nav-link']} href='#series'>
									series
								</a>
							</li>
							<li className={styles['container__nav-item']}>
								<a className={styles['container__nav-link']} href='#'>
									facts
								</a>
							</li>
							<li className={styles['container__nav-item']}>
								<a className={styles['container__nav-link']} href='#'>
									actors
								</a>
							</li>
						</ul>
					</nav>
				</motion.div>
			</header>
		</>
	)
}
export default Header
