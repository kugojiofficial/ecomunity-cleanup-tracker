/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SkewYIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SkewYIcon(props: SkewYIconProps) {
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
          "M4.326 19h15.348a1 1 0 00.962-1.275l-3.429-12A1 1 0 0016.246 5H7.754a1 1 0 00-.961.725l-3.429 12A1 1 0 004.326 19z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SkewYIcon;
/* prettier-ignore-end */
