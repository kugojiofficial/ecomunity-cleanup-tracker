/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChessBishopIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChessBishopIcon(props: ChessBishopIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 16l-1.447.724a1 1 0 00-.553.894V20h12v-2.382a1 1 0 00-.553-.894L16 16H8zm3-12a1 1 0 102 0 1 1 0 00-2 0zM9.5 16C7.833 16 7 14.331 7 13c0-3.667 1.667-6 5-7 3.333 1 5 3.427 5 7 0 1.284-.775 2.881-2.325 3H9.5zM15 8l-3 3m0-6v1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ChessBishopIcon;
/* prettier-ignore-end */
