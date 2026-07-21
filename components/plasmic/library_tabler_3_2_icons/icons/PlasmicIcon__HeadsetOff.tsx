/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HeadsetOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HeadsetOffIcon(props: HeadsetOffIconProps) {
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
          "M4 14v-3c0-1.953.7-3.742 1.862-5.13m2.182-1.825A8 8 0 0120 11v3m-2 5c0 1.657-2.686 3-6 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M4 14a2 2 0 012-2h1a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3zm12.169-1.82c.253-.115.534-.18.831-.18h1a2 2 0 012 2v2m-1.183 2.826c-.25.112-.526.174-.817.174h-1a2 2 0 01-2-2v-2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HeadsetOffIcon;
/* prettier-ignore-end */
