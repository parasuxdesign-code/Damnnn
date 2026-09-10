import './Icon.css';

/**
 * Google Material Symbols icon, rendered in a two-tone style: a filled glyph
 * underneath at reduced opacity plus the outlined glyph on top, matching the
 * "Two Tone" look from https://fonts.google.com/icons?icon.style=Two+tone
 * (Material Symbols ships Outlined/Rounded/Sharp fonts, not a separate
 * Two Tone webfont, so the two-tone effect is composed here from those axes).
 */
export default function Icon({ name, className = '', size = 24, label }) {
  const style = { fontSize: size, width: size, height: size };
  return (
    <span
      className={`icon-two-tone ${className}`}
      style={style}
      role={label ? 'img' : 'presentation'}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <span className="material-symbols-outlined icon-two-tone__fill" style={style}>{name}</span>
      <span className="material-symbols-outlined icon-two-tone__line" style={style}>{name}</span>
    </span>
  );
}
