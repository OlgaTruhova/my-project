import React from 'react';

export const DropDownListForSearchForm = ({servis}) => {
    return (
        <option value={servis} id={`sel${servis}`}>{servis}</option>
    )
}