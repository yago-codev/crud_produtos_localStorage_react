function validationErrors(errors) {
  this.errors = errors;
}

export default class ProductService {
  validate = (product) => {
    const errors = [];

    if (!product.name) {
      errors.push("Por favor, insira o nome do produto!");
    }

    if (!product.sku) {
      errors.push("Por favor, insira o SKU do produto!");
    }

    if (!product.price) {
      errors.push("Por favor, insira o preço do produto!");
    } else if (product.price <= 0) {
      errors.push("O valor do preço deve ser maior que zero(0)!");
    }

    if (!product.provider) {
      errors.push("Por favor, insira o fornedor do produto!");
    }

    if (errors.length > 0) {
      throw new validationErrors(errors);
    }
  };

  save = (product) => {
    this.validate(product);

    let products = localStorage.getItem("products");

    if (!products) {
      products = [];
    } else {
      products = JSON.parse(products);
    }

    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));
  };
}
