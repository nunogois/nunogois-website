export enum DATE {
	BIRTHDAY = '1989-12-27',
	PROFESSIONAL = '2011-03-01'
}

export const years = (date: DATE): number => {
	const _date = new Date(date)
	const today = new Date()
	let years = new Date().getFullYear() - _date.getFullYear()
	if (
		today.getMonth() < _date.getMonth() ||
		(today.getMonth() == _date.getMonth() && today.getDate() < _date.getDate())
	) {
		years--
	}

	return years
}
