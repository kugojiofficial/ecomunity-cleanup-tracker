/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MathFunctionOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MathFunctionOffIcon(props: MathFunctionOffIconProps) {
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
          "M14 10h1c.882 0 .986.777 1.694 2.692M13 17c.864 0 1.727-.663 2.495-1.512m1.717-2.302C18.205 11.736 19.602 10 21 10M3 19c0 1.5.5 2 2 2s2-4 3-9c.237-1.186.446-2.317.647-3.35m.727-3.248C9.797 3.91 10.284 3 11 3c1.5 0 2 .5 2 2m-8 7h6M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MathFunctionOffIcon;
/* prettier-ignore-end */
