const BlockCollection = ({
    children,
    className,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
  return (
    <div className={`flex max-xl:flex-col-reverse container mx-auto gap-5 *:max-xl:w-full ${className}`}>
        {children}
    </div>
  )
}

export default BlockCollection