/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FriendsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FriendsIcon(props: FriendsIconProps) {
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
          "M5 5a2 2 0 104 0 2 2 0 00-4 0zm0 17v-5l-1-1v-4a1 1 0 011-1h4a1 1 0 011 1v4l-1 1v5m6-17a2 2 0 104 0 2 2 0 00-4 0zm0 17v-4h-2l2-6a1 1 0 011-1h2a1 1 0 011 1l2 6h-2v4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FriendsIcon;
/* prettier-ignore-end */
