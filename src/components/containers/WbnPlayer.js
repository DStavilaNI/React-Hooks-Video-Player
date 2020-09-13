import React from 'react';
import {ThemeProvider} from 'styled-components';
import Video from '../Video';
import Playlist from '../containers/Playlist';
import StyledWbnPlayer from '../styles/StyledWbnPlayer';

const theme = {
    bgcolor: '#353535',
    bgcolorItem: "#414141",
    bgcolorItemActive: "#405c63",
    bgcolorPlayed: "#526d4e",
    border:"none",
    borderPlayer:"none",
    color:"#fff"
}

const themeLight = {
    bgcolor: '#fff',
    bgcolorItem: "#fff",
    bgcolorItemActive: "#80a7b1",
    bgcolorPlayed: "#7d9979",
    border:"1 px solid #353535",
    borderPlayer:"none",
    color:"#353535"
}




const WbnPlayer = props =>{
    return(
        <ThemeProvider theme={StaticRange.nightMode?theme:themeLight}>
             <StyledWbnPlayer>
                 <Video/>
                <Playlist/>
            </StyledWbnPlayer>
        </ThemeProvider>  
    )
}

export default WbnPlayer;