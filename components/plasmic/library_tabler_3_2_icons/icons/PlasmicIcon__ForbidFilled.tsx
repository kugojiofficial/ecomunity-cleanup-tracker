/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ForbidFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ForbidFilledIcon(props: ForbidFilledIconProps) {
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
          "M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zM9.613 8.21a1 1 0 00-1.32 1.497l6 6 .094.083a1 1 0 001.32-1.497l-6-6-.094-.083z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ForbidFilledIcon;
/* prettier-ignore-end */
