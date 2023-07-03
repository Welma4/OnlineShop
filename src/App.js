import React from "react";
import Header from "./components/header";
import Topblock from "./components/body";
import Footer from "./components/footer";
import goods from "./components/data";
import Items from "./components/items";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './components/Product';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: goods,
      currentCategory: null,
    };
  }

  handleCategorySelect(category) {
    this.setState({ currentCategory: category });
  }

  render() {
    const filteredGoods = this.state.currentCategory
    ? this.state.goods.filter(item => item.class === this.state.currentCategory)
    : this.state.goods;
    return (
      <Router>
        <div>
          <div className="wrapper">
            <Header />
          </div>
          <Topblock onCategorySelect={category => this.handleCategorySelect(category)} />
          <div className="wrapper">
            <Routes>
            <Route path="/" element={<Items items={filteredGoods} />} />
              <Route path="/products/:id" element={<Product items={goods} />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;