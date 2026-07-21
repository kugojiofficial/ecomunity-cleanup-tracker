/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AB2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AB2Icon(props: AB2IconProps) {
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
          "M16 21h3c.81 0 1.48-.67 1.48-1.48l.02-.02c0-.82-.69-1.5-1.5-1.5h-3v3zm0-6h2.5c.84-.01 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5H16v-3zM4 9V5c0-1.036.895-2 2-2s2 .964 2 2v4m-5.01 2.98a9 9 0 009 9m9-9a9 9 0 00-9-9M8 7H4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AB2Icon;
/* prettier-ignore-end */
