const BlockCollection = ({
    children,
    className,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
  return (
    <div className={`flex container mx-auto gap-5 ${className}`}>
        {children}
    </div>
  )
}

export default BlockCollection