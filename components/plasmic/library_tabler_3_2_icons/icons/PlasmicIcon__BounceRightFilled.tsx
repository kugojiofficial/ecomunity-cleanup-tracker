/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BounceRightFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BounceRightFilledIcon(props: BounceRightFilledIconProps) {
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
          "M14.143 11.486a1 1 0 011.714 1.028c-1.502 2.505-2.41 4.89-2.87 7.65-.16.956-1.448 1.15-1.881.283-2.06-4.12-3.858-4.976-6.79-3.998a1.001 1.001 0 01-.632-1.898c3.2-1.067 5.656-.373 7.803 2.623l.091.13.011-.04c.522-1.828 1.267-3.55 2.273-5.3l.281-.478zM18 4a3 3 0 100 6 3 3 0 000-6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BounceRightFilledIcon;
/* prettier-ignore-end */
