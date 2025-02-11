import React from 'react';
import "../Home/Banner.css"

const Banner = () => {
    return (
        <div className='pt-16'>
      <div className="carousel w-full min-h-screen">
        {/* item1 */}
        <div id="slide1" className=" carousel-item relative w-full item1-bg">
          <div className="flex md:flex-row flex-col justify-between py-10 w-4/5 mx-auto items-center md:gap-0 gap-4">
            <div className="space-y-4 text-center md:text-start">
              <p className="text-white text-xl md:text-2xl lg:text-5xl font-medium">
                <h2 className=''>Your Home, Our Priority.</h2>
                <p className='text-xl pt-4'>From plumbing to painting, we've got you covered! Reliable, professional, and affordable home services to keep your house running smoothly.</p>
              </p>
              {/* <div>
                {user && user?.email ? (
                  <Link
                    to="/all-movies"
                    className="btn bg-[#37f51e81] border-2 border-[#37f51e] text-white rounded-lg"
                  >
                    Get Started
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="btn bg-[#37f51e81] border-2 border-[#37f51e] text-white rounded-lg"
                  >
                    Get Started
                  </Link>
                )}
              </div> */}
            </div>
            <div>
              <img src="" className="lg:w-64 lg:h-82 w-36 " />
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-outline">
              ❮
            </a>
            <a href="#slide2" className="btn btn-outline">
              ❯
            </a>
          </div>
        </div>
        {/* item2 */}
        <div id="slide2" className=" carousel-item relative w-full item2-bg">
          <div className="flex md:flex-row flex-col justify-between py-10 w-4/5 mx-auto items-center md:gap-0 gap-4">
            <div className="space-y-4 text-center md:text-start">
            <p className="text-white text-xl md:text-2xl lg:text-5xl font-medium">
                <h2 className=''>Redefine Comfort and Style!</h2>
                <p className='text-xl pt-4'>Discover our premium collection of luxury services, crafted to deliver unmatched sophistication and seamless journeys.</p>
              </p>
              {/* <div>
                {user && user?.email ? (
                  <Link
                    to="/all-movies"
                    className="btn bg-[#37f51e81] border-2 border-[#37f51e] text-white rounded-lg"
                  >
                    Get Started
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="btn bg-[#37f51e81] border-2 border-[#37f51e] text-white rounded-lg"
                  >
                    Get Started
                  </Link>
                )}
              </div> */}
            </div>
            <div>
              <img src="" className="lg:w-64 lg:h-82 w-36" />
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-outline">
              ❮
            </a>
            <a href="#slide3" className="btn btn-outline">
              ❯
            </a>
          </div>
        </div>
        {/* item3 */}
        <div id="slide3" className=" carousel-item relative w-full item3-bg">
          <div className="flex md:flex-row flex-col justify-between py-10 w-4/5 mx-auto items-center md:gap-0 gap-4">
            <div className="space-y-4 text-center md:text-start">
            <p className="text-white text-xl md:text-2xl lg:text-5xl font-medium">
            <h2 className=''>Drive the Future Today!</h2>
            <p className='text-xl pt-4'>Experience the thrill of innovation with our range of electric vehicles.</p>
              </p>
              {/* <div>
                {user && user?.email ? (
                  <Link
                    to="/all-movies"
                    className="btn bg-[#37f51e81] border-2 border-[#37f51e] text-white rounded-lg"
                  >
                    Get Started
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="btn bg-[#37f51e81] border-2 border-[#37f51e] text-white rounded-lg"
                  >
                    Get Started
                  </Link>
                )}
              </div> */}
            </div>
            <div>
              <img src="" className="lg:w-64 lg:h-82 w-36" />
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-outline">
              ❮
            </a>
            <a href="#slide1" className="btn btn-outline">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;