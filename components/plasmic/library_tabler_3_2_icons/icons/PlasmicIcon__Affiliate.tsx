/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AffiliateIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AffiliateIcon(props: AffiliateIconProps) {
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
          "M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275m-5.381-5.752l5.759-5.759M4 5.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm13 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm0 13a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm-13-3a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AffiliateIcon;
/* prettier-ignore-end */
