/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PaintFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PaintFilledIcon(props: PaintFilledIconProps) {
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
          "M17 2a3 3 0 012.995 2.824L20 5a3 3 0 013 3 6 6 0 01-5.775 5.996L17 14h-4l.15.005a2 2 0 011.844 1.838L15 16v4a2 2 0 01-1.85 1.995L13 22h-2a2 2 0 01-1.995-1.85L9 20v-4a2 2 0 011.85-1.995L11 14v-1a1 1 0 01.883-.993L12 12h5a4 4 0 004-4 1 1 0 00-.883-.993L20 7l-.005.176a3 3 0 01-2.819 2.819L17 10H7a3 3 0 01-2.995-2.824L4 7V5a3 3 0 012.824-2.995L7 2h10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PaintFilledIcon;
/* prettier-ignore-end */
