/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ThumbDownFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ThumbDownFilledIcon(props: ThumbDownFilledIconProps) {
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
          "M13 21.008a3 3 0 002.995-2.823l.005-.177v-4h2a3 3 0 002.98-2.65l.015-.173.005-.177-.02-.196-1.006-5.032c-.381-1.625-1.502-2.796-2.81-2.78L17 3.008H9a1 1 0 00-.993.884L8 4.008l.001 9.536a1 1 0 00.5.866 2.999 2.999 0 011.492 2.396l.007.202v1a3 3 0 003 3zm-8-7a1 1 0 00.993-.883L6 13.008v-9a1 1 0 00-.883-.993L5 3.008H4A2 2 0 002.005 4.86L2 5.01v7a2 2 0 001.85 1.994l.15.005 1-.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ThumbDownFilledIcon;
/* prettier-ignore-end */
