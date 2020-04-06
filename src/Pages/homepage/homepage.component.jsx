import React from 'react';
import './homepage.styles.scss';
import Directory from '../../Components/Directory/directory.component';

const Homepage = (props) => (
    console.log(props),
<div className='homepage'>
    <Directory/>
</div>
);

export default Homepage;