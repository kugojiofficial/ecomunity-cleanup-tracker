/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChecklistIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChecklistIcon(props: ChecklistIconProps) {
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
          "M9.615 20H7a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v8m-3 5l2 2 4-4M9 8h4m-4 4h2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ChecklistIcon;
/* prettier-ignore-end */
