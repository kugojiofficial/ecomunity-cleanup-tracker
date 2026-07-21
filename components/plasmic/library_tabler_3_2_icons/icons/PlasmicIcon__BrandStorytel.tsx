/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandStorytelIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandStorytelIcon(props: BrandStorytelIconProps) {
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
          "M4.103 22c2.292-2.933 16.825-2.43 16.825-11.538C20.928 4.164 15.954 2 12.477 2 9 2 3 5.036 3 13.241 3 19.615 4.103 22 4.103 22z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandStorytelIcon;
/* prettier-ignore-end */
