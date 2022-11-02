import styled from "styled-components";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import { Slider } from "@material-ui/core";


export const FooterArea = styled.div`
    position:fixed;
    bottom:0;
    height:65px;
    width:97%;
    background-color: #282828;
    padding:20px;
    display:flex;
    justify-content:space-between;
`;

export const FooterLeft = styled.div`
    flex:0.3 ;
    display:flex;
    align-items:center;
    color: white;
    width:300px ;
`;

export const FooterCenter = styled.div`
    flex:0.4;
    padding:0 100px;
    color:white;
    display: flex;
    align-items:center;
    justify-content:space-between;
    max-width:300px;
`;

export const FooterRight = styled.div`
    flex:0.3;
    display:flex;
    align-items:center;
    justify-content:space-between;
    color:white ;

    & .MuiSlider-root{
        color: green ;
    }
`;

export const AlbumLogo = styled.img`
    height:60px;
    width:60px;
    margin-right:20px;
    object-fit:contain;
`;

export const SongInfo = styled.div`
    p{
        font-size:12px;
    }

    h4{
        margin-bottom:5px;
    }
`;

export const Repeat = styled(RepeatIcon)`
    color: #1ed15e;

    &:hover{
        transition: transform 0.2s ease-in-out;
        transform: scale(1.2) !important;
    }
`;

export const Shuffle = styled(ShuffleIcon)`
    color: #1ed15e;

    &:hover{
        transition: transform 0.2s ease-in-out;
        transform: scale(1.2) !important;
    }
`;

export const SkipPrevious = styled(SkipPreviousIcon)`
    
    &:hover{
        transition: transform 0.2s ease-in-out;
        transform: scale(1.2) !important;
    }
`;

export const SkipNext = styled(SkipNextIcon)`
    &:hover{
        transition: transform 0.2s ease-in-out;
        transform: scale(1.2) !important;
    }
`;

export const PlayCircle = styled(PlayCircleOutlineIcon)`
    
    &:hover{
        transition: transform 0.2s ease-in-out;
        transform: scale(1.2) !important;
    }
`;

export const ContinuosSlider = styled(Slider)`

`;