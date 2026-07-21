/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalendarFilledIcon(props: CalendarFilledIconProps) {
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
          "M16 2a1 1 0 01.993.883L17 3v1h1a3 3 0 012.995 2.824L21 7v12a3 3 0 01-2.824 2.995L18 22H6a3 3 0 01-2.995-2.824L3 19V7a3 3 0 012.824-2.995L6 4h1V3a1 1 0 011.993-.117L9 3v1h6V3a1 1 0 011-1zm3 7H5v9.625c0 .705.386 1.286.883 1.366L6 20h12c.513 0 .936-.53.993-1.215l.007-.16V9z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12 12a1 1 0 01.993.883L13 13v3a1 1 0 01-1.993.117L11 16v-2a1 1 0 01-.117-1.993L11 12h1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CalendarFilledIcon;
/* prettier-ignore-end */
