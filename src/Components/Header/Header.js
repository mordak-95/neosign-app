import React from 'react';
import './Header.css';


export default () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="nav-scroll">
            <div class="container">
                <a href="#main-0" class="navbar-brand">NEO-SIGN</a>
                <button class="navbar-toggler outline-none" type="button" data-toggle="collapse" data-target="#navbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a href="#main-1" class="nav-link">Main 1</a>
                        </li>
                        <li class="nav-item">
                            <a href="#main-2" class="nav-link">Main 2</a>
                        </li>
                        <li class="nav-item">
                            <a href="#main-3" class="nav-link">Main 3</a>
                        </li>
                        <li class="nav-item">
                            <a href="#main-4" class="nav-link">Main 4</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  );
};