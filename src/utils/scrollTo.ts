export const scrollTo = (element: string) =>
	window.scrollTo({
		top: element === 'home' ? 0 : document.getElementById(element).offsetTop - 50,
		behavior: 'smooth'
	})
