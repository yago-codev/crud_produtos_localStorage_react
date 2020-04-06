import React from "react";

export default (props) => (
  <table className="table table-hover">
    <tbody>
      {props.products.map((product, index) => {
        return (
          <tr key={index}>
            <th>{product.name}</th>
            <th>{product.sku}</th>
            <th>{product.price}</th>
            <th>{product.provider}</th>
            <th>
              <button
                className="btn btn-primary mr-2"
                type="button"
                onClick={() => props.editAction(product.sku)}
              >
                Editar
              </button>
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => props.deleteAction(product.sku)}
              >
                Remover
              </button>
            </th>
          </tr>
        );
      })}
    </tbody>
  </table>
);
