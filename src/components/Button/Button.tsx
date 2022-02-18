import React from 'react';
import 'Buttton.scss';

export interface ButtonProps {
	variant?: string;
	disabled?: boolean;
	size?: string;
	children?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	onClick: (e: MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = ({ variant, size, ...props }) => {
	const mode = `${variant}`;
	return (
		<button
			type='button'
			className={['storybook-button', `storybook-button--${size}`, mode].join(
				' '
			)}
			style={props.style}
		>
			{props.children}
		</button>
	);
};

Button.defaultProps = {
	variant: 'primary',
	disabled: false,
	size: 'medium',
	style: {},
	onClick: () => {},
};

export default Button;
