import { ReactElement } from "react";
import { useRouteError } from "react-router";

const ErrorPage: React.FC = (): ReactElement => {
    const error: any = useRouteError();
    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
};

export default ErrorPage;