import React, { act, useEffect, useState } from 'react';
import useCursorStore from '@/app/store/cursorStore';
import S from './style.module.scss';

export default function ArrowKeys() {
  const { x, y, setY, setX } = useCursorStore();
  const [activedButton, setActivedButton] = useState('');
  const up = () => {
    setActivedButton('up');
    setY(y - 1);
  };
  const down = () => {
    setActivedButton('down');
    setY(y + 1);
  };
  const left = () => {
    setActivedButton('left');
    setX(x - 1);
  };
  const right = () => {
    setActivedButton('right');
    setX(x + 1);
  };

  useEffect(() => {
    if (!window) {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          up();
          break;
        case 'ArrowDown':
          down();
          break;
        case 'ArrowLeft':
          left();
          break;
        case 'ArrowRight':
          right();
          break;
        default:
          break;
      }
    };

    const handleKeyUp = () => {
      setActivedButton('');
    };

    // Adding event listener
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [x, y]);

  return (
    <div className={S.buttons} onPointerUp={() => setActivedButton('')}>
      <div className={S.row}>
        <button
          onPointerDown={up}
          onPointerOver={() => activedButton !== '' && up()}
          className={`${activedButton === 'up' && S.active}`}
        >
          <div className={S.text}>Up</div>
        </button>
        <button
          onPointerDown={right}
          onPointerOver={() => activedButton !== '' && right()}
          className={`${activedButton === 'right' && S.active}`}
        >
          <div className={S.text}>Right</div>
        </button>
      </div>
      <div className={S.row}>
        <button
          onPointerDown={left}
          onPointerOver={() => activedButton !== '' && left()}
          className={`${activedButton === 'left' && S.active}`}
        >
          <div className={S.text}>Left</div>
        </button>
        <button
          onPointerDown={down}
          onPointerOver={() => activedButton !== '' && down()}
          className={`${activedButton === 'down' && S.active}`}
        >
          <div className={S.text}>Down</div>
        </button>
      </div>
    </div>
  );
}
