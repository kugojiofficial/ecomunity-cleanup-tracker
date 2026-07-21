/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandZalandoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandZalandoIcon(props: BrandZalandoIconProps) {
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
          "M7.531 21c-.65 0-1-.15-1.196-.27-.266-.157-.753-.563-1.197-1.747A20.583 20.583 0 014.001 12c.015-2.745.436-5.07 1.137-6.975.444-1.2.93-1.605 1.197-1.763C6.527 3.159 6.88 3 7.53 3c.244 0 .532.022.871.075a19.093 19.093 0 016.425 2.475h.007a19.572 19.572 0 015.287 4.508c.783.99.879 1.627.879 1.942 0 .315-.096.953-.879 1.943a19.572 19.572 0 01-5.287 4.5h-.007a19.041 19.041 0 01-6.425 2.474c-.287.053-.578.08-.87.083z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandZalandoIcon;
/* prettier-ignore-end */
