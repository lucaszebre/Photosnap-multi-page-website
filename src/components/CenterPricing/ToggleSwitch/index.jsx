import React from 'react'

import {CheckBox,CheckBoxLabel,CheckBoxWrapper} from './ToggleSwitchStyles.jsx'
const Toggle = (props) => {
    return (
    <>
        
        <CheckBoxWrapper>
        <CheckBox onChange={props.onChange} id="checkbox" type="checkbox" />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>

    </>
    )
}

export default Toggle
