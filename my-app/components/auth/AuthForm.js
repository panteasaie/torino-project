import { useState } from "react";
import ModalContainer from "../partials/containers/ModalContainer";
import LoginModal from "./LoginModal";

function AuthForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ModalContainer isOpen={isOpen}>
        <LoginModal onClose={() => setIsOpen(false)} setIsOpen={setIsOpen} />
      </ModalContainer>
    </>
  );
}

export default AuthForm;
