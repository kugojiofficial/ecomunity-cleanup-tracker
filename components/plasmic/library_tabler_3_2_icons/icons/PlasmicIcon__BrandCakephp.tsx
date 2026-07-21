/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandCakephpIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandCakephpIcon(props: BrandCakephpIconProps) {
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
          "M12 11l8 2c1.361-.545 2-1.248 2-2V7.2C22 5.435 17.521 4 11.998 4 6.476 4 2 5.435 2 7.2V10c0 1.766 4.478 4 10 4v-3zm0 3v3l8 2c1.362-.547 2-1.246 2-2v-3c0 .754-.638 1.453-2 2l-8-2zM2 17c0 1.766 4.476 3 9.998 3L12 17c-5.522 0-10-1.734-10-3.5V17zm0-7v4m20-4v4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandCakephpIcon;
/* prettier-ignore-end */
