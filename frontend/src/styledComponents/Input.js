import styled from 'styled-components';

const Input = styled.input`
    padding: 25px 0px;
    width: 300px;
    padding-left: 37px;
    border-radius: 100px;
    margin: 15px 0px;
    border: none;
    border: 2px solid ${({ theme }) => theme.colors.grey};
    font-size: 16px;

    ::placeholder {
        margin-right: 50px;
    }

    &:focus {
        outline: none;
        border: 2px solid ${({ theme }) => theme.colors.main};
    }
    &:focus ~ span {
        opacity: 1;
        top: 0;
        left: 35px;
        font-size: 12px;
        transition: all 0.3s ease-out;
        color: ${({ theme }) => theme.colors.main};
    }
`;

export default Input;