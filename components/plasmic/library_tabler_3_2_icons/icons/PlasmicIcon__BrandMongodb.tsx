/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandMongodbIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandMongodbIcon(props: BrandMongodbIconProps) {
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
          "M12 3v19m6-10.773c0 3.273-1.812 4.77-6 9.273-4.188-4.503-6-6-6-9.273C6 6.773 9.071 4.3 12 2c2.929 2.3 6 4.773 6 9.227z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandMongodbIcon;
/* prettier-ignore-end */
