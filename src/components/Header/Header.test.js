import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Header', () => {
    test('Renders Header component', () => {
        render(<Header />);

        expect(screen.getByText('Electronics')).toBeInTheDocument();
    });
});