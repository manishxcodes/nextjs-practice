import { Appbar } from "@/components/appbar";
import { getServerSession } from "next-auth"

export default async function() {
    const session = await getServerSession();
    return (
        <div>
            <Appbar />
            {JSON.stringify(session)}
        </div>
    )
}