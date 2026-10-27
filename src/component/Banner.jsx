import playImage from "../assets/Play.png";
import bannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <section className="bg-gray-100 ">
      <div className="mx-auto flex  max-w-7xl items-center justify-between gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <div className=''>
          <p className="btn rounded-full bg-blue-200 text-blue-900">New: AI-Powered Tools Available</p>
          <h1 className="text-7xl font-bold my-6 ">Supercharge Your <br /> Digital Workflow</h1>
          <p>
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="mt-4 flex items-center gap-4">
            <button className="btn bg-blue-800  text-white border rounded-full">Explore Products</button>
            <button className="flex items-center gap-2 border rounded-full p-2 text-blue-800">
              <img src={playImage} alt="" /> Watch Demo
            </button>
          </div>
        </div>
        <div>        
          <img src={bannerImage} alt="" />
        </div>
      </div>        
        <div className=" flex  items-center justify-around gap-8 px-4 py-8 sm:px-6 lg:px-8 text-white bg-blue-600">
            <div className="border-r-2 pr-25">
                <h1 className="text-3xl font-bold text-center">50K+</h1>
                <p >Active Users</p>
            </div>
            <div className="border-r-2 pr-25">
                <h1 className="text-3xl font-bold text-center">200+</h1>
                <p>Premium Tools</p>
            </div>
            <div>
                <h1 className="text-3xl font-bold text-center">4.9</h1>
                <p>Average Rating</p>
            </div>
        </div>       
    </section>
  );
};

export default Banner;
