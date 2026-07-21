/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandBunpoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandBunpoIcon(props: BrandBunpoIconProps) {
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
          "M3.9 7.205a17.764 17.764 0 004.008 2.753 7.917 7.917 0 004.57.567c1.5-.33 2.907-1 4.121-1.956a12.109 12.109 0 002.892-2.903c.603-.94.745-1.766.484-2.231-.261-.465-.927-.568-1.72-.257a7.564 7.564 0 00-2.608 2.034 18.424 18.424 0 00-2.588 3.884 34.927 34.927 0 00-2.093 5.073 12.908 12.908 0 00-.677 3.515c-.07.752.07 1.51.405 2.184.323.562 1.06 1.132 2.343 1.132 3.474 0 5.093-3.53 5.463-5.62.24-1.365-.085-3.197-1.182-4.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandBunpoIcon;
/* prettier-ignore-end */
