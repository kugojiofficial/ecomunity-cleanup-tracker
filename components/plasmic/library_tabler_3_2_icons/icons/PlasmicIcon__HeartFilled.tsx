/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HeartFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HeartFilledIcon(props: HeartFilledIconProps) {
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
          "M6.979 3.074a6 6 0 014.988 1.425l.037.033.034-.03a6 6 0 014.733-1.44l.246.036a6 6 0 013.364 10.008l-.18.185-.048.041-7.45 7.379a1 1 0 01-1.313.082l-.094-.082-7.493-7.422A6 6 0 016.979 3.074z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HeartFilledIcon;
/* prettier-ignore-end */
