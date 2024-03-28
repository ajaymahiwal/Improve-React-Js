import {expect, jest, test} from '@jest/globals';
import Contact from "../components/Contact";
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';

// describe("Contact Page TestCases",()=>{
//     test("testing Contact component ...",()=>{
//     render(<Contact/>); // it will render component on jsdom

//     const heading = screen.getByRole("heading");

//     // Assertion
//     expect(heading).toBeInTheDocument();
// })

// test("testing Contact component ...",()=>{
//     render(<Contact/>); // it will render component on jsdom

//     const txt = screen.getByText("hello ji kse ho");

//     // Assertion
//     expect(txt).toBeInTheDocument();

// });

// test("testing Contact component ...",()=>{
//     render(<Contact/>); // it will render component on jsdom

//     const button = screen.getByRole("button");

//     // Assertion
//     expect(button).toBeInTheDocument();

// });
// test("testing Contact component ...",()=>{
//     render(<Contact/>); // it will render component on jsdom

//     //query
//     const inputBoxes = screen.getAllByRole("textbox"); //input element = textbox
//     // console.log(inputBoxes);
//     console.log(inputBoxes.length);
//     fireEvent

//     // Assertion
//     expect(inputBoxes.length).not.toBeLessThan(2);
//     // expect(inputBoxes.length).toBeGreaterThan(2);
//     // expect(inputBoxes.length).toBe(2);

// });
// })


// global.fetch = jest.fn(()=>{
//     return Promise.resolve({
//         json:()=>{
//             return Promise.resolve({fact:"hii i am not a cat, i'm Ajay Mahiwal."});
//         }
//     })
// })
global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({ fact: 'fake response' }),
})

it("Should check fact exist or not",async()=>{
   await act(async()=>{
    render(<Contact/>); //rendered component on jsdom
   })


    const fact = screen.getByText("Fact:fake response");

    expect(fact).toBeInTheDocument();
});