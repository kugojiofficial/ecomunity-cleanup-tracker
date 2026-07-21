/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandTiktokFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandTiktokFilledIcon(props: BrandTiktokFilledIconProps) {
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
          "M16.083 2H12a1 1 0 00-1 1v11.5a1.5 1.5 0 11-2.519-1.1l.12-.1A1 1 0 009 12.5V8.174A1 1 0 007.77 7.2 7.5 7.5 0 009.5 22l.243-.005A7.5 7.5 0 0017 14.5v-2.7l.311.153c1.122.53 2.333.868 3.59.993A1 1 0 0022 11.95V7.917a1 1 0 00-.834-.986 5.005 5.005 0 01-4.097-4.096A1 1 0 0016.083 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BrandTiktokFilledIcon;
/* prettier-ignore-end */
