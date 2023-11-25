import {useState} from 'react'
import Login from './Login'
import Sidebar from './Sidebar'
import AddOns from './AddOns'
import Plans from './Plans'
import Summary from './Summary'


const Container = () => {
	const [clicked, setClicked] = useState()
  return (
	<div className='flex flex-row justify-around'>
		<Sidebar />
		<Login />

	</div>
  )
}

export default Container