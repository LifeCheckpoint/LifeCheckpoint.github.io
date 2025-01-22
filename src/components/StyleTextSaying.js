import React from 'react';

// developing...

const StyleTextSaying = ({ children, textShadow, fontSize, color, transitionDuration = '0.3s' }) => {
  // 自定义样式
  const pStyle = {
    fontSize: fontSize || '20px', // 默认字号为 20px
    color: color || 'white', // 默认文字颜色为白色
    textShadow: textShadow || '1px 1px 2px rgb(112, 208, 166), -1px -1px 2px rgb(112, 208, 166), 1px -1px 2px rgb(112, 208, 166), -1px 1px 2px rgb(112, 208, 166)', // 默认 textShadow
    marginTop: '10px',
    position: 'relative', // 确保伪元素定位在文本上方
  };

  // 下划线样式
  const underlineStyle = {
    content: "''",
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 0,
    height: '2px', // 下划线的高度
    backgroundColor: color || 'white', // 下划线颜色与文字颜色一致
    transition: `width ${transitionDuration} ease`, // 平滑过渡
  };

  return (
    <p style={pStyle} className="underline-text">
      {children}
      <style jsx>{`
        .underline-text::after {
          ${Object.entries(underlineStyle).map(([key, value]) => `${key}: ${value};`).join(' ')}
        }

        .underline-text:hover::after {
          width: 100%;
        }
      `}</style>
    </p>
  );
};

export default StyleTextSaying;
