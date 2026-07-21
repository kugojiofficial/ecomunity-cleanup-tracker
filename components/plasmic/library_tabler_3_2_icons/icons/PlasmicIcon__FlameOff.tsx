/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlameOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlameOffIcon(props: FlameOffIconProps) {
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
          "M8.973 8.974C8.638 9.352 8.303 9.69 8 10c-1.226 1.26-2 3.24-2 5a6 6 0 0011.472 2.466m.383-3.597C17.535 12.46 16.733 10.824 16 10c-.281.472-.543.87-.79 1.202m-2.358-2.35C12.784 6.695 11.67 4.668 11 4c0 .968-.18 1.801-.465 2.527M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FlameOffIcon;
/* prettier-ignore-end */
