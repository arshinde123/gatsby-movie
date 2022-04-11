/** External imports */
import * as React from 'react';

/** Types and interfaces */
interface NavbarProps {
  siteTitle: string;
}
 
/** React FC */
const Navbar: React.FC<NavbarProps> = ({siteTitle}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						{siteTitle}
					</a>
				</div>
			</nav>
    </>
  );
}
 
export default Navbar;