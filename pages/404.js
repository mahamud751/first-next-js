import { useRouter } from "next/router"
import { useEffect } from "react";



const ErrorPage = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000);
    }, [])
    return (
        <div>
            <h1>This is error page</h1>



        </div>
    )
}

export default ErrorPage
