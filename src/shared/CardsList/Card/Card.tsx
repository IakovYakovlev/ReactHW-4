import React from 'react';
import styles from './card.css';
import { TextComponent } from './TextComponent';
import { ImgComponent } from './ImgComponent';
import { LikeComponent } from './LikeComponent';
import { ControlsComponent } from './ControlsComponent';

export function Card() {
  return (
		<li className={styles.card}>
			<div className={styles.img}><ImgComponent /></div>
			<div className={styles.text}><TextComponent /></div>
			<div className={styles.like}><LikeComponent /></div>
			<div className={styles.controls}><ControlsComponent /></div>
		</li>
  );
}

