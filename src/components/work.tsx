import Image from "next/image";
import { work } from "../data/work";
import { Badge } from "@/components/ui/badge"
import { Diamond, Gem } from "lucide-react";

const WorkTab = () => {
  return (
    <ul className="w-full rounded border">
      {work.map((job, index) => (
        <>
          {/* Card */}
          <li key={index} className="flex gap-10 px-10">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[1px] h-5 bg-gray-600"></div>
              <div className="h-12 w-10 relative rounded-full bg-white">
                <Image
                  src={job.image}
                  alt={job.company}
                  fill
                  sizes="100%"
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
                  <li className="text-justify break-words hyphens-auto">{desc}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                {job?.keywords?.map((keyword) => (
                  <Badge>
                    <Gem size={10} className="mr-1" />
                    {keyword}
                  </Badge>
                ))}
                </div>
            </div>
          </li>
        </>
      ))}
    </ul>
  );
};

export default WorkTab;
