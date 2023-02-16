import React from 'react'
import Toggle from './ToggleSwitch'
import {PricingContainer,PricingDuring,MonthPricing,YearPricing,PricingAllCard} from './CenterPricingStyles.jsx'
import CardPricing from '../CardPricing'
import BigCardPricing from '../BigCardPricing'
const CenterPricing = () => {
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked((prevchecked) => !prevchecked);
        console.log(checked)
    };

    function AllPricingCard(){
        if(checked){
            return(
                <>
                <CardPricing level="Basic" description="Includes basic usage of our platform. Recommended for new and aspiring photographers." price="$19.00" during="by month"/>
                <BigCardPricing level="Pro" description="More advanced features available. Recommended for photography veterans and professionals." price="$39.00" during="by month"/>
                <CardPricing level="Business" description="Additional features available such as more detailed metrics. Recommended for business owners." price="$99.00" during=" by month"/>
                </>
            )}
        else {
            return(
                <>
                <CardPricing level="Basic" description="Includes basic usage of our platform. Recommended for new and aspiring photographers." price="$199.00" during="by year"/>
                <BigCardPricing level="Pro" description="More advanced features available. Recommended for photography veterans and professionals." price="$399.00" during="by year"/>
                <CardPricing level="Business" description="Additional features available such as more detailed metrics. Recommended for business owners." price="$999.00" during="by year"/>
                </>
            )
        }
        }
    
    return (
    <>
    <PricingContainer>
        <PricingDuring>
            <MonthPricing checked={checked}>
            Monthly
            </MonthPricing>
            <Toggle onChange={handleChange} />
            <YearPricing checked={checked}>
            Yearly
            </YearPricing>
        </PricingDuring>
        <PricingAllCard>
            {AllPricingCard()}
        </PricingAllCard>
    </PricingContainer>      
    </>
    )
}

export default CenterPricing
