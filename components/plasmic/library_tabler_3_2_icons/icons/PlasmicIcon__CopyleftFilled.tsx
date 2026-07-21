/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CopyleftFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CopyleftFilledIcon(props: CopyleftFilledIconProps) {
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
          "M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zm-2.117 5.889a4.016 4.016 0 00-5.543-.23 1 1 0 001.32 1.502 2.016 2.016 0 012.783.116 1.993 1.993 0 010 2.766 2.016 2.016 0 01-2.783.116A1 1 0 009.34 15a4.016 4.016 0 005.543-.23 3.993 3.993 0 000-5.542v.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CopyleftFilledIcon;
/* prettier-ignore-end */
