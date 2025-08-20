import myImage from './selfImage-removebg-preview.png';

const Home = () => (
  <main className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 pt-12 pb-10 bg-white min-h-screen">
    
    {/* ✅ Text Section */}
    <div className="max-w-xl text-center md:text-left mt-8 md:mt-0">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">HELLO</h2>
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
        I'm Zohaib Ul Hassan
      </h1>
      <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
        Junior Data Scientist with a passion for extracting insights from data using 
        Python, statistics, and machine learning. Skilled in data cleaning, EDA, and 
        predictive modeling. Eager to learn, collaborate, and grow in the data science community.
      </p>
      <a
        href="/Zohaib-Ul-Hassan.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-red-600 text-white px-5 md:px-6 py-2 rounded-lg hover:bg-red-700 transition text-sm md:text-base"
      >
        DOWNLOAD RESUME
      </a>
    </div>

    {/* ✅ Image Section */}
    <div className="flex justify-center md:justify-end w-full md:w-1/2">
      <img 
        src={myImage} 
        alt="Zohaib Ul Hassan" 
        className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto rounded-lg object-contain grayscale"
      />
    </div>
  </main>
);

export default Home;
