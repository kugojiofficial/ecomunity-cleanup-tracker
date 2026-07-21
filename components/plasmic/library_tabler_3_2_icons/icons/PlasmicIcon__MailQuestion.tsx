/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MailQuestionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MailQuestionIcon(props: MailQuestionIconProps) {
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
        d={"M15 19H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v4.5M19 22v.01"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M19 19a2.003 2.003 0 00.914-3.782 1.98 1.98 0 00-2.414.483M3 7l9 6 9-6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MailQuestionIcon;
/* prettier-ignore-end */
