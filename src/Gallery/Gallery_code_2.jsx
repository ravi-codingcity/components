import React, { useRef } from "react";

function Gallery_code_2() {
  const codeRef = useRef();

  // Function to handle the copy button click
  const handleCopy = () => {
    navigator.clipboard.writeText(codeRef.current.textContent).then(() => {
      alert("Code copied to clipboard!");
    });
  };
  return (
    <div>
      <div className=" bg-gray-900 text-gray-200 font-mono flex items-center justify-center p-3">
        <div className="w-full max-w-5xl bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center justify-between bg-gray-700 p-3">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <div className="text-sm text-gray-400">index.js</div>
            <button
              onClick={handleCopy}
              className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
            >
              Copy
            </button>
          </div>

          {/* Code Block */}
          <div className="p-4 overflow-auto bg-gray-900">
            <pre
              ref={codeRef}
              className="text-sm text-gray-200 whitespace-pre-wrap"
            >
              <code className="block">
                {`
const Gallery_2 = () => {
  const images = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.slice(0, 3).map((src, index) => (
        <div key={index} className="grid gap-4">
          <img className="h-auto max-w-full rounded-lg" src={src} alt={Image {index + 1}} />
        </div>
      ))}
      {images.slice(3, 6).map((src, index) => (
        <div key={index + 3} className="grid gap-4">
          <img className="h-auto max-w-full rounded-lg" src={src} alt={Image {index + 4}} />
        </div>
      ))}
      {images.slice(6, 9).map((src, index) => (
        <div key={index + 6} className="grid gap-4">
          <img className="h-auto max-w-full rounded-lg" src={src} alt={Image {index + 7}} />
        </div>
      ))}
      {images.slice(9, 12).map((src, index) => (
        <div key={index + 9} className="grid gap-4">
          <img className="h-auto max-w-full rounded-lg" src={src} alt={Image {index + 10}} />
        </div>
      ))}
    </div>
  );
};

`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery_code_2;
