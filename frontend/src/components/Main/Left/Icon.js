import React from 'react';
import Logo from '../../../styledComponents/Logo';
import Button from '../../../styledComponents/Button';
const Icon = ({icon, showLoupe, elementName,  showSideBar, showWidgets}) => {

    return (
        <div>
            <Button type='submit' loupe className={elementName} onClick={showLoupe || showSideBar || showWidgets}><Logo  src={process.env.PUBLIC_URL + `${icon}`} width='35px'/></Button>
        </div>
    )
}

export default Icon;