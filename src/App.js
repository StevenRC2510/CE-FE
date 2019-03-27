import React, { Component } from 'react';
import { Api, getApi } from './services/api/';
import { Container, Row, Col, Pagination } from 'react-bootstrap';

import NavBar from './components/NavBar/';
import SearchBar from './components/SearchBar/';
import ContainerFilters from './components/ContainerFilters/';
import ContainerCourses from './components/ContainerCourses/';

import filters from './services/filters.json';

import './App.css';

class App extends Component {

  state = {
    courses: [],
    featuredCourses: [],
    message: '',
    error: false,
    open: false,
    page: 1,
  }

  componentDidMount() {
    this._getFeaturedCourses();
    this._getCourses();
  }

  handleChange = async (event) => {
    // if (event.key === 'Enter') {
      await this.setState({ [event.target.name]: event.target.value, error: '' });
      await this.getCourses()
    // }
}


  _getCourses = () => {
    const url = Api.uri + Api.courses.courses;
    getApi(url).then(courses => {
      this.setState({
        courses,
        message: '',
        error: false,
      });
    });
    console.log(this.state.courses, 'TODOS LOS CURSOS')
  }

  _getFeaturedCourses = () => {
    const url = Api.uri + Api.courses.featuredCourses;
    getApi(url).then(resp => {
      resp.data.map((featuredCourses) => {
        return(
          this.setState({
            featuredCourses,
            message: '',
            error: false,
          })
        );
      })
    });
  }

  _openCollapse = () => {
    const { open } = this.state;
    this.setState({ open: !open })
  }


  render() {
    const { courses } = this.state
    // let active = 1;
    // let items = [];
    // for (let page = 1; page <= this.state.courses.data && this.state.courses.data.items.length; page = + 1) {
    //   items.push(
    //     <Pagination.Item key={page} active={page === active}>
    //       {page}
    //     </Pagination.Item>
    //   )
    // }
    return (
      <div className="container-all">
        <NavBar />
        <SearchBar 
          name={'nameCourse'}
          handleChange={this.handleChange} 
        />
        <Container>
          <Row>
            <Col md={4}>
              <ContainerFilters
                filters={filters}
                open={this._openCollapse}
                state={this.state.open}
              />
            </Col>
            <Col md={8}>
              <Pagination>
                <ContainerCourses
                  courses={courses}
                  page={this.state.page}
                />
              </Pagination>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
