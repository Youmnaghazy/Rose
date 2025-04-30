
interface IProps {
    children: React.ReactNode;
    className?: string;
}


const Container = ({children,className}:IProps) => {
    return (
        <div className={`w-full px-4 md:px-6 lg:px-14 xl:px-20 py-4 ${className}`}>
            {children}
        </div>
    )
}

export default Container;