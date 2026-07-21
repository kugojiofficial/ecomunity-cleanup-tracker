/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PingPongIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PingPongIcon(props: PingPongIconProps) {
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
          "M12.718 20.713a7.64 7.64 0 01-7.48-12.755l.72-.72a7.643 7.643 0 019.105-1.283L17.45 3.61a2.08 2.08 0 013.057 2.815l-.116.126-2.346 2.387a7.644 7.644 0 01-1.052 8.864"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M11 18a3 3 0 106 0 3 3 0 00-6 0zM9.3 5.3l9.4 9.4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PingPongIcon;
/* prettier-ignore-end */
