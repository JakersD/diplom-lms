import { styled } from '@mui/material/styles';

export const SShedulerHeader = styled('div')(() => ({
	background: '#FFFFFF',
	boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
	borderRadius: '35px',
	width: '1205px',
	height: '50px',
	display: 'grid',
	gridTemplateColumns: '0.535fr 1fr 1fr 1fr 1fr 1fr',
	gridTemplateRows: '1fr',
	gap: '0px 0px',
	gridAutoFlow: 'row',
	gridTemplateAreas: '". . . . . ."',
}));

export const SSheduleHeaderTextContainer = styled('div')(() => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}));

export const SShedulerHeaderText = styled('p')(() => ({
	fontFamily: 'Roboto',
	fontSize: '14px',
	lineHeight: '16px',
	color: '#000',
	textTransform: 'uppercase',
}));

export const SScheduleGridContainer = styled('div')(() => ({
	position: 'relative',
	width: '1242px',
	top: '-50px',
	zIndex: '-1',
	height: '69%',
	display: 'grid',
	gridTemplateColumns: '0.73fr 1fr 1fr 1fr 1fr 1fr',
	gridTemplateRows: '50px 1fr 1fr 1fr 1fr 1fr',
	gap: '0px 0px',
	gridAutoFlow: 'row',
	gridTemplateAreas: '". . . . . ."". . . . . ."". . . . . ."". . . . . ."". . . . . ."". . . . . ."',
}));
