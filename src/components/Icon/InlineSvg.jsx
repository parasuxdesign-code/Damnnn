import './InlineSvg.css';

/**
 * Renders a Figma-exported SVG's actual markup inline (not as an <img>),
 * so its internal <path>/<g> nodes land in the live DOM and can be
 * targeted by CSS (:hover, transitions, keyframes) or JS — unlike
 * `<img src="*.svg">`, which is opaque to both. The SVG content itself
 * is untouched; only the wrapper element carries className/style/size.
 */
export default function InlineSvg({ raw, className = '', size, label }) {
  const style = size ? { width: size, height: size } : undefined;
  return (
    <span
      className={`inline-svg ${className}`.trim()}
      style={style}
      role={label ? 'img' : 'presentation'}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      dangerouslySetInnerHTML={{ __html: raw }}
    />
  );
}
