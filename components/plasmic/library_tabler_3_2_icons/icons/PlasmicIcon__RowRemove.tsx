/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RowRemoveIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RowRemoveIcon(props: RowRemoveIconProps) {
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
          "M20 6v4a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h14a1 1 0 011 1zM10 16l4 4m-4 0l4-4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RowRemoveIcon;
/* prettier-ignore-end */
