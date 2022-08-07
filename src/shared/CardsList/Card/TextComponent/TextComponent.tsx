import React from 'react';
import styles from './textcomponent.css';

export function TextComponent() {
  return (
		<div className={styles.textContent}>
			<div className={styles.userLink}>
				<img
					className={styles.avatar}
					src="https://media.istockphoto.com/photos/close-up-single-magnifying-glass-with-black-handle-leaning-on-the-picture-id1279707180"
					alt="avatar"
				/>
				<a href="#user-url" className={styles.userName}>Дмитрий Гришин</a>
				<span className={styles.createdAt}>
					<span className={styles.publishedLabel}>опубликовано </span>
					4 часа назад
				</span>
			</div>
			<h2 className={styles.title}>
				<a href="#post-url" className={styles.postLink}>
					Следует отметить, что новая модель организационной деятельности. Следует отметить, что новая модель организационной деятельности.
				</a>
			</h2>
		</div>
  );
}

