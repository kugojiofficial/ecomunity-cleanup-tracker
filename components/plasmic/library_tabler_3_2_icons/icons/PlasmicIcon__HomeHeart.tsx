/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HomeHeartIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HomeHeartIcon(props: HomeHeartIconProps) {
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
        d={"M21 12l-9-9-9 9h2v7a2 2 0 002 2h6"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9 21v-6a2 2 0 012-2h2c.39 0 .754.112 1.061.304M19 21.5l2.518-2.58a1.74 1.74 0 000-2.413 1.627 1.627 0 00-2.346 0l-.168.172-.168-.172a1.627 1.627 0 00-2.346 0 1.74 1.74 0 000 2.412l2.51 2.59V21.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HomeHeartIcon;
/* prettier-ignore-end */
