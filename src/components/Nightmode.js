import React from 'react';
import StyledNightmode from "./styles/StyledNightmode";

const NightMode = ({nightModeCallback, nightMode}) => {
    return (
    <StyledNightmode>
        <span>NightMode:</span>
        <label classname="switch">
            <input type="checkbox" checked={nightMode} onChange={nightModeCallback}/>
            <span classname="slider round"></span>
        </label>
    </StyledNightmode>)
}

export default NightMode;