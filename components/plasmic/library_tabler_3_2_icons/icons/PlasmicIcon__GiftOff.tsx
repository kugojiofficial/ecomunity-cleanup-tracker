/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GiftOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GiftOffIcon(props: GiftOffIconProps) {
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
          "M12 8h8a1 1 0 011 1v2a1 1 0 01-1 1h-4m-4 0H4a1 1 0 01-1-1V9a1 1 0 011-1h4m4 4v9"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M19 12v3m0 4a2 2 0 01-2 2H7a2 2 0 01-2-2v-7m2.5-4a2.5 2.5 0 01-2.457-2.963m2.023-2C7.206 3.014 7.352 3 7.5 3c1.974-.034 3.76 1.95 4.5 5 .74-3.05 2.526-5.034 4.5-5a2.5 2.5 0 010 5M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GiftOffIcon;
/* prettier-ignore-end */
