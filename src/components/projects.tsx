import { calistoga } from "@/fonts/calistoga";
import { Button } from "./ui/button";
import Link from "next/link";
import { projects } from "@/data/projects";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Figma, Github, Globe } from "lucide-react";

const Projects = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className={`flex justify-between items-center`}>
        <h2 className={`${calistoga.className} text-3xl`}>Featured Projects</h2>
        <Link href={"/projects"}>
          <Button className="dark:text-gray-400" variant={"link"}>
            View More
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.slice(0,2).map((project, index) => (
          <div
            key={index}
            className="rounded-xl border bg-card text-card-foreground shadow flex flex-col"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <Image
                className="object-cover"
                src={project.image}
                alt="project image"
                width={500}
                height={300}
              />
            </div>
            <div className="p-6 flex flex-col gap-2 pt-0">
              <h3 className="font-bold">{project.title}</h3>
              <p className="text-gray-500 text-xs dark:text-gray-400 text-justify">
                {project.description}
              </p>
            </div>
            <div className="p-6 pt-0 flex h-full flex-col items-start justify-between gap-4">
              <div className="flex gap-2 flex-wrap">
                {project.keywords.map((keyword, index) => (
                  <Badge className="text-[10px]" variant={"secondary"}>
                    {keyword}
                  </Badge>
                ))}
              </div>
              <div className="flex justify-start gap-2">
              {project?.source && (
                  <Link href={project?.source} className="text-[10px]">
                  <Button variant={"default"} size={"sm"}>
                    <Github size={8} />
                    Source
                  </Button>
                </Link>
                )}
                {project?.adminwebsite && (
                  <Link href={project?.adminwebsite} className="text-[10px]">
                  <Button variant={"default"} size={"sm"}>
                    <Globe size={8} />
                    Admin Website
                  </Button>
                </Link>
                )}
                {project?.website && (
                  <Link href={project?.website} className="text-[10px]">
                  <Button variant={"default"} size={"sm"}>
                    <Globe size={8} />
                    Website
                  </Button>
                </Link>
                )}
                {project?.figma && (
                  <Link href={project?.figma} className="text-[10px]">
                  <Button variant={"default"} size={"sm"}>
                    <Figma size={8} />
                    Design
                  </Button>
                </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
