
import { useRouteError } from "react-router-dom";

const ErrorPage = ()=>{
    const error = useRouteError();
    // console.error(error);
/**
 * 
{
    "status": 404,
    "statusText": "Not Found",
    "internal": true,
    "data": "Error: No route matches URL \"/restaurants/831067/menu/s\"",
    "error": {}
}
 * 
 */


    if(error.status === 404){
        return(
            <>
                <h1 className="@xs:bg-amber-400 @lg:bg-red-400">Page Not Found</h1>
            </>
        )
    }


    return(
        <>
        <h1>
            Something went wrong yani error aa gyi hai meri behen
        </h1>
        <p>
            {error.statusText}
            {error.status}
        </p>
        </>
    )
}

export default ErrorPage;

