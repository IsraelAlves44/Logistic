import { Sidebar, Menu, MenuItem, useProSidebar, sidebarClasses} from 'react-pro-sidebar';
import style from "./sidebar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPlane, faCircleArrowUp} from "@fortawesome/free-solid-svg-icons";

function Layout() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar rootStyles={{
    [`.${sidebarClasses.container}`]: {
      backgroundColor: 'black',
      color: 'white',
      fontFamily: "Monstserrat",
      height: '100vh',
    },
  }}> 
        <div class="sidebarContainer">
          <Menu class={style.menu} styles={style.sidebarStyle} onClick={() => collapseSidebar()}  >
            <MenuItem icon={<FontAwesomeIcon icon={faHome} />}>Home</MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faPlane} />}>Nova Entrega</MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faCircleArrowUp} />}>Upload</MenuItem>
          </Menu>
        </div>
      </Sidebar>
    </div>
  );
}

export default Layout