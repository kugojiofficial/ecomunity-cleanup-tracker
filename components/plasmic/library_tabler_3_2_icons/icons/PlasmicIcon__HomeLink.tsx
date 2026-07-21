/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HomeLinkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HomeLinkIcon(props: HomeLinkIconProps) {
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
        d={"M20.085 11.085L12 3l-9 9h2v7a2 2 0 002 2h4.5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9 21v-6a2 2 0 012-2h2a2 2 0 011.807 1.143M20 21a1 1 0 102 0 1 1 0 00-2 0zm0-5a1 1 0 102 0 1 1 0 00-2 0zm-5 3a1 1 0 102 0 1 1 0 00-2 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M21 16l-5 3 5 2"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HomeLinkIcon;
/* prettier-ignore-end */
