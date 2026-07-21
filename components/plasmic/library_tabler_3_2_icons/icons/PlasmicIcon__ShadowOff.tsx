/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShadowOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShadowOffIcon(props: ShadowOffIconProps) {
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
          "M5.634 5.638a9 9 0 0012.728 12.727m1.68-2.32A9 9 0 007.956 3.957M16 12h2m-5 3h2m-2 3h1m-1-9h4m-4-3h1M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ShadowOffIcon;
/* prettier-ignore-end */
