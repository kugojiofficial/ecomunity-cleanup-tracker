/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ScubaMaskOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ScubaMaskOffIcon(props: ScubaMaskOffIconProps) {
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
          "M11 7h5a1 1 0 011 1v4.5c0 .154-.014.304-.04.45m-2 2.007c-.15.028-.305.043-.463.043h-.5a2 2 0 01-2-2 2 2 0 00-4 0 2 2 0 01-2 2h-.5a2.5 2.5 0 01-2.5-2.5V8a1 1 0 011-1h3M10 17a2 2 0 002 2h3.5a5.475 5.475 0 002.765-.744m2-2c.47-.81.739-1.752.739-2.756V4M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ScubaMaskOffIcon;
/* prettier-ignore-end */
