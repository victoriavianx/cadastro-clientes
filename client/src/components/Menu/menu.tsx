import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";

import { FiMenu, FiTrash2, FiEdit } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import ModalWarning from "../ModalWarning/modal";

const MenuProfile = () => {
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (path: string) => {
    return history.push(path);
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<FiMenu />}
        variant="outline"
      />
      <MenuList>
        <MenuItem icon={<FiEdit />} onClick={() => handleClick("/update")}>
          Editar conta
        </MenuItem>
        {isOpen && <ModalWarning isOpen={isOpen} onClose={onClose} />}
        <MenuItem icon={<FiTrash2 />} onClick={onOpen}>
          Deletar Conta
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuProfile;
