/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DnaIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DnaIcon(props: DnaIconProps) {
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
          "M14.828 14.828A4 4 0 109.27 9.073a4 4 0 005.558 5.755zm-5.656 5.657a4 4 0 10-5.657-5.657M14.828 3.515a4 4 0 105.657 5.657"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DnaIcon;
/* prettier-ignore-end */
