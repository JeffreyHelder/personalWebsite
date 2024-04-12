type PortfolioCardProps = {
    title: string,
    image: string,
    link: string,
    description: string,
    repo?: string
}

export default function PortfolioCard({ title, image, link, description, repo}: PortfolioCardProps) {
    return (
        <div className="col-span-1 flex flex-col items-center border-sm bg-white/5 rounded-md max-w-[400px] w-full mx-auto shadow-lg overflow-hidden">
            <div className='w-full h-[150px] md:h-[200px] bg-blue-200 overflow-hidden relative'>
                <img src={image} alt={title} className="w-[400px] h-[200px] max-w-none max-h-none absolute left-[50%] -translate-x-[50%] aspect-auto	"/>
            </div>
            <div className="w-full p-5 flex flex-col gap-2">
                <h3 className="text-lg text-gray-200">{title}</h3>
                <p className="text-base text-gray-400">{description}</p>
                <div className="w-full flex justify-between">
                    <a href={link} target="_blank" rel="noreferrer" className="text-blue-400 w-max hover:underline hover:text-blue-600">Live demo</a>
                    {repo && <a href={repo} target="_blank" rel="noreferrer" className="text-blue-400 w-max hover:underline hover:text-blue-600">View Code</a>}
                </div>
            </div>
        </div>
    );
}; 