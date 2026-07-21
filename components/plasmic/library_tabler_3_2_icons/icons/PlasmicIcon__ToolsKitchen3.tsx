/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ToolsKitchen3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ToolsKitchen3Icon(props: ToolsKitchen3IconProps) {
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
          "M7 4v17M4 4v3a3 3 0 006 0V4m4 4c0 1.06.316 2.078.879 2.828C15.44 11.578 16.204 12 17 12s1.559-.421 2.121-1.172C19.684 10.078 20 9.061 20 8c0-1.06-.316-2.078-.879-2.828C18.56 4.422 17.796 4 17 4s-1.559.421-2.121 1.172C14.316 5.922 14 6.939 14 8zm3 4v9"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ToolsKitchen3Icon;
/* prettier-ignore-end */
