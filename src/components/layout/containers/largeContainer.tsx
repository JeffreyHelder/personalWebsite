export default function LargeContainer({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="mx-auto max-w-screen-lg w-full flex flex-col items-center py-5">
            {children}
        </div>
    );
};
