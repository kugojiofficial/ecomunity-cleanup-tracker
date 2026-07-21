/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NotebookOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NotebookOffIcon(props: NotebookOffIconProps) {
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
          "M8 4h9a2 2 0 012 2v9m-.179 3.828A2 2 0 0117 20H6a1 1 0 01-1-1V5m4-1v1m0 4v13m4-14h2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default NotebookOffIcon;
/* prettier-ignore-end */
