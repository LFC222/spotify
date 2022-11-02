import styled from "styled-components";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'

export const BodyArea = styled.div`
    flex:0.8;
    height:100vh;
    color:white;
    padding:30px;
    overflow-y:overlay;
    background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));

    &::-webkit-scrollbar{
        display:none;
    }
`;

export const BodyInfo = styled.div`
    display:flex;
    align-items:flex-end;
    padding:10px;

    img{
        height:20vw;
        margin: 0 20px;
        box-shadow:0 4px 60px rgba(0,0,0,0.5);
    }
`;

export const TextInfo = styled.div`
    flex:1;
    
    h2{
        font-size:48px;
        margin-bottom:10px;
    }

    p{
        font-size:14px;
    }
`;

export const BodyIcons = styled.div`
    display:flex;
    align-items:center;

    & .MuiSvgIcon-root{
        margin-right:20px;
    }
`;

export const PlayCircleFilled = styled(PlayCircleFilledIcon)`
    font-size: 80px !important;
    margin-left:50px;
    margin-top:20px;
    margin-bottom:20px;
    
    &:hover{
        transition: 100ms transform ease-in;
        transform:scale(1.08);
    }
`;

export const BodySongs = styled.div`
    margin: 20px -30px;
`;