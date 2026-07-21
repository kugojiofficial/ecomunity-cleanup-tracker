/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SchoolBellIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SchoolBellIcon(props: SchoolBellIconProps) {
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
          "M4 17a3 3 0 003 3m7.805-13.63l2.783-2.784a2 2 0 112.829 2.828L17.633 9.2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M16.505 7.495a5.104 5.104 0 01.176 7.035l-.176.184-1.867 1.867a3.48 3.48 0 00-1.013 2.234l-.008.23v.934c0 .327-.13.64-.36.871a.51.51 0 01-.652.06l-.07-.06-9.385-9.384a.51.51 0 010-.722c.198-.198.456-.322.732-.353l.139-.008h.933c.848 0 1.663-.309 2.297-.864l.168-.157 1.867-1.867.16-.153a5.105 5.105 0 017.059.153z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SchoolBellIcon;
/* prettier-ignore-end */
