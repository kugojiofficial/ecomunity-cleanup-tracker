/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TrophyFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TrophyFilledIcon(props: TrophyFilledIconProps) {
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
          "M17 3a1 1 0 01.993.883L18 4v2.17a3 3 0 110 5.659V12a6.002 6.002 0 01-5 5.917V20h3a1 1 0 01.117 1.993L16 22H8a1 1 0 01-.117-1.993L8 20h3v-2.083a6.002 6.002 0 01-4.996-5.692L6 12v-.171a2.999 2.999 0 01-3.996-2.653L2.001 9l.005-.176A3 3 0 016.001 6.17L6 4a1 1 0 011-1h10zM5 8a1 1 0 100 2 1 1 0 000-2zm14 0a1 1 0 100 2 1 1 0 000-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TrophyFilledIcon;
/* prettier-ignore-end */
