import React from "react";
import { ReactElement } from "react";
import { ILaunch } from "../types/launch";
import Launch from "./Launch";

type Prop = {
    launches: ILaunch[]
}

const Launches: React.FC<Prop> = ({ launches }): ReactElement => {
    return (
        <React.Fragment>
            <div className="grid gap-8 grid-cols-3 grid-rows-3 px-28">
                {
                    launches.map(launch => (
                        <Launch launch={launch} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}

export default Launches;