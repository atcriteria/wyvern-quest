import { useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (<div>
        <h2>Error</h2>
        <p>It looks like you took a wrong turn, try going back to the <a onClick={(e) => e.preventDefault} href="/">Home</a> page.</p>
        <p><i>{error.statusText || error.message}</i></p>
    </div>)
}