import React, {useRef} from 'react';
import FlexWrapper from '../../../styledComponents/FlexWrapper';
import City from './City';
import { useSelector } from 'react-redux';
import GsapManager from '../../../utilities/Gsap';

const Widgets = () => {
    const isWidget = useSelector(({ appStatesReducer }) => appStatesReducer.isWidget);
    const isSidebar = useSelector(({ appStatesReducer }) => appStatesReducer.isSidebar);
    const display = () => {
        return isSidebar ? 'none' : 'flex'
    }
    const wrapper = useRef(null);
    GsapManager.animate(wrapper, { transformOrigin: "50% 100%" }, "ScaleYAnimation", isWidget)
    return (
        <div ref={wrapper}>
            <FlexWrapper display={display} style={{opacity:'0'}} widgets className='widgets' width='100%'>
                <City />
            </FlexWrapper>
        </div>
    )
}

export default Widgets;