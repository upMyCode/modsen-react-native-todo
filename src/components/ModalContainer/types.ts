import { ReactElement, ReactNode } from 'react';

export interface Errors {
  modalTitle?: string;
  modalTextContent?: string;
  modalAddSubTaskTitle?: string;
}
export interface ModalProps {
  children?: ReactElement | ReactNode[];
  title?: string;
  textContent?: string;
  modalVisible: boolean;
  important?: boolean | undefined;
  modalFirstHandler: () => void;
  modalSecondHandler: (() => void) | (() => Promise<void>);
  isEditableModal?: boolean;
  modalFirstHandlerText: string;
  modalSecondHandlerText: string;
  titleMaxSymbol?: number;
  textContextMaxSymbol?: number;
  modalTitle?: string;
  handleChangeTitle?: (text: string) => void;
  modalTextContent?: string;
  handleChangeTextContent?: (text: string) => void;
  importantTaskStatus?: boolean;
  handleImportantTaskStatus?: undefined | (() => void);
  isOpenAddSubtaskMenu?: boolean | undefined;
  subTaskTitle?: string | undefined;
  errors?: Errors | undefined;
  isNullChildren?: boolean | undefined;
}

export interface ContentHeaderProps {
  isEditableModal: boolean | undefined;
}
export interface ContentFooterProps {
  isNullChildren?: boolean | undefined;
}
