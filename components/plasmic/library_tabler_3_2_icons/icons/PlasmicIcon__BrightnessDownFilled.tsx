/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrightnessDownFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrightnessDownFilledIcon(props: BrightnessDownFilledIconProps) {
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
          "M12 8a4 4 0 11-3.995 4.2L8 12l.005-.2A4 4 0 0112 8zm0-4a1 1 0 01.993.883L13 5.01a1 1 0 01-1.993.117L11 5a1 1 0 011-1zm5 2a1 1 0 01.993.883L18 7.01a1 1 0 01-1.993.117L16 7a1 1 0 011-1zm2 5a1 1 0 01.993.883l.007.127a1 1 0 01-1.993.117L18 12a1 1 0 011-1zm-2 5a1 1 0 01.993.883l.007.127a1 1 0 01-1.993.117L16 17a1 1 0 011-1zm-5 2a1 1 0 01.993.883l.007.127a1 1 0 01-1.993.117L11 19a1 1 0 011-1zm-5-2a1 1 0 01.993.883L8 17.01a1 1 0 01-1.993.117L6 17a1 1 0 011-1zm-2-5a1 1 0 01.993.883L6 12.01a1 1 0 01-1.993.117L4 12a1 1 0 011-1zm2-5a1 1 0 01.993.883L8 7.01a1 1 0 01-1.993.117L6 7a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BrightnessDownFilledIcon;
/* prettier-ignore-end */
