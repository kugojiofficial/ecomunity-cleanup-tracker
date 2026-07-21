/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ToolsKitchen2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ToolsKitchen2Icon(props: ToolsKitchen2IconProps) {
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
          "M19 15V3c-4.816 4.594-5.023 8.319-5 12h5zm0 0v6h-1v-3M8 4v17M5 4v3a3 3 0 106 0V4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ToolsKitchen2Icon;
/* prettier-ignore-end */
