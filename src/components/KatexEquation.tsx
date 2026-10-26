import React, { useMemo } from 'react';
import katex from 'katex';

interface KatexEquationProps {
  latex?: string;
  fallbackText?: string;
  displayMode?: boolean;
  className?: string;
}

export const KatexEquation: React.FC<KatexEquationProps> = ({
  latex,
  fallbackText,
  displayMode = true,
  className = ''
}) => {
  const contentToRender = latex || fallbackText || '';

  const html = useMemo(() => {
    if (!contentToRender) return '';
    try {
      return katex.renderToString(contentToRender, {
        displayMode,
        throwOnError: false,
        strict: false
      });
    } catch (err) {
      console.warn('KaTeX rendering error:', err);
      return '';
    }
  }, [contentToRender, displayMode]);

  if (!html) {
    return (
      <div className={`font-mono text-center tracking-wide ${className}`}>
        {fallbackText || latex || ''}
      </div>
    );
  }

  return (
    <div
      className={`katex-equation select-text overflow-x-auto py-1 max-w-full text-center ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
