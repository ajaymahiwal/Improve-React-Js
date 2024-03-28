

<!-- Change extension to .test.js and run -->
import {expect, jest, test} from '@jest/globals';

beforeAll(() => {
    console.log('Global beforeAll');
  });
  
  afterAll(() => {
    console.log('Global afterAll');
  });
  
  beforeEach(() => {
    console.log('Global beforeEach');
  });
  
  afterEach(() => {
    console.log('Global afterEach');
  });
  
  describe('Test suite 1', () => {
    beforeAll(() => {
      console.log('Suite 1 beforeAll');
    });
  
    afterAll(() => {
      console.log('Suite 1 afterAll');
    });
  
    beforeEach(() => {
      console.log('Suite 1 beforeEach');
    });
  
    afterEach(() => {
      console.log('Suite 1 afterEach');
    });
  
    test('Test 1', () => {
      console.log('Test 1');
    });
  });
  
  describe('Test suite 2', () => {
    beforeAll(() => {
      console.log('Suite 2 beforeAll');
    });
  
    afterAll(() => {
      console.log('Suite 2 afterAll');
    });
  
    beforeEach(() => {
      console.log('Suite 2 beforeEach');
    });
  
    afterEach(() => {
      console.log('Suite 2 afterEach');
    });
  
    test('Test 2', () => {
      console.log('Test 2');
    });
  });
  