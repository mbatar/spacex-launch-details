import { ReactElement, useState } from "react";
import Datepicker from "tailwind-datepicker-react";

type Props = {
    handleSetSearchData: (opType: string, value: string) => void;
    opType: string;
}

const options = {
	autoHide: true,
	todayBtn: false,
	clearBtn: true,
	minDate: new Date("1950-01-01"),
	theme: {
		background: "",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "",
		disabledText: "",
		input: "",
		inputIcon: "",
		selected: "",
	},
	datepickerClassNames: "top-12",
	defaultDate: new Date("2022-01-01"),
	language: "en",
}

const DatePicker: React.FC<Props> = ({ handleSetSearchData, opType }): ReactElement => {
    const [show, setShow] = useState <boolean>(false);
	const handleChange = (selectedDate: Date) => {
        handleSetSearchData(opType,selectedDate.toISOString())
	}
	const handleClose = (state: boolean) => {
		setShow(state)
	}
    return (<Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />)
}

export default DatePicker;