import { TableCell, tableCellClasses } from '@mui/material';
import { styled } from '@mui/material/styles';

const TableStyledCell = styled(TableCell)(() => ({
	[`&.${tableCellClasses.head}`]: {
		fontFamily: 'Roboto, sans-serif',
		color: '#8B8B8B',
		fontSize: '14px',
		lineHeight: '16px',
	},
	[`&.${tableCellClasses.body}`]: {
		fontFamily: 'Roboto, sans-serif',
		fontSize: '16px',
		lineHeight: '19px',
	},
}));

export default TableStyledCell;
