/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareRoundedNumber2FilledIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function SquareRoundedNumber2FilledIcon(
  props: SquareRoundedNumber2FilledIconProps
) {
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
          "M12 2l.642.005.616.017.299.013.579.034.553.046c4.687.455 6.65 2.333 7.166 6.906l.03.29.046.553.041.727.006.15.017.617L22 12l-.005.642-.017.616-.013.299-.034.579-.046.553c-.455 4.687-2.333 6.65-6.906 7.166l-.29.03-.553.046-.727.041-.15.006-.617.017L12 22l-.642-.005-.616-.017-.299-.013-.579-.034-.553-.046c-4.687-.455-6.65-2.333-7.166-6.906l-.03-.29-.046-.553-.041-.727-.006-.15-.017-.617-.004-.318v-.648l.004-.318.017-.616.013-.299.034-.579.046-.553c.455-4.687 2.333-6.65 6.906-7.166l.29-.03.553-.046.727-.041.15-.006.617-.017c.21-.003.424-.005.642-.005zm1 5h-3l-.117.007a1 1 0 000 1.986L10 9h3v2h-2l-.15.005a2 2 0 00-1.844 1.838L9 13v2l.005.15a2 2 0 001.838 1.844L11 17h3l.117-.007a1 1 0 000-1.986L14 15h-3v-2h2l.15-.005a2 2 0 001.844-1.838L15 11V9l-.005-.15a2 2 0 00-1.838-1.844L13 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareRoundedNumber2FilledIcon;
/* prettier-ignore-end */
