export default function Spacer(
    {
        className,
        children,
    }: {
            className?: string,
            children?: React.ReactNode
    }) {
    
    return <>
        <div className={className}>
            {children}
        </div>
    </>
}