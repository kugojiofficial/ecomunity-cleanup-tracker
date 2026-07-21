/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TagsOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TagsOffIcon(props: TagsOffIconProps) {
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
          "M16.296 12.296l-5.71-5.71M6 6H5a2 2 0 00-2 2v4.172a2 2 0 00.586 1.414l5.71 5.71a2.41 2.41 0 003.408 0l3.278-3.278M18 19l.496-.496m1.888-2.137a4.822 4.822 0 00-.792-5.775L15 6m-8 4h-.01M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TagsOffIcon;
/* prettier-ignore-end */
