import React from 'react';

export default function ImageWithCaption({ src, alt, caption, width = '50%' }) {
  return (
    <div style={{ textAlign: 'center', margin: '2rem auto' }}>
      <img
        src={src}
        alt={alt}
        style={{
          width,
          borderRadius: '8px',
          boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
        }}
      />
      {caption && (
        <p style={{ fontStyle: 'italic', color: 'gray', marginTop: '1rem' }}>
          {caption}
        </p>
      )}
    </div>
  );
}
