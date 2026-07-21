/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HomeFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HomeFilledIcon(props: HomeFilledIconProps) {
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
          "M12.707 2.293l9 9c.63.63.184 1.707-.707 1.707h-1v6a3 3 0 01-3 3h-1v-7a3 3 0 00-2.824-2.995L13 12h-2a3 3 0 00-3 3v7H7a3 3 0 01-3-3v-6H3c-.89 0-1.337-1.077-.707-1.707l9-9a1 1 0 011.414 0zM13 14a1 1 0 011 1v7h-4v-7a1 1 0 01.883-.993L11 14h2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HomeFilledIcon;
/* prettier-ignore-end */
