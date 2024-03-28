import {expect, jest, test} from '@jest/globals';


import Contact from "../components/Contact";
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom';

test("testing Contact component ...",()=>{
    render(<Contact/>); // it will render component on jsdom

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
})

test("testing Contact component ...",()=>{
    render(<Contact/>); // it will render component on jsdom

    const txt = screen.getByText("hello ji kse ho");

    // Assertion
    expect(txt).toBeInTheDocument();

});

test("testing Contact component ...",()=>{
    render(<Contact/>); // it will render component on jsdom

    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();

});
test("testing Contact component ...",()=>{
    render(<Contact/>); // it will render component on jsdom

    //query
    const inputBoxes = screen.getAllByRole("textbox"); //input element = textbox
    // console.log(inputBoxes);
    console.log(inputBoxes.length);

    // Assertion
    expect(inputBoxes.length).not.toBeLessThan(2);
    // expect(inputBoxes.length).toBeGreaterThan(2);
    // expect(inputBoxes.length).toBe(2);

});