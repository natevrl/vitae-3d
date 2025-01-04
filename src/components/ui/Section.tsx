import clsx from "clsx";

type SectionProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export const Section = ({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: SectionProps) => {
  return (
    <Comp
      className={clsx("px-4 first:pt-10 md:px-6", className)}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </Comp>
  );
};
