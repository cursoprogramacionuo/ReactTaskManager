
let ListOfTasksComponent = (props) => {
    let { tasks, setTasks, setTaskSelected } = props

    let onClickSeletedTask = (name) => {
        let foundTask = tasks.find(t => t.name == name)
        setTaskSelected(foundTask)
    }

    let onClickDeletetask = (name) => {
        let otherTasks = tasks.filter(t => t.name != name)
        setTasks(otherTasks)
    }

    return (
        <div>
            <h1>List of Tasks</h1>
            <ul className='task-list'>
            { tasks.map( t => 
                <li key={ t.name} onClick={ () => {onClickSeletedTask(t.name)} } >
                    { t.name}
                    <button className="delete-button"
                        onClick= { () => { onClickDeletetask(t.name) }} > Delete</button>
                </li>) }
            </ul>
        </div>
    )
}

export default ListOfTasksComponent