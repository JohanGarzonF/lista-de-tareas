import { Fragment, useContext } from "react"
import CreateButton from "../../components/CreateButton"
import ListTask from "../../components/ListTask"
import Search from "../../components/Search"
import { TaskContext } from "../context/TaskContex"
import { Header } from "./Header"

const Home = () => {

  return (
    <Fragment>
      <Header />
      <Search filter_name={'etiqueta'}/>
      <ListTask />
      <CreateButton />
    </Fragment>
  )
}
export default Home