import styled from "styled-components";

import {Link as LinkR } from "react-scroll";

export const Button = styled(LinkR)`
  border-radius: 0.2rem;
 
  background: ${({primary}) => (primary ? '#FFC433' : '#010606')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 24px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#000000' : '#fff')};
  outline: none;
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  border: none;
  width: 50%;
  cursor: pointer;
  display: ${({primary}) => (primary ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;


  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    }

  `;