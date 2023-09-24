import { fetchData } from "../components/location/FetchData";
import { useQuery } from "@tanstack/react-query";

export const useLocationFetching = () => {
    return useQuery('data', fetchData);
};
