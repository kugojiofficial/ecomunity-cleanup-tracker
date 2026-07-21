/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Auth2FaIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Auth2FaIcon(props: Auth2FaIconProps) {
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
          "M7 16H3l3.47-4.66A2 2 0 103 9.8m7 6.2V8h4m-4 4h3m4 4v-6a2 2 0 114 0v6m-4-3h4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Auth2FaIcon;
/* prettier-ignore-end */
