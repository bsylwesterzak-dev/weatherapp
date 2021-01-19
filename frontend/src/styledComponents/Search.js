import styled from 'styled-components';

const Search = styled.input`
    border: none;
    background: none;
    outline: none;
    border: 2px solid white;
    border-radius: 30px;
    color: #ffffff;
    padding: 15px 50px;
    font-size:20px;
    text-align: center;
    position: absolute;
    top:44%;
    visibility:hidden;
    ::placeholder{
        color:white;
    }
`;

export default Search;