import {
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from "react";
import Cn from "../../utils/Cn";
import { createPortal } from "react-dom";

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};
type TModalContext = {
  onClose: () => void;
};
type TCloseButton = {
  children?: ReactNode;
};
type THeader = TCloseButton;
const ModalContext = createContext<TModalContext | null>(null);
const Modal = ({ isOpen, onClose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleOutsideClose = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) onClose();
  };
  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={Cn(
          "fixed inset-0 flex justify-center items-center bg-gray-500/70 invisible z-[999]",
          {
            visible: isOpen,
          }
        )}
        onClick={handleOutsideClose}
      >
        <div
          ref={containerRef}
          className="bg-white w-full max-w-sm p-2 rounded-sm"
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element // There are two elements in the index.html. One is root other is portal
  );
};

const CloseButton = ({ children }: TCloseButton) => {
  const { onClose } = useContext(ModalContext) as TModalContext;
  return (
    <button onClick={onClose}>
      {children ? (
        children
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 bg-red-300 rounded-full p-[1px] text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};

const Header = ({ children }: THeader) => {
  return (
    <div className="flex justify-between items-center w-full mb-3">
      {children}
    </div>
  );
};

Modal.Header = Header;
Modal.CloseButton = CloseButton;

export default Modal;
