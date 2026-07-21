/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Forbid2FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Forbid2FilledIcon(props: Forbid2FilledIconProps) {
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
          "M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zm-1.293 4.953a1 1 0 00-1.414 0l-6 6-.083.094a1 1 0 001.497 1.32l6-6 .083-.094a1 1 0 00-.083-1.32z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Forbid2FilledIcon;
/* prettier-ignore-end */
