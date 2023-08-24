import { ReactElement, ReactNode } from 'react';

export interface ButtonProps {
  width?: number;
  height?: number;
  bgColor?: string;
  bRadius?: number;
  bColor?: string;
  children: ReactNode[] | ReactElement;
  onPress: () => void;
}

export interface PaintedButtonProps {
  width?: number;
  height?: number;
  bgColor?: string;
  bRadius?: number;
  bColor?: string;
}
