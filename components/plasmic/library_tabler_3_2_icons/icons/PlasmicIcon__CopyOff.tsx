/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CopyOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CopyOffIcon(props: CopyOffIconProps) {
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
          "M19.414 19.415A2 2 0 0118 20h-8a2 2 0 01-2-2v-8c0-.554.225-1.055.589-1.417M12 8h6a2 2 0 012 2v6m-4-8V6a2 2 0 00-2-2H8m-3.418.59C4.222 4.95 4 5.45 4 6v8a2 2 0 002 2h2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CopyOffIcon;
/* prettier-ignore-end */
