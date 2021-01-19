import React from 'react';
import FlexWrapper from '../../../styledComponents/FlexWrapper';
import Icon from './Icon';
import SearchForm from '../Search/SearchForm';
import {SET_SIDEBAR_STATE, SET_WIDGET_STATE} from '../../../actions/index';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const BarSearchWidget = () => {
    const isWidget = useSelector(({ appStatesReducer }) => appStatesReducer.isWidget);
    const isSidebar = useSelector(({ appStatesReducer }) => appStatesReducer.isSidebar);

    const display = () => {
        return isSidebar ? 'none' : 'flex'
    }
    const dispatch = useDispatch();
    const showSideBar = () => {
        dispatch(SET_SIDEBAR_STATE(true))
    }
    const showWidgets = () => {
        dispatch(SET_WIDGET_STATE(isWidget ? false : true))
    }

    const isGuest = useSelector(({ appStatesReducer }) => appStatesReducer.isGuest);
    return (
            <FlexWrapper display={display} widget direction='column' justify='space-around' padding='30px 0px 0px 0px' height='30vh' className='barseachwidget'>
                {isGuest ? (
                    <p></p>
                ) : <Icon showSideBar={showSideBar} elementName='hamburger' icon='/hamburger.png' />}
                <SearchForm/>
                {isGuest ? (<p></p>) : <Icon showWidgets={showWidgets} icon='/menu.png'/>}
            </FlexWrapper>
            
    )
}

export default BarSearchWidget;