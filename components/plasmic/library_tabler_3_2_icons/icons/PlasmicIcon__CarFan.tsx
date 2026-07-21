/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CarFanIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CarFanIcon(props: CarFanIconProps) {
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
          "M12 12V3l4.912 1.914a1.7 1.7 0 01.428 2.925L12 12zm0 0h9l-1.914 4.912a1.7 1.7 0 01-2.925.428L12 12zm0 0H3l1.914-4.912a1.7 1.7 0 012.925-.428L12 12zm0 0v9l-4.912-1.914a1.7 1.7 0 01-.428-2.925L12 12z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CarFanIcon;
/* prettier-ignore-end */
