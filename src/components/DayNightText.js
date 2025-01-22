import React from 'react';
import useColor from '@site/src/hooks/useColor';

export default function DNText({ children, style, ...props }) {
  const { textColor } = useColor();
  return (
    <p
      style={{
        color: textColor,
        ...style,
      }}
      {...props}
    >
      {children}
    </p>
  );
}
