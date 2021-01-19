import React from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import Button from "../../styledComponents/Button";
import { SET_GUEST_STATE } from '../../actions/index';

const LoginSignButton = ({ label, type, guest, buttonType, width }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    if(type==='primary'){
        type = {
            bgColor: 'main',
            color: 'white'
        }
    }else{
        type = {
            bgColor: 'white',
            color: 'black'
        }
    }
  return (
    <Button
      type={buttonType}
      padding="10px 40px"
      width={width}
      bgColor={({theme}) => theme.colors[type.bgColor]} 
      color={({ theme }) => theme.colors[type.color]}
      onClick={guest}
      
    >
      {label}
    </Button>
  );
};

export default LoginSignButton;
