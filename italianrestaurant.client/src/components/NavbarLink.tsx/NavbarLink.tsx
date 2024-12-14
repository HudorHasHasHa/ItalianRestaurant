import { INavbarLinkProps } from "./NavbarLinkTypes";

export default function NavbarLink({text, src}: INavbarLinkProps){
    return (
        <div>
            <a className="mx-3" href={src}>{ text }</a>
        </div>
    );
}