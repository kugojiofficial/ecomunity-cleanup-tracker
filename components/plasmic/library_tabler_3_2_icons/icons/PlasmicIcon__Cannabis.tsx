/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CannabisIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CannabisIcon(props: CannabisIconProps) {
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
          "M7 20s0-2 1-3.5c-1.5 0-2-.5-4-1.5 0 0 1.839-1.38 5-1-1.789-.97-3.279-2.03-5-6 0 0 3.98-.3 6.5 3.5C8.216 6.6 12 2 12 2c2.734 5.47 2.389 7.5 1.5 9.5C16.031 7.73 20 8 20 8c-1.721 3.97-3.211 5.03-5 6 3.161-.38 5 1 5 1-2 1-2.5 1.5-4 1.5 1 1.5 1 3.5 1 3.5-2 0-4.438-2.22-5-3-.563.78-3 3-5 3zm5 2v-5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CannabisIcon;
/* prettier-ignore-end */
