import styled from 'styled-components'

export const CheckBoxWrapper = styled.div`
    position: relative;
`;
export const CheckBoxLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 5vw;
    height: 2vw;
    border-radius: 1vw;
    background: #bebebe;
    cursor: pointer;
    &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 1.7vw;
        height:1.7vw;
        margin: 3px;
        background: #ffffff;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 0.2s;
        @media (max-width: 1024px) {
            width: 1.3vw;
            height: 1.3vw;
    }
    `;
    export const CheckBox = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 1vw;
    width: 4vw;
    height: 2vw;
    &:checked + ${CheckBoxLabel} {
        background: BLACK;
        &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 1.8vw;
        height: 1.8vw;
        margin-left: 3vw;
        transition: 0.2s;
        @media (max-width: 1024px) {
            width: 1.3vw;
            height: 1.3vw;
        }
    }
    `;


    // Path: PhotoSnap\src\components\CenterPricing\ToggleSwitch\ToggleSwitch.jsx