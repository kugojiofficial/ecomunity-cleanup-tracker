/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AssemblyOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AssemblyOffIcon(props: AssemblyOffIconProps) {
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
          "M8.703 4.685L11.029 3.3a2.056 2.056 0 012 0l6 3.573H19a2 2 0 011 1.747v6.536c0 .248-.046.49-.132.715m-2.156 1.837l-4.741 3.029a2 2 0 01-1.942 0l-6-3.833A2 2 0 014 15.157V8.62a2 2 0 011.029-1.748l1.157-.689"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M11.593 7.591c.295-.133.637-.12.921.04l3 1.79H15.5c.312.181.503.516.5.877V12m-1.152 2.86l-2.363 1.514a1 1 0 01-.97 0l-3-1.922A1 1 0 018 13.576v-3.278c0-.364.197-.7.514-.877l.568-.339M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AssemblyOffIcon;
/* prettier-ignore-end */
