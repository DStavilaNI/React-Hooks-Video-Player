import React from 'react';
import StyledPlalistItem from './styles/StyledPlaylistItem';

const PlaylistItem = ({video, active, played}) =>(
    <StyledPlalistItem active={active} played={played}>
        <div className="wbn-player__video-nr">{video.num}</div>
        <div className="wbn-player__video-name">{video.title}</div>
        <div className="wbn-player__video-time">{video.duration}</div>
    </StyledPlalistItem>
)

export default PlaylistItem;