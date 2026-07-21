/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PanoramaVerticalOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PanoramaVerticalOffIcon(props: PanoramaVerticalOffIconProps) {
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
          "M7 3h10.53c.693 0 1.18.691.935 1.338-1.098 2.898-1.573 5.795-1.425 8.692m.828 4.847c.172.592.37 1.185.595 1.778A1 1 0 0117.529 21h-11c-.692 0-1.208-.692-.962-1.34 1.697-4.486 1.903-8.973.619-13.46M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PanoramaVerticalOffIcon;
/* prettier-ignore-end */
