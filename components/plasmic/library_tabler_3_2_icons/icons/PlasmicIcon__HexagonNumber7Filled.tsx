/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HexagonNumber7FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HexagonNumber7FilledIcon(props: HexagonNumber7FilledIconProps) {
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
          "M10.425 1.414a3.33 3.33 0 013.216 0l6.775 3.995c.067.04.127.084.18.133l.008.007.107.076a3.222 3.222 0 011.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.225 3.225 0 012 15.502V8.217a3.21 3.21 0 011.65-2.808l6.775-3.995zM14 7h-4l-.117.007a1 1 0 00-.876.876L9 8l.007.117a1 1 0 00.876.876L10 9h2.718l-1.688 6.757-.022.115a1 1 0 001.927.482l.035-.111 2-8 .021-.112a1 1 0 00-.878-1.125L14 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HexagonNumber7FilledIcon;
/* prettier-ignore-end */
