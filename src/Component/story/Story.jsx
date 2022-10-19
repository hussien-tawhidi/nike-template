import { Swiper, SwiperSlide } from "swiper/react";
import hashtag from "../../assets/hashtag.png";
import clock from "../../assets/clock.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../style.css";
import heart from "../../assets/heart.png";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Title from "../utilities/Title";
import { truncate } from "lodash";
const Story = ({ story: { title, news } }) => {
  return (
    <div className="story">
      <Title title={title} />
      <div className="card-content">
        <Swiper
          breakpoints={{
            450: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1150: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1250: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          slidesPerGroup={1}
          navigation={true}
          loopFillGroupWithBlank={true}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {news.map((n, i) => (
            <SwiperSlide key={i}>
              <div className="card card-story">
                <img src={n.img} alt="" className="card-img card-img-custome" />
                <div className="card-reactions">
                  <div className="card-icon">
                    <img src={heart} alt="" />
                    <span>{n.like}</span>
                  </div>
                  <div className="card-icon">
                    <img src={clock} alt="" />
                    <span>{n.time}</span>
                  </div>
                  <div className="card-icon">
                    <img src={hashtag} alt="" />
                    <span>{n.by}</span>
                  </div>
                </div>
                <div className="text">
                  <h6>{n.title}</h6>
                  <p>{truncate(n.text, { length: 100 })}</p>
                  <a href={n.url}>{n.btn}</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Story;
