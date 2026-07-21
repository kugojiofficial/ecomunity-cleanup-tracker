/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoodCryIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoodCryIcon(props: MoodCryIconProps) {
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
          "M9 10h.01M15 10h.01M9.5 15.25a3.5 3.5 0 015 0m3.066 2.356a2 2 0 102.897.03L19 16l-1.434 1.606z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M20.865 13.517A8.94 8.94 0 0021 12a9 9 0 10-9 9c.69 0 1.36-.076 2-.222"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MoodCryIcon;
/* prettier-ignore-end */
