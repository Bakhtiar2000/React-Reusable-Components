import { ReactNode } from "react";

export type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};
export type TModalContext = {
  onClose: () => void;
};
export type TCloseButton = {
  children?: ReactNode;
};
export type THeader = TCloseButton;
