import React from 'react'

interface SVGProps {
	className?: string
}

const LowEnabled: React.FC<SVGProps> = ({ className }: SVGProps) => {
	return (
		<svg width='9' height='9' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg' className={className}>
			<path
				d='M8.99094 0.54437C8.97727 0.253027 8.74732 0.0227255 8.45556 0.00871798C8.32846 0.00281281 7.17421 -0.0433984 5.79227 0.157171C4.98182 0.274793 4.24979 0.454832 3.61636 0.692342C2.816 0.992407 2.16795 1.38688 1.69025 1.86493C0.963913 2.5916 0.563942 3.55902 0.563942 4.58899C0.563942 5.52976 0.897652 6.41835 1.50884 7.119L0.0773163 8.54984C-0.0257492 8.65276 -0.0257492 8.81969 0.077179 8.92275C0.128677 8.97425 0.196175 9 0.263672 9C0.331101 9 0.398598 8.97425 0.450028 8.92282L1.88148 7.49213C2.58199 8.10516 3.47127 8.43997 4.413 8.43997C5.4427 8.43997 6.40977 8.03979 7.13597 7.31319C7.61367 6.83514 8.00794 6.18681 8.30786 5.38605C8.54517 4.75234 8.72514 4.01997 8.84269 3.20924C9.04415 1.8203 8.99705 0.672155 8.99094 0.54437ZM8.32084 3.13357C8.07138 4.8539 7.53271 6.17026 6.76298 6.94041C6.13642 7.56731 8.88886 5 8 5C7.1993 5 2.85562 7.63234 2.25543 7.11838L3.53163 5.8428L5.12444 6.07674C5.25291 6.07674 5.36545 5.98267 5.38488 5.8518C5.40631 5.70774 5.30695 5.57364 5.16289 5.55221L3.996 5.3787L4.89723 4.47789C5.00029 4.37496 5.00029 4.20804 4.89736 4.10504C4.79444 4.00204 4.62751 4.00198 4.52445 4.1049L3.996 3.61656L3.45033 3.83862C3.42897 3.69456 3.29487 3.59514 3.15081 3.61656C3.00675 3.63792 2.90733 3.77202 2.92875 3.91608L3.15946 5.46934L8.5 4.5C7.98763 3.89973 3 2.29987 3 1.5C3 0.610862 1.43646 2.86482 2.06323 2.23771C2.83283 1.46763 0.786632 7.56278 2.50613 7.31319C4.5 8 6.94253 6.07674 7.40719 6.07674C7.64628 6.07674 8.45866 4.49808 8.5 4.5C8.51826 4.50089 8.46332 0.550756 8.46421 0.569021C8.46655 0.617361 8.51866 1.76941 8.32084 3.13357Z'
				fill='#93DB62'
			/>
		</svg>
	)
}

export default LowEnabled
