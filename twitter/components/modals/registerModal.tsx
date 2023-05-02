import React, { useCallback, useState } from "react";
import useRegisterModal from "@/Hooks/useRegisterModal";

import Input from "../input";
import Modal from "../modal";
import useLoginModal from "@/Hooks/useLoginModal";
// import LoginModal from "./loginModal";
const RegisterModal = () => {
    const LoginModal=useLoginModal()
  const RegisterModal = useRegisterModal();
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");
  const { name, setName } = useState("");
  const { username, setUserName } = useState("");

  const { loading, setLoading } = useState(false);
  const onToggle=useCallback(()=>{
    if(loading){
        return;
    }
    
    
    RegisterModal.onClose();
    LoginModal.onOpen();
  },[loading,RegisterModal,LoginModal])
  const onSubmit = useCallback(async () => {
    try {
      setLoading(true);
      RegisterModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [email, password, RegisterModal]);
  const bodyContent = (
    <div className="flex flex-col">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={loading}
      />
      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={loading}
      />
      <Input
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
        value={username}
        disabled={loading}
      />
      <Input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={loading}
      />
    </div>
  );
  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>Already have an account ?</p>
      <span onClick={onToggle} className="text-white cursor-pointer hover:underline">Sign in</span>
    </div>
  );
  return (
    <div>
      <Modal
        disabled={loading}
        isOpen={RegisterModal}
        title="Create an account "
        actionLabel="Register"
        onClose={RegisterModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
      />
    </div>
  );
};

export default RegisterModal;
