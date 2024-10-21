import { auth } from "@clerk/nextjs/server";

export default function Home() {
    const { userId, getToken } = auth();
    
    return (
        <div>
            <p>Hello {getToken()}</p>
        </div>
    );
}