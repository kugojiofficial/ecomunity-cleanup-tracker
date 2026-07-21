/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RadioactiveFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RadioactiveFilledIcon(props: RadioactiveFilledIconProps) {
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
          "M21 11a1 1 0 011 1 10 10 0 01-5 8.656 1 1 0 01-1.302-.268l-.064-.098-3-5.19a.995.995 0 01-.133-.542l.01-.11.023-.106.034-.106.046-.1.056-.094.067-.089a.993.993 0 01.165-.155l.098-.064a2 2 0 00.993-1.57l.007-.163a1 1 0 01.883-.994L15 11h6zM7 3.344a10 10 0 0110 0 1 1 0 01.418 1.262l-.052.104-3 5.19-.064.098a.993.993 0 01-.155.165l-.089.067a.994.994 0 01-.195.102l-.105.034-.107.022a1.003 1.003 0 01-.547-.07L13 10.266a2 2 0 00-1.842-.082l-.158.082a1 1 0 01-1.302-.268L9.634 9.9l-3-5.19A1 1 0 017 3.344zM9 11a1 1 0 01.993.884l.007.117a2 2 0 00.861 1.645l.237.152c.06.045.116.097.165.155l.067.089.056.095.045.099c.014.036.026.07.035.106l.022.107.011.11c.007.15-.02.3-.08.437l-.053.104-3 5.19A1 1 0 017 20.656 10 10 0 012 12a1 1 0 01.883-.993L3 11h6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RadioactiveFilledIcon;
/* prettier-ignore-end */
