/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClipboardHeartIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClipboardHeartIcon(props: ClipboardHeartIconProps) {
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
          "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9 5a2 2 0 012-2h2a2 2 0 010 4h-2a2 2 0 01-2-2zm2.993 11.75l2.747-2.815a1.9 1.9 0 000-2.632 1.775 1.775 0 00-2.56 0l-.183.188-.183-.189a1.775 1.775 0 00-2.56 0 1.899 1.899 0 000 2.632l2.738 2.825.001-.009z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ClipboardHeartIcon;
/* prettier-ignore-end */
