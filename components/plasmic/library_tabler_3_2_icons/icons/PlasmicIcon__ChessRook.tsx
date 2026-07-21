/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChessRookIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChessRookIcon(props: ChessRookIconProps) {
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
          "M8 16l-1.447.724a1 1 0 00-.553.894V20h12v-2.382a1 1 0 00-.553-.894L16 16H8zm0 0l1-9h6l1 9M6 4l.5 3h11l.5-3m-8 0v3m4-3v3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ChessRookIcon;
/* prettier-ignore-end */
