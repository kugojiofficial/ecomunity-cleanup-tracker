/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChartAreaLineFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChartAreaLineFilledIcon(props: ChartAreaLineFilledIconProps) {
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
          "M15.22 9.375a1 1 0 011.393-.165l.094.083 4 4a1 1 0 01.284.576L21 14v5a1 1 0 01-.883.993L20 20H3.978l-.11-.009-.11-.02-.107-.034-.105-.046-.1-.059-.094-.07-.06-.055-.072-.082-.064-.089-.054-.096-.016-.035-.04-.103-.027-.106-.015-.108-.004-.11.009-.11.019-.105c.01-.04.022-.077.035-.112l.046-.105.059-.1 4-6a1 1 0 011.165-.39l.114.05 3.277 1.638 3.495-4.369h.001z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M15.232 3.36a1 1 0 011.382-.15l.093.083 4 4a1 1 0 01-1.32 1.497l-.094-.083-3.226-3.225-4.299 5.158a1 1 0 01-1.1.303l-.115-.049-3.254-1.626L4.8 12.6a1 1 0 01-1.295.269L3.4 12.8a1 1 0 01-.269-1.295L3.2 11.4l3-4a1 1 0 011.137-.341l.11.047 3.291 1.645 4.494-5.391z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChartAreaLineFilledIcon;
/* prettier-ignore-end */
