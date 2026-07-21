/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WorldQuestionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WorldQuestionIcon(props: WorldQuestionIconProps) {
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
          "M20.975 11.33a9 9 0 10-5.673 9.043M3.6 9h16.8M3.6 15h9.9m-2-12a17 17 0 000 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M12.5 3a16.988 16.988 0 012.57 9.518m-1.056 5.403A16.996 16.996 0 0112.5 21m6.5 1v.01M19 19a2.003 2.003 0 00.914-3.782 1.98 1.98 0 00-2.414.483"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WorldQuestionIcon;
/* prettier-ignore-end */
