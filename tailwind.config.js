/** @type {import('tailwindcss').Config} */
module.exports = {
	jit: true,
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	colors: {
		blue: {
			100: "#001220",
			200: "#001D33",
			300: "#003258",
			400: "#00497F",
			500: "#0060A9",
			600: "#2279CE",
			700: "#6292D5",
			800: "#8FACDE",
			900: "#B6C7E8",
			1000: "#DBE3F3",
		},
		white: {
			100: "#111111",
			200: "#1C1C1C",
			300: "#303030",
			400: "#474747",
			500: "#5E5E5E",
			600: "#777777",
			700: "#919191",
			800: "#ABABAB",
			900: "#C6C6C6",
			1000: "#E2E2E2",
		},
		red: {
			100: "#350609",
			200: "#4B090C",
			300: "#6A0D11",
			400: "#820F15",
			500: "#961218",
			600: "#A8141B",
			700: "#BD7375",
			800: "#CFA2A3",
			900: "#E0C6C6",
			1000: "#F0E4E4",
		},
		yellow: {
			100: "#141101",
			200: "#1F1C01",
			300: "#373102",
			400: "#504703",
			500: "#6B5F04",
			600: "#877705",
			700: "#A49107",
			800: "#C2AB08",
			900: "#E0C709",
			1000: "#F8E37F",
		},
		green: {
			100: "#06140D",
			200: "#092015",
			300: "#103724",
			400: "#185035",
			500: "#1F6B46",
			600: "#278759",
			700: "#30A46C",
			800: "#78B994",
			900: "#A9CFB9",
			1000: "#D5E7DC",
		},
		voilet: {
			100: "#251523",
			200: "#351E31",
			300: "#4B2A46",
			400: "#5B3355",
			500: "#6A3B62",
			600: "#76426E",
			700: "#9B8097",
			800: "#B9A9B6",
			900: "#D3CAD1",
			1000: "#EAE6E9",
		},
		orange: {
			100: "#1E0D01",
			200: "#301402",
			300: "#522303",
			400: "#773204",
			500: "#9E4305",
			600: "#C75406",
			700: "#F16508",
			800: "#F88F6C",
			900: "#FAB6A4",
			1000: "#FDDBD3",
		},


	},
	theme: {
		fontSize: {
			xs: ['calc(var(--font-size)*5)', {
				lineHeight: "160%",
				fontWeight: "400",
			}],
			"xs-bold": ['calc(var(--font-size)*5)', {
				lineHeight: "160%",
				fontWeight: "600",
			}],
			sm: ['calc(var(--font-size)*6)', {
				lineHeight: "133%",
				fontWeight: "400",
			}],
			base: ['calc(var(--font-size)*7)', {
				lineHeight: "143%",
				fontWeight: "400",
			}],
			"base-bold" : ['calc(var(--font-size)*7)', {
				lineHeight: "143%",
				fontWeight: "500",
			}],
			lg: ["calc(var(--font-size-lg)*2)", {
				lineHeight: "150%",
				fontWeight: "600",
			}],
			xl: ["calc(var(--font-size-xl)*2)", {
				lineHeight: "133%",
				fontWeight: "600",
			}],
			'2xl': ["calc(var(--font-size-2xl)*2)", {
				lineHeight: "140%",
				fontWeight: "400",
			}],
			'3xl': ["calc(var(--font-size-3xl)*2)", {
				lineHeight: "123%",
				fontWeight: "400",
			}],
			'4xl': ["calc(var(--font-size-4xl)*2)", {
				lineHeight: "114%",
				fontWeight: "600",
			}],
			'5xl': ["calc(var(--font-size-5xl)*2)", {
				lineHeight: "104%",
				fontWeight: "600",
			}],
		},
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
