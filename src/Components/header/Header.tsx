import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import './header.css';


export const Header: FunctionComponent = () => {
    return (
        <header className="headerStyled">
            <h2 className="logo">Noisli</h2>
        </header>

    )
}
