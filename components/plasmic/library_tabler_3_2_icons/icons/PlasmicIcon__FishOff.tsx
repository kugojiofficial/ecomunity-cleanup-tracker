/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FishOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FishOffIcon(props: FishOffIconProps) {
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
          "M16.69 7.44a6.973 6.973 0 00-1.63 3.635M2 9.504c5.307 5.948 10.293 8.57 14.597 7.1m2.583-1.449c.988-.788 1.93-1.836 2.82-3.153-3-4.443-6.596-5.812-10.564-4.548M8.672 8.72C6.527 9.986 4.294 11.935 2 14.506M18 11v.01m-6.847.159c-.287.777-.171 1.554.347 2.331M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FishOffIcon;
/* prettier-ignore-end */
