/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PinFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PinFilledIcon(props: PinFilledIconProps) {
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
          "M15.113 3.21l.094.083 5.5 5.5a1 1 0 01-1.175 1.59l-3.172 3.171-1.424 3.797a1 1 0 01-.158.277l-.07.08-1.5 1.5a1 1 0 01-1.32.082l-.095-.083L9 16.415l-3.793 3.792a1 1 0 01-1.497-1.32l.083-.094L7.585 15l-2.792-2.793a1 1 0 01-.083-1.32l.083-.094 1.5-1.5a1 1 0 01.258-.187l.098-.042 3.796-1.425 3.171-3.17a1 1 0 011.497-1.259z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PinFilledIcon;
/* prettier-ignore-end */
