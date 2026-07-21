/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TrashXFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TrashXFilledIcon(props: TrashXFilledIconProps) {
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
          "M20 6a1 1 0 01.117 1.993L20 8h-.081L19 19a3 3 0 01-2.824 2.995L16 22H8c-1.598 0-2.904-1.249-2.992-2.75l-.005-.167L4.08 8H4a1 1 0 01-.117-1.993L4 6h16zm-9.489 5.14a1 1 0 00-1.218 1.567L10.585 14l-1.292 1.293-.083.094a1 1 0 001.497 1.32L12 15.415l1.293 1.292.094.083a1 1 0 001.32-1.497L13.415 14l1.292-1.293.083-.094a1 1 0 00-1.497-1.32L12 12.585l-1.293-1.292-.094-.083-.102-.07zM14 2a2 2 0 012 2 1 1 0 01-1.993.117L14 4h-4l-.007.117A1 1 0 018 4a2 2 0 011.85-1.995L10 2h4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TrashXFilledIcon;
/* prettier-ignore-end */
