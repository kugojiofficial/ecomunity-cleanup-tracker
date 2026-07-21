/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MedalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MedalIcon(props: MedalIconProps) {
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
          "M12 4v3M8 4v6m8-6v6m-4 8.5L9 20l.5-3.5-2-2 3-.5 1.5-3 1.5 3 3 .5-2 2L15 20l-3-1.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MedalIcon;
/* prettier-ignore-end */
