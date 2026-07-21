/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoodHappyFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoodHappyFilledIcon(props: MoodHappyFilledIconProps) {
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
          "M17 3.34a10 10 0 11-14.995 8.984L2 12l.005-.324A10 10 0 0117 3.34zM15 13H9a1 1 0 00-1 1v.05a3.975 3.975 0 003.777 3.97l.227.005a4.026 4.026 0 003.99-3.79l.006-.206A1 1 0 0015 13zM9.01 8l-.127.007A1 1 0 009 10l.127-.007A1 1 0 009.01 8zm6 0l-.127.007A1 1 0 0015 10l.127-.007A1 1 0 0015.01 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MoodHappyFilledIcon;
/* prettier-ignore-end */
