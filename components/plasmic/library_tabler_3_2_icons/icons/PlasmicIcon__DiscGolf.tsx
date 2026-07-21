/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DiscGolfIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DiscGolfIcon(props: DiscGolfIconProps) {
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
          "M5 5h14M6 5c.32 6.744 2.74 9.246 6 10m6-10c-.32 6.744-2.74 9.246-6 10M10 5c0 4.915.552 7.082 2 10m2-10c0 4.915-.552 7.082-2 10m0 0v6m0-18v2M7 16c.64.64 1.509 1 2.414 1h5.172c.905 0 1.774-.36 2.414-1m-6 5h2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DiscGolfIcon;
/* prettier-ignore-end */
