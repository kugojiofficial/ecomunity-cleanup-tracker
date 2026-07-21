/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandXFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandXFilledIcon(props: BrandXFilledIconProps) {
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
          "M8.267 3a1 1 0 01.73.317l.076.092 4.274 5.828 5.946-5.944a1 1 0 011.497 1.32l-.083.094-6.163 6.162 6.262 8.54a1 1 0 01-.697 1.585L20 21h-4.267a1 1 0 01-.73-.317l-.076-.092-4.276-5.829-5.944 5.945a1 1 0 01-1.497-1.32l.083-.094 6.161-6.163-6.26-8.539a1 1 0 01.697-1.585L4 3h4.267z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BrandXFilledIcon;
/* prettier-ignore-end */
