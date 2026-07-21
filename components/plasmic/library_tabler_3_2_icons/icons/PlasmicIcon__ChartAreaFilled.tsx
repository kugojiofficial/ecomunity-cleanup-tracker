/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChartAreaFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChartAreaFilledIcon(props: ChartAreaFilledIconProps) {
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
          "M20 18a1 1 0 01.117 1.993L20 20H4a1 1 0 01-.117-1.993L4 18h16zM15.22 5.375a1 1 0 011.393-.165l.094.083 4 4a1 1 0 01.284.576L21 10v5a1 1 0 01-.883.993L20 16H3.978l-.11-.009-.11-.02-.107-.034-.105-.046-.1-.059-.094-.07-.06-.055-.072-.082-.064-.089-.054-.096-.016-.035-.04-.103-.027-.106-.015-.108-.004-.11.009-.11.019-.105c.01-.04.022-.077.035-.112l.046-.105.059-.1 4-6a1 1 0 011.165-.39l.114.05 3.277 1.638 3.495-4.369h.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChartAreaFilledIcon;
/* prettier-ignore-end */
