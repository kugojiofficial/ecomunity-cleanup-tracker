/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HomeInfinityIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HomeInfinityIcon(props: HomeInfinityIconProps) {
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
        d={"M19 14v-2h2l-9-9-9 9h2v7a2 2 0 002 2h2.5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9 21v-6a2 2 0 012-2h2a2 2 0 011.75 1.032m.786 3.554a2.123 2.123 0 00-2.929 0 1.952 1.952 0 000 2.828c.809.781 2.12.781 2.929 0m0 0c-.805.778.809-.781 0 0zm0 0l1.46-1.41 1.46-1.419"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M15.54 17.582l1.46 1.42 1.46 1.41m0 0c-.805-.779.809.78 0 0zm0 0c.805.779 2.12.781 2.929 0a1.95 1.95 0 000-2.828 2.123 2.123 0 00-2.929 0"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HomeInfinityIcon;
/* prettier-ignore-end */
