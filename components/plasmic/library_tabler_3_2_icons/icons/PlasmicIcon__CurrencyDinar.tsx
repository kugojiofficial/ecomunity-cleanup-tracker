/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CurrencyDinarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CurrencyDinarIcon(props: CurrencyDinarIconProps) {
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
          "M14 20.01V20m-8-7l2.386-.9a1 1 0 00-.095-1.902l-1.514-.404a1 1 0 01-.102-1.9L9 7"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M3 14v1a3 3 0 003 3h4.161a3 3 0 002.983-3.32L12 4m4 13l1 1h2a2 2 0 001.649-3.131L17.996 11"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CurrencyDinarIcon;
/* prettier-ignore-end */
