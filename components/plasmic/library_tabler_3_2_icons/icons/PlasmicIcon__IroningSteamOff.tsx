/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IroningSteamOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IroningSteamOffIcon(props: IroningSteamOffIconProps) {
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
          "M9 4h7.459a3 3 0 012.959 2.507l.577 3.464.81 4.865a1 1 0 01-.821 1.15M16 16H3a7 7 0 016.056-6.937M13 9h6.8M12 19v2m-4-2l-1 2m9-2l1 2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IroningSteamOffIcon;
/* prettier-ignore-end */
