import { useState } from "react";

import AdvancedSearchOption from "@/components/searchBar/AdvancedSearchOption";

import Styles from "@/components/searchBar/SearchBarAdvanced.module.scss";

interface SearchBarAdvancedProps {
    onAdvSearchChange: (name: string, startDate: Date, endDate: Date) => void
}
interface advOptState {
    value: any,
    delimiter: string
}
interface nameState extends advOptState {
    value: string
}
interface dateState extends advOptState {
    value: Date
}

const SearchBarAdvanced: React.FC<SearchBarAdvancedProps> = ({ onAdvSearchChange }) => {
    const [name, setName] = useState<nameState>({value: "", delimiter: "none"});
    const [startDate, setStartDate] = useState<dateState>({value: new Date(), delimiter: "Exact"});
    const [endDate, setEndDate] = useState<dateState>({value: new Date(), delimiter: "Exact"});
    const [fieldVisible, setFieldVisible] = useState<boolean>(false);
    const handleNameChange = (val: string, del: string): void => {
        setName({value: val, delimiter: del});
    }
    const handleStartDateChange = (val: string, del: string) => {
        setStartDate({value: new Date(val), delimiter: del});
    }
    const handleEndDateChange = (val: string, del: string) => {
        setEndDate({value: new Date(val), delimiter: del});
    }
    const handleFieldToggle = (): void => {
        setFieldVisible(prevState => !prevState);
    }
    const handleAdvOptsChange = (): void => {
        onAdvSearchChange(name.value, startDate.value, endDate.value);
    }
    const handleAdvOptSubmit = (): void => {  // "Fast-forward" submit - if user hits enter inside input
        onAdvSearchChange(name.value, startDate.value, endDate.value);
    }
    return (
        <>
            <p id = {Styles.advancedSearchToggleButton} style = {{display: fieldVisible ? "none" : "inline-block"}} onClick = {handleFieldToggle}>Advanced search</p>
            <fieldset id = {fieldVisible ? Styles.advancedSearch : Styles.advancedSearchHidden} style = {{display: fieldVisible ? "block" : "none"}}>
                <legend id = {Styles.advancedSearchToggleButton} onClick = {handleFieldToggle}>Advanced search</legend>
                <div id = {Styles.advancedSearchContents}>
                    <AdvancedSearchOption name = "Name" type = "text" onAdvOptChange = {handleNameChange} onAdvOptSubmit = {handleAdvOptSubmit} />
                    <AdvancedSearchOption name = "Start date" type = "date" onAdvOptChange = {handleStartDateChange} onAdvOptSubmit = {handleAdvOptSubmit} maxDate = {endDate.value} />
                    <AdvancedSearchOption name = "End date" type = "date" onAdvOptChange = {handleEndDateChange} onAdvOptSubmit = {handleAdvOptSubmit} minDate = {startDate.value} />
                </div>
                <button id = {Styles.advancedSearchSubmitButton} onClick = {handleAdvOptsChange}>Search</button> {/* Should perhaps change it to the RC2K-style button in the future */}
            </fieldset>
        </>
    );
}

export default SearchBarAdvanced;