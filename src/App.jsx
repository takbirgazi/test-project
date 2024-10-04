import './App.css'
import bannerImage1 from "./assets/images/banner/banner-img-1.jpg";
import bannerImage2 from "./assets/images/banner/banner-img-2.jpg";
import bannerImage3 from "./assets/images/banner/banner-img-3.jpg";
import bannerImage4 from "./assets/images/banner/banner-img-4.jpg";

function App() {

  return (
    <>
      <section className="banner-section relative py-16 mx-5">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            {/* Content Column */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 px-4">
              <div data-animation-box className="content-box mr-8">
                <span data-animation-text className="sub-title block text-[#6600ff] text-sm font-semibold mb-4" data-animation="overlay-animation">
                  AI Image
                </span>
                <h2 className="text-5xl md:text-4xl lg:text-6xl font-bold mb-4">
                  Turn your Text into the <span className="text-[#6600ff]">Images</span> in Seconds
                </h2>
                <p className="my-10 text-gray-600 text-lg">
                  Convert words into an image in mere seconds with the Image Generator. Type a detailed description.
                </p>
                {/* Form */}
                <div className="form-inner">
                  <form method="post" action="index.html">
                    <div className="form-group flex flex-col md:flex-row relative items-center gap-5">
                      <input
                        type="text"
                        name="text"
                        placeholder="Describe what you want to see"
                        required
                        className="w-full border border-gray-300 rounded-full text-sm md:text-base text-gray-400 bg-white px-6 py-5 shadow-lg transition-all duration-500 ease-in-out"
                      />
                      <button type="submit" className="w-full md:w-auto relative md:absolute right-0 theme-btn bg-[#6600ff] text-white px-8 py-5 rounded-full hover:bg-gray-950 transition">
                        Generate
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative image-box">
                <div className="image-shape">
                  <div className={`shape-1 absolute -top-2 md:-top-8 -left-8 w-full h-56 md:w-48 md:h-48 bg-[url(./assets/images/shape/shape-1.png)] bg-origin-content -z-10`}></div>
                  <div className="shape-2 absolute bottom-1/3 -right-5 w-full h-56 md:w-56 md:h-56 bg-[url(./assets/images/shape/shape-2.png)] -z-10 bg-origin-content"></div>
                </div>
                <div className="flex flex-col md:flex-row flex-wrap">
                  <div className="w-full md:w-1/2 p-2">
                    <figure className="image">
                      <img src={bannerImage1} alt="" className="w-full h-auto rounded shadow-lg" />
                    </figure>
                  </div>
                  <div className="w-full md:w-1/2 p-2">
                    <figure className="image">
                      <img src={bannerImage2} alt="" className="w-full h-auto rounded shadow-lg" />
                    </figure>
                  </div>
                  <div className="w-full md:w-1/2 p-2">
                    <figure className="image">
                      <img src={bannerImage3} alt="" className="w-full h-auto rounded shadow-lg" />
                    </figure>
                  </div>
                  <div className="w-full md:w-1/2 p-2">
                    <figure className="image">
                      <img src={bannerImage4} alt="" className="w-full h-auto rounded shadow-lg" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default App
