/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandOauthIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandOauthIcon(props: BrandOauthIconProps) {
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
        d={"M2 12a10 10 0 1020 0 10 10 0 00-20 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12.556 6c.65 0 1.235.373 1.508.947l2.839 7.848a1.647 1.647 0 01-1.01 2.108 1.673 1.673 0 01-2.068-.851L13.365 15h-2.73l-.398.905A1.67 1.67 0 018.26 16.95l-.153-.047a1.647 1.647 0 01-1.056-1.956l2.824-7.852a1.664 1.664 0 011.409-1.087L12.556 6z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandOauthIcon;
/* prettier-ignore-end */
