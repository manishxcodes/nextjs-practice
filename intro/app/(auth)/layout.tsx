export default function({ children }: {children: React.ReactNode}) {
    return (
        <div>
            <div className="bg-black text-white text-center py-1">
                this is a banner for both signin and signup page
            </div>
            {children}
        </div>
    )
}