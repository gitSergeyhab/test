import React, { useEffect } from 'react'
import { useState } from 'react'
import { UserType } from '../../types'

const UserField = ({ title, value } : { title: string, value: string }) => {
	return (
		<>
			<h3>{title}</h3> 
			<h3>{value}</h3>
		</>
	)
	
}


const User = ({user} : {user: UserType}) => {

	const {address, company, name} = user;
	return (
		<>
			<UserField title='ФИО:' value={name} key={name}/>
			<UserField title='город:' value={address.city} key={address.city}/>
			<UserField title='компания:' value={company.name} key={company.name}/>
		</>
	)
}

export const UserList = () => {
	const [users, setUsers] = useState<UserType[]>([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((data) => console.log(data))
	})
	

	const userList = users.map((user) => < User user={user} key={user.id} />)
	return (
		<ul>
			{userList}
		</ul>
	)
}