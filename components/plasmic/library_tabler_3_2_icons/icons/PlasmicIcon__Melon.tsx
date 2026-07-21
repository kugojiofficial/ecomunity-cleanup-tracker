/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MelonIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MelonIcon(props: MelonIconProps) {
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
          "M20 10c0 5.523-4.477 10-10 10a9.967 9.967 0 01-6.984-2.842l4.343-4.153a4 4 0 005.76-5.51l4.342-4.153A9.963 9.963 0 0120 10z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MelonIcon;
/* prettier-ignore-end */
