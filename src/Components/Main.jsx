import React from 'react';

const Main = () => {
    return (
        <div className="main">
            <form>
                <label >Name</label>
                <input type="text" name="name" placeholder="Please enter name"/>
                <label >Email</label>
                <input type="email" name="email" placeholder="Please enter email"/>
                <label >Gen</label>
                <input type="number" name="gen" />
                <input type="submit" className="submit" value="Post" placeholder="Please specify gen"/>
            </form>
            <ul>
                 <li>
                    <p>Name: Yoshi Odei</p>
                    <p>Email: yoshi@email.com</p>
                    <p>Gen: 18</p>
                 </li>
            </ul>
        </div>
    );
}

export default Main;
