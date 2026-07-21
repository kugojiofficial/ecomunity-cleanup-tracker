/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FriendsOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FriendsOffIcon(props: FriendsOffIconProps) {
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
          "M5 5a2 2 0 002 2m2-2a2 2 0 00-2-2M5 22v-5l-1-1v-4a1 1 0 011-1h4a1 1 0 011 1v4l-1 1v5m6-17a2 2 0 104 0 2 2 0 00-4 0zm0 17v-4h-2l1.254-3.763m1.036-2.942A1.001 1.001 0 0116 11h2a1 1 0 011 1l1.503 4.508M19 19v3M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FriendsOffIcon;
/* prettier-ignore-end */
