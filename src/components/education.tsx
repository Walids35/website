import Image from 'next/image';
import React from 'react'
import { education } from '../data/education';

const EducationTab = () => {
  return (
    <div className="w-full rounded border">
      {education.map((job, index) => (
        <>
          {/* Card */}
          <div key={index} className="flex gap-10 px-10">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[1px] h-5 bg-gray-600"></div>
              <div className="h-12 w-10 relative bg-white rounded-full">
                <Image
                  src={job.image}
                  alt={job.company}
                  fill
                  sizes='100%'
                  className="object-contain rounded-full"
                  />
              </div>
              <div className="w-[1px] h-full bg-gray-600"></div>
            </div>
            <div className="flex flex-col gap- py-5">
              <p className="dark:text-gray-400 text-sm">{job.date}</p>
              <h3 className="font-bold">{job.company}</h3>
              <p className="dark:text-gray-400 text-sm">
                {job.position}
              </p>
              <ul className="text-sm list-disc list-inside mt-2">
                {job.description.map((desc) => (
                  <li>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default EducationTab