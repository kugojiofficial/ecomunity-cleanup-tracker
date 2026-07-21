/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BeerFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BeerFilledIcon(props: BeerFilledIconProps) {
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
          "M17 2a2 2 0 011.995 1.85L19 4v4c0 1.335-.229 2.386-.774 3.692l-.157.363-.31.701a8.902 8.902 0 00-.751 3.242l-.008.377V20a2 2 0 01-1.85 1.995L15 22H9a2 2 0 01-1.995-1.85L7 20v-3.625c0-1.132-.21-2.25-.617-3.28l-.142-.34-.31-.699c-.604-1.358-.883-2.41-.925-3.698L5 8V4a2 2 0 011.85-1.995L7 2h10zm0 2H7v3h10V4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BeerFilledIcon;
/* prettier-ignore-end */
