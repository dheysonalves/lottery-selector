const dateFormater = ((value: string) => {
	if (!value) return '';
	const fullDate = new Date(Date.parse(value));

	return `${fullDate.getDate()}/${fullDate.getMonth()}/${fullDate.getFullYear()}`
});


export {
	dateFormater,
}
