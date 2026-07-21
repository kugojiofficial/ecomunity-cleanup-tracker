/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BedFlatFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BedFlatFilledIcon(props: BedFlatFilledIconProps) {
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
          "M5 8a3 3 0 11-3 3l.005-.176A3 3 0 015 8zm13-1a4 4 0 014 4v2a1 1 0 01-1 1H10a1 1 0 01-1-1V8a1 1 0 011-1h8zm3 8a1 1 0 010 2H3a1 1 0 010-2h18z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BedFlatFilledIcon;
/* prettier-ignore-end */
