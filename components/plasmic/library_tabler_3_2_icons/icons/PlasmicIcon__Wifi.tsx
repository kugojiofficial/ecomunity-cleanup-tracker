/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WifiIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WifiIcon(props: WifiIconProps) {
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
          "M12 18h.01m-2.838-2.828a4 4 0 015.656 0m-8.485-2.829a8 8 0 0111.314 0M3.515 9.515c4.686-4.687 12.284-4.687 17 0"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WifiIcon;
/* prettier-ignore-end */
