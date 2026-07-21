/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceHeartMonitorFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceHeartMonitorFilledIcon(
  props: DeviceHeartMonitorFilledIconProps
) {
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
          "M18 3a3 3 0 012.995 2.824L21 6v12a3 3 0 01-2.824 2.995L18 21H6a3 3 0 01-2.995-2.824L3 18V6a3 3 0 012.824-2.995L6 3h12zm-4 13a1 1 0 00-.993.883L13 17l.007.127a1 1 0 001.986 0L15 17.01l-.007-.127A1 1 0 0014 16zm3 0a1 1 0 00-.993.883L16 17l.007.127a1 1 0 001.986 0L18 17.01l-.007-.127A1 1 0 0017 16zm-6-6.764l-.106.211a1 1 0 01-.77.545L10 10l-5-.001V13h14V9.999L14.618 10l-.724 1.447a1 1 0 01-1.725.11l-.063-.11L11 9.236zM18 5H6a1 1 0 00-.993.883L5 6v1.999L9.381 8l.725-1.447a1 1 0 011.725-.11l.063.11L13 8.763l.106-.21a1 1 0 01.77-.545L14 8l5-.001V6a1 1 0 00-.883-.993L18 5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DeviceHeartMonitorFilledIcon;
/* prettier-ignore-end */
