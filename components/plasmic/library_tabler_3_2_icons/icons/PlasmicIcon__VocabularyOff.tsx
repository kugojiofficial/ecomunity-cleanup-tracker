/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VocabularyOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VocabularyOffIcon(props: VocabularyOffIconProps) {
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
          "M7 3h3a2 2 0 012 2 2 2 0 012-2h6a1 1 0 011 1v13m-2 2h-5a2 2 0 00-2 2 2 2 0 00-2-2H4a1 1 0 01-1-1V4c0-.279.114-.53.298-.712M12 5v3m0 4v9M7 11h1m8-4h1m-1 4h1M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default VocabularyOffIcon;
/* prettier-ignore-end */
