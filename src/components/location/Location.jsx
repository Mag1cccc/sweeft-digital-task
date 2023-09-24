import { useLocationFetching } from "../../hooks/useLocationFetching";

export const Location = () => {

    

    const { data, isLoading, isError } = useLocationFetching();

    if(isLoading) {
        return <h1> Loading... </h1>
    }

    if(isError) {
        return <h1> Error fetching data. </h1>
    }

    return (
        <div>
            <h1> Data from API </h1>
            <pre> {JSON.stringify(data, null, 2)} </pre>
        </div>
    )
}

