export interface CategoryButtonProps {
  countTasks?: number;
  icon: string;
  textContent?: string;
  bgColor: string;
  bRadius: number;
  boxShadow: boolean;
  bColor?: string;
  width: number;
  height: number;
  onPress: () => void;
  isThird?: boolean;
}

export interface WrapperProps {
  isThird: boolean | undefined;
  isBigDevice: boolean;
}
