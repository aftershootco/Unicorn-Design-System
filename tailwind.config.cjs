/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				// TEAL
				teal: '#33b0cb',
				teal100: '#1da0bc',
				teal200: '#147084',
				teal300: '#0e505e',
				teal400: '#1ea0bc',
				teal500: '#208ba1',

				// GREY
				grey100: '#c1c1c1',
				grey200: '#bbbbbb',
				grey300: '#808080',
				grey400: '#666666',
				grey500: '#393939',
				grey600: '#363636',
				grey700: '#323232',
				grey800: '#262626',
				grey900: '#1b1b1b',
				grey333: '#333333',
				grey500B: '#00000040',
				grey700B: '#565656',
				grey1000: '#282828',
				grey1200: '#343333',
				grey4343: '#434343',

				// BLACK
				black: '#000000',

				// WHITE
				white: '#ffffff',
				white100: '#c1c1c1',
				white200: '#808080',
				offWhite: 'rgba(255, 255, 255, 0.5)',

				// YELLOW
				yellow100: '#e7a523',
				yellow200: ' #d6963a',

				// GREEN
				dirtyGreen: '#b4b060',

				// RED
				red100: '#ec6d62',
				red200: '#cf564d',

				// PINK
				pink700: '#bf4d64',

				// BLUE
				blue100: '#4267b2',
				blue200: '#35569a',
			},
		},
		animation: {
			inc: 'increase 2s infinite',
			dec: 'decrease 2s 0.5s infinite',
		},
		screens: {
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
