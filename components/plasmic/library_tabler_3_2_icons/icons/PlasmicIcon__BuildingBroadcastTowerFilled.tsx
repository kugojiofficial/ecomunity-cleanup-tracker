/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BuildingBroadcastTowerFilledIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function BuildingBroadcastTowerFilledIcon(
  props: BuildingBroadcastTowerFilledIconProps
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
          "M12 10a2 2 0 011.497 3.327l2.452 7.357a1 1 0 01-1.898.632L13.611 20h-3.224l-.438 1.317a1 1 0 01-1.152.663l-.113-.03a1 1 0 01-.633-1.265l2.452-7.357A2 2 0 0110 12l.005-.15A2 2 0 0112 10z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M18.093 4.078a10 10 0 013.137 11.776 1 1 0 01-1.846-.77 8 8 0 10-14.769 0 1 1 0 11-1.846.77A10 10 0 0118.093 4.078z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M15.657 7.243a6 6 0 011.882 7.066 1 1 0 01-1.846-.77 4 4 0 10-7.384 0 1 1 0 11-1.846.77 6 6 0 019.194-7.066z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BuildingBroadcastTowerFilledIcon;
/* prettier-ignore-end */
