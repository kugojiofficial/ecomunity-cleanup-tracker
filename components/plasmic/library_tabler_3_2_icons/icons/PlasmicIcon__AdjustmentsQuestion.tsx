/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AdjustmentsQuestionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AdjustmentsQuestionIcon(props: AdjustmentsQuestionIconProps) {
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
          "M4 10a2 2 0 104 0 2 2 0 00-4 0zm2-6v4m0 4v8m7.577-5.23a2 2 0 10.117 2.295M12 4v10m7 8v.01M19 19a2.003 2.003 0 00.914-3.782 1.98 1.98 0 00-2.414.483M12 18v2m4-13a2 2 0 104 0 2 2 0 00-4 0zm2-3v1m0 4v2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AdjustmentsQuestionIcon;
/* prettier-ignore-end */
