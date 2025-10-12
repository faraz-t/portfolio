import React from "react";

interface ProjectProps {
  imageSrc: string;
  title: string;
  description: string;
  date?: string;
  tags?: string[];
}

const Project: React.FC<ProjectProps> = ({
  imageSrc,
  title,
  description,
  date,
  tags = [],
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-64 md:h-72 lg:h-80 rounded-3xl border border-gray-300 dark:border-gray-600 object-cover"
      />

      {/* Text block */}
      <div className="mt-4 flex flex-col gap-2 w-full">
        {/* Title and description */}
        <h3 className="text-xl md:text-2xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>

        {/* Metadata - right aligned */}
        {(date || tags.length > 0) && (
          <div className="flex justify-between items-center text-sm text-gray-400 dark:text-gray-500 mt-2">
            <div /> {/* Empty left side for spacing */}
            <div className="flex gap-2">
              {date && <span>{date}</span>}
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
