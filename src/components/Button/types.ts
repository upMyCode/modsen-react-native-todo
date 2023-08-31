import { ReactElement, ReactNode } from 'react';

export interface ButtonProps {
  width?: number;
  height?: number;
  bgColor?: string;
  bRadius?: number;
  bColor?: string;
  children?: ReactNode[] | ReactElement | undefined;
  onPress: () => void;
  boxShadow?: boolean;
  mt?: number;
  ml?: number;
  disabled?: boolean | undefined;
}

export interface PaintedButtonProps {
  width?: number;
  height?: number;
  bgColor?: string;
  bRadius?: number;
  bColor?: string;
  boxShadow?: boolean;
  mt?: number;
  ml?: number;
}
