/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandNemIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandNemIcon(props: BrandNemIconProps) {
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
          "M12.182 2c1.94.022 3.879.382 5.818 1.08l.364.135A23.073 23.073 0 0122 5c0 5.618-1.957 10.258-5.87 13.92-1.24 1.239-2.5 2.204-3.78 2.898L12 22c-1.4-.703-2.777-1.729-4.13-3.079C3.958 15.258 2 10.618 2 5c2.545-1.527 5.09-2.471 7.636-2.832L10 2.12A16.73 16.73 0 0111.818 2h.364z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M2.1 7.07C4.173 13.79 7.473 14.767 12 10c0-4 1.357-6.353 4.07-7.06l.59-.11m-.31 15.68S19 13 12 10"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandNemIcon;
/* prettier-ignore-end */
