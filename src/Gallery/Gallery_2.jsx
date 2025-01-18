import React from "react";

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
          <img className="h-auto max-w-full rounded-lg" src={src} alt={`Image ${index + 1}`} />
        </div>
      ))}
      {images.slice(3, 6).map((src, index) => (
        <div key={index + 3} className="grid gap-4">
          <img className="h-auto max-w-full rounded-lg" src={src} alt={`Image ${index + 4}`} />
        </div>
      ))}
      {images.slice(6, 9).map((src, index) => (
        <div key={index + 6} className="grid gap-4">
          <img className="h-auto max-w-full rounded-lg" src={src} alt={`Image ${index + 7}`} />
        </div>
      ))}
      {images.slice(9, 12).map((src, index) => (
        <div key={index + 9} className="grid gap-4">
          <img className="h-auto max-w-full rounded-lg" src={src} alt={`Image ${index + 10}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery_2;
