import fs from 'node:fs/promises'

export async function DataFetchingDemo() {
	
	const data = await fs.readFile('dummy-db.json', 'utf8')
	const users = JSON.parse(data)
	
	return (
		<div className="rsc">
			<ul>
				{users.map(user => <li>{user.name} {user.title}</li>)}
			</ul>
		</div>
	)
}
