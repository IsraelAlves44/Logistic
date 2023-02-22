import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlane, faCircleArrowUp} from "@fortawesome/free-solid-svg-icons";

import { Sidebar, Menu, MenuItem, useProSidebar, sidebarClasses} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

import style from "./sidebar.module.css"

function Layout() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '92vh' }}>
      <Sidebar rootStyles={{
    [`.${sidebarClasses.container}`]: {
      backgroundColor: 'black',
      color: 'white',
      fontFamily: "Monstserrat",
    },
  }}> 
        <div className="sidebarContainer">
          <Menu className={style.menu} styles={style.sidebarStyle} onClick={() => collapseSidebar()}  >
            <MenuItem component={<Link to="/" />} icon={<FontAwesomeIcon icon={faHome} />}>Home</MenuItem>
            <MenuItem component={<Link to="/new" />} icon={<FontAwesomeIcon icon={faPlane} />}>Nova Entrega</MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faCircleArrowUp} />}>Upload</MenuItem>
          </Menu>
        </div>
      </Sidebar>
    </div>
  );
}

export default Layout