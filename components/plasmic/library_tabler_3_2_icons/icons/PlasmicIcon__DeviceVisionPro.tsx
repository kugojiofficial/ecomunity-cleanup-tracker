/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceVisionProIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceVisionProIcon(props: DeviceVisionProIconProps) {
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
          "M12 7c1.143 0 2.235.035 3.275.104 1.017.068 1.95.207 2.798.42.813.203 1.52.505 2.119.909a3.9 3.9 0 011.328 1.531c.326.657.48 1.48.48 2.466 0 1.006-.189 1.91-.574 2.707-.375.779-.886 1.396-1.537 1.848a3.7 3.7 0 01-2.16.66c-.509 0-.97-.068-1.382-.21a5.835 5.835 0 01-1.17-.548c-.356-.22-.705-.452-1.045-.695a9.104 9.104 0 00-1.001-.63 2.376 2.376 0 00-1.13-.301c-.373 0-.75.097-1.132.3-.316.17-.65.38-1 .63-.322.23-.67.462-1.047.695-.368.226-.76.41-1.168.548-.413.142-.872.21-1.378.21a3.706 3.706 0 01-2.165-.659c-.651-.452-1.162-1.07-1.537-1.848-.385-.798-.574-1.7-.574-2.709-.004-.98.15-1.802.477-2.46.3-.619.76-1.147 1.33-1.531.6-.403 1.307-.704 2.12-.907.92-.223 1.856-.365 2.8-.423C9.767 7.036 10.857 7 12 7z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceVisionProIcon;
/* prettier-ignore-end */
