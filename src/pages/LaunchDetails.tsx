import moment from "moment";
import { ReactElement, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../store";
import { ILaunch } from "../types/launch";

const LaunchDetails: React.FC = (): ReactElement => {
    const { launchId } = useParams();
    const { launch } = useAppSelector(state => state);
    const [selectedLaunch, setSelectedLaunch] = useState<ILaunch | null>(null);
    useEffect(() => {
        const selected = launch.docs.filter(doc => doc.id === launchId)[0];
        setSelectedLaunch(selected)
    }, [launchId, launch])
    return (
        <div className="w-screen h-screen flex justify-center items-center text-white py-14 px-4">
            <div className="md:w-1/2">
                {selectedLaunch?.name && <h1 className="text-2xl font-bold uppercase">{selectedLaunch?.name}</h1>}
                {selectedLaunch?.date_local && <div className="uppercase">{moment(selectedLaunch?.date_local).format('MMMM d, YYYY')}</div>}
                {selectedLaunch?.links.youtube_id && <iframe className="my-4 rounded" width="100%" height="540" src={`https://www.youtube.com/embed/${selectedLaunch?.links.youtube_id}?controls=0`} title={selectedLaunch?.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>}
                {selectedLaunch?.details && <div className="mb-1">{selectedLaunch?.details}</div>}
                {selectedLaunch?.failures.length ? selectedLaunch.failures.map((failure) => (
                    <div>{failure.reason}</div>
                )) : null}
                <div>
                    <a className="border py-3 px-4 mt-2 inline-block hover:bg-white hover:text-black rounded transition ease-in-out delay-50" href={selectedLaunch?.links.article || ''} target="_blank">GO TO DETAILS</a>
                </div>
            </div>
        </div>
    )
}

export default LaunchDetails;