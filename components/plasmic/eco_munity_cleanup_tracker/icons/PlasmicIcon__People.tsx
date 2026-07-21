/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PeopleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PeopleIcon(props: PeopleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "m23.313 26.102-6.296-3.488c2.34-1.841 2.976-5.459 2.976-7.488v-4.223c0-2.796-3.715-5.91-7.447-5.91-3.73 0-7.544 3.114-7.544 5.91v4.223c0 1.845.78 5.576 3.144 7.472l-6.458 3.503S0 26.853 0 27.79v2.534a1.69 1.69 0 0 0 1.688 1.689h21.625a1.69 1.69 0 0 0 1.688-1.689V27.79c0-.994-1.689-1.689-1.689-1.689zm-.312 3.913H2v-1.788a3 3 0 0 1 .502-.298q.071-.031.139-.07L9.1 24.356a2 2 0 0 0 .298-3.318c-1.677-1.345-2.396-4.322-2.396-5.911v-4.223c0-1.437 2.708-3.91 5.544-3.91 2.889 0 5.447 2.44 5.447 3.91v4.223c0 1.566-.486 4.557-2.212 5.915-.528.416-.813 1.07-.757 1.739s.446 1.267 1.035 1.589l6.296 3.488c.055.03.126.063.184.089.148.063.329.167.462.259zm7.311-8.892-6.39-3.488c2.34-1.841 3.07-5.459 3.07-7.488V5.924c0-2.796-3.808-5.941-7.54-5.941-2.425 0-4.904 1.319-6.347 3.007.823.051 1.73.052 2.514.302a6.2 6.2 0 0 1 3.833-1.308c2.889 0 5.54 2.47 5.54 3.941v4.223c0 1.566-.58 4.557-2.305 5.915a2 2 0 0 0 .278 3.328l6.39 3.488c.055.03.126.063.184.089.148.063.329.167.462.259v1.779h-4.037c.61.46.794 1.118 1.031 2h3.319a1.69 1.69 0 0 0 1.688-1.689v-2.503c-.001-.995-1.689-1.691-1.689-1.691z"
        }
      ></path>
    </svg>
  );
}

export default PeopleIcon;
/* prettier-ignore-end */
