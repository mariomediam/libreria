import { useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";

export const Detalle = () => {
  const navigate = useNavigate();

  const onImageClick = (ev) => {
    ev.preventDefault();
    document.startViewTransition(() => {
      flushSync(() => {
        navigate("/inicio");
      });
    });
  };

  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <h1 className="text-slate-900 dark:text-white mt-1 text-base font-medium tracking-tight">
          Move Cat
        </h1>
      </div>
      <div className="cat-details">
        <img
          src="https://res.cloudinary.com/djzsjzasg/image/upload/c_scale,w_500/v1678947391/malcolm-kee/meow_dtsn8h.png"
          alt="cat"
          className="cat-img detailed-img"
          onClick={onImageClick}
        />
        <div className="cat-desc">
          <h2 className="text-slate-900 dark:text-white mt-1 text-base font-medium tracking-tight">Cat Details</h2>
        </div>
      </div>
    </div>
  );
};
