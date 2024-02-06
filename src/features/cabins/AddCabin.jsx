import { useState } from "react";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

export default function AddCabin() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setShowModal((state) => !state)}>Add Cabin</Button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateCabinForm onClose={() => setShowModal(false)} />
        </Modal>
      )}
    </div>
  );
}
