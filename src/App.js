

import React from "react";
import { Routes, Route, Link } from "react-router-dom"
import Home from './pages/Basic'
import './App.scss'

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">React Forms</Link>
            </div>
          </nav>
        </div>
      </div>
      <section className="row">
        <aside className="col-3">
          <nav id="sidebar" className="my-3">
            <ul className="list-unstyled">
              <li className="mb-1">
                <button className="btn btn-collapse d-inline-flex align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#forms-collapse" aria-expanded="false">
                  Forms
                </button>
                <div id="forms-collapse" className="collapse">
                  <ul className="list-unstyled">
                    <li className="my-1">
                      <Link className="d-inline-flex align-items-center rounded" to="/">Home</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="col-9 pt-5">
          <Routes>
            <Route path="/" element={ <Home/> }/>
          </Routes>
        </main>
      </section>
    </div>
  );
}

export default App;
