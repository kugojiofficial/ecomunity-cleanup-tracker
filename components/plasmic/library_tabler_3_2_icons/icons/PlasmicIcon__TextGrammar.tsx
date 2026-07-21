/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TextGrammarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TextGrammarIcon(props: TextGrammarIconProps) {
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
          "M14 9a3 3 0 106 0 3 3 0 00-6 0zM4 12V7a3 3 0 016 0v5M4 9h6m10-3v6M4 16h12M4 20h6m4 0l2 2 5-5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TextGrammarIcon;
/* prettier-ignore-end */
