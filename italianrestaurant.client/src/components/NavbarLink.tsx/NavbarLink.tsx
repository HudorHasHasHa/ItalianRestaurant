import { NavbarLinkProps } from './NavbarLinkTypes';
//keeping navbar to move it into components library that will be created later on
export default function NavbarLink({ text, src }: NavbarLinkProps) {
    return (
        <div>
            <a className="mx-3" href={src}>
                {text}
            </a>
        </div>
    );
}
