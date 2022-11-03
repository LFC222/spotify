import styled from "styled-components";

export const SidebarContainer = styled.div`
    height: 100vh;
    flex:0.2;
    color:white;
    min-width:230px;
    padding-left:10px;
    padding-right:10px;
    background-color:#040404 ;

    hr{
        border: 1px solid #282828;
        width: 90%;
        margin:10px auto ;
    }
`;

export const LogoSidebar = styled.img`
    height:70px;
    margin-right:auto;
    padding:10px;
    object-fit:contain;
`;

export const SidebarTitle = styled.strong`
    margin-left:10px;
    padding:5px;
    font-size:12px;
`;