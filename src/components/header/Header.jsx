import pokedexLogo from '../../images/pokedex-logo.png';
import { ThemeTogglerButton } from '../button/ThemeTogglerButton';

import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

export const Header = () =>{
    const { theme } = useContext(ThemeContext)

    return(
        <header className = "flex justify-between items-center shadow-lg p-5" style={{color: theme.color, backgroundColor: theme.header}}>
            <div className="flex gap-4 items-center">
                <img src={pokedexLogo} className='w-15 h-15'/>
                <h1>Pokedex</h1>
            </div>
            <ThemeTogglerButton></ThemeTogglerButton>
        </header>
    )
}