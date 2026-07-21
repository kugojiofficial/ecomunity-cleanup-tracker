/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandNuxtIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandNuxtIcon(props: BrandNuxtIconProps) {
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
          "M12.146 8.583l-1.3-2.09a1.046 1.046 0 00-1.786.017l-5.91 9.908A1.046 1.046 0 004.047 18H7.96m12.083 0c.743 0 1.201-.843.82-1.505l-4.044-7.013a.936.936 0 00-1.638 0l-4.043 7.013c-.382.662.076 1.505.819 1.505h8.086z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandNuxtIcon;
/* prettier-ignore-end */
