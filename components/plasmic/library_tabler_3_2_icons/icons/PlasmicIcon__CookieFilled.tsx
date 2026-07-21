/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CookieFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CookieFilledIcon(props: CookieFilledIconProps) {
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
          "M13.53 2.552l2.667 1.104a1 1 0 01.414 1.53 3 3 0 003.492 4.604 1 1 0 011.296.557l.049.122a4 4 0 010 3.062l-.079.151c-.467.74-.785 1.314-.945 1.7-.166.4-.373 1.097-.613 2.073l-.047.144a3.998 3.998 0 01-2.166 2.164l-.139.046c-1.006.253-1.705.461-2.076.615-.412.17-.982.486-1.696.942l-.156.082a4 4 0 01-3.062 0l-.148-.077c-.759-.475-1.333-.793-1.704-.947-.413-.171-1.109-.378-2.07-.612l-.146-.048a3.999 3.999 0 01-2.164-2.166l-.046-.138c-.254-1.009-.463-1.709-.615-2.078-.17-.414-.485-.979-.942-1.695l-.082-.156a4 4 0 010-3.062l.084-.16c.447-.692.761-1.262.94-1.692.147-.355.356-1.057.615-2.078l.045-.138a4 4 0 012.166-2.164l.141-.047c.988-.245 1.686-.453 2.074-.614.395-.164.967-.48 1.7-.944l.152-.08a4 4 0 013.062 0M12 16a1 1 0 00-1 1v.01a1 1 0 002 0V17a1 1 0 00-1-1zm4-3a1 1 0 00-1 1v.01a1 1 0 002 0V14a1 1 0 00-1-1zm-8-1a1 1 0 00-1 1v.01a1 1 0 102 0V13a1 1 0 00-1-1zm4-1a1 1 0 00-1 1v.01a1 1 0 002 0V12a1 1 0 00-1-1zm-1-4a1.003 1.003 0 10.387 1.927A1 1 0 0012 8a1 1 0 00-1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CookieFilledIcon;
/* prettier-ignore-end */
