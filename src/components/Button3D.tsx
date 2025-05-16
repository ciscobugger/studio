import { CSSProperties } from 'react';
import './Button3D.scss';

interface Button3DProps {
  text: string;
  href: string;
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
}

const Button3D = ({ text, href, className = '', onClick, style }: Button3DProps) => {
  return (
    <div className="button-flex">
      <div className={`button-3d ${className}`} style={style}>
        <div className="button-inner">
          <a 
            href={href} 
            onClick={onClick}
            className="button-face front"
            aria-label={text}
          >
            <span>{text}</span>
          </a>
          <a 
            href={href} 
            onClick={onClick}
            className="button-face back"
            aria-label={text}
          >
            <span>{text}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Button3D;
