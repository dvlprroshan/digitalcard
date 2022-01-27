import type { FunctionComponent, ReactElement } from "react";
import { useState, useEffect } from "react";
import style from "@/styles/components/MainComponent.module.scss";
import Image from "next/image";

const MainComponent: FunctionComponent = (): ReactElement => {
  // useEffect(() => {

  // }, []);

  const [currentSlide, setCurrentSlide] = useState(2);
  return (
    <div className={style.root}>
      <div className={style.m_title}>
        <h1>Digital Card Details</h1>
      </div>
      <div className={style.m_inner}>
        <div className={style.slider}>
          <div className={style.slider_inner}>
            {[1, 2, 3].map((id: number, i: number) => {
              return (
                <div
                  className={`${style.slider_item} `}
                  key={i}
                  // draggable={true}
                  onMouseEnter={() => {
                    setCurrentSlide(id);
                  }}
                  style={{
                    backgroundImage: `url('/assets/card${i + 1}.jpg')`,
                    marginLeft: `${(id - 1) * 140}px `,
                    transform: `translateZ(-${
                      (id === 1 && currentSlide === 3 && 90) || id * 30
                    }px)  translateY(${
                      (id === 1 && currentSlide === 3 && 45) || id * 15
                    }px) ${currentSlide === id ? "scale(1.2)" : ""}`,
                    zIndex:
                      (id === 1 && currentSlide === 3 && -10) ||
                      (currentSlide === id ? 10 : -id),
                  }}
                ></div>
              );
            })}
          </div>
          <div className={style.slider_dots}>
            {[1, 2, 3].map((id: number) => {
              return (
                <div
                  key={id}
                  className={currentSlide === id ? style.active_dot : ""}
                ></div>
              );
            })}
          </div>
        </div>
        <div className={style.details}>
          <div className={style.d_title}>Card Title</div>
          <div className={style.d_price}>
            <b>{"$499"}</b>
            <i>{"$2000"}</i>
            <strong>{"75% Off"}</strong>
          </div>
          <div className={style.d_desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            beatae perspiciatis nesciunt. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Porro, sed.
          </div>
          <div className={style.d_btn}>Try This Card</div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
