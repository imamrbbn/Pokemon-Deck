import React from 'react';
import { render,fireEvent, waitForElement } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("Initial Page", () => {
  test("Check there is app title in DOM", () => {
    const { getByText } = render(<App />);
    const titleApp = getByText("Pokemon Ohyeaaa!");
    expect(titleApp).toBeInTheDocument();
  })

  test("Check there is a container for pokemon deck in DOM", () => {
    const { getByTestId } = render(<App />);
    const container = getByTestId("container");
    expect(container).toBeInTheDocument();
  });

  test("Check there is a search tools in DOM and running properly", () => {
    const { getByPlaceholderText, getByDisplayValue, getByText, getByTestId } = render(<App />);
    const search = getByTestId("searchTools");
    const inputPokemonName = getByPlaceholderText("Search Pokemon ohyeaaaa");
    expect(inputPokemonName).toBeInTheDocument();

    const pokemonName = "Bambang";
    fireEvent.change(inputPokemonName, { target: { value: pokemonName } });
    expect(inputPokemonName).toHaveValue(pokemonName);

    expect(search).toBeInTheDocument();
  });
  
})

// describe("Displays data from pokemon API", () => {
//   test("Check data from Pokemon API has entered ", (done) => {
//     const { debug, container } = render(<App />)

//     waitForElement(() => {
//       const container = getByTestId("pokemonDeck");
//       expect(container).toBeInTheDocument();
//       done()
//     })
//   })

//     test("Check in each deck there is pokemon data", (done) => {
//     const { findByText, container } = render(<App />)

//     findByText("Pokemon XY").then((element) => {
//       expect(element).toBeInTheDocument();
//       const container = getByTestId("pokemon-deck");
//       const imagePokemon = getByTestId("card-img-top");
//       expect(container).toBeInTheDocument();
//       expect(container).toContainElement(imagePokemon);
//       done();
//     });
//   });
// })