import React, { Component } from 'react';
// import axios from 'axios';

import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts'

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li> <a href="/"> Home</a> </li>
                            <li> <a href="/new-posts"> New Posts</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts/>
            </div>
        );
    }
}

export default Blog;