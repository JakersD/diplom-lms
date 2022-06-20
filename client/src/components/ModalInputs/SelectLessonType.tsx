import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { EDisciplineType } from '../../__data__/models';
import { getLessonType } from '../../__data__/utils';

interface IProps {
	select: EDisciplineType | null;
	setSelect: React.Dispatch<React.SetStateAction<EDisciplineType | null>>;
}

const SelectLessonType: React.FC<IProps> = ({ select, setSelect }) => {
	const handleOnChange = (event: any) => {
		setSelect(event.target.value);
	};

	return (
		<FormControl sx={{ marginBottom: '24px' }} fullWidth>
			<InputLabel id='select-type-label'>Тип</InputLabel>
			<Select labelId='select-type-label' label='Тип' value={select} onChange={handleOnChange}>
				<MenuItem value={EDisciplineType.lecture}>{getLessonType(EDisciplineType.lecture)}</MenuItem>
				<MenuItem value={EDisciplineType.practice}>{getLessonType(EDisciplineType.practice)}</MenuItem>
				<MenuItem value={EDisciplineType.seminar}>{getLessonType(EDisciplineType.seminar)}</MenuItem>
			</Select>
		</FormControl>
	);
};

export default SelectLessonType;
