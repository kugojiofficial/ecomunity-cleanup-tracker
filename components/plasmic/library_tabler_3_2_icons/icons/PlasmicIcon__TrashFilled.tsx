/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TrashFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TrashFilledIcon(props: TrashFilledIconProps) {
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
          "M20 6a1 1 0 01.117 1.993L20 8h-.081L19 19a3 3 0 01-2.824 2.995L16 22H8c-1.598 0-2.904-1.249-2.992-2.75l-.005-.167L4.08 8H4a1 1 0 01-.117-1.993L4 6h16zm-6-4a2 2 0 012 2 1 1 0 01-1.993.117L14 4h-4l-.007.117A1 1 0 018 4a2 2 0 011.85-1.995L10 2h4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TrashFilledIcon;
/* prettier-ignore-end */
