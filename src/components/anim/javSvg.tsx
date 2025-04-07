import * as React from "react";
import { motion, SVGMotionProps } from "framer-motion";
import { SVGProps } from "react";

export const JavSvg = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg
    width={150}
    height={150}
    viewBox="-100 -100 1000 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{
      overflow: "visible",
    }}
    animate={{
      scale: [0.5, 1, 0.5], // Scale up and down
      filter: [
        "invert(0) brightness(1)", // Original color
        "invert(1) brightness(1.5)", // Inverted color
        "invert(0) brightness(1)", // Back to original
      ],
    }}
    transition={{
      scale: {
        duration: 2, // Duration for the scaling animation
        repeat: Infinity,
        ease: "easeInOut",
      },
      filter: {
        duration: 2, // Duration for the color inversion
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
  >
    <path
      d="M401.243 211.016C565.945 83.1518 481.415 0 481.415 0C493.995 132.185 345.325 163.396 305.473 254.23C278.28 316.212 324.095 370.483 401.188 438.885C394.373 423.735 383.86 409.015 373.22 394.112C336.923 343.282 299.113 290.33 401.243 211.016Z"
      fill="#E76F00"
    />
    <path
      d="M427.537 466.925C427.537 466.925 477.087 426.948 437.847 382.52C304.827 231.797 583.332 163.396 583.332 163.396C413.292 245.313 438.677 293.935 481.417 353.005C527.177 416.345 427.537 466.925 427.537 466.925Z"
      fill="#E76F00"
    />
    <path
      d="M573.425 586.14C726.058 508.145 655.488 433.195 606.23 443.293C594.155 445.763 588.773 447.905 588.773 447.905C588.773 447.905 593.255 441 601.815 438.01C699.263 404.323 774.205 537.373 570.358 590.07C570.358 590.07 572.72 587.995 573.425 586.14Z"
      fill="#5382A1"
    />
    <path
      d="M255.825 487.423C160.328 474.883 308.187 440.347 308.187 440.347C308.187 440.347 250.767 436.54 180.148 470.108C96.6442 509.83 386.702 527.895 536.85 489.063C552.46 478.58 574.035 469.495 574.035 469.495C574.035 469.495 512.592 480.285 451.402 485.362C376.53 491.53 296.147 492.733 255.825 487.423Z"
      fill="#5382A1"
    />
    <path
      d="M292.16 561.895C238.906 556.48 273.775 531.098 273.775 531.098C135.975 576.073 350.445 627.075 542.998 571.705C522.53 564.61 509.515 551.633 509.515 551.633C415.407 569.453 361.025 568.883 292.16 561.895Z"
      fill="#5382A1"
    />
    <path
      d="M315.362 642.478C262.15 636.463 293.237 618.685 293.237 618.685C168.148 653.055 369.322 724.062 528.582 656.943C502.497 646.968 483.82 635.452 483.82 635.452C412.777 648.672 379.827 649.71 315.362 642.478Z"
      fill="#5382A1"
    />
    <path
      d="M648.467 683.47C648.467 683.47 671.472 702.11 623.13 716.53C531.202 743.915 240.523 752.185 159.774 717.622C130.746 705.205 185.181 687.972 202.304 684.355C220.161 680.547 230.366 681.257 230.366 681.257C198.085 658.895 21.7122 725.167 140.778 744.147C465.488 795.93 732.692 720.827 648.467 683.47Z"
      fill="#5382A1"
    />
    <path
      d="M700 724.198C694.672 792.368 469.692 806.708 323.185 797.485C227.608 791.458 208.453 776.395 208.173 776.175C299.647 791.005 453.872 793.705 578.92 770.563C689.757 750.04 700 724.198 700 724.198Z"
      fill="#5382A1"
    />
  </motion.svg>
);

