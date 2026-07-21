/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UsersGroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UsersGroupIcon(props: UsersGroupIconProps) {
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
          "M10 13a2 2 0 104 0 2 2 0 00-4 0zm-2 8v-1a2 2 0 012-2h4a2 2 0 012 2v1M15 5a2 2 0 104 0 2 2 0 00-4 0zm2 5h2a2 2 0 012 2v1M5 5a2 2 0 104 0 2 2 0 00-4 0zm-2 8v-1a2 2 0 012-2h2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default UsersGroupIcon;
/* prettier-ignore-end */
