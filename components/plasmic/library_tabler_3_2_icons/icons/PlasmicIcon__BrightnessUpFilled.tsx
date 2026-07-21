/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrightnessUpFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrightnessUpFilledIcon(props: BrightnessUpFilledIconProps) {
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
          "M12 8a4 4 0 11-3.995 4.2L8 12l.005-.2A4 4 0 0112 8zm0-6a1 1 0 01.993.883L13 3v2a1 1 0 01-1.993.117L11 5V3a1 1 0 011-1zm5.693 2.893a1 1 0 011.497 1.32l-.083.094-1.4 1.4a1 1 0 01-1.497-1.32l.083-.094 1.4-1.4zM21 11a1 1 0 01.117 1.993L21 13h-2a1 1 0 01-.117-1.993L19 11h2zm-4.707 5.293a1 1 0 011.32-.083l.094.083 1.4 1.4a1 1 0 01-1.32 1.497l-.094-.083-1.4-1.4a1 1 0 010-1.414zM12 18a1 1 0 01.993.883L13 19v2a1 1 0 01-1.993.117L11 21v-2a1 1 0 011-1zm-5.707-1.707a1 1 0 011.497 1.32l-.083.094-1.4 1.4a1 1 0 01-1.497-1.32l.083-.094 1.4-1.4zM6 11a1 1 0 01.117 1.993L6 13H4a1 1 0 01-.117-1.993L4 11h2zM4.893 4.893a1 1 0 011.32-.083l.094.083 1.4 1.4a1 1 0 01-1.32 1.497l-.094-.083-1.4-1.4a1 1 0 010-1.414z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BrightnessUpFilledIcon;
/* prettier-ignore-end */
