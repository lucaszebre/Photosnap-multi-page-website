import styled from "styled-components";

export const PricingContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin:8rem 0 8rem 0;
    `;
export const PricingDuring = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    `;
export const MonthPricing = styled.div`
    font-size: 1vw;
    margin-right: 1vw;
    font-weight: 700;
    color: ${props => props.checked ? "black" : "gray"}
    `;
export const YearPricing = styled.div`
    font-size: 1vw;
    margin-left: 2vw;
    font-weight: 700;
    color: ${props => props.checked ? "gray" : "black"}
    `;
export const PricingAllCard = styled.div`
    margin-top: 1em;
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    `;
    