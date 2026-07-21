/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CashOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CashOffIcon(props: CashOffIconProps) {
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
          "M13 9h6a2 2 0 012 2v6m-2 2H9a2 2 0 01-2-2v-6a2 2 0 012-2m3.582 3.59a2 2 0 002.83 2.826M17 9V7a2 2 0 00-2-2H9M5 5a2 2 0 00-2 2v6a2 2 0 002 2h2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CashOffIcon;
/* prettier-ignore-end */
