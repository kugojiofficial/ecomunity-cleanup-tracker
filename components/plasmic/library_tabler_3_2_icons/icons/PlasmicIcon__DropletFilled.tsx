/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DropletFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DropletFilledIcon(props: DropletFilledIconProps) {
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
          "M10.708 2.372c-.282.177-.524.41-.71.686l-4.892 7.26c-1.981 3.314-1.22 7.466 1.767 9.882 2.969 2.402 7.286 2.402 10.254 0 2.987-2.416 3.748-6.569 1.795-9.836l-4.919-7.306c-.722-1.075-2.192-1.376-3.295-.686z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DropletFilledIcon;
/* prettier-ignore-end */
