/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandSamsungpassIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandSamsungpassIcon(props: BrandSamsungpassIconProps) {
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
          "M4 12a2 2 0 012-2h12a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7zm3-2V8.138C7 5.3 9.239 3 12 3s5 2.3 5 5.138V10"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10.485 17.577c.337.29.7.423 1.515.423h.413c.323 0 .633-.133.862-.368a1.27 1.27 0 00.356-.886c0-.332-.128-.65-.356-.886a1.202 1.202 0 00-.862-.368h-.826a1.202 1.202 0 01-.861-.367 1.27 1.27 0 01-.356-.886c0-.332.128-.651.356-.886a1.2 1.2 0 01.861-.368H12c.816 0 1.178.133 1.515.423"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandSamsungpassIcon;
/* prettier-ignore-end */
