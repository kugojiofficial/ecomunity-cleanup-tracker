/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChessIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChessIcon(props: ChessIconProps) {
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
          "M12 3a3 3 0 013 3c0 1.113-.6 2.482-1.5 3l1.5 7H9l1.5-7C9.6 8.482 9 7.113 9 6a3 3 0 013-3zM8 9h8m-9.316 7.772a1 1 0 00-.684.949V19a1 1 0 001 1h10a1 1 0 001-1v-1.28a1 1 0 00-.684-.948L15 16H9l-2.316.772z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ChessIcon;
/* prettier-ignore-end */
