/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BabyCarriageFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BabyCarriageFilledIcon(props: BabyCarriageFilledIconProps) {
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
          "M14.5 2a6.5 6.5 0 016.49 6.858c.02.153.007.309-.04.456a6.51 6.51 0 01-3.757 5.103l.532 1.595A3 3 0 1115 19l.005-.176a3 3 0 01.894-1.966l-.634-1.903A6.44 6.44 0 0114.5 15h-2.675c-.365 0-.723-.028-1.076-.083l-.648 1.941A3 3 0 115 19l.004-.176a3 3 0 013.27-2.812l.56-1.682a7 7 0 01-3.652-4.117L3.78 6H2a1 1 0 01-.993-.883L1 5a1 1 0 011-1h2.5a1 1 0 01.949.684L6.553 8H13V3a1 1 0 011-1h.5zM8 18a1 1 0 100 2 1 1 0 000-2zm10 0a1 1 0 100 2 1 1 0 000-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BabyCarriageFilledIcon;
/* prettier-ignore-end */
