import React from 'react';
import { Logo, HeartUnfilled, ArrowBack } from '../../components/images/'

const headerStyke = {
    header: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        minHeight: '7rem',
        background: '#201D2A',
        margin: 0,
        padding: 0,
    },
    logoImg: {
        width: '13rem',
        objectFit: 'contain',
    },
    arrowBack: {
        width: '2.5rem',
    },
    favorHeart: {
        width: '2rem',
    }
}

function Dashboard() {
    return (
        <header style={headerStyke.header}>
            <img style={headerStyke.arrowBack} src={ArrowBack} alt="Arrow back" />
            <img style={headerStyke.logoImg} src={Logo} alt="Logo" />
            <img style={headerStyke.favorHeart} src={HeartUnfilled} alt="Heart" />
        </header>
    )
}

export default Dashboard;
