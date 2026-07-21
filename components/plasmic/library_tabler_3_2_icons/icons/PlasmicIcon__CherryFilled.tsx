/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CherryFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CherryFilledIcon(props: CherryFilledIconProps) {
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
          "M16.588 5.191l.058.045.078.074.072.084.013.018c.153.21.218.47.182.727l-.022.111-.03.092c-.99 2.725-.666 5.158.679 7.706a4 4 0 11-4.613 4.152L13 18l.005-.2a4.002 4.002 0 012.5-3.511c-.947-2.03-1.342-4.065-1.052-6.207-.166.077-.332.15-.499.218l.094-.064c-2.243 1.47-3.552 3.004-3.98 4.57a4.501 4.501 0 11-7.064 3.906L3 16.5l.005-.212a4.5 4.5 0 015.2-4.233c.332-1.073.945-2.096 1.83-3.069C8.241 8.89 6.449 8.227 4.68 7l-.268-.19-.051-.04-.046-.04-.044-.044-.04-.046-.04-.05-.032-.047-.035-.06-.053-.11-.038-.116-.023-.117-.005-.042L4 5.98l.01-.118.023-.117.038-.115.03-.066.023-.045.035-.06.032-.046.04-.051.04-.046.044-.044.046-.04.05-.04c4.018-2.922 8.16-2.923 12.177-.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CherryFilledIcon;
/* prettier-ignore-end */
