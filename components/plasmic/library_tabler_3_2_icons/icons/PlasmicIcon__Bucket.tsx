/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BucketIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BucketIcon(props: BucketIconProps) {
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
          "M4 7c0 1.06.843 2.078 2.343 2.828S9.878 11 12 11s4.157-.421 5.657-1.172C19.157 9.078 20 8.061 20 7c0-1.06-.843-2.078-2.343-2.828S14.122 3 12 3s-4.157.421-5.657 1.172C4.843 4.922 4 5.939 4 7z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M4 7c0 .664.088 1.324.263 1.965L7 19c.5 1.5 2.239 2 5 2s4.5-.5 5-2c.333-1 1.246-4.345 2.737-10.035A7.45 7.45 0 0020 7"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BucketIcon;
/* prettier-ignore-end */
