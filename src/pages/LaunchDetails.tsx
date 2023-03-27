import { ReactElement } from "react";
import { useParams } from "react-router-dom";

const LaunchDetails: React.FC = (): ReactElement => {
    const {launchId} = useParams();
    console.log(launchId)
    return (
        <div>

        </div>
    )
}

export default LaunchDetails;