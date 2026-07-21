/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GpsFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GpsFilledIcon(props: GpsFilledIconProps) {
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
          "M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34zm-.086 5.066c.372-.837-.483-1.692-1.32-1.32l-9 4-.108.055c-.75.44-.611 1.609.271 1.83l3.418.853.855 3.419c.23.922 1.498 1.032 1.884.163l4-9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GpsFilledIcon;
/* prettier-ignore-end */
