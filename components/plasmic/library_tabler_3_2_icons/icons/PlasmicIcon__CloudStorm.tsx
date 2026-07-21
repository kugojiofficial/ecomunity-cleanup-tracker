/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CloudStormIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CloudStormIcon(props: CloudStormIconProps) {
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
          "M7 18a4.815 4.815 0 01-3.327-1.318A4.403 4.403 0 012.295 13.5c0-1.194.496-2.338 1.378-3.182A4.815 4.815 0 017 9c.295-1.313 1.157-2.467 2.397-3.207a5.971 5.971 0 012.025-.749 6.223 6.223 0 012.19.006c.721.131 1.408.39 2.02.76.61.37 1.135.844 1.543 1.397.407.552.69 1.172.831 1.823.142.65.14 1.32-.006 1.97h1a3.5 3.5 0 110 7h-1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M13 14l-2 4h3l-2 4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CloudStormIcon;
/* prettier-ignore-end */
