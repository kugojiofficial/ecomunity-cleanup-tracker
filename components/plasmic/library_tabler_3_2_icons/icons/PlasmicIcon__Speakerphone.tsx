/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SpeakerphoneIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SpeakerphoneIcon(props: SpeakerphoneIconProps) {
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
        d={"M18 8a3 3 0 010 6m-8-6v11a1 1 0 01-1 1H8a1 1 0 01-1-1v-5"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12 8l4.524-3.77A.9.9 0 0118 4.922v12.156a.9.9 0 01-1.476.692L12 14H4a1 1 0 01-1-1V9a1 1 0 011-1h8z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SpeakerphoneIcon;
/* prettier-ignore-end */
