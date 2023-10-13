import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import NavLink from "./NavLink";

export default function DropdownLink() {
  return(
    <Dropdown>
      <DropdownTrigger>
        <span className='leading-relaxed hover:text-red-400 transition md:text-base text-xl cursor-pointer'>
          Serviços
        </span>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="audit">
          <NavLink pathName="/audit" text="Auditoria de Terceira Parte" />
        </DropdownItem>
        <DropdownItem key="iso">
          <NavLink pathName="/iso" text="Auditoria ISO" />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}