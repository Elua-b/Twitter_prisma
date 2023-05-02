import React, { useCallback, useState } from "react";
import useLoginModal from "@/Hooks/useLoginModal";
import { log } from "console";
import Input from "../input";
import Modal from "../modal";
const LoginModal = () => {
  const LoginModal = useLoginModal();
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");
  const { loading, setLoading } = useState(false);
  const onSubmit = useCallback(async () => {
    try {
      setLoading(true);
      LoginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [email, password, LoginModal]);
  const bodyContent = (
    <div className="flex flex-col">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
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
  return (
    <div>
      <Modal
        disabled={loading}
        isOpen={LoginModal}
        title="Login"
        actionLabel="Sign in"
        onClose={LoginModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
      />
    </div>
  );
};

export default LoginModal;
