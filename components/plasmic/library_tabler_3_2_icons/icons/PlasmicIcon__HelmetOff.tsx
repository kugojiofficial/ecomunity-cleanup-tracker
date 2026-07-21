/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HelmetOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HelmetOffIcon(props: HelmetOffIconProps) {
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
          "M8.633 4.654a9 9 0 0111.718 11.7m-1.503 2.486c-.36.423-.76.81-1.192 1.16H6.344a9 9 0 01-.185-13.847"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M20 9h-7m-2.768 1.246c.507 2 1.596 3.418 3.268 4.254.524.262 1.07.49 1.64.683M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HelmetOffIcon;
/* prettier-ignore-end */
