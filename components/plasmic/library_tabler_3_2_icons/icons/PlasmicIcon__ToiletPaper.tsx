/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ToiletPaperIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ToiletPaperIcon(props: ToiletPaperIconProps) {
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
          "M3 10c0 1.857.316 3.637.879 4.95C4.44 16.263 5.204 17 6 17s1.559-.738 2.121-2.05C8.684 13.637 9 11.857 9 10c0-1.857-.316-3.637-.879-4.95C7.56 3.737 6.796 3 6 3s-1.559.737-2.121 2.05C3.316 6.363 3 8.143 3 10zm18 0c0-3.866-1.343-7-3-7M6 3h12m3 7v10l-3-1-3 2-3-3-3 2V10m-3 0h.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ToiletPaperIcon;
/* prettier-ignore-end */
