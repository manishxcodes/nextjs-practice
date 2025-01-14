import React from "react";

export default function({ children }: {children: React.ReactNode}) {
    return(
        <div>
            <div className="bg-slate-50 text-center py-1">
                20% off for the next 3 days 
            </div>
            {children}
        </div>
    )
}