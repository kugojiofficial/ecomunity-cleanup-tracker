/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DogIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DogIcon(props: DogIconProps) {
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
        d={"M11 5h2m6 7c-.667 5.333-2.333 8-5 8h-4c-2.667 0-4.333-2.667-5-8"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M11 16c0 .667.333 1 1 1s1-.333 1-1h-2zm1 2v2m-2-9v.01m4-.01v.01M5 4l6 .97-6.238 6.688a1.02 1.02 0 01-1.41.111.953.953 0 01-.327-.954L5 4zm14 0l-6 .97 6.238 6.688c.358.408.989.458 1.41.111a.953.953 0 00.327-.954L19 4z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DogIcon;
/* prettier-ignore-end */
