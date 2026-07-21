/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CookieManIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CookieManIcon(props: CookieManIconProps) {
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
          "M12 2a5 5 0 012.845 9.112l.147.369 1.755-.803c.969-.443 2.12-.032 2.571.918a1.88 1.88 0 01-.787 2.447l-.148.076L16 15.208v2.02l1.426 1.425.114.125a1.96 1.96 0 01-2.762 2.762l-.125-.114-2.079-2.08-.114-.124a2.003 2.003 0 01-.161-.22H11.7c-.047.076-.1.15-.16.22l-.115.125-2.08 2.079a1.96 1.96 0 01-2.886-2.648l.114-.125L8 17.227v-2.019l-2.383-1.09-.148-.075a1.88 1.88 0 01-.787-2.447c.429-.902 1.489-1.318 2.424-.978l.147.06 1.755.803.147-.369a5 5 0 01-2.15-3.895V7a5 5 0 015-5H12zm0 14h.01M12 13h.01M10 7h.01M14 7h.01M12 9h.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CookieManIcon;
/* prettier-ignore-end */
