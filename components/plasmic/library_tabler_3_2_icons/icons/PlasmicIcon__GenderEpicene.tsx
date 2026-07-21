/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GenderEpiceneIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GenderEpiceneIcon(props: GenderEpiceneIconProps) {
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
          "M15.536 15.536a5 5 0 10-7.071-7.072 5 5 0 007.071 7.072zm0-.001L21 10M3 14l5.464-5.535M12 12h.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GenderEpiceneIcon;
/* prettier-ignore-end */
