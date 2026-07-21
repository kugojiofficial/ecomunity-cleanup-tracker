/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UserScreenIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UserScreenIcon(props: UserScreenIconProps) {
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
          "M19.03 17.818A3 3 0 0021 15V7a3 3 0 00-3-3H6a3 3 0 00-3 3v8c0 1.317.85 2.436 2.03 2.84"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M10 14a2 2 0 104 0 2 2 0 00-4 0zm-2 7a2 2 0 012-2h4a2 2 0 012 2"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default UserScreenIcon;
/* prettier-ignore-end */
