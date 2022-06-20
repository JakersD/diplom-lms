import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { ERooms } from '../../__data__/models';
import { getRoomType } from '../../__data__/utils';

interface IProps {
	select: ERooms | null;
	setSelect: React.Dispatch<React.SetStateAction<ERooms | null>>;
}

const SelectRoom: React.FC<IProps> = ({ select, setSelect }) => {
	const handleOnChange = (event: any) => {
		setSelect(event.target.value);
	};

	return (
		<FormControl sx={{ marginBottom: '24px' }} fullWidth>
			<InputLabel id='select-room-label'>Аудитория</InputLabel>
			<Select labelId='select-room-label' label='Аудитория' value={select} onChange={handleOnChange}>
				<MenuItem value={ERooms.A100}>{getRoomType(ERooms.A100)}</MenuItem>
				<MenuItem value={ERooms.A101}>{getRoomType(ERooms.A101)}</MenuItem>
				<MenuItem value={ERooms.A102}>{getRoomType(ERooms.A102)}</MenuItem>
				<MenuItem value={ERooms.A103}>{getRoomType(ERooms.A103)}</MenuItem>
				<MenuItem value={ERooms.A104}>{getRoomType(ERooms.A104)}</MenuItem>
				<MenuItem value={ERooms.A105}>{getRoomType(ERooms.A105)}</MenuItem>
			</Select>
		</FormControl>
	);
};

export default SelectRoom;
