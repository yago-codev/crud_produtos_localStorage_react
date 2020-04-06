export function validationErrors(errors) {
  this.errors = errors;
}

export default class ProductService {
  get = () => {
    // retorna os produtos do local storage, convertendo-os para objeto JS
    const products = localStorage.getItem("products");

    if (!products) {
      return [];
    }

    return JSON.parse(products);
  };

  getIndex = (sku) => {
    let index = null;

    this.get().forEach((product, i) => {
      // percorrendo os produtos do local storage e seus indíces
      if (product.sku === sku) {
        // se o sku do produto percorrido for igual ao sku do produto que será editado...
        index = i; // iremos atribuir a variável index o índice do produto que será editado
      }
    }); // método que retorna os produtos do local storage

    return index; // retornando o índice do produto que será editado
  };

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
    this.validate(product); // evocando o método validate para verificar se os campos do formulário de cadastro foram preenchidos

    let products = localStorage.getItem("products"); // variável para verificar se já existem produtos setados no local storage

    if (!products) {
      // se não houverem produtos no local storage, criaremos um array de produtos que inicia vazio
      products = [];
    } else {
      // caso já exista algum produto no local storage, iremos converter-lo de JSON para JS
      products = JSON.parse(products);
    }

    const index = this.getIndex(product.sku); // verificando se o índice do produto já consta no local storage

    if (index === null) {
      // se o índice do produto for nulo, signifiac que ele ainda não foi cadastrado
      products.push(product); // inserindo os dados do produto vindos do formulário, dentro do array de produtos
    } else {
      // se tivermos encontrado o índice, significa que o produto já foi cadastrado
      products[index] = product; // acessando o índice do produto e atualizando seus dados
    }

    localStorage.setItem("products", JSON.stringify(products)); // setando o produto cadastrado no form dentro do local storage
  };

  delete = (sku) => {
    const index = this.getIndex(sku);

    if (index !== null) {
      const products = this.get();

      products.splice(index, 1);

      localStorage.setItem("products", JSON.stringify(products));

      return products;
    }
  };
}
