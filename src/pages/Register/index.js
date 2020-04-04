import React, { Component } from "react";

import ProductService from "../../app/ProductService";

export default class Register extends Component {
  constructor() {
    super();
    this.service = new ProductService();
  }

  initialState = {
    name: "",
    sku: "",
    description: "",
    price: 0,
    provider: "",
    success: false,
    errors: [],
  };

  state = this.initialState;

  clearFields() {
    this.setState(this.initialState);
  }

  onSubmit(event) {
    const { name, sku, description, price, provider } = this.state;

    const product = {
      name: name,
      sku: sku,
      description: description,
      price: price,
      provider: provider,
    };

    try {
      this.service.save(product);
      this.setState({ success: true });
    } catch (error) {
      const errors = error.errors;

      this.setState({ errors: errors });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="card mt-5">
          <div className="card-header">Cadastro de Produto</div>
          <div className="card-body">
            {this.state.success && (
              <div className="alert alert-dismissible alert-success">
                <button type="button" className="close" data-dismiss="alert">
                  &times;
                </button>
                <strong>Produto cadastrado com sucesso!</strong>
              </div>
            )}

            {this.state.errors.length > 0 &&
              this.state.errors.map((error) => {
                return (
                  <div className="alert alert-dismissible alert-danger">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                    >
                      &times;
                    </button>
                    <strong>Erro:</strong> {error}
                  </div>
                );
              })}
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Nome: *</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>SKU: *</label>
                  <input
                    className="form-control"
                    name="sku"
                    type="text"
                    value={this.state.sku}
                    onChange={(e) => this.setState({ sku: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Descrição:</label>
                  <textarea
                    className="form-control"
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={(e) =>
                      this.setState({ description: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Preço: *</label>
                  <input
                    className="form-control"
                    name="pricec"
                    type="text"
                    value={this.state.price}
                    onChange={(e) => this.setState({ price: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Fornecedor: *</label>
                  <input
                    className="form-control"
                    name="provider"
                    type="text"
                    value={this.state.provider}
                    onChange={(e) =>
                      this.setState({ provider: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-12">
                <button
                  className="btn btn-success mr-3 col-md-1 col-sm-12 mt-2"
                  onClick={() => this.onSubmit()}
                >
                  Salvar
                </button>

                <button
                  className="btn btn-primary col-md-1 col-sm-12 mt-2"
                  onClick={() => this.clearFields()}
                >
                  Limpar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
