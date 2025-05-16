import { SVGProps } from "react";

export function CloudVantageLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M300 170C300 126.863 265.137 92 222 92C178.863 92 144 126.863 144 170C144 213.137 178.863 248 222 248H300V170Z"
        fill="#0D6EFD"
      />
      <path
        d="M222 248L300 170H222V248Z"
        fill="#0D6EFD"
        fillOpacity="0.7"
      />
      <path
        d="M144 170L222 248V170H144Z"
        fill="#0D6EFD"
        fillOpacity="0.8"
      />
      <path
        d="M222 92L144 170H222V92Z"
        fill="#0D6EFD"
        fillOpacity="0.9"
      />
      <path
        d="M300 170L222 92V170H300Z"
        fill="#0D6EFD"
        fillOpacity="0.6"
      />
      <path
        d="M222 170L144 248L222 326V170Z"
        fill="#0D6EFD"
        fillOpacity="0.5"
      />
      <path
        d="M300 170L222 92L144 14V92L222 170H300Z"
        fill="#0D6EFD"
        fillOpacity="0.4"
      />
    </svg>
  );
}
