import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SidebarContainer = styled.div`
display: none;
@media screen and (max-width: 768px) {
display:flex;
width: 100%;
justify-content: center;
align-items: center;
padding-top: 1.5em;
margin-bottom: 1rem;
position: fixed;
top: 0;
flex-direction: column;
background-color: #fff;
z-index: 999;
height: 45%;

transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};}

   
`;

export const SidebarWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    top: 1em;
    position: absolute;
    `;
    export const SideBarLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 1.5rem;
    cursor: pointer;
    li{
        cursor: pointer;
        font-size: 1.5rem;
    }
    `;

    export const SideBarList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-top: 2em;
    cursor: pointer;
    `;
    export const SideBarButton = styled.button`
    background-color: #000;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    padding: .3em .8em;
    border: none;
    `;