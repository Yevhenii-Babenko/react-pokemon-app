import React from 'react';
import { Logo } from '../../components/images/'
// import {ChevronLeftOutlinedIcon, FavoriteOutlinedIcon, FavoriteBorderOutlinedIcon} from '@material-ui/icons/';

const headerStyke = {
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '7rem',
        background: '#201D2A',
        margin: 0,
        padding: 0,
    },
    logoImg: {
        width: '15rem',
        height: '5rem',
        objectFit: 'contain',
    }
}

function Dashboard() {
    return (
        <header style={headerStyke.header}>
            <img style={headerStyke.logoImg} src={Logo} alt="Logo image" />
        </header>
    )
}

export default Dashboard;
