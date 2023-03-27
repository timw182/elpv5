import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="feather feather-arrow-right"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

export default SvgComponent
