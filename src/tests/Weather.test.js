import React from 'react';
import Weather from '../components/Weather';
import renderer from 'react-test-renderer';

test('Rendered correctly', () => {
    const tree = renderer
    return fetchData()
        .then(data => {
            expect(data.cod).toBe(200);
    });
  });
