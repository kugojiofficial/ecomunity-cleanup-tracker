/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LocationFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LocationFilledIcon(props: LocationFilledIconProps) {
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
          "M20.891 2.006L20.997 2l.13.008.09.016.123.035.107.046.1.057.09.067.082.075.052.059.082.116.052.096c.047.1.077.206.09.316l.005.106c0 .075-.008.149-.024.22l-.035.123-6.532 18.077A1.55 1.55 0 0114 22.32a1.547 1.547 0 01-1.329-.747l-.065-.127-3.352-6.702-6.67-3.336a1.55 1.55 0 01-.898-1.259L1.68 10c0-.56.301-1.072.841-1.37l.14-.07 18.017-6.506.106-.03.107-.018z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LocationFilledIcon;
/* prettier-ignore-end */
