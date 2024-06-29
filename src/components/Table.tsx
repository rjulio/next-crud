import { IconEdit, IconDelete } from '@/components/Icons';

import Client from '@/core/Client';

interface TableProps {
	clients: Client[];
	selectedClient?: (client: Client) => void;
	deletedClient?: (client: Client) => void;
}

export default function Table(props: TableProps) {

	const showActions = props.selectedClient || props.deletedClient;

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
					{ showActions && <th className={`${classes} text-center`}>Actions</th> }
				</tr>
			</thead>
		);
	}

	function renderActions(client: Client) {
		const defaultClasses = `
			flex justify-center items-center p-2 m-1
			rounded-full hover:bg-purple-50
		`;
		return (
			<td className={`text-center flex justify-center`}>
				{
					props.selectedClient && 
					<button 
						className={`text-green-600 ${defaultClasses}`}
						onClick={ () => props.selectedClient?.(client) }>
						{ IconEdit }
					</button>
				}
				{
					props.deletedClient && 
					<button 
						className={`text-red-600 ${defaultClasses}`}
						onClick={ () => props.deletedClient?.(client) }>
						{ IconDelete }
					</button>
				}
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
					{ showActions && renderActions(client) }
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