import styled from "styled-components";

export const HeaderContainer = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:30px;
`;

export const HeaderLeft = styled.div`
    flex:0.5;
    min-width:70px;
    background-color:white;
    color:gray;
    border-radius:30px;
    align-items:center;
    display:flex;
    padding:10px;

    input{
        border:none;
        width:100%;
    }
`;

export const HeaderRight = styled.div`
    display: flex;
    align-items:center;

    h4{
        margin-left:10px;
    }
`;