import { Icon } from "@material-ui/core";
import styled from "styled-components";

export const OptionArea = styled.div`
    display:flex;
    align-items:center;
    color:gray;
    height:40px;
    cursor:pointer;
    transition: 200ms color ease-in;

    &:hover{
        color:white;

    }

    p{
        margin-top:10px;
        margin-left:20px;
        font-size:14px;
    }

`;

export const IconArea = styled(Icon)`
    padding-left:10px;
    padding-right:10px;
`;