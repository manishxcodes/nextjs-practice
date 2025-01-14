"use client"

export function Button() {
    function handleClick() {
        console.log("button is clicked");
    }

    return (
        <button className="my-2 bg-black text-white text-sm px-4 py-2 rounded-md"
            onClick={handleClick}
        >
        Sign in</button>
    )
}
