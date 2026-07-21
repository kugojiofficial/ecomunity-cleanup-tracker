/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CreativeCommonsZeroIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CreativeCommonsZeroIcon(props: CreativeCommonsZeroIconProps) {
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
        d={"M3 12a9 9 0 1018.001 0A9 9 0 003 12z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9 12c0 1.06.316 2.078.879 2.828C10.44 15.578 11.204 16 12 16s1.559-.421 2.121-1.172c.563-.75.879-1.767.879-2.828 0-1.06-.316-2.078-.879-2.828C13.56 8.422 12.796 8 12 8s-1.559.421-2.121 1.172C9.316 9.922 9 10.939 9 12zm5-3l-4 6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CreativeCommonsZeroIcon;
/* prettier-ignore-end */
