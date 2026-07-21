/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FishBoneIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FishBoneIcon(props: FishBoneIconProps) {
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
          "M16.69 7.44A6.973 6.973 0 0015 12a6.97 6.97 0 001.699 4.571c1.914-.684 3.691-2.183 5.301-4.565-1.613-2.384-3.394-3.883-5.312-4.565M2 9.504c.771.869 1.58 1.704 2.422 2.504A39.687 39.687 0 002 14.506M18 11v.01M4.422 12H15m-8-2v4m4-6v8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FishBoneIcon;
/* prettier-ignore-end */
