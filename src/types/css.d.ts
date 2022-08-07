declare module '*.css' {
	// Внутри есть строковые ключи, со строковыми значениями стилей.
	const styles: { [key: string]: string };
	// Дальше экспортим это
	export = styles;
}