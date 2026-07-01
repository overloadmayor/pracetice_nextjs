'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProductImageGallery({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 relative">
        <Image
          src={images[selected]}
          alt={productName}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-3 mt-3">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all relative ${
                selected === index
                  ? 'border-indigo-500 ring-2 ring-indigo-200'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Image src={img} alt="" fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
