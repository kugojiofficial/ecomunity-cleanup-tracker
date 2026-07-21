/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AssemblyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AssemblyIcon(props: AssemblyIconProps) {
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
          "M19.875 6.27A2.225 2.225 0 0121 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 01-2.184 0l-6.75-4.27A2.225 2.225 0 013 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 012.25 0l6.75 3.98h-.033z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M15.5 9.422c.312.18.503.515.5.876v3.277c0 .364-.197.7-.515.877l-3 1.922a1 1 0 01-.97 0l-3-1.922A1 1 0 018 13.576v-3.278c0-.364.197-.7.514-.877l3-1.79c.311-.174.69-.174 1 0l3 1.79H15.5v.001z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AssemblyIcon;
/* prettier-ignore-end */
