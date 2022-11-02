import styled from "styled-components";

export const RowContainer = styled.div`
    margin-left:20px;
    padding:20px;
    display:flex;
    align-items:center;
    z-index:100;
    color:white;

    &:hover{
        cursor:pointer;
        background-color:black;
        opacity:0.8;
    }
`;

export const SongInfo = styled.div`
    margin-left:20px;

    h1{
        font-size:16px;
    }

    p{
        font-size:14px;
        margin-top:3px;
        color:gray;
    }
`;

export const SongAlbum = styled.img`
    height:40px;
    width:40px;
`;