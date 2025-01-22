import React from 'react';
import '@site/src/css/custom.css'; // 确保引入了 CSS 文件

const ProgressBar = ({ progress }) => {
    const validProgress = Math.min(Math.max(progress, 0), 100);
  
    return (
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{
            width: `${validProgress}%`, // 动态设置进度条宽度
          }}
        ></div>
      </div>
    );
  };
  
  export default ProgressBar;