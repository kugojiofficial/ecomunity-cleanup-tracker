/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AlphabetGreekIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AlphabetGreekIcon(props: AlphabetGreekIconProps) {
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
          "M10 10v7m-5-5a2 2 0 012-2h1a2 2 0 012 2v3a2 2 0 01-2 2H7a2 2 0 01-2-2v-3zm9 8V9a2 2 0 012-2h1a2 2 0 012 2v1a2 2 0 01-2 2 2 2 0 012 2v1a2 2 0 01-2 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AlphabetGreekIcon;
/* prettier-ignore-end */
