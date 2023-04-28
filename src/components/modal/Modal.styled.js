import styled from 'styled-components';

const ModalOverlay = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.77);
  z-index: 2000;
`;

const ModalCont = styled.div`
  width: fit-content;
  height: fit-content;
  max-width: 80%;
  max-height: 80%;
`;

const ModalImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export { ModalCont, ModalImage, ModalOverlay };
