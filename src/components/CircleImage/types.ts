export interface PositionParams {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

export interface CircleImageProps {
  width: number;
  image: string;
  height: number;
  positionParams: PositionParams;
}
