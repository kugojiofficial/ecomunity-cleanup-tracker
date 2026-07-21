/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PointerExclamationIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PointerExclamationIcon(props: PointerExclamationIconProps) {
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
          "M15.97 13.414l-1.192-1.192 3.113-2.09a1.2 1.2 0 00-.309-2.228L4 4l3.904 13.563a1.2 1.2 0 002.228.308l2.09-3.093L15 17.556M19 16v3m0 3v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PointerExclamationIcon;
/* prettier-ignore-end */
