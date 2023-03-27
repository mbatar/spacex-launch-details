import { ReactElement, useState } from "react";
import { fetchLaunches } from "../features/launchSlice";
import { useAppDispatch } from "../store";
import { ISearchData } from "../types/launch";
import DatePicker from "./DatePicker";

const Search: React.FC = (): ReactElement => {
    const dispatch = useAppDispatch();
    
    const [searchData, setSearchData] = useState<ISearchData>({ startDate: '', endDate: '' });
    const handleSetSearchData = (opType: string, value: string): void => {
        setSearchData(searchData => ({ ...searchData, [opType]: value }))
    }
    const handleFetchLaunches = () => {
        dispatch(fetchLaunches(searchData))
    }
    return (
        <div className="flex justify-center py-10 bg-transparent">
            <div className="w-30 mr-8">
                <DatePicker opType="startDate" handleSetSearchData={handleSetSearchData} />
            </div>
            <div className="w-30">
                <DatePicker opType="endDate" handleSetSearchData={handleSetSearchData} />
            </div>
            <button
                onClick={handleFetchLaunches}
                type="button"
                className="ml-8 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Search
            </button>
        </div>
    )
}

export default Search;