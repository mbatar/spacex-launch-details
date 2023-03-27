import { ReactElement, useEffect } from "react";
import { Link } from "react-router-dom";
import { ILaunch } from "../types/launch";

type Prop = {
    launch: ILaunch
}
const Launch: React.FC<Prop> = ({ launch }): ReactElement => {
    return (
        <Link to={`launch/${launch.id}`}>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded drop-shadow-lg text-white cursor-pointer p-8 rounded group" key={launch.date_local}>
                <div className="flex justify-center">
                    <img className="transition ease-in-out delay-150 group-hover:scale-105" src={launch.links.patch.small} alt="" />
                </div>
                <div className="mt-12">
                    <h2 className="text-xl uppercase mb-2">MARCH 24, 2023</h2>
                    <h2 className="text-2xl font-bold uppercase">{launch.name}</h2>
                </div>
            </div>
        </Link>
    )
}

export default Launch;