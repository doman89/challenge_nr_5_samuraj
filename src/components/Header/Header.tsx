import React from 'react';
import { Link } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderStyles } from './Header.module.scss';

const style = bemCssModules(HeaderStyles);

export const Header: React.FC = () => (
	<nav className={style()}>
		<ul className={style('list')}>
			<li className={style('element')}>
				<Link to="/characters">Characters</Link>
			</li>
		</ul>
	</nav>
);