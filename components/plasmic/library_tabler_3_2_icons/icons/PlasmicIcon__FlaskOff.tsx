/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlaskOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlaskOffIcon(props: FlaskOffIconProps) {
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
          "M9 3h6m-2 6h1m-4-6v3m-.268 3.736L6 20a.7.7 0 00.5 1h11a.7.7 0 00.5-1l-1.143-3.142m-2.288-6.294L14 9V3M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FlaskOffIcon;
/* prettier-ignore-end */
