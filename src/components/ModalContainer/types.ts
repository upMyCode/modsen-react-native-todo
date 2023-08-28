import { ReactElement, ReactNode } from 'react';

export interface ModalProps {
  children?: ReactElement | ReactNode[];
  title: string;
  textContent: string;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
