/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClockHour1FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClockHour1FilledIcon(props: ClockHour1FilledIconProps) {
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
          "M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34zm-5.401 9.576l.052.021.08.026.08.019.072.011L12 13l.076-.003.135-.02.082-.02.103-.039.073-.035.078-.046.06-.042.08-.069.083-.088.062-.083 2-3a1.001 1.001 0 00-1.664-1.11L13 8.696V7a1 1 0 00-.883-.993L12 6a1 1 0 00-1 1v5.026l.009.105.02.107.04.129.048.102.046.078.042.06.069.08.088.083.083.062.09.053.064.031z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ClockHour1FilledIcon;
/* prettier-ignore-end */
