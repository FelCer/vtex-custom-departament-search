import React from "react";
import { Category, Departments } from "../typings/departmentGroup";

const DepartmentGroup = ({ departments, handleSetSlug }: Departments) => {
    const onHandleSetSLug = (event: any) => {
        handleSetSlug(`${event.target.value}/$\{term\}&map=ft`)
    }

    const departmentsOptions: any = departments.map((department: Category) => {
        return (
            <option
                key={department.id}
                value={department.slug}
            >
                {department.name}
            </option>
        )
    });

    return (
        <select
            name="selectDeparment"
            id="selectDeparment"
            defaultValue="value0"
            onChange={onHandleSetSLug}
        >
            <option value="value0" disabled>Seleccione una opción</option>
            {departmentsOptions}
        </select>
    )
}

export default DepartmentGroup;
