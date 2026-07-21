/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TelescopeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TelescopeIcon(props: TelescopeIconProps) {
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
          "M6 21l6-5 6 5m-6-8v8m-8.706-7.322l.166.281c.52.88 1.624 1.265 2.605.91l14.242-5.165a1.023 1.023 0 00.565-1.456l-2.62-4.705a1.087 1.087 0 00-1.447-.42l-.056.032-12.694 7.618c-1.02.613-1.357 1.897-.76 2.905h-.001zM14 5l3 5.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TelescopeIcon;
/* prettier-ignore-end */
