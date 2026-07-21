/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TestPipeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TestPipeIcon(props: TestPipeIconProps) {
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
          "M20 8.04L7.878 20.164a2.857 2.857 0 01-4.041-4.04L15.959 4M7 13h8m4 2l1.5 1.6a2 2 0 11-3 0L19 15zM15 3l6 6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TestPipeIcon;
/* prettier-ignore-end */
