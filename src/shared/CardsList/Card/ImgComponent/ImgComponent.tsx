import React, {Component, PropsWithChildren} from 'react';
import styles from './imgcomponent.css';

export function ImgComponent() {
  return (
		<div className={styles.preview}>
			<img
				className={styles.previewImg}
				src="https://media.istockphoto.com/photos/close-up-single-magnifying-glass-with-black-handle-leaning-on-the-picture-id1279707180"
			/>
		</div>
  );
}
