/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NotebookIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NotebookIcon(props: NotebookIconProps) {
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
          "M9 4v18M6 4h11a2 2 0 012 2v12a2 2 0 01-2 2H6a1 1 0 01-1-1V5a1 1 0 011-1zm7 4h2m-2 4h2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default NotebookIcon;
/* prettier-ignore-end */
