/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoxAlignBottomLeftFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoxAlignBottomLeftFilledIcon(
  props: BoxAlignBottomLeftFilledIconProps
) {
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
          "M10 12H5a2 2 0 00-2 2v5a2 2 0 002 2h5a2 2 0 002-2v-5a2 2 0 00-2-2zM4 8a1 1 0 01.993.883L5 9.01a1 1 0 01-1.993.117L3 9a1 1 0 011-1zm0-5a1 1 0 01.993.883L5 4.01a1 1 0 01-1.993.117L3 4a1 1 0 011-1zm5 0a1 1 0 01.993.883L10 4.01a1 1 0 01-1.993.117L8 4a1 1 0 011-1zm6 0a1 1 0 01.993.883L16 4.01a1 1 0 01-1.993.117L14 4a1 1 0 011-1zm0 16a1 1 0 01.993.883l.007.127a1 1 0 01-1.993.117L14 20a1 1 0 011-1zm5-16a1 1 0 01.993.883L21 4.01a1 1 0 01-1.993.117L19 4a1 1 0 011-1zm0 5a1 1 0 01.993.883L21 9.01a1 1 0 01-1.993.117L19 9a1 1 0 011-1zm0 6a1 1 0 01.993.883l.007.127a1 1 0 01-1.993.117L19 15a1 1 0 011-1zm0 5a1 1 0 01.993.883l.007.127a1 1 0 01-1.993.117L19 20a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BoxAlignBottomLeftFilledIcon;
/* prettier-ignore-end */
