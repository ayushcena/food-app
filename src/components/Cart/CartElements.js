import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 400px;
  height: 100%;
  display: grid;
  top: 0;
  overflow: scroll;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
export const CloseIcon = styled(FaTimes)`
  color: #000;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: -15px;
  margin-left: 320px;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.7rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  // cursor: pointer;
  outline: none;
  margin-top: -10px;
`;


