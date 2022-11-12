/** @type {import('tailwindcss').Config} */
module.exports = {
	jit: true,
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			spacing: {
				1: 'var(--val)',
				2: 'calc(var(--val) * 2)',
				3: 'calc(var(--val) * 3)',
				4: 'calc(var(--val) * 4)',
				5: 'calc(var(--val) * 5)',
				6: 'calc(var(--val) * 6)',
				7: 'calc(var(--val) * 7)',
				8: 'calc(var(--val) * 8)',
				9: 'calc(var(--val) * 9)',
				10: 'calc(var(--val) * 10)',
				11: 'calc(var(--val) * 11)',
				12: 'calc(var(--val) * 12)',
				14: 'calc(var(--val) * 14)',
				16: 'calc(var(--val) * 16)',
				20: 'calc(var(--val) * 20)',
				24: 'calc(var(--val) * 24)',
				28: 'calc(var(--val) * 28)',
				32: 'calc(var(--val) * 32)',
				36: 'calc(var(--val) * 36)',
				40: 'calc(var(--val) * 40)',
				44: 'calc(var(--val) * 44)',
				48: 'calc(var(--val) * 48)',
				52: 'calc(var(--val) * 52)',
				56: 'calc(var(--val) * 56)',
				60: 'calc(var(--val) * 60)',
				64: 'calc(var(--val) * 64)',
				72: 'calc(var(--val) * 72)',
				80: 'calc(var(--val) * 80)',
				96: 'calc(var(--val) * 96)',
				px: '1px',
				0.5: 'calc(var(--val) * 0.5)',
				1.5: 'calc(var(--val) * 1.5)',
				2.5: 'calc(var(--val) * 2.5)',
				3.5: 'calc(var(--val) * 3.5)',
			},
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
				pink800: '#9d174d',

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
