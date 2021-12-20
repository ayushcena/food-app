import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 400px;
  height: 100%;
  background: #ffc500;
  display: grid;
  align-items: center;
  top: 0;
  overflow: scroll;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const CloseIcon = styled(FaTimes)`
  cursor: pointer;
  color: #000;
`;

export const Icon = styled.div`
  position: absolute;
  top: 0.7rem;
  right: -3rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  // cursor: pointer;
  outline: none;
`;


