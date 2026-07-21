/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VocabularyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VocabularyIcon(props: VocabularyIconProps) {
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
          "M10 19H4a1 1 0 01-1-1V4a1 1 0 011-1h6a2 2 0 012 2 2 2 0 012-2h6a1 1 0 011 1v14a1 1 0 01-1 1h-6a2 2 0 00-2 2 2 2 0 00-2-2zm2-14v16M7 7h1m-1 4h1m8-4h1m-1 4h1m-1 4h1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default VocabularyIcon;
/* prettier-ignore-end */
