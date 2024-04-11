import LargeContainer from "../components/layout/containers/largeContainer";

export default function AboutSection({
    id,
}: Readonly<{
    id: string;
}>) {
    return (
        <div id={id} className="flex py-20 flex-col">
            <div className="flex py-0 flex-col lg:flex-row gap-0 md:gap-5 mb-20 max-w-screen-xl mx-auto w-full">
                <LargeContainer>
                    <h2 className="text-center text-white font-light md:text-2xl text-xl">Professional Goal</h2>
                    <p className="text-gray-400 text-sm text-center font-light mt-2 md:text-base">
                        I want to continue growing as a developer, but with a more focused and clear path. My goal is to work for an established company where I master their tech stack and grow into a senior position where I can help mentor and coach new developers.
                    </p>
                </LargeContainer>
                <LargeContainer>
                    <h2 className="text-center text-white font-light md:text-2xl text-xl">Personal Goal</h2>
                    <p className="text-gray-400 text-sm text-center font-light mt-2 md:text-base">
                        I want release content to help simplify the digital aspects of launching a brand/business for early entrepreneurs. From online advertising to building a website, getting their email set up, social media, email marketing, booking engines, and phone systems.
                    </p>
                </LargeContainer>
                <LargeContainer>
                    <h2 className="text-center text-white font-light md:text-2xl text-xl">Developer Goal</h2>
                    <p className="text-gray-400 text-sm text-center font-light mt-2 md:text-base">
                        The next exciting project I want to build is a dashboard that connects multiple 3rd party APIs and services together. I will get to leverage my frontend skills, enhance my backend knowledge, and dive deep into utilizing APIs.
                    </p>
                </LargeContainer>
            </div>
            <LargeContainer>
                <h2 className="text-center text-white font-light md:text-5xl text-3xl">More About Me</h2>
                <p className="text-center text-gray-300 font-light text-lg mt-1">A little more context of who I am as a person.</p>
            </LargeContainer>
            <div className="flex flex-col lg:flex-row md:gap-10 max-w-screen-lg mx-auto w-full">
                <LargeContainer>
                    <h2 className="text-center text-white font-light md:text-2xl text-xl">Work Life</h2>
                    <ul className="text-gray-400 text-sm text-center font-light mt-2 md:text-base">
                        <li>
                            💻 I started freelancing as a web dev in college.
                        </li>
                        <li>
                            🎓 Started as a Junior React Dev out of college.
                        </li>
                        <li>
                            🤓 Grew into an Intermediate Dev in 4 months.
                        </li>
                        <li>
                            📰 Started UX Strategy & Web Design professionally.
                        </li>
                        <li>
                            👋 Left Agency life in 2022 and started Freelancing.
                        </li>
                    </ul>
                </LargeContainer>
                <LargeContainer>
                    <h2 className="text-center text-white font-light md:text-2xl text-xl">Hobbies & Interests</h2>
                    <ul className="text-gray-400 text-sm text-center font-light mt-2 md:text-base w-max">
                        <li>
                            ☕ As a dev I traditionally can't live without coffee.
                        </li>
                        <li>
                            🐮 I have a sweet spot for animals of all kinds.
                        </li>
                        <li>
                            🍺 What can I say, I love a craft beer or a classic Pabst.
                        </li>
                        <li>
                            🔨 I'm a sucker for building furniture and home renos.
                        </li>
                        <li>
                            🧑‍🔧 I was a mechanic in a past life and old habits die hard.
                        </li>
                    </ul>
                </LargeContainer>
            </div>
        </div>
    );
};
