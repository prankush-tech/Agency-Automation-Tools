import React, { createContext, useEffect, useState } from 'react';

type ClerkThemeType = {
	currentTheme: string;
	setTheme: () => void;
};

export const ClerkThemeContext = createContext<ClerkThemeType>({
	currentTheme: "dark",
	setTheme: () => {}
});

export const ClerkThemeProvider: React.FC = ({ children }: any) => {
	const [ currentTheme, setCurrentTheme ] = useState<string>('dark');

	const setTheme = () => {
		setCurrentTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
	};

	const value: ClerkThemeType = { currentTheme, setTheme };

	useEffect(
		() => {
			setTheme();
		},
		[ currentTheme ]
	);

	return <ClerkThemeContext.Provider value={value}>{children}</ClerkThemeContext.Provider>;
};
