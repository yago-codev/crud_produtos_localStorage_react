import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import ProductService from "../../../app/ProductService";
import Card from "../../../components/Card";
import Table from "../../../components/Table";

class ListProducts extends Component {
  constructor() {
    super();
    this.service = new ProductService();
  }

  state = {
    products: [],
  };

  componentDidMount() {
    const products = this.service.get();

    this.setState({ products });
  }

  editProduct = (sku) => {
    // console.log(`sku do produto que será editado: ${sku}`);
    this.props.history.push(`/register/${sku}`);
  };

  deleteProduct = (sku) => {
    const products = this.service.delete(sku);

    this.setState({ products });
  };

  render() {
    return (
      <div className="container">
        <Card header="Consulta de Produtos">
          <Table
            products={this.state.products}
            editAction={this.editProduct}
            deleteAction={this.deleteProduct}
          />
        </Card>
      </div>
    );
  }
}

export default withRouter(ListProducts);
