export default function PortfolioCard(props: {label?: string, link?: string}) {
    return (
        <div className="col-span-1 flex flex-col items-center border-sm bg-white/5 rounded-md max-w-[400px] w-full mx-auto shadow-lg overflow-hidden">
            <div className="w-full h-[150px] md:h-[180px] bg-blue-200 bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"/>
            <div className="w-full p-5 flex flex-col gap-2">
                <h3 className="text-lg text-gray-200">This is card title</h3>
                <p className="text-base text-gray-400">This is card description</p>
                <div className="w-full flex justify-between">
                    <a href="#work" className="text-blue-400 w-max hover:underline hover:text-blue-600">Live demo</a>
                    <a href="#work" className="text-blue-400 w-max hover:underline hover:text-blue-600">View Code</a>
                </div>
            </div>
        </div>
    );
};