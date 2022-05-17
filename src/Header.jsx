import React from 'react'
import ListCompanies from './Pages/ListCompanies'

const Header = () => {
    // console.log("rendering Header");
    const css = {
        padding: '0px',
        margin: '0px',
        backgroundColor: 'royalblue',
        color: 'white',
        height: '80px'
    }

    return (
        <header style={css}>
            Available companies <br />
            <ListCompanies />
        </header>
    )
}

export default Header