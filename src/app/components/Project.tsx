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
    <div className="relative w-full aspect-video rounded-lg overflow-hidden group">
      {/* glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-[120px] scale-[1.2] opacity-80 rounded-lg w-full h-full"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(100px) saturate(500%) brightness(60%)",
        }}
      ></div>

      {/* highlight overlay */}
      <div className="absolute inset-0 rounded-lg pointer-events-none transition ring-1 ring-white/20 opacity-0 group-hover:opacity-100"></div>

      {/* image */}
      <img
        src={imageSrc}
        alt={title}
        className="relative z-10 w-full h-full object-cover rounded-lg border border-white/10 dark:border-white/10 transition-all group-hover:border-white/30 group-hover:shadow-lg"
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
        <div className="flex justify-between items-start gap-3">
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-lg font-semibold text-foreground hover:underline underline-offset-4 transition flex-1"
            >
              {title}
            </a>
          ) : (
            <h3 className="text-base sm:text-lg font-semibold text-foreground flex-1">
              {title}
            </h3>
          )}

          <div className="flex items-center gap-2 flex-shrink-0">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white dark:hover:text-white transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <p className="text-xs sm:text-sm leading-5 text-gray-400 dark:text-gray-400">
          {description}
          {descriptionBold && description && " "}
          {descriptionBold && (
            <span className="font-bold">{descriptionBold}</span>
          )}
        </p>

        {/* metadata: tags (left) + date (right) */}
        {(date || tags.length > 0) && (
          <div className="flex justify-between items-center text-xs gap-2 mt-2">
            <div className="flex flex-wrap gap-1 justify-start">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 border border-white/10 rounded text-gray-400 dark:text-gray-400 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            {date && (
              <span className="text-gray-500 dark:text-gray-500 flex-shrink-0">{date}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
