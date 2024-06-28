import { IconEdit, IconDelete } from '@/components/Icons';

import Client from '@/core/Client';

interface TableProps {
	clients: Client[];
}

export default function Table(props: TableProps) {
	function renderTableHeader() {
		const classes = "text-left p-4";
		return (
			<thead className={`
				bg-gradient-to-r from-purple-500 to-purple-800
				text-gray-100
			`}>
				<tr>
					<th className={`${classes}`}>Code</th>
					<th className={`${classes}`}>Name</th>
					<th className={`${classes}`}>Age</th>
					<th className={`${classes} text-center`}>Actions</th>
				</tr>
			</thead>
		);
	}

	function renderActions(client: Client) {
		return (
			<td className={`text-center flex`}>
				<button className={`
					flex justify-center items-center p-2 m-1
					text-green-600 rounded-full 
					hover:bg-purple-50
				`}>
					{ IconEdit }
				</button>
				<button className={`flex justify-center items-center`}>
					{ IconDelete }
				</button>
			</td>
		);
	}

	function renderTableBody() {
		const classes = 'text-left p-4';
		return props.clients?.map((client, i) => (
				<tr 
					key={ client.id }
					className={`${ i % 2 === 0 ? 'bg-purple-100' : 'bg-purple-200' }`}>
					<td className={`${classes}`}>{ client.id }</td>
					<td className={`${classes}`}>{ client.name }</td>
					<td className={`${classes}`}>{ client.age }</td>
					{ renderActions() }
				</tr>
			)
		);
	}

	return (
		<table className="w-full rounded-xl overflow-hidden">
			{ renderTableHeader() }	
			<tbody>
				{ renderTableBody() }
			</tbody>
		</table>
	);
}