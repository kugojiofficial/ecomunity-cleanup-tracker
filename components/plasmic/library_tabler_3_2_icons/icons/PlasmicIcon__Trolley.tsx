/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TrolleyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TrolleyIcon(props: TrolleyIconProps) {
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
          "M9 19a2 2 0 104 0 2 2 0 00-4 0zm-3-3l3 2m3-1l8-12m-3 5l2 1M9.592 4.695l3.306 2.104a1.3 1.3 0 01.396 1.8L10.2 13.41a1.3 1.3 0 01-1.792.394L5.102 11.7a1.3 1.3 0 01-.396-1.8L7.8 5.09a1.3 1.3 0 011.792-.395z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TrolleyIcon;
/* prettier-ignore-end */
