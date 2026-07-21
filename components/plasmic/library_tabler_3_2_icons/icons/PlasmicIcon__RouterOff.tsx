/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RouterOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RouterOffIcon(props: RouterOffIconProps) {
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
          "M17 13h2a2 2 0 012 2v2m-.588 3.417c-.362.36-.861.583-1.412.583H5a2 2 0 01-2-2v-4a2 2 0 012-2h8m4 4v.01M13 17v.01m-.774-8.81a4 4 0 016.024.55M9.445 5.407A8 8 0 0121.5 6.5M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RouterOffIcon;
/* prettier-ignore-end */
