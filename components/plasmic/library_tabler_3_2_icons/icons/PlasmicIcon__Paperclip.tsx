/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PaperclipIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PaperclipIcon(props: PaperclipIconProps) {
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
          "M15 7l-6.5 6.5a2.121 2.121 0 103 3L18 10a4.243 4.243 0 00-6-6l-6.5 6.5a6.364 6.364 0 009 9L21 13"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PaperclipIcon;
/* prettier-ignore-end */
