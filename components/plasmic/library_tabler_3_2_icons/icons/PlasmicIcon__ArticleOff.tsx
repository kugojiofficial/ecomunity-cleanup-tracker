/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArticleOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArticleOffIcon(props: ArticleOffIconProps) {
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
          "M8 4h11a2 2 0 012 2v11m-1.172 2.821c-.26.118-.542.18-.828.179H5a2 2 0 01-2-2V6a2 2 0 011.156-1.814M7 8h1m4 0h5M7 12h5m4 0h1M7 16h9M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ArticleOffIcon;
/* prettier-ignore-end */
