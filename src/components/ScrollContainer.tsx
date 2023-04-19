import React, { useEffect, useRef, useState } from "react";

const SCROLL_BOX_MIN_HEIGHT = 20;

type ScrollContainerStyleOptionalType = {
  sb_width?: string;
  sb_color?: string;
  sbTracker_minHeight?: string;
  sbTracker_color?: string;
  sbTracker_onHoverColor?: string;
};

type ScrollContainerStyleType = {
  [P in keyof ScrollContainerStyleOptionalType]-?: ScrollContainerStyleOptionalType[P];
};
interface ScrollContainerType {
  style?: ScrollContainerStyleOptionalType;
  children: React.ReactNode;
  className?: string;
}

const DEFAULT_STYLE: ScrollContainerStyleType = {
  sb_color: "rgba(0,0,0,0.25)",
  sb_width: "20px",
  sbTracker_color: "rgba(0,0,0,0.5)",
  sbTracker_minHeight: "100px",
  sbTracker_onHoverColor: "rgba(0,0,0,0.75)",
};

const ScrollContainer: React.FC<ScrollContainerType> = ({
  style,
  children,
  className,
}) => {
  const applyStyles: ScrollContainerStyleType = parseStyle(style);

  const [hovering, setHovering] = useState(false);
  const [scrollBoxHeight, setScrollBoxHeight] = useState(SCROLL_BOX_MIN_HEIGHT);
  const [scrollBoxTop, setScrollBoxTop] = useState(0);
  const [lastScrollThumbPosition, setScrollThumbPosition] = useState(0);
  const [isDragging, setDragging] = useState(false);
  const scrollHostRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id={"sb-container"}
      style={{
        position: "relative",
        height: "100%",
      }}
    >
      <div
        ref={scrollHostRef}
        className={className}
        style={{
          position: "relative",
          height: "100%",
          overflow: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {children}
      </div>
      <div
        id={"scrollbar"}
        className={""}
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          top: 0,
          height: "100%",
          width: applyStyles.sb_width,
          backgroundColor: applyStyles.sb_color,
          opacity: 1,
          zIndex: 99,
        }}
      >
        <div
          id={"scrollbar-tracker"}
          className={"absolute h-28 w-4 "}
          style={{
            height: scrollBoxHeight,
            top: scrollBoxTop,
            backgroundColor: applyStyles.sbTracker_color,
          }}
          onMouseOver={() => console.log("over scrollbar")}
        />
      </div>
    </div>
  );
};

function parseStyle(
  style: ScrollContainerStyleOptionalType | undefined
): ScrollContainerStyleType {
  if (!style) return DEFAULT_STYLE;
  return {
    sb_color: style.sb_color ?? DEFAULT_STYLE.sb_color,
    sb_width: style.sb_width ?? DEFAULT_STYLE.sb_width,
    sbTracker_color: style.sbTracker_color ?? DEFAULT_STYLE.sbTracker_color,
    sbTracker_minHeight:
      style.sbTracker_minHeight ?? DEFAULT_STYLE.sbTracker_minHeight,
    sbTracker_onHoverColor:
      style.sbTracker_onHoverColor ?? DEFAULT_STYLE.sbTracker_onHoverColor,
  };
}

export default ScrollContainer;
