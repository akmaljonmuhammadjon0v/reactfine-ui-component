export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline' | 'dark';
	size?: 'small' | 'default' | 'large' | 'icon';
	focus?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline' | 'dark';
	rounded?: 'sm' | 'default' | 'lg' | 'full';
	loading?: boolean;
}
