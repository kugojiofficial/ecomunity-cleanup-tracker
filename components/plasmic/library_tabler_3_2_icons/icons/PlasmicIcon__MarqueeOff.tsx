/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MarqueeOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MarqueeOffIcon(props: MarqueeOffIconProps) {
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
          "M4 6c0-.556.227-1.059.593-1.421M9 4h1.5m3 0H15m3 0a2 2 0 012 2m0 3v1.5m0 3V15m-.598 4.426A1.993 1.993 0 0118 20m-3 0h-1.5m-3 0H9m-3 0a2 2 0 01-2-2m0-3v-1.5m0-3V9M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MarqueeOffIcon;
/* prettier-ignore-end */
