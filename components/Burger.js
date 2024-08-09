import styles from '../styles/Burger.module.css';

function Burger(props) {
	return (
		<div className={styles.container}>
			<h2 className={styles.name}>{props.name}</h2>
			<img className={styles.images} src={props.image} />
			<div className={styles.btnContainer}>
				<button onClick={() => props.selectBurger(props.name)} className={styles.selectBtn}>Select</button>
				<button onClick={() => props.removeBurger(props.name)} className={styles.removeBtn}>Remove all</button>
			</div>
		</div>
	);
}

export default Burger;
