import styled from '@emotion/styled';
import { FaSearch } from "react-icons/fa";

export const SearchbarContainer = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #1a9c00;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);   
`
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`

export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  align-items: center;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`

export const SearchFormLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`

export const SeacrhFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
   text-align: center; 
}
`

export const StyledFaSearch = styled(FaSearch)`
display: flex;
color: red;
font-size: 20px;
justify-content: center;
background-color: transparent;
border: 5px solid transparent;

  &:hover {
    color: #1a9c00;
  }
`