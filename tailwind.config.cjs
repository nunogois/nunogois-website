const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				background: '#1a1a1a',
				'light-gray': '#333'
			}
		}
	},

	plugins: []
}

module.exports = config
