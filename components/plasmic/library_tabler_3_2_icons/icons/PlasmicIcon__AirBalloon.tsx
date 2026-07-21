/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AirBalloonIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AirBalloonIcon(props: AirBalloonIconProps) {
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
          "M10 20a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1zm2-4c3.314 0 6-4.686 6-8A6 6 0 106 8c0 3.314 2.686 8 6 8z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10 9c0 1.857.21 3.637.586 4.95C10.96 15.263 11.47 16 12 16c.53 0 1.04-.738 1.414-2.05C13.79 12.637 14 10.857 14 9c0-1.857-.21-3.637-.586-4.95C13.04 2.737 12.53 2 12 2c-.53 0-1.04.737-1.414 2.05C10.21 5.363 10 7.143 10 9z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AirBalloonIcon;
/* prettier-ignore-end */
