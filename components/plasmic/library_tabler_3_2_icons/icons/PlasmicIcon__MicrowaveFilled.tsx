/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MicrowaveFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MicrowaveFilledIcon(props: MicrowaveFilledIconProps) {
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
          "M20 5a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h16zm-6 2H4v10h10V7zm4.01 7H18a1 1 0 00-.117 1.993l.127.007a1 1 0 000-2zm0-3H18a1 1 0 00-.117 1.993l.127.007a1 1 0 000-2zm0-3H18a1 1 0 00-.117 1.993l.127.007a1 1 0 100-2z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M5.945 9.668c1.336-.891 2.274-.891 3.61 0l-.089-.056.04.017.146.064.095.044c.378.171.533.23.674.255.133.023.186.005.336-.16a1 1 0 111.486 1.337c-.613.681-1.358.934-2.164.794-.368-.064-.621-.161-1.158-.405a10.023 10.023 0 00-.306-.135l-.17-.091c-.664-.443-.726-.443-1.39 0a1.001 1.001 0 01-1.11-1.664zm0 3c1.336-.891 2.274-.891 3.61 0l-.089-.056.04.017.146.064.095.044c.378.171.533.23.674.255.133.023.186.005.336-.16a1 1 0 011.486 1.337c-.613.681-1.358.934-2.164.794-.368-.064-.621-.161-1.158-.405a10.034 10.034 0 00-.306-.135l-.17-.091c-.664-.443-.726-.443-1.39 0a1 1 0 01-1.11-1.664z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MicrowaveFilledIcon;
/* prettier-ignore-end */
