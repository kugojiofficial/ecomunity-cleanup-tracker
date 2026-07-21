/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StarOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StarOffIcon(props: StarOffIconProps) {
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
          "M3 3l18 18M10.012 6.016l1.981-4.014 3.086 6.253 6.9 1-4.421 4.304m.012 4.01l.588 3.426L12 17.75l-6.172 3.245 1.179-6.873-5-4.867 6.327-.917"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default StarOffIcon;
/* prettier-ignore-end */
