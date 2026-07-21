/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BoneOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BoneOffIcon(props: BoneOffIconProps) {
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
          "M12.5 8.502l.38-.38A3 3 0 1118 6a3 3 0 11-2.12 5.122l-.372.372M13.5 13.502l-2.378 2.378a3 3 0 11-5.117 2.297V18h-.176a3 3 0 112.298-5.115l2.378-2.378M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BoneOffIcon;
/* prettier-ignore-end */
