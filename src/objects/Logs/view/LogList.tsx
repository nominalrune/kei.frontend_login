import type {ILogData}from "../ILogData";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
type p={logs:ILogData[]}
export function LogList({logs}:p) {
	return (
		<Stack component={"form"} spacing={4} alignItems="center" aria-label='login'>
		{logs.map((log,i)=>(
		<Box key={i}>
			<Typography fontSize={3}>
				{log.title}
			</Typography>
			<p>{log.date.toISOString()}</p>
			<p>{log.detail}</p>
			<hr/>
		</Box>
		))}
		</Stack>
	)
	
}
