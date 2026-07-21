/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IroningSteamIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IroningSteamIcon(props: IroningSteamIconProps) {
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
          "M12 19v2M9 4h7.459a3 3 0 012.959 2.507l.577 3.464.81 4.865A.999.999 0 0119.82 16H3a7 7 0 017-7h9.8M8 19l-1 2m9-2l1 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IroningSteamIcon;
/* prettier-ignore-end */
