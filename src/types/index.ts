export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?:
		| 'primary'
		| 'secondary'
		| 'warning'
		| 'danger'
		| 'success'
		| 'outline'
		| 'dark';
	size?: 'small' | 'default' | 'large' | 'icon';
	focus?:
		| 'primary'
		| 'secondary'
		| 'warning'
		| 'danger'
		| 'success'
		| 'outline'
		| 'dark';
	rounded?: 'sm' | 'default' | 'lg' | 'full';
	loading?: boolean;
}
