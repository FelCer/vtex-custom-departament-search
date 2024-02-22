import React, { useState } from "react";
import { useQuery } from "react-apollo";
import QUERY_DEPARTMENT from '../graphql/getDepartmentGroup.graphql'
import DepartmentGroup from "./DepartmentGroup";
import { SearchBar } from 'vtex.store-components'

const DepartmentSearch = () => {
    const { data, loading } = useQuery(QUERY_DEPARTMENT)
    const [slug, setSlug] = useState("");
    console.log(slug)
    return (
        loading
            ?
            <div>loading....................</div>
            :
            <div className="flex">
                <DepartmentGroup
                    departments={data?.categories[3]?.children}
                    handleSetSlug={setSlug}
                />
                <SearchBar
                    customSearchPageUrl={slug}
                    placeholder="¿Que buscas con las categorias escogidas?"
                    displayMode="search-and-clear-buttons"
                />
            </div>
    )
}
export default DepartmentSearch;