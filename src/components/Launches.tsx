import React from "react";
import { ReactElement } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchLaunches } from "../features/launchSlice";
import { useAppDispatch, useAppSelector } from "../store";
import { ILaunch } from "../types/launch";
import Launch from "./Launch";

type Prop = {
    launches: ILaunch[]
}

const Launches: React.FC<Prop> = ({ launches }): ReactElement => {
    const dispatch = useAppDispatch();
    const { launch } = useAppSelector(state => state)
    return (


        <InfiniteScroll
            dataLength={launches.length} //This is important field to render the next data
            next={() => dispatch(fetchLaunches())}
            hasMore={launch.hasNextPage}
            loader={<h4>Loading...</h4>}
        >
            <div className="grid gap-8 grid-cols-1 md:grid-cols-3 grid-rows-1 md:grid-rows-3 px-4 md:px-28">
                {
                    launches.map(launch => (
                        <Launch launch={launch} />
                    ))
                }
            </div>
        </InfiniteScroll>

    )
}
export default Launches;