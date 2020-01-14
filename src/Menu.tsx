import React from 'react';
import {Link} from 'react-router-dom';
 
export const Menu = (props: {categories: any[]}) => (
	<ul className="nav nav-sidebar">
		{
			props.categories.map(category => {
				return <li>
		            <Link to={category.url}>{category.name}</Link>
		        </li>
			})
		}
    </ul>
);