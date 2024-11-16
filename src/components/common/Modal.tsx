import { useState, ReactNode, ReactElement, cloneElement } from "react";
import { motion } from "framer-motion";
import Flex from "./Flex";
import Button from "./Button";

interface ModalProps {
  trigger: ReactElement;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const modalVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
  };

  return (
    <>
      {cloneElement(trigger, { onClick: openModal })}

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={closeModal}
          ></div>
          <motion.div
            className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative z-10"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
            layout // This enables auto height transitions
          >
            <Flex
              direction="column"
              align="center"
              justify="center"
              gap="gap-4"
            >
              <Button onClick={closeModal} className="absolute top-2 right-2">
                &times;
              </Button>
              {children}
            </Flex>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Modal;
