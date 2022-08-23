/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#00bcd4',
				secondary: '#ff4081',
				tertiary: '#ffeb3b',
				alert: '#ffc107',
				pause: '#ff9800',
				save: '#ffeb3b',
			},
		},
		animation: {
			inc: 'increase 2s infinite',
			dec: 'decrease 2s 0.5s infinite',
		},
		screens: {
			// tablet: [{ raw: "(max-width: 600px)" }, { raw: "(max-height: 400px)" }],
			tablet: [{ raw: '(max-width: 600px),(max-height: 400px)' }],
		},
		keyframes: {
			increase: {
				'0%': {
					left: '-5%',
					width: '5%',
				},
				'100%': {
					left: '130%',
					width: '100%',
				},
			},
			decrease: {
				from: {
					left: '-80%',
					width: '80%',
				},
				to: {
					left: '110%',
					width: '10%',
				},
			},
		},
	},
	plugins: [],
}
