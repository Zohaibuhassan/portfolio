import React from 'react';

const Resume = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto ">
       

       

        {/* Resume Preview */}
        
       <section className="bg-white rounded-lg">
  <iframe
    src="/Zohaib-Ul-Hassan.pdf"
    title="Zohaib Ul Hassan Resume"
    className="w-full h-screen"
  ></iframe>
</section>

      
         {/* Download Button */}
        <div className="flex justify-center mb-6">
          <a
            href="/Zohaib-Ul-Hassan.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition mt-10"
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
