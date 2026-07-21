/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SunWindIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SunWindIcon(props: SunWindIconProps) {
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
          "M14.468 10a4 4 0 10-5.466 5.46M2 12h1m8-9v1m0 16v1M4.6 5.6l.7.7m12.1-.7l-.7.7M5.3 17.7l-.7.7M15 13h5a2 2 0 000-4m-8 7h5.967a1.999 1.999 0 011.447 3.414A2 2 0 0118 20h-.286"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SunWindIcon;
/* prettier-ignore-end */
