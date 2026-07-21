/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareLetterVFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareLetterVFilledIcon(props: SquareLetterVFilledIconProps) {
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-4.757 5.03a1 1 0 00-1.213.727L12 11.875l-1.03-4.118a.998.998 0 00-1.569-.566 1 1 0 00-.371 1.052l2 8c.252 1.01 1.688 1.01 1.94 0l2-8a1 1 0 00-.727-1.213z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareLetterVFilledIcon;
/* prettier-ignore-end */
