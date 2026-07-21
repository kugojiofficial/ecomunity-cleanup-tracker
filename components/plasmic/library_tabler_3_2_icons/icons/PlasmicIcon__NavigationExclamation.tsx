/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NavigationExclamationIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NavigationExclamationIcon(
  props: NavigationExclamationIconProps
) {
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
          "M16.535 12.832L12 3 4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116L12 18.5c1.38.468 2.416.82 3.107 1.053M19 16v3m0 3v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default NavigationExclamationIcon;
/* prettier-ignore-end */
