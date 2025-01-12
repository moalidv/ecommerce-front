import React from "react";
import Logo from "../../../../assets/svg/cart.svg?react";
import styles from "./styles.module.css";

const { basketContainer, basketQuantity } = styles;

export const HeaderBasket = () => {
	return (
		<div className={basketContainer}>
			<Logo title="basket icon" />
			<div className={basketQuantity}>0</div>
		</div>
	);
};

export default HeaderBasket;
