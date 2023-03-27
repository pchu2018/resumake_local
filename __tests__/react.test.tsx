/**
 * @jest-environment jsdom
 */

import React from 'React';
import { Provider } from 'react-redux';
import { store } from '../client/store'
// import userEvent from '@testing-library/user-event';
import { findAllByText, render, screen, waitFor } from '@testing-library/react';
import { SectionType } from '../types';
import Section from '../client/components/Section';

describe('Unit testing React components', () => {
  describe('Section', () => {
    const props: SectionType = {
      databaseId: 'test',
      header: 'cool header',
      bullets: 'a nice bullet point'
    }

    beforeAll(() => {
      render(<Provider store={store}><Section {...props}/></Provider>);
    });

    test('Renders the passed-in header', () => {
      expect(screen.findAllByText(props.header)).toBeTruthy();
    })
  })
})