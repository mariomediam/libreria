import { useNavigate } from "react-router-dom";
import { flushSync } from 'react-dom';

export const Inicio = () => {
  const navigate = useNavigate();

  const onImageClick = (ev) => {
    ev.preventDefault();
    document.startViewTransition(() => {
      flushSync(() => {
        navigate("/detalle");
      });
    });
  };

  return (
    <div>
      <div className="top-bar">
        <div className="top-bar-content">
          <h1 className="text-slate-900 dark:text-white mt-1 text-base font-medium tracking-tight">Move Cat</h1>
        </div>
        <img
              src="https://res.cloudinary.com/djzsjzasg/image/upload/c_scale,w_300/v1678947391/malcolm-kee/meow_dtsn8h.png"
              alt="cat"
              className="cat-img thumbnail"
              onClick={onImageClick}
            />
      </div>
    </div>
  );
};
