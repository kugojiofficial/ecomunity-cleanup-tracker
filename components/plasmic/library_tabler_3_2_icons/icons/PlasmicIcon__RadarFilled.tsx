/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RadarFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RadarFilledIcon(props: RadarFilledIconProps) {
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
          "M12 10a2 2 0 011.678.911l.053.089H21l.117.007A1 1 0 0122 12c0 5.523-4.477 10-10 10a1 1 0 01-1-1v-7.269l-.089-.053a2.001 2.001 0 01-.906-1.529L10 12a2 2 0 012-2zm9.428-1.334a1 1 0 01-1.884.668A8 8 0 109.337 19.552a1 1 0 11-.666 1.886A10 10 0 1121.428 8.666zM16.8 8.4a1 1 0 01-1.6 1.2 4 4 0 10-5.6 5.6 1 1 0 11-1.2 1.6 6 6 0 118.4-8.4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RadarFilledIcon;
/* prettier-ignore-end */
