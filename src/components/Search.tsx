import { ReactElement } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { fetchLaunches, setSearchData } from "../features/launchSlice";
import { useAppDispatch, useAppSelector } from "../store";

const Search: React.FC = (): ReactElement => {
    const dispatch = useAppDispatch();
    const { launch } = useAppSelector(state => state);
    const handleFetchLaunches = () => {
        dispatch(fetchLaunches())
    }
    const handleChange = (dateValue: any) => {
        dispatch(setSearchData(dateValue))
    }
    return (
        <div className="flex justify-center py-10 px-4 bg-transparent">
            <div className="w-full md:w-1/4 flex flex-col md:flex-row ">
                <div className="w-full mb-3 md:mb-0">
                    <Datepicker disabled={launch.isLoading}  value={launch.searchData} onChange={handleChange} showShortcuts={true}/>
                </div>
                <button
                    onClick={handleFetchLaunches}
                    type="button"
                    disabled={launch.isLoading}
                    className="md:ml-8 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Search
                </button>
            </div>
        </div>
    )
}

export default Search;