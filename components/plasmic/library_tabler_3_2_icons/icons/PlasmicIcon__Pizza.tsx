/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PizzaIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PizzaIcon(props: PizzaIconProps) {
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
          "M12 21.5c-3.04 0-5.952-.714-8.5-1.983L12 3l8.5 16.517A19.09 19.09 0 0112 21.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5.38 15.866a14.94 14.94 0 006.815 1.634 14.944 14.944 0 006.502-1.479M13 11.01V11m-2 3v-.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PizzaIcon;
/* prettier-ignore-end */
