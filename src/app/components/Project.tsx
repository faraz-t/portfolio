import React from "react";
import { Github } from "lucide-react";

interface ProjectProps {
  imageSrc: string;
  title: string;
  description: string;
  descriptionBold?: string;
  date?: string;
  tags?: string[];
  github?: string;
  slug?: string;
}

const Project: React.FC<ProjectProps> = ({
  imageSrc,
  title,
  description,
  descriptionBold,
  date,
  tags = [],
  github,
  slug,
}) => {
  const imageContent = (
    <div className="relative w-full h-48 md:h-56 lg:h-64 rounded-xl overflow-visible group">
      {/* glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-[120px] scale-[1.2] opacity-80 rounded-xl w-full h-full"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(100px) saturate(500%) brightness(60%)",
        }}
      ></div>

      {/* highlight overlay */}
      <div className="absolute inset-0 rounded-xl pointer-events-none transition ring-2 ring-primary/60 opacity-0 group-hover:opacity-100"></div>

      {/* image */}
      <img
        src={imageSrc}
        alt={title}
        className="relative z-10 w-full h-full object-cover rounded-xl border border-gray-300 dark:border-gray-600 transition-shadow group-hover:shadow-xl group-hover:shadow-primary/30"
      />
    </div>
  );

  return (
    <div className="flex flex-col w-full">
      {github ? (
        <a href={github} target="_blank" rel="noopener noreferrer" className="block focus:outline-none">
          {imageContent}
        </a>
      ) : (
        imageContent
      )}
      <div className="mt-4 flex flex-col gap-2 w-full">
        <div className="flex justify-between items-center">
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-large md:text-xl font-semibold text-foreground hover:underline underline-offset-4 transition"
            >
              {title}
            </a>
          ) : (
            <h3 className="text-large md:text-xl font-semibold text-foreground">
              {title}
            </h3>
          )}

          <div className="flex items-center gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm leading-5 text-gray-600 dark:text-gray-400">
          {description}
          {descriptionBold && description && " "}
          {descriptionBold && (
            <span className="font-bold">{descriptionBold}</span>
          )}
        </p>

        {/* metadata: tags (left) + date (right) */}
        {(date || tags.length > 0) && (
          <div className="flex justify-between items-center text-sm">
            <div className="flex flex-wrap gap-2 justify-start">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            {date && (
              <span className="text-gray-500 dark:text-gray-400">{date}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
