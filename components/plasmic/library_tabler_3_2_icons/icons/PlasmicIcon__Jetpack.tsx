/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type JetpackIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function JetpackIcon(props: JetpackIconProps) {
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
          "M10 6a3 3 0 00-6 0v7h6V6zm4 7h6V6a3 3 0 00-6 0v7zm-9 3c0 2.333.667 4 2 5 1.333-1 2-2.667 2-5m6 0c0 2.333.667 4 2 5 1.333-1 2-2.667 2-5m-9-8h4m-4 3h4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default JetpackIcon;
/* prettier-ignore-end */
