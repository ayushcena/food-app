import styled from 'styled-components';

export const AddonsContainer = styled.div`
    position: fixed;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 13%;
    /* left: 33vw; */
    left: 2.5%;
    // transform: translate(-50%);
    width: 400px;
    height: 550px;
    overflow: scroll;
    background-color: #ffc500;
    color: #e31837;
    transition: 0.3s ease-in-out;
  top: ${({ isOpen }) => (isOpen ? '100px' : '0px')};

    @media screen and (max-width: 500px) {
        width: 95%;
        top: auto;
        bottom: 0;
        height: 55vh;
        border-radius: 25px 25px 0px 0px;
        box-shadow: 0px 0px 8px #ffc500;
    }
`;