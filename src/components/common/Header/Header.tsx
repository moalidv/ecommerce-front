import React from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import styles from "./styles.module.css";
import { HeaderBasket } from "../eCommerce";

const { headerContainer, headerLogo } = styles;

const Header = () => {
	return (
		<header>
			<div className={headerContainer}>
				<h1 className={headerLogo}>
					<span>Our</span> <Badge bg="info">Ecom</Badge>
				</h1>
				<HeaderBasket />
			</div>
			<Navbar
				bg="dark"
				data-bs-theme="dark"
				expand="lg"
				className="bg-body-tertiary"
			>
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">Categories</Nav.Link>
							<Nav.Link href="#link">Abkout</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href="#home">login</Nav.Link>
							<Nav.Link href="#link">register</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
