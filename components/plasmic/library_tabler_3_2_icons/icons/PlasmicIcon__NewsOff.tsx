/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NewsOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NewsOffIcon(props: NewsOffIconProps) {
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
          "M16 6h3a1 1 0 011 1v9m-.606 3.435A2 2 0 0116 18v-2m0-4V5a1 1 0 00-1-1H8m-3.735.321A1 1 0 004 5v12a3 3 0 003 3h11M8 12h4m-4 4h4M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default NewsOffIcon;
/* prettier-ignore-end */
