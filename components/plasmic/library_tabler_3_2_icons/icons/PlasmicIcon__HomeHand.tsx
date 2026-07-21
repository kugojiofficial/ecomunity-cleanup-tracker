/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HomeHandIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HomeHandIcon(props: HomeHandIconProps) {
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
        d={"M18 9l-6-6-9 9h2v7a2 2 0 002 2h3.5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9 21v-6a2 2 0 012-2h2m3 4.5l-.585-.578a1.516 1.516 0 00-2 0c-.477.433-.551 1.112-.177 1.622L15 21c.37.506 1.331 1 2 1h3c1.009 0 1.497-.683 1.622-1.593.252-.938.378-1.74.378-2.407 0-1-.939-1.843-2-2h-1v-2.636C19 12.61 18.328 12 17.5 12s-1.5.61-1.5 1.364V17.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HomeHandIcon;
/* prettier-ignore-end */
