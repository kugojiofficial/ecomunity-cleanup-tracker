/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CoinOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CoinOffIcon(props: CoinOffIconProps) {
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
          "M14.8 9A2 2 0 0013 8h-1M9.18 9.171A2 2 0 0011 12h1m2.824 2.822A2 2 0 0113 16h-2a2 2 0 01-1.8-1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M20.042 16.045A9 9 0 007.955 3.958M5.637 5.635a9 9 0 1012.725 12.73M12 6v2m0 8v2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CoinOffIcon;
/* prettier-ignore-end */
