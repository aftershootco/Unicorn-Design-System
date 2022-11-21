import React from 'react';
import './Chip.scss';

export interface ChipProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * @string to select the variant of Chip
     */
	text?: 'Text' | 'Purple' | 'Blue';

    /**
     * @boolean for whether the Chip is selected
     */
	selected: boolean;
}

const Chip: React.FC<ChipProps> = (props) => {
	return props.text === 'Text' ? (
		<button
			{...props}
			className={`font-[archivo] text-gray-50 text-lg py-1 px-3 border border-gray-50/25 rounded-lg ${
				!props.disabled ? 'hover:border-gray-50/100' : 'text-gray-50/30'
			} 
                ${props.selected &&
                !props.disabled &&
                'bg-blue-400 border-blue-400 hover:border-blue-400'
            } `}
		>
			{props.text}
		</button>
	) : (
		<button
			{...props}
			className={`relative font-[archivo] text-gray-50 text-lg py-1 px-3 border border-gray-50/25 rounded-lg pr-6 ${
				!props.disabled ? 'hover:border-gray-50/100' : 'text-gray-50/30'
			}
            ${props.selected &&
            !props.disabled &&
            (props.text === 'Purple'
                ? 'bg-violet-700 border-violet-700 hover:border-violet-700'
                : 'bg-blue-700 border-blue-700 hover:border-blue-700')
            }`}
		>
			{props.text}
			<div
				className={`absolute w-2 h-2 ${
					props.text === 'Purple' ? 'bg-violet-400' : 'bg-blue-500'
				} ${props.disabled && 'bg-gray-500'} rounded-full top-4 right-2`}
			></div>
		</button>
	);
};

export default React.memo(Chip);
