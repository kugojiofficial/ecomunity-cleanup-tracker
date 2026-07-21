/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChessKnightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChessKnightIcon(props: ChessKnightIconProps) {
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
          "M8 16l-1.447.724a1 1 0 00-.553.894V20h12v-2.382a1 1 0 00-.553-.894L16 16H8zM9 3l1 3-3.491 2.148A1 1 0 007.033 10H10l-2.073 6h7.961L16 11c0-3-1.09-5.983-4-7-1.94-.678-2.94-1.011-3-1z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ChessKnightIcon;
/* prettier-ignore-end */
