/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AlphabetCyrillicIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AlphabetCyrillicIcon(props: AlphabetCyrillicIconProps) {
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
          "M6 10h2a2 2 0 012 2v5H7a2 2 0 110-4h3m9-6h-3a2 2 0 00-2 2v6a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2h-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AlphabetCyrillicIcon;
/* prettier-ignore-end */
