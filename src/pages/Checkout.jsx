import React, { Component } from 'react';

const states = [
  { 'AC': 'Acre' },
  { 'AL': 'Alagoas' },
  { 'AP': 'Amapá' },
  { 'AM': 'Amazonas' },
  { 'BA': 'Bahia' },
  { 'CE': 'Ceará' },
  { 'DF': 'Distrito Federal' },
  { 'ES': 'Espírito Santo' },
  { 'GO': 'Goías' },
  { 'MA': 'Maranhão' },
  { 'MT': 'Mato Grosso' },
  { 'MS': 'Mato Grosso do Sul' },
  { 'MG': 'Minas Gerais' },
  { 'PA': 'Pará' },
  { 'PB': 'Paraíba' },
  { 'PR': 'Paraná' },
  { 'PE': 'Pernambuco' },
  { 'PI': 'Piauí' },
  { 'RJ': 'Rio de Janeiro' },
  { 'RN': 'Rio Grande do Norte' },
  { 'RS': 'Rio Grande do Sul' },
  { 'RO': 'Rondônia' },
  { 'RR': 'Roraíma' },
  { 'SC': 'Santa Catarina' },
  { 'SP': 'São Paulo' },
  { 'SE': 'Sergipe' },
  { 'TO': 'Tocantins' },
];

export default class Checkout extends Component {
  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="nome">
            <input type="text" name="nome" id="nome" />
          </label>
          <label htmlFor="cpf">
            <input type="number" name="cpf" id="cpf" />
          </label>
          <label htmlFor="email">
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="telefone">
            <input type="text" name="telefone" id="telefone" />
          </label>
          <label htmlFor="cep">
            <input type="number" name="cep" id="cep" />
          </label>
          <label htmlFor="endereço">
            <input type="text" name="endereço" id="endereço" />
          </label>
          <label htmlFor="complemento">
            <input type="text" name="complemento" id="complemento" />
          </label>
          <label htmlFor="numero">
            <input type="number" name="numero" id="numero" />
          </label>
          <label htmlFor="cidade">
            <input type="text" name="cidade" id="cidade" />
          </label>
          <label htmlFor="estado">
            <select name="estado" id="estado">
              <option value=""> SP </option>
              <option value=""> MG </option>
              <option value=""> MS </option>
              <option value=""> SP </option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
