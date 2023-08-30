import { ReactElement, ReactNode } from 'react';

export interface ModalProps {
  children?: ReactElement | ReactNode[];
  title: string;
  textContent: string;
  modalVisible: boolean;
  important?: boolean | undefined;
  modalFirstHandler: () => void;
  modalSecondHandler: () => void;
}
