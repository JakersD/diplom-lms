import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const SWrapper = styled('div')(() => ({
	maxWidth: '1720px',
	margin: '0 auto',
}));

export const SContainer = styled('div')(() => ({
	display: 'flex',
	margin: '32px 30px',
}));

export const SUser = styled('div')(() => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
}));

export const SUserIcon = styled('img')(() => ({}));

export const SLessonsTitle = styled('p')({
	fontFamily: 'Roboto, sans-serif',
	fontSize: '36px',
	lineHeight: '42px',
	marginBottom: '8px',
	paddingLeft: '14px',
});

export const SCalendarContainer = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-end',
});

export const SLink = styled(Link)({
	fontFamily: 'Roboto, sans-serif',
	backgroundColor: '#336CFF',
	borderRadius: '16px',
	boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
	fontSize: '14px',
	lineHeight: '24px',
	textTransform: 'uppercase',
	color: '#fff',
	padding: '6px 18px',
	textDecoration: 'none',
});
