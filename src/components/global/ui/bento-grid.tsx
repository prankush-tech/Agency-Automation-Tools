import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  className2,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  className2?: string
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  dark:bg-neutral-900 dark:border-white/[0.2] bg-gray-100 border border-transparent justify-between flex flex-col",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 ">
        <div className="">
          {title ? (
            <div className="p-6">
              {icon}
              <div className={"font-sans font-bold text-neutral-900 mb-2 mt-2 text-lg " + className2}>
                {title}
              </div>
              <div className={"font-sans font-normal text-neutral-600 text-xs " + className2}>
                {description}
              </div>
            </div>
          ) : (
            <div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
