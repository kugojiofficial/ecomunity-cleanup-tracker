/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoodNeutralFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoodNeutralFilledIcon(props: MoodNeutralFilledIconProps) {
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
          "M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zM9.01 9l-.127.007a1 1 0 000 1.986L9 11l.127-.007a1 1 0 000-1.986L9.01 9zm6 0l-.127.007a1 1 0 000 1.986L15 11l.127-.007a1 1 0 000-1.986L15.01 9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MoodNeutralFilledIcon;
/* prettier-ignore-end */
