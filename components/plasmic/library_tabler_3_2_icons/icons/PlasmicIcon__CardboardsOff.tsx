/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CardboardsOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CardboardsOffIcon(props: CardboardsOffIconProps) {
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
          "M20.96 16.953c.026-.147.04-.298.04-.453V8a2 2 0 00-2-2h-9M6 6H5a2 2 0 00-2 2v8.5A2.5 2.5 0 005.5 19h1.06a3 3 0 002.34-1.13l1.54-1.92a2 2 0 013.12 0l1.54 1.92A3 3 0 0017.44 19h1.06c.155 0 .307-.014.454-.041"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7 12a1 1 0 102 0 1 1 0 00-2 0zm9.714.7a1 1 0 00-1.417-1.411l1.417 1.411zM3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CardboardsOffIcon;
/* prettier-ignore-end */
