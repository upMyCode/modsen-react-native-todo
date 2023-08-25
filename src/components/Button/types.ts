import { ReactElement, ReactNode } from 'react';

export interface ButtonProps {
  width?: number;
  height?: number;
  bgColor?: string;
  bRadius?: number;
  bColor?: string;
  children: ReactNode[] | ReactElement;
  onPress: () => void;
  boxShadow: boolean;
}

export interface PaintedButtonProps {
  width?: number;
  height?: number;
  bgColor?: string;
  bRadius?: number;
  bColor?: string;
  boxShadow: boolean;
}
