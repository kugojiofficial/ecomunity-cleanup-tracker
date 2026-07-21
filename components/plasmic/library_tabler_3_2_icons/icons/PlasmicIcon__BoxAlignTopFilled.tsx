/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoxAlignTopFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoxAlignTopFilledIcon(props: BoxAlignTopFilledIconProps) {
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
          "M19 3.005H5a2 2 0 00-2 2v5a1 1 0 001 1h16a1 1 0 001-1v-5a2 2 0 00-2-2zM4 13.995a1 1 0 01.993.883l.007.127a1 1 0 01-1.993.117L3 14.995a1 1 0 011-1zm0 5a1 1 0 01.993.883l.007.127a1 1 0 01-1.993.117L3 19.995a1 1 0 011-1zm5 0a1 1 0 01.993.883l.007.127a1 1 0 01-1.993.117L8 19.995a1 1 0 011-1zm6 0a1 1 0 01.993.883l.007.127a1 1 0 01-1.993.117L14 19.995a1 1 0 011-1zm5 0a1 1 0 01.993.883l.007.127a1 1 0 01-1.993.117L19 19.995a1 1 0 011-1zm0-5a1 1 0 01.993.883l.007.127a1 1 0 01-1.993.117L19 14.995a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BoxAlignTopFilledIcon;
/* prettier-ignore-end */
